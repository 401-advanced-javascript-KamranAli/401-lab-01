jest.mock('../lib/files.js', () => {
  return {
    readFile: jest.fn(),
    writeFile: jest.fn(),
    readdir: jest.fn(),
  };
});

const path = require('path');
const DocumentCollection = require('../lib/document-collection');

// for setting up mock expectations
const { readFile, writeFile, readdir } = require('../lib/files');

describe('Document Collection', () => {
  // TODO
  it('Saves object to file', () => {
    const folder = 'dest.txt';
    const doc = new DocumentCollection(folder);
    const obj = {
      name: 'Freddie Mercury',
    };

    writeFile.mockResolvedValueOnce(obj);

    return doc.save(obj)
      .then(obj => {

        const writeCalls = writeFile.mock.calls;

        expect(path.dirname(writeCalls[0][0]).toBe(folder));
        expect(writeCalls[0][1]).toBe(JSON.stringify(obj));
        expect(obj.id).toEqual(expect.any(String));
      });
  });

  it('gets object from file', () => {
    const folder = 'dest.txt';
    const doc = new DocumentCollection(folder);
    const obj = {
      name: 'Freddie Mercury',
      id: 'frontman'
    };

    readFile.mockResolvedValueOnce(JSON.stringify(obj));

    return doc.get(obj.id)
      .then(readObj => {

        const readCalls = readFile.mock.calls;

        expect(readCalls.length).toBe(1);
        expect(path.dirname(readCalls[0][0]).toBe(folder));
        expect(readObj).toEqual(obj);
      });
  });

  it('gets object from folder', () => {
    const folder = 'dest.txt';
    const doc = new DocumentCollection(folder);
    const obj = {
      name: 'Freddie Mercury',
      id: 'frontman'
    };

    readdir.mockResolvedValueOnce(['frontman.json']);
    readFile.mockResolvedValueOnce(JSON.stringify(obj));

    return doc.getAll()
      .then(returnAll => {

        const readdirCalls = readdir.mocks.calls;
        const readCalls = readCalls.mock.calls;

        expect(readdirCalls[0][0]).toBe(folder);
        expect(readCalls[0][0]).toBe(`${folder}/${obj.id}.json`);
        expect(returnAll[0].id).toBe(obj.id);


      });

  });
});
