const DocumentCollection = require('./lib/document-collection');

const documents = new DocumentCollection('./documents');

// write some code to exercise your document collection
const fakeObj = {
  name: 'Freddie',
  bandMate: true
};


documents.save(fakeObj);
documents.save(fakeObj)
  .then(obj => {
    console.log('save', obj);
  });

documents.get(fakeObj.id)
  .then(obj => {
    console.log('get', obj);
  });

documents.getAll()
  .then(obj => {
    console.log('getAll', obj);
  });