<!-- "{"next_page":{"pathname":"/getting-started/install","title":"Install Baghdad module"},"prev_page":{"pathname":"/getting-started","title":"Getting Started"},"github_url":"/en/getting-started/introduction.md"}" -->
# Introduction

JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.

**Baghdad** is a module for Node.js applications to allow easy as cake to data validating. The project got started back in 2019, today it is the solution most Node.js users turn to by default.

Now you can validate your data before inserted into you  database and avoid any kind of mistakes which come for wrong format,

In this module, The **Scheme** is important and it is **JavaScript Object** and content a mandatory property is **data-type** and other properties are optional

you can take a quik look for popular properties of **Sheme** :

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Remark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#data-type" class="a-tag-role-name">data-type</a></td>
      <td>string OR array</td>
      <td>mandatory</td>
    </tr>
    <tr>
      <td><a href="#rules" class="a-tag-role-name">rules</a></td>
      <td>object</td>
      <td>optional</td>
    </tr>
    <tr>
      <td><a href="#content" class="a-tag-role-name">content</a></td>
      <td>object</td>
      <td>mandatory with "json" AND "array" data-types only</td>
    </tr>
    <tr>
      <td><a href="#properties" class="a-tag-role-name">properties</a></td>
      <td>object</td>
      <td>mandatory with "object" data-type only</td>
    </tr>
    <tr>
      <td><a href="#options" class="a-tag-role-name">options</a></td>
      <td>object</td>
      <td>optional</td>
    </tr>
  </tbody>
</table>

let we are take a look on a scheme for integer variable as following :

```
let scheme = {
  'data-type' : 'integer',
  'rules'     : {
    'min-value' : 0,
    'max-value' : 5,
    ...
  }
}
```
<a id="data-type"></a>
## Data Type

it is mandatory to including it within the object of scheme, as shown into above example,

In this module, the variable or data is classified to **seven types** are  [`integer`](/data-types/integer),  [`float`](/data-types/float), [`boolean`](/data-types/boolean), [`string`](/data-types/string), [`object`](/data-types/object), [`array`](/data-types/array) & [`json`](/data-types/json)

> **_Note :_** <br/>For each `data-type` there are specific rules and options,<br/>For more information check [`Data Types`](/data-types).

<a id="data-type"></a>
## Rules

It is **Javascript object** including the restrictions for the variable that you want to validated,

For Example :

```js
const scheme = {
  'data-type' : 'array',
  'rules'     : {
    'min-length'  : 1, // set a restriction for minimum length of array
    'max-length'  : 16 // set a restriction for maximum length of array
  }
}

```

you have type kind of values for any signle rule, as following,

```js
const scheme = {
  'data-type' : 'string',
  'rules'     : {
    // the first kind is a default value,
    'in-array' : ['active','passive'],
    // OR
    // the second kind is JS object,
    // include "value" is a default value and "message" is stated if the variable was infracted the rule scope
    'in-array' : {
      'value' : ['active','passive'],
      'message' : 'the status value is not recognized'
    }
  }
}
```

> **_Note :_**<br/>you have free to select any one for the two kinds.

<a href="content"></a>
## Content

it is **JS object**, you can use it to validiting the data for content of `array` or `json` types, as following,

```js
// scheme
const scheme = {
  'data-type' : 'json',
  'content'   : {
    'data-type' : 'boolean',
    'rules'     : {
      'message' : 'json content is not correct',
    }
  },
  'rules' :{
    'message' : 'data format is not correct',
  }
}

// dependencies
const { validator }         = require('baghdad');

// example
let stringifyBooleanJson    = "false";
let { status , messages }   = validator(scheme,stringifyBooleanJson);
// output : { "status":true. "messages":undefined }
let stringifyObjectJson     = '{"hi":5}';
let { status , messages }   = validator(scheme,stringifyObjectJson);
// output : { "status":false, "messages":"json content is not correct" }
let jsObject                = {"hi":5};
let { status , messages }   = validator(scheme,jsObject);
// output : { "status":false, "messages":"data format is not correct" }
```

<a href="properties"></a>
## Properties

It is **JS object**, you can use it to defining and validating the properites of `object` data type, as following,

```js
// scheme
const scheme = {
  'data-type'  : 'object',
  'properties' : {
    'fullname'    : { 'data-type' : 'string' },
    'username'    : { 'data-type' : 'string' },
    'age'         : { 'data-type' : 'integer' },
    'height'      : { 'data-type' : 'float' },
    'isStudent'   : { 'data-type' : 'boolean' },
  }
}

// dependencies
const { validator }         = require('baghdad');

// 1st example
let userDetailsOne          = { fullname:'John Doe',age:65,isStudent:false };
let { status , messages }   = validator(scheme,userDetails1);
// the status will be false due to 'username' and 'height' are undefined
// output : { "status":false. "messages":{} }
// 2nd example
let userDetailsTwo          = { fullname:'Tom Jerry',username:'tom.jerry',age:94,height:161,isStudent:false };
// output : { "status":true. "messages":undefined }
```

<a href="options"></a>
## Options
you have only one option is provided in this version, it is `all-messages`,

if you want to declare only the message of first Infraction from the included rules within rules property of scheme and ignore remained messages if exists , you must set all-messages value as false :

let we are take a look to this example:

```js
// dependencies
const { validator }         = require('baghdad');

const itemsScheme           = {
  'data-type' : 'integer',
  'rules'     : {
    'min-value' : {
      'value' : 10,
      'message' : 'you must collect at least 10 items',
    },
    'max-value' : {
      'value' : 30,
      'message' : 'your basket must contain less then 30 items',
    },
    'message'   : 'your items value must be integer',
  }
};

```