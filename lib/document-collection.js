const files = require('./files');
const path = require('path');
const shortid = require('shortid');
// use npm to find a module for creating ids

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

    object.id = shortid.generate();
    JSON.stringify(object);
    const filePath = path.join(this.folder, `${object.id}.json`);
    return files.writeFile(filePath, object);
  }

  get(id) {
    // TODO:
    // 1. create file path from id
    // 2. use promisified fs to read file
    // 3. deserialize contents
    // 4. "return" object
    // 5. if expected, turn promisified fs errors into meaningful database errors
    const filePath = path.join(this.folder, `${id}.json`);
    return files.readFile(filePath)
      .then(object => {
        return JSON.parse(object);
      });

  }

  getAll() {
    // TODO:
    // 1. read folder file names
    // 2. use Promise.all and map each file name to a this.get call (remove .json file extension!)
    // 3. "return" array of objects
    // 4. if expected, turn promisified fs errors into meaningful database errors

    return files.readdir(this.folder)
      .then(fileNames => {
        return Promise.all(fileNames.map(file => {
          const id = path.parse(file).name;
          return this.get(id);
        }));
      });
  }
  
}

module.exports = DocumentCollection;