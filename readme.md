Keysort
=======

> Sort the properties of an object

[![Build Status](https://secure.travis-ci.org/sorensen/keysort.js.png)](http://travis-ci.org/sorensen/keysort.js) 
[![devDependency Status](https://david-dm.org/sorensen/keysort.js.png)](https://david-dm.org/sorensen/keysort.js#info=dependencies)
[![NPM version](https://badge.fury.io/js/keysort-js.png)](http://badge.fury.io/js/keysort-js)


Install
-------

With [npm](https://npmjs.org)

```
npm install keysort-js
```


Usage
-----

Node.js

```js
var keysort = require('keysort')
```

Browser

```html
<script src="keysort.min.js"></script>
```

```js
var obj = {
  b: 1
, e: 3
, d: 4
, a: 20
}
var sorted = keysort(obj)
// {
//   a: 20
// , b: 1
// , d: 4
// , e: 3
// }
```


API
---

### keysort(obj, [byRef], [sortMethod])

* `obj` - `object` to sort
* `byRef` - `boolean` sort object by reference (optional, default `false`)
* `sortMethod` - `function` method passed to the array sort (optional)


License
-------

(The MIT License)

Copyright (c) 2014 Beau Sorensen

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.