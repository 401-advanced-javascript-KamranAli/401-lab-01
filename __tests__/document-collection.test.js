const DocumentCollection = require('../lib/document-collection');
const path = require('path');

jest.mock('../lib/files.js', () => ({
  readFile: jest.fn(),
  writeFile: jest.fn(),
  readdir: jest.fn(),
}));


// for setting up mock expectations
const { readFile, writeFile, readdir } = require('../lib/files');

describe('Document Collection', () => {
  // TODO
  it('Saves object to file', () => {
    const queen = {
      name: 'Freddie',
      bandMate: true
    };

    const writePromise = Promise.resolve(queen);
    writeFile.mockReturnValueOnce(writePromise);

    const dir = 'documents';
    const docs = new DocumentCollection(dir);

    return docs.save(queen)
      .then(object => {
        expect(path.dirname(writeFile.mock.calls[0][0])).toBe(dir);
        expect(writeFile.mock.calls[0][1]).toBe(JSON.stringify(queen));
        expect(object._id).toEqual(expect.any(String));
      });
  });

  it('read object file', () => {
    const queen = {
      name: 'Freddie',
      bandMate: true,
      _id: 'frontman'
    };

    const readPromise = Promise.resolve(JSON.stringify(queen));
    readFile.mockReturnValueOnce(readPromise);

    const dir = 'documents';
    const documents = new DocumentCollection(dir);

    const id = queen._id;

    return documents.get(id)
      .then(object => {
        expect(readFile.mock.calls[0][0]).toBe(`${dir}/${id}.json`);
        expect(object._id).toBe('frontman');
      });
  });

  it('read all objects from directory', () => {
    const queen = {
      name: 'Freddie',
      bandMate: true,
      _id: 'frontman'
    };

    const readDirPromise = Promise.resolve(['frontman.json']);
    readdir.mockReturnValueOnce(readDirPromise);

    const readPromise = Promise.resolve(JSON.stringify(queen));
    readFile.mockReturnValueOnce(readPromise);

    const dir = 'documents';
    const documents = new DocumentCollection(dir);

    return documents.getAll()
      .then(array => {
        expect(readdir.mock.calls[0][0]).toBe(dir);
        expect(readFile.mock.calls[0][0]).toBe(`${dir}/${queen._id}.json`);
        expect(array[0]._id).toBe(queen._id);
      });
  });
});
