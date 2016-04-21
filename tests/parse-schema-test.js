/*jshint esversion: 6, node: true*/

import parseSchema from '../util/parse-schema';
import {expect} from 'chai';
import assign from 'object-assign';

var validSchema = {
    "labels": {
        "font": {
            "type": "string",
            "defaultValue": "12px sans-serif"
        },
        "someprop": {
          "a": {
            "type": "number",
            "defaultValue": 3
          }
        }
    }
};

describe('parse-schema', function () {
  describe('if given a valid schema', function () {
      it('should convert it into a proper object', function () {
        expect(parseSchema(validSchema)).to.deep.equal({
          labels: {
            font: "12px sans-serif",
            someprop: {
              a: 3
            }
          }
        });
      });
  });

  describe('if given an invalid schema', function () {
      it('should throw error if type "string" does not match default value', function () {
        expect(()=>{

          parseSchema(assign({}, validSchema, {
            "font": {
                "type": "string",
                "defaultValue": 5
            }
          }));

        }).to.throw(Error);
      });

      it('should throw error if type "number" does not match default value', function () {
        expect(()=>{
          parseSchema(assign({}, validSchema, {
            "someprop": {
              "a": {
                "type": "number",
                "defaultValue": "3"
              }
            }
          }));
        }).to.throw(Error);
      });
  });
});
