/**
 * (c) 2014 Beau Sorensen
 * MIT Licensed
 * For all details and documentation:
 * https://github.com/sorensen/keysort.js
 */

;(function() {
'use strict';

var toString = Object.prototype.toString

/**
 *
 *
 * @param {Object} input
 * @param {Boolean} sort by reference
 * @return {Object} sorted ref or clone of input
 */

function keysort(obj, byRef, sorting) {
  // Argument shim
  if (typeof byRef === 'function') {
    sorting = byRef
    byRef = false
  }
  
  var keys = Object.keys(obj).sort(sorting)
    , len = keys.length, tmp = {}, i

  // Create the tmp object with sorted keys
  for (i = 0; i < len; i++) tmp[keys[i]] = obj[keys[i]]

  // If by reference, clear and recreate input obj
  if (byRef) {
    for (i = 0; i < len; i++) delete obj[keys[i]]
    for (i = 0; i < len; i++) obj[keys[i]] = tmp[keys[i]]
  }
  // Return input if by ref, otherwise the tmp clone
  return byRef ? obj : tmp
}

/*!
 * Current library version, should match `package.json`
 */

keysort.VERSION = '0.0.1'

/*!
 * Module exports.
 */

typeof exports !== 'undefined'
  ? module.exports = keysort
  : this.keysort = keysort

}).call(this);
