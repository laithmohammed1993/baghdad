<!-- "{"next_page":{"pathname":"/data-types/integer","title":"Integer Data Type"},"prev_page":{"pathname":"/getting-started/install","title":"Install"},"github_url":"/en/data-types.md"}" -->
# data-types

In computer science, data is anything that is meaningful to the computer. JavaScript provides `eight` different data types which are `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, and `object`.
 
But in this package you have only `seven` different data types which `integer`, `float`, `string`, `boolean`, `object`, `array` and `json`.

<a id="integer"></a>

## 1. Integer

Is colloquially defined as a number that can be written without a fractional component.

For example, 21, 4, 0, and −2048 are integers,

you shall set the data type of scheme for integer value as following :

```
let scheme = {
  'data-type' : 'integer',
  ...
}
```
[click here for more inforation](/data-types/integer)

<a id="float"></a>
## 2. Float
Is a floating-point number, which means it is a number that has a decimal place. floats are used when more precision is needed.

For example, 21.5, 4.6, 0.1, and −2048.05 are floats,

you shall set the data type of scheme for float value as following :

```
let scheme = {
  'data-type' : 'float',
  ...
}
```
[click here for more inforation](/data-types/float)

<a id="boolean"></a>
## 3. Boolean

Is represents one of two values: true or false.

you shall set the data type of scheme for boolean value as following :

```
let scheme = {
  'data-type' : 'boolean',
  ...
}
```
[click here for more inforation](/data-types/boolean)

<a id="string"></a>
## 4. String

Is a zero or more characters written inside quotes ( single or double ) and it is used for storing a text.

For Example :

```js
var clientAddress       = 'Al-Karrada, baghdad, Iraq';

let instagramUsername   = "laith.ideas";

const email             = `laith.ideas@gmail.com`;
```

you shall set the data type of scheme for string value as following :


```
let scheme = {
  'data-type' : 'string',
  ...
}
```
[click here for more inforation](/data-types/string)

<a id="object"></a>
## 5. Object

Is written with curly braces **{ }**, his properties are written as name:value pairs, separated by commas.

For Example :
```js
let user = {
  'firstname' : 'john',
  'lastname'  : 'doe',
  'email'     : 'example@example.com',
  'password'  : '*********'
}
// you can access to the email of user object like this
user.email

```

you shall set the data type of scheme for object value as following :

```
let scheme = {
  'data-type' : 'object',
  ...
}
```
[click here for more inforation](/data-types/object)

<a id="array"></a>

## 6. Array

Is written with square brackets **[ ]**, his items are separated by commas.

For Example :
```js
// array of strings
let months  = [ 
  'January',  'February', 'March',      'April',    'May',      'June',
  'July',     'August',   'September',  'October',  'November', 'December'
];
// array of objects
let users   = [
  { id:1, username:'johndoe',   fullname:'John Doe' },
  { id:2, username:'markblack', fullname:'MK Black' },
  { id:2, username:'watson',    fullname:'MG Watson' },
  ...
]

```

you shall set the data type of scheme for array value as following :

```
let scheme = {
  'data-type' : 'array',
  ...
}
```
[click here for more inforation](/data-types/array)

<a id="json"></a>

## 7. JSON

Is a format for storing and transporting data and it is often used when data is sent from a server to a web page.

The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only.

Code for reading JSON data is :

```js
JSON.parse('{"id":1,"username":"john doe"}');
// output :
// { 
//   id        : 1,
//   username  : 'john doe'
// }

```

And generating JSON data as following

```js
JSON.stringify({ 
  id        : 1,
  username  : 'john doe'
});
// output :
// '{"id":1,"username":"john doe"}'
```

you shall set the data type of scheme for json value as following :

```js
let scheme = {
  'data-type' : 'json',
  ...
}
```
[click here for more inforation](/data-types/json)