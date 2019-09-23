const DocumentCollection = require('./lib/document-collection');
const Model = require('./lib/model');
const Database = require('./lib/database');

const Documents = new DocumentCollection('.documents');

// write some code to exercise your document collection
const queen = {
  name: 'Freddie',
  bandMate: true
};

Documents.save(queen)
  .then(obj => {
    console.log('save', obj);
  });

Documents.get(queen.id)
  .then(obj => {
    console.log('get', obj);
  });

Documents.getAll()
  .then(obj => {
    console.log('getAll', obj);
  });

Database.connect('test-db')
  .then(() => {

    const Schema = require('./lib/Schema');
    const queenInstance = new Model(Schema.queenSchemaConfig.schema)
      .then(obj => {
        console.log('create', obj);
        queenInstance.create(queen);
      })
      .then(obj => {
        console.log('findById', obj);
        queenInstance.findById(queen.id);
      })
      .then(obj => {
        console.log('find all', obj);
        queenInstance.find();
      });


  });