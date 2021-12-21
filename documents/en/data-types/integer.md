<!-- "{"next_page":{"pathname":"/data-types/float","title":"Float Data Types"},"prev_page":{"pathname":"/data-types","title":"Data Types"}}" -->
# Integer

Numbers can be written with or without decimals and you has seperating the number to integer and float

> **NaN** is not number in this module, you should keep it in your mind

The [**JavaScript Number**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) type is a [**double-precision 64-bit binary format IEEE 754**](https://en.wikipedia.org/wiki/Floating-point_arithmetic) value, like `double` in Java or C#. This means it can represent fractional values, but there are some limits to what it can store. A Number only keeps about 17 decimal places of precision; arithmetic is subject to rounding. The largest value a Number can hold is about 1.8×10308. Numbers beyond that are replaced with the special Number constant `Infinity`.

## Scheme Structure

<table>
  <thead><tr><th style="width: 150px;">Property</th><th>Remark</th></tr></thead>
  <tbody>
    <tr><td>data-type</td><td>integer</td></tr>
    <tr><td>rules</td><td>
      <a href="#min-value" class="a-tag-role-name">min-value</a>
      <a href="#max-value"  class="a-tag-role-name">max-value</a>
      <a href="#value"  class="a-tag-role-name">value</a>
      <a href="#min-length"  class="a-tag-role-name">min-length</a>
      <a href="#max-length"  class="a-tag-role-name">max-length</a>
      <a href="#length"  class="a-tag-role-name">length</a>
      <a href="#in-array"  class="a-tag-role-name">in-array</a>
      <a href="#not-in-array"  class="a-tag-role-name">not-in-array</a>
      <a href="#within-range"  class="a-tag-role-name">within-range</a>
      <a href="#is-undefined"  class="a-tag-role-name">is-undefined</a>
      <a href="#is-null"  class="a-tag-role-name">is-null</a>
      <a href="#is-NaN"  class="a-tag-role-name">is-NaN</a>
      <a href="#is-infinity"  class="a-tag-role-name">is-infinity</a>
    </td></tr>
    <tr><td>options</td><td><a href="#all-messages"  class="a-tag-role-name">all-messages</a></td></tr>
  </tbody>
</table>

## Options

<code rule-name id=all-messages>all-messages</code>

if you want to declare only the message of first Infraction from the included rules within rules property of scheme and ignore remained messages if exists , you must set `all-messages` value as `false` :

```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    'in-array'  : {
      'value'   : [5],
      'message' : 'the value isn\'t recognized'
    },
    'min-value' : {
      'value'   : 30,
      'message' : 'minimum value must 30'
    },
    'message' : 'invalid integer format',
  },
  'options' : {
    'all-messages' : false,
  }
}

let { validator } = require('baghdad');

vaildator(scheme,26);
// if you are set all-messages props value as false
// the output is { status:false, messages:'the value isn\'t recognized' }
// otherwise
// the output will be like this
// { status:false, messages:'the value isn\'t recognized, minimum value must 30' }


```
<table>
  <thead><tr><th>Name</th><th>Value</th><th>Default Value</th></tr></thead>
  <tbody><tr><td>all-messages</td><td>true OR false</td><td>true</td></tr></tbody>
</table>

## Rules

when you are using `integer` as data-type within the scheme to validating your variable,

you can set the following rules into the object :<br /><br />


<code rule-name id=min-value>min-value</code>

you can use this rule to set the minimum value for integer variable :

```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    'min-value' : 5,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>min-value</td>
      <td>integer</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='max-value'>max-value</code>

you can use this rule to set the maximum value for integer variable :

```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    ...
    'max-value' : 10,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>max-value</td>
      <td>integer</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='value'>value</code>

you can use this rule to set specific value for integer variable :

```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    ...
    'value' : 6,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>integer</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='min-length'>min-length</code>

**length** is mean the specifies how many characters to pad

for example : 

```js
let x = 10        // length is 2
let y = 1956      // length is 4
let z = 701112    // length is 6

```

you can use this rule to set the minimum length for the value of integer variable,

common use for inserted value into SQL database

```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    ...
    'min-length' : 1,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>min-length</td>
      <td>integer</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='max-length'>max-length</code>

you can use this rule to set the maximum length for the value of integer variable,

```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    ...
    'max-length' : 1,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>max-length</td>
      <td>integer</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='length'>length</code>

you can use this rule to set special length for the value of integer variable,

```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    ...
    'length' : 1,
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>length</td>
      <td>integer</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='in-array'>in-array</code>

you can use this rule to ensure the integer variable is one of values set,

```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    ...
    'in-array' : [4,5,9],
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>in-array</td>
      <td>array of integers, like `[1,5,7]`</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='not-in-array'>not-in-array</code>

you can use this rule to ensure the integer variable isn't one of values set,

```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    ...
    'not-in-array' : [4,5,9],
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>not-in-array</td>
      <td>array of integers, like `[1,5,7]`</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='within-range'>within-range</code>

you can use this rule to ensure the integer variable is within range of minimum and maximum values,

> **_Warning:_**   <br/>the value of `within-range` rule must array of integers and length of array is equel to 2, where first integer is minimum range value and second integer is maximum range 

```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    ...
    'within-range' : [4,20],
    ...
  }
}

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>in-range</td>
      <td>array of two integers, like `[1,5]`</td>
    </tr>
  </tbody>
</table>

## Global Property

<code rule-name id='is-undefined'>is-undefined</code>

you can add this rule to get a pass if the integer variable is [**undefined**](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

accuratly, create a variable but assign it no value

```js
const scheme = {
  'data-type' : 'integer',
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

you can add this rule to get a pass if the integer variable is [**null**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null).


```js
const scheme = {
  'data-type' : 'integer',
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
<code rule-name id='is-NaN'>is-NaN</code>

you can add this rule and set the value `true` to get a pass if the integer variable is [**NaN**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).


```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    ...
    'is-NaN' : true,
    ...
  }
}

```
<table>
  <thead><tr><th>Name</th><th>accepted value</th><th>Default value</th></tr></thead>
  <tbody><tr><td>is-NaN</td><td>true || false</td><td>false</td></tr></tbody>
</table>

<br/><br/>
<code rule-name id='is-infinity'>is-infinity</code>

you can add this rule and set the value `true` to get a pass if the integer variable is [**infinity**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity).


```js
const scheme = {
  'data-type' : 'integer',
  'rules'     : {
    ...
    'is-infinity' : false,
    ...
  }
}

```
<table>
  <thead><tr><th>Name</th><th>accepted value</th><th>Default value</th></tr></thead>
  <tbody><tr><td>is-infinity</td><td>true || false</td><td>false</td></tr></tbody>
</table>


## Example

you can validate the datetime stamp with **Baghdad** validator base on the following restrictions :
* date value must within christmas week of 2020/2021
* 

```js
// define scheme object
const scheme = {
  // set integer as value data-type key
  'data-type' : 'integer',
  'rules'     : {
    'length'    : {
      'value'     : 13,
      'message'   : 'wrong datetime'
    },
    'min-value' : {
      'value'     : new Date(2020,11,28).getTime(),
      'message'   : 'selected date is out of christmas week of 2020/2021'
    },
    'max-value' : {
      'value'     : new Date(2021,0,3).getTime(),
      'message'   : 'selected date is out of christmas week of 2020/2021'
    },
    'message'   : 'invalid datetime format' // 
  },
  "options" : {
    'all-messages' : false, // set false to collect the first executed message only and ignore the rest
  }
};
let { validator } = require('baghdad');

// 2020-12-24
let datetime1 = 1608757200000; 
vaildator(scheme,datetime1) // output : { status:false, message:'selected date is out of christmas week of 2020/2021' }

// 1971-06-23
let datetime2 = 46546811111; 
vaildator(scheme,datetime2) // output : { status:false, message:'wrong datetime' }

// 2020-12-24
let datetime3 = '46546811111'; 
vaildator(scheme,datetime3) // output : { status:false, message:'invalid datetime format' }



```