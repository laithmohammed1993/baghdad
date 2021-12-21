
<!-- "{"next_page":{"pathname":"/data-types/array","title":"Array Data Type"},"prev_page":{"pathname":"/data-types/string","title":"String Data Type"},"github_url":"/en/data-types/object.md"}" -->

# object

[Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) can be initialized using `new Object()`, `Object.create()`, or using the `literal notation` ( initializer notation ).

An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces `{ }`.

[Objects](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects) are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample object:

```js
// JavaScript Demo: Expressions - Object initializer

const object1 = { a: 'foo', b: 42, c: {} };

console.log(object1.a);
// expected output: "foo"

const a = 'foo';
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };

console.log(object2.b);
// expected output: 42

const object3 = { a, b, c };

console.log(object3.a);
// expected output: "foo"

```

## Scheme Structure

<!-- 'required-properties' , 'conditionals' , 'one-of-them' -->

<table>
  <thead><tr><th style="width: 150px;">Property</th><th>Remark</th></tr></thead>
  <tbody>
    <tr><td>data-type</td><td>object</td></tr>
    <tr><td>properties</td><td>it is { } of key/value pairs</td></tr>
    <tr><td>rules</td><td>
      <a href="#message"  class="a-tag-role-name">message</a>
      <a href="#is-undefined"  class="a-tag-role-name">is-undefined</a>
      <a href="#is-null"  class="a-tag-role-name">is-null</a>
    </td></tr>
    <tr><td>options</td><td><a href="#all-messages"  class="a-tag-role-name">all-messages</a></td></tr>
  </tbody>
</table>


## Properties

It is Javascript object `{ }` and includes key/value pairs where `key` is an object's property like "fullname" or "email"  ...etc, and `value` is the scheme for the object's property,

For example :

```js
let newUserScheme = {
  'data-type'   : 'object',
  'properties'  : {
    fullname      : {
      'data-type'   : 'string',
      'rules'       : {
        'min-value'   : {
          'value'       : 3,
          'message'     : 'typing at least 3 characters'
        },
        'max-value'   : {
          'value'       : 22,
          'message'     : 'fullname is too long'
        },
        'message'     : 'required'
      }
    },
    email         : {
      'data-type'   : 'string',
      'rules'       : {
        'pattern'     : {
          'value'       : /^([a-z0-9_.]{3,22})?(@gmail.com)$/, // simple gmail pattren
          'message'     : 'email format is not correct',
        },
        'message'     : 'required',
      }
    },
    password      : {
      'data-type'   : 'string',
      'rules'       : {
        'min-length'  : 8,
        'max-length'  : 32,
        'message'     : 'required'
      }
    }
  }
}

```

> **_Note :_**<br/>by default, all those keys `fullname`, `email` and `password` are mandatory required but if you like to set one of those variables as "optional value" you have to set `is-undefined` rule as `true` within rules object for the scheme of key

<br/> 

The following example explain how to set `email` value within `newUserScheme` scheme as optional

```js
let newUserScheme = {
  'data-type'   : 'object',
  'properties'  : {
    fullname      : {
      ...
    },
    email         : {
      'data-type'   : 'string',
      'rules'       : {
        'is-undefined'  : true,
        ...
      }
    },
    password      : {
      ...
    }
  }
}
```

## Rules

<code rule-name id='is-undefined'>is-undefined</code>

you can add this rule to get a pass if the object variable is [**undefined**](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

accuratly, create a variable but assign it no value

```js
const scheme = {
  'data-type' : 'object',
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

you can add this rule to get a pass if the object variable is [**null**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null).


```js
const scheme = {
  'data-type' : 'object',
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

it is declared if the variable data type is not object `{ }` or at least one infraction rule is existed,

```js
const scheme = {
  'data-type' : 'object',
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

## Options

<br/>
<code rule-name id=all-messages>all-messages</code>

if you want to declare only the message of first Infraction from the included rules within rules property of scheme and ignore remained messages if exists , you must set `all-messages` value as `false` :

```js
const scheme = {
  'data-type' : 'object',
  'properties' : {
    ...
  }
  'rules'     : {
    'json-max-length' : {
      'value' : 120,
      'message' : 'the app can not have ability to store the object as JSON'
    }
    'message' : 'invalid object format',
  },
  'options' : {
    'all-messages' : false,
  }
}
```
<table>
  <thead><tr><th>Name</th><th>Value</th><th>Default Value</th></tr></thead>
  <tbody><tr><td>all-messages</td><td>true OR false</td><td>true</td></tr></tbody>
</table>