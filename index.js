const DocumentCollection = require('./lib/document-collection');

const documents = new DocumentCollection('./documents');

// write some code to exercise your document collection
const sample = {
  key: 'value',
  sick: true
};


documents.save(sample);
// documents.save(fakeObj)
//   .then(obj => {
//     console.log('save', obj);
//   });

// documents.get(fakeObj.id)
//   .then(obj => {
//     console.log('get', obj);
//   });

// documents.getAll()
//   .then(obj => {
//     console.log('getAll', obj);
//   });