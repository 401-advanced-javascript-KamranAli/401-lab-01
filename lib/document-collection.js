const files = require('./files');
// use npm to find a module for creating ids
const path = require('path');
const shortid = require('shortid');

class DocumentCollection {
  constructor(folder) {
    this.folder = folder;
  }

  save(object) {
    // TODO:
    // 1. assign an id
    // 2. serialize object
    // 3. use promisified fs to write to folder path using id.json as file name
    // 4. "return" object (which now has an id)
    // 5. if expected, turn promisified fs errors into meaningful database errors

    let id = shortid.generate();
    object._id = id;
    let serializedObject = JSON.stringify(object);
    return files.writeFile(`${this.folder}/${id}.json`, serializedObject, 'utf8')
      .then(() => {
        return object;
      })
      .catch(err => { console.log(err); });
  }

  get(id) {
    // TODO:
    // 1. create file path from id
    // 2. use promisified fs to read file
    // 3. deserialize contents
    // 4. "return" object
    // 5. if expected, turn promisified fs errors into meaningful database errors
    const filePath = `${this.folder}/${id}.json`;
    return files.readFile(filePath, 'utf8')
      .then(json => {
        return JSON.parse(json);
      })
      .catch(err => { console.log(err); });
  }

  getAll() {
    // TODO:
    // 1. read folder file names
    // 2. use Promise.all and map each file name to a this.get call (remove .json file extension!)
    // 3. "return" array of objects
    // 4. if expected, turn promisified fs errors into meaningful database errors
    return files.readdir(this.folder)
      .then(files => {
        return Promise.all(files.map(file => {
          const fileId = path.parse(file).name;
          return this.get(fileId);
        }));
      })
      .catch(err => {console.log(err); });
  }

}

module.exports = DocumentCollection;