/*jshint esversion: 6, eqnull: true, node: true*/
/*
 copies values of attributes from a src ojbect to a target ojbect
 value is only copied if it's not null/undefined on both objects
 it's useful when you have your default properties and you want
 to merge them with user defined properties object, but you
 only want to copy value of the attribute if attribute is present in
 default properites object. Hellps to keep properties object clean.
*/
/*let copyIfExisty = (src, trgt) => {
    each(trgt, function(attr, key) {
        if (isObject(attr) && isObject(src[key])) {
            copyIfExisty(attr, trgt[key]);
        } else if (src[key] != null && !isObject(trgt[key])) {
            trgt[key] = src[key];
        }
    });
};*/

let copyIfExisty = (src, trgt) => {
  each(trgt, function(attr, key) {
    if (isObject(trgt[key]) && isObject(src[key])) {
        copyIfExisty(src[key], trgt[key]);
    } else if (src[key] != null && !isObject(trgt[key])) {
        trgt[key] = src[key];
    }
  });
};

function isObject(o) {
    return o && o.constructor === Object;
}

function each (obj, cb) {
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            cb(obj[i], i, obj);
        }
        obj.forEach(cb);
    } else if (isObject(obj)) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                cb(obj[key], key, obj);
            }
        }
    }
}

export default copyIfExisty;
