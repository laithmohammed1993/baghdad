<!-- "{"next_page":{"pathname":"/data-types/object","title":"Object Data Type"},"prev_page":{"pathname":"/data-types/boolean","title":"Boolean Data Type"},"github_url":"/en/data-types/string.md"}" -->

# String

A JavaScript strings are used for storing and manipulating `text`.

A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:

```js
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes
var carName3 = `Volvo XC60`;   // Using the backtick
```

## Scheme Structure

<table>
  <thead><tr><th style="width: 150px;">Property</th><th>Remark</th></tr></thead>
  <tbody>
    <tr><td>data-type</td><td>boolean</td></tr>
    <tr><td>rules</td><td>
      <a href="#length"  class="a-tag-role-name">length</a>
      <a href="#min-length"  class="a-tag-role-name">min-length</a>
      <a href="#max-length"  class="a-tag-role-name">max-length</a>
      <a href="#is-integer-as-string"  class="a-tag-role-name">is-integer-as-string</a>
      <a href="#is-float-as-string"  class="a-tag-role-name">is-float-as-string</a>
      <a href="#pattern"  class="a-tag-role-name">pattern</a>
      <a href="#in-array"  class="a-tag-role-name">in-array</a>
      <a href="#not-in-array"  class="a-tag-role-name">not-in-array</a>
      <a href="#includes"  class="a-tag-role-name">includes</a>
      <a href="#equel-to"  class="a-tag-role-name">equel-to</a>
      <a href="#message"  class="a-tag-role-name">message</a>
      <a href="#is-undefined"  class="a-tag-role-name">is-undefined</a>
      <a href="#is-null"  class="a-tag-role-name">is-null</a>
    </td></tr>
    <tr><td>options</td><td><a href="#all-messages"  class="a-tag-role-name">all-messages</a></td></tr>
  </tbody>
</table>

## Rules
<br/>
<code rule-name id='length'>length</code>

you can set a specific or restricted length for text string by using this rule,


```js
const scheme = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'length' : 5,
    ...
  }
}

```

<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th></tr>
  </thead>
  <tbody>
    <tr><td>length</td><td>integer OR object of { value , message } only</td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='min-length'>min-length</code>

you can determine the minimum length for text string by using this rule,


```js
const scheme = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'min-length' : 1,
    ...
  }
}

```

<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th></tr>
  </thead>
  <tbody>
    <tr><td>min-length</td><td>integer OR object of { value , message } only</td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='max-length'>max-length</code>

you can determine the maximum length for text string by using this rule,


```js
const scheme = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'max-length' : 22,
    ...
  }
}

```

<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th></tr>
  </thead>
  <tbody>
    <tr><td>max-length</td><td>integer OR object of { value , message } only</td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='is-integer-as-string'>is-integer-as-string</code>

you can verification the charactors of text string is it an integer number or not, as shown in the following example : 


```js

let timestamp   = '1617561797965'; // Sun Apr 04 2021 21:43:17 GMT+0300
const scheme    = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'is-integer-as-string' : {
        'min-value' : 946674000000, // Sat Jan 01 2000 00:00:00 GMT+0300
        'max-value' : 1703970000000, // Sun Dec 31 2023 00:00:00 GMT+0300
    },
    ...
  }
}

```

<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th></tr>
  </thead>
  <tbody>
    <tr><td>is-integer-as-string</td><td>scheme of integer data type OR object for integer rules simplly</td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='is-float-as-string'>is-float-as-string</code>

you can verification the charactors of text string is it an float number or not, as shown in the following example : 


```js

let price       = '105.99';
const scheme    = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'is-float-as-string' : {
        'min-value' : 100.00,
        'max-value' : 120.99,
    },
    ...
  }
}

```

<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th></tr>
  </thead>
  <tbody>
    <tr><td>is-float-as-string</td><td>scheme of integer data type OR object for integer rules simplly</td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='pattern'>pattern</code>

you can use this rule to validating the string variable with Regular expressions patterns, For example :


```js

let email       = 'example@gmail.com';
const scheme    = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'pattern' : /^([0-9a-z]{3,22})(@gmail.com)$/
    ...
  }
}

const { validator } = require('baghdad');
validator(scheme,email);
// output : { status:true } 

```

<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th></tr>
  </thead>
  <tbody>
    <tr><td>pattern</td><td>Regular expressions pattern<br/><span style="color:silver">OR</span><br/>object { value , message } <br/><span style="color:silver">value is Regular expressions pattern and message is string text</span></td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='in-array'>in-array</code>

you can use this rule to check if the text string included within strings set "array of strings", as following :


```js

let status      = 'passive';
const scheme    = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'in-array' : ['active','passive']
    ...
  }
}

const { validator } = require('baghdad');
validator(scheme,status);
// output : { status:true } 

```

<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th></tr>
  </thead>
  <tbody>
    <tr><td>in-array</td><td>array of strings<br/><span style="color:silver">OR</span><br/>object { value , message } <br/><span style="color:silver">value is array of strings and message is string text</span></td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='not-in-array'>not-in-array</code>

you can use this rule to check if the text string not included within strings set "array of strings", as following :


```js

let status      = 'apple';
const scheme    = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'not-in-array' : ['t-shirt','gloves','scarf']
    ...
  }
}

const { validator } = require('baghdad');
validator(scheme,status);
// output : { status:true } 

```

<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th></tr>
  </thead>
  <tbody>
    <tr><td>not-in-array</td><td>array of strings<br/><span style="color:silver">OR</span><br/>object { value , message } <br/><span style="color:silver">value is array of strings and message is string text</span></td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='includes'>includes</code>

you can use the rule to determine one string may be found within the string variable,

For Example :


```js

let string      = 'hello world !!';
const scheme    = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'includes' : "lo wo",
    ...
  }
}

const { validator } = require('baghdad');
validator(scheme,string);
// output : { status:true } 

```

<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th></tr>
  </thead>
  <tbody>
    <tr><td>includes</td><td>string<br/><span style="color:silver">OR</span><br/>object { value , message } <br/><span style="color:silver">value is string and message is string text</span></td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='equal-to'>equal-to</code>

You can use the rule to check if the text string is equel to certain value, 

For Example :


```js

let string      = 'hello world !!';
const scheme    = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'equal-to' : "hello world !!",
    ...
  }
}

const { validator } = require('baghdad');
validator(scheme,string);
// output : { status:true } 

```

<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th></tr>
  </thead>
  <tbody>
    <tr><td>equal-to</td><td>string<br/><span style="color:silver">OR</span><br/>object { value , message } <br/><span style="color:silver">value is string and message is string text</span></td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='is-undefined'>is-undefined</code>

you can add this rule to get a pass if the string variable is [**undefined**](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

accuratly, create a variable but not assigned any value

```js
let percentage ;

const scheme = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'is-undefined' : true,
    ...
  }
}

```
<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th><th>Default value</th></tr>
  </thead>
  <tbody>
    <tr><td>is-undefined</td><td>true || false</td><td>false</td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='is-null'>is-null</code>

you can add this rule to get a pass if the string variable is [**null**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null).


```js
const scheme = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'is-null' : true,
    ...
  }
}

```
<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th><th>Default value</th></tr>
  </thead>
  <tbody>
    <tr><td>is-undefined</td><td>true || false</td><td>false</td></tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='message'>message</code>

it is declared if the variable data type is not string or at least one infraction rule is existed,

```js
const scheme = {
  'data-type' : 'string',
  'rules'     : {
    ...
    'message' : '<your-message>'
  }
}

```
<table>
  <thead>
    <tr><th>Name</th><th>accepted value</th><th>Default value</th></tr>
  </thead>
  <tbody>
    <tr><td>message</td><td>string</td><td>undefined</td></tr>
  </tbody>
</table>