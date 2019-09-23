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
// for lab 4

const queenModel = {
  name: 'Freddie Mercury',
  yearsActive: 32
};

const beatlesModel = {
  name: 'John Lennon',
  yearsActive: 19
};

Database.connect('test-db')
  .then(() => {

    const Schema = require('./lib/Schema');
    const queenInstance = new Model(Schema.queenSchemaConfig.schema)
      .then(obj => {
        console.log('create', obj);
        queenInstance.create(queenModel);
      })
      .then(obj => {
        console.log('findById', obj);
        queenInstance.findById(queenModel.id);
      })
      .then(obj => {
        console.log('find all', obj);
        queenInstance.find();
      });

    const beatlesInstance = new Model(Schema.beatlesSchemaConfig.schema)
      .then(obj => {
        console.log('create', obj);
        beatlesInstance.create(beatlesModel);
      })
      .then(obj => {
        console.log('findById', obj);
        beatlesInstance.findById(beatlesModel.id);
      })
      .then(obj => {
        console.log('find all', obj);
        beatlesInstance.find();
      });


  })
  .then(() => Database.close());