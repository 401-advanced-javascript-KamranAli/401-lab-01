const DocumentCollection = require('./lib/document-collection');
const Model = require('./lib/model');

const documents = new DocumentCollection('./documents');
const model = new Model('./model');
// write some code to exercise your document collection
const fakeObj = {
  name: 'Freddie',
  bandMate: true
};


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

model.create(fakeObj)
  .then(obj => {
    console.log('create', obj);
  });
model.findById(fakeObj)
  .then(obj => {
    console.log('findById', obj);
  });
model.find(fakeObj)
  .then(obj => {
    console.log('find all', obj);
  });