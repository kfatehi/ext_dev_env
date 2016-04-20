/*jshint esversion: 6, node: true*/

//TODO: need to add copyIfExisty/safelyMerge function

/*const TYPES = {
  'string': String,
  'number': Number,

}*/

// traverse through the entire schema object and build res object
//by calling cb on all the leafs
function traverse( node, res,  cb ) {
  Object.keys(node).forEach(function (key) {
    //assume that if node hass type attribute than it's a leaf node
    if ( node[key] && node[key].type ) {
      res[key] = cb(node[key], key);
    } else {
      res[key] = {};
      traverse(node[key], res[key], cb);
    }
  });
}

// if type is number than return it,
// else throw an error
function verifyNumber( value ) {
  if (value && value.constructor === Number) {
    return value;
  } else {
      throw new Error("defaultValue of the object with name " + key + "is not a number");
  }
}

function verifyString( value ) {
  if ( value && value.constructor === String ) {
    return value;
  } else {
      throw new Error("defaultValue of the object with name " + key + "is not a string");
  }
}

//makes sure that defaultValue of the leaf matches the type
//and returns defaultValue
function parseLeaf (leaf, res, key) {
  //TODO: add suprot for more types: color, date, array(number)
  switch(leaf.type) {
    case 'number':
      return verifyNumber(leaf.type, leaf.defaultValue);
    case 'string':
      return verify(leaf.type, leaf.defaultValue);
    default:
      throw new Error("type of the object with name " + key + "is not supported");
  }

  console.log(leaf);
}

module.exports = ( schema ) => {
  var result = {};
  traverse( schema, result, parseLeaf );
};
