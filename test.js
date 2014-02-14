'use strict';

/*!
 * Module dependencies.
 */

var keysort = require('./index')
  , assert = require('assert')
  , ase = assert.strictEqual
  , info = require('./package.json')
  , log = console.log

try {
  log = require('beau').log
} catch (e) {}

describe('Keysort', function() {

  function assertArray(a, b, loose) {
    ase(a.length, b.length)
    var strs = b.slice().map(function(x) {
      return x.toString()
    })
    a.forEach(function(x, i) {
      if (loose) assert(~strs.indexOf(x.toString()))
      else ase(strs.indexOf(x.toString()), i)
    })
  }

  it('version', function() {
    ase(info.version, keysort.VERSION)
    ase(info.version, require('./keysort.min').VERSION)
    ase(info.version, require('./bower.json').version)
  })

  it('default', function() {
    var obj = {
      b: 1
    , e: 3
    , d: 4
    }
    var keys = Object.keys(obj)
    var sorted = keysort(obj)
    var sKeys = Object.keys(sorted)

    assertArray(keys, sKeys, true)
    assertArray(keys.sort(), sKeys)
    assert.notEqual(obj, sorted)
  })

  it('by reference', function() {
    var obj = {
      b: 1
    , e: 3
    , d: 4
    }
    var keys = Object.keys(obj)
    var sorted = keysort(obj, true)
    var sKeys = Object.keys(sorted)

    assertArray(keys, sKeys, true)
    assertArray(keys.sort(), sKeys)
    assert.strictEqual(obj, sorted)
  })

  it('custom sort', function() {
    var obj = {
      b: 1
    , e: 3
    , d: 4
    , a: 20
    }
    var keys = Object.keys(obj)
    var sorted = keysort(obj, function(a, b) {
      if (a > b) return -1
      else if (a < b) return 1
      else return 0
    })
    var defaults = keysort(obj)
    var sKeys = Object.keys(sorted)
    var rKeys = Object.keys(keysort(obj)).reverse()

    assertArray(keys, sKeys, true)
    assertArray(rKeys, sKeys)
    assert.notEqual(obj, sorted)
    assert.notEqual(obj, defaults)
  })


})
