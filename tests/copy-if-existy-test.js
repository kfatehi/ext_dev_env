/*jshint esversion: 6, node: true*/

import copy from '../util/copy-if-existy';
import {expect} from 'chai';
import assign from 'object-assign';

let sample = {
  labels: {
    font: "12px sans-serif",
    someprop: {
      a: 3
    }
  }
}, target;

let jsonCopy = (o) => JSON.parse(JSON.stringify(o));

describe('copy-if-existy', function () {

  beforeEach(function () {
    target = jsonCopy(sample);
  });

  describe('if objects nesting matches', function () {
      it('should copying number over from src to trgt', function () {
        copy({ labels: { someprop: { a: 5 } } }, target);
        expect(target).to.deep.equal({
          labels: {
            font: "12px sans-serif",
            someprop: {
              a: 5
            }
          }
        });
      });

      it('should copying string over from src to trgt', function () {
        copy({ labels: { font: "14px sans-serif" } }, target);
        expect(target).to.deep.equal({
          labels: {
            font: "14px sans-serif",
            someprop: {
              a: 3
            }
          }
        });
      });

      it('should prevent copying of null ober from src to trgt', function () {
        copy({ labels: {font: null, someprop: {a: null}} }, target);
        expect(target).to.deep.equal({
          labels: {
            font: "12px sans-serif",
            someprop: {
              a: 3
            }
          }
        });
      });
  });

  describe('if object nesting does not match ', function () {
    it('should keep trgt object nesting structure', function () {
      copy({ labels: null }, target);
      expect(target).to.deep.equal({
        labels: {
          font: "12px sans-serif",
          someprop: {
            a: 3
          }
        }
      });
    });
  });
});
