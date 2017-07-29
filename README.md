template-inspect
==============

[![NPM Version](https://img.shields.io/npm/v/template-inspect.svg?style=flat)](https://npmjs.org/package/template-inspect)
[![NPM Downloads](https://img.shields.io/npm/dm/template-inspect.svg?style=flat)](https://npmjs.org/package/template-inspect)
[![Build Status](https://travis-ci.org/addaleax/template-inspect.svg?style=flat&branch=master)](https://travis-ci.org/addaleax/template-inspect?branch=master)
[![Coverage Status](https://coveralls.io/repos/addaleax/template-inspect/badge.svg?branch=master)](https://coveralls.io/r/addaleax/template-inspect?branch=master)
[![Dependency Status](https://david-dm.org/addaleax/template-inspect.svg?style=flat)](https://david-dm.org/addaleax/template-inspect)

Split an array evenly into chunks.

Install:
`npm install template-inspect`

```js
const i = require('template-inspect');

console.log(i `The i function looks like ${i}.`);
// prints:
// The i function looks like { [Function: templateInspect] forOptions: [Function: forOptions] }.
```

Supports all [options](https://nodejs.org/api/util.html#util_util_inspect_object_options) for `util.inspect`:

```js
const i = require('template-inspect').forOptions({ colors: true });

console.log(i `The i function looks like ${i}.`);
// prints the same as above (but with colors)!:
// The i function looks like { [Function: templateInspect] forOptions: [Function: forOptions] }.
```

License
=======

MIT
