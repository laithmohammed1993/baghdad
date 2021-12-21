<!-- "{"next_page":{"pathname":"/data-types/json","title":"JSON Data Type"},"prev_page":{"pathname":"/data-types/object","title":"Object Data Type"},"github_url":"/en/data-types/array.md"}" -->


<!-- "{"next_page":{"pathname":"/data-types/array","title":"Array Data Type"},"prev_page":{"pathname":"/data-types/string","title":"String Data Type"},"github_url":"/en/data-types/object.md"}" -->

# Array

[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are list-like objects whose prototype has methods to perform traversal and mutation operations.

Arrays cannot use strings as element indexes (as in an associative array) but must use integers.


```js
// Create Array
let fruits = ['Apple', 'Banana']

// Get Length
console.log(fruits.length)
// output : 2

// Access an Array item using the index position
let first = fruits[0]
// output : Apple
let last = fruits[fruits.length - 1]
// output : Banana
```

## Scheme Structure

<table>
  <thead><tr><th style="width: 150px;">Property</th><th>Remark</th></tr></thead>
  <tbody>
    <tr><td>data-type</td><td>array</td></tr>
    <tr><td>content</td><td>it is baghdad validator scheme for the data type of array elements</td></tr>
    <tr><td>rules</td><td>
      <a href="#min-length"  class="a-tag-role-name">min-length</a>
      <a href="#max-length"  class="a-tag-role-name">max-length</a>
      <a href="#length"  class="a-tag-role-name">length</a>
      <a href="#max-json-length"  class="a-tag-role-name">max-json-length</a>
      <a href="#min-json-length"  class="a-tag-role-name">min-json-length</a>
      <a href="#message"  class="a-tag-role-name">message</a>
      <a href="#is-undefined"  class="a-tag-role-name">is-undefined</a>
      <a href="#is-null"  class="a-tag-role-name">is-null</a>
    </td></tr>
    <tr><td>options</td><td><a href="#all-messages"  class="a-tag-role-name">all-messages</a></td></tr>
  </tbody>
</table>


## Content

you can use this scheme property to validating the data type for array elements,

check the following example :

```js
// create array variable
let array = [1995,'2000'];

// create scheme to validating the array variable
let scheme = {
  'data-type' : 'array',
  'content'   : {
    'data-type' : ['integer-1','string-2'],
    'integer-1' : {
      'data-type' : 'integer',
      'rules'     : {
        'length'    : 4
      }
    },
    'string-2' : {
      'data-type' : 'string',
      'rules'     : {
        'pattern' : /^[0-9]{4}$/
      }
    }
  }
}

```

## Rules

<code rule-name id='min-length'>min-length</code>

you can set the minimum length of array by including this rule within rules object

```js
const scheme = {
  'data-type' : 'array',
  'rules'     : {
    ...
    'min-length' : 5,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>accepted value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>min-length</td>
      <td>integer OR  object { value , message }</td>
    </tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='max-length'>max-length</code>

you can set the maximum length of array by including this rule within rules object

```js
const scheme = {
  'data-type' : 'array',
  'rules'     : {
    ...
    'max-length' : 10,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>accepted value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>max-length</td>
      <td>integer OR  object { value , message }</td>
    </tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='length'>length</code>

you can determine the special length for an array variable by including this rule within rules object

```js
const scheme = {
  'data-type' : 'array',
  'rules'     : {
    ...
    'length' : 2,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>accepted value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>length</td>
      <td>integer OR  object { value , message }</td>
    </tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='min-json-length'>min-json-length</code>

you can including this rule if you want the miniumum length of json string for array variable

```js
const scheme = {
  'data-type' : 'array',
  'rules'     : {
    ...
    'min-json-length' : 30,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>accepted value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>min-json-length</td>
      <td>integer OR  object { value , message }</td>
    </tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='max-json-length'>max-json-length</code>

you can including this rule if you want the maximum length of json string for array variable

```js
const scheme = {
  'data-type' : 'array',
  'rules'     : {
    ...
    'max-json-length' : 30,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>accepted value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>max-json-length</td>
      <td>integer OR  object { value , message }</td>
    </tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='is-undefined'>is-undefined</code>

you can add this rule to get a pass if the array variable is [**undefined**](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

accuratly, create a variable but assign it no value

```js
const scheme = {
  'data-type' : 'array',
  'rules'     : {
    ...
    'is-undefined' : true,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>accepted value</th>
      <th>Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>is-undefined</td>
      <td>true || false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='is-null'>is-null</code>

you can add this rule to get a pass if the array variable is [**null**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null).


```js
const scheme = {
  'data-type' : 'array',
  'rules'     : {
    ...
    'is-null' : false,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>accepted value</th>
      <th>Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>is-null</td>
      <td>true || false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='message'>message</code>

it is declared if the variable data type is not array `[ ]` or at least one infraction rule is existed,

```js
const scheme = {
  'data-type' : 'array',
  'rules'     : {
    ...
    'message' : '<your-message>'
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>accepted value</th>
      <th>Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>message</td>
      <td>string</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>