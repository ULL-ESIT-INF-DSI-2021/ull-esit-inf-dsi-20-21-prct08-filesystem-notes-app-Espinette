import 'mocha';
import {expect} from 'chai';
import {AddMapReduce} from '../../src/ejercicio-clase/addmapreduce';
import {SubMapReduce} from '../../src/ejercicio-clase/submapreduce';
import {ProdMapReduce} from '../../src/ejercicio-clase/prodmapreduce';
import {DivMapReduce} from '../../src/ejercicio-clase/divmapreduce';

describe('Prueba MapReduce', () => {
  describe('Prueba AddMapReduce', () => {
    const vector = new AddMapReduce([1, 2, 3, 4]);

    it('vector.run() not null', () => {
      expect(vector.run()).not.to.be.equal(null);
    });
  });

  describe('Prueba SubMapReduce', () => {
    const vector = new SubMapReduce([1, 2, 3, 4]);

    it('vector.run() not null', () => {
      expect(vector.run()).not.to.be.equal(null);
    });
  });

  describe('Prueba ProdMapReduce', () => {
    const vector = new ProdMapReduce([1, 2, 3, 4]);

    it('vector.run() not null', () => {
      expect(vector.run()).not.to.be.equal(null);
    });
  });

  describe('Prueba DivMapReduce', () => {
    const vector = new DivMapReduce([1, 2, 3, 4]);

    it('vector.run() not null', () => {
      expect(vector.run()).not.to.be.equal(null);
    });
  });
});
