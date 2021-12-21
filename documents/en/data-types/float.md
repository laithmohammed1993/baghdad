<!-- "{"next_page":{"pathname":"/data-types/boolean","title":"Boolean Data Type"},"prev_page":{"pathname":"/data-types/integer","title":"Integer Data Type"},"github_url":"/en/data-types/float.md"}" -->

# Float

Numbers can be written with or without decimals and you has seperating the number to integer and float

Decimal numbers are sometimes referred to as `floating point numbers` or `floats`.

## Scheme Structure

<table>
  <thead><tr><th style="width: 150px;">Property</th><th>Remark</th></tr></thead>
  <tbody>
    <tr><td>data-type</td><td>float</td></tr>
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
  'data-type' : 'float',
  'rules'     : {
    'min-value'  : {
      'value'   : 2.45,
      'message' : 'the minimum value must 2.45'
    },
    'length'    : {
        'value'   : 4,
        'message' : 'the float length must 4 digits'
    },
    'max-value'  : {
      'value'   : 3.14,
      'message' : 'the maximum value must 3.14'
    },
    'message' : 'invalid float format',
  },
  'options' : {
    'all-messages' : false,
  }
}

let { validator } = require('baghdad');

vaildator(scheme,1.4);
// if you are set all-messages props value as false
// the output is { status:false, messages:'the minimum value must 2.45' }
// otherwise
// the output will be like this
// { status:false, messages:'the minimum value must 2.45, the float length  must 4 digits' }


```
<table>
  <thead><tr><th>Name</th><th>Value</th><th>Default Value</th></tr></thead>
  <tbody><tr><td>all-messages</td><td>true OR false</td><td>true</td></tr></tbody>
</table>

## Rules

when you are using `float` as data-type within the scheme to validating your variable,

you can set the following rules into the object :<br /><br />


<code rule-name id=min-value>min-value</code>

you can use this rule to set the minimum value for float variable :

```js
const scheme = {
  'data-type' : 'float',
  'rules'     : {
    'min-value' : 2.45,
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
      <td>float OR integer</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='max-value'>max-value</code>

you can use this rule to set the maximum value for float variable :

```js
const scheme = {
  'data-type' : 'float',
  'rules'     : {
    ...
    'max-value' : 3.14,
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
      <td>float OR integer</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='value'>value</code>

you can use this rule to set specific value for float variable :

```js
const scheme = {
  'data-type' : 'float',
  'rules'     : {
    ...
    'value' : 3.2,
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
      <td>float OR integer</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='min-length'>min-length</code>

**length** is mean the specifies how many characters to pad

for example : 

```js
let x = 10.5            // length is 4
let y = 3.14            // length is 4
let z = 5000.00010      // length is 9 not 10

```

you can use this rule to set the minimum length for the value of float variable,

common use for inserted value into SQL database

```js
const scheme = {
  'data-type' : 'float',
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

you can use this rule to set the maximum length for the value of float variable,

```js
const scheme = {
  'data-type' : 'float',
  'rules'     : {
    ...
    'max-length' : 7,
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

you can use this rule to set special length for the value of float variable,

```js
const scheme = {
  'data-type' : 'float',
  'rules'     : {
    ...
    'length' : 4,
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

you can use this rule to ensure the float variable is included into a set,

```js
const scheme = {
  'data-type' : 'float',
  'rules'     : {
    ...
    'in-array' : [2.45,3.14,3.2],
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
      <td>array of floats or integers, like `[ 1 , 5.5, 7.3 ]`</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='not-in-array'>not-in-array</code>

you can use this rule to ensure the float variable isn't one of values set,

```js
const scheme = {
  'data-type' : 'float',
  'rules'     : {
    ...
    'not-in-array' : [4.7,5.9,11.1],
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
      <td>array of floats OR integers, like `[1.7,5.3,7.8]`</td>
    </tr>
  </tbody>
</table>

<br /><br />
<code rule-name id='within-range'>within-range</code>

you can use this rule to ensure the float variable is within range of minimum and maximum values,

> **_Warning:_**   <br/>the value of `within-range` rule must array of floats ( OR integers ) and length of array is equel to 2, where first number is minimum range value and second number is maximum range 

```js
const scheme = {
  'data-type' : 'float',
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
      <td>array of two numbers, like `[1.5,5.9]`</td>
    </tr>
  </tbody>
</table>

## Global Property

<code rule-name id='is-undefined'>is-undefined</code>

you can add this rule to get a pass if the float variable is [**undefined**](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

accuratly, create a variable but not assigned any value

```js
let percentage ;

const scheme = {
  'data-type' : 'float',
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

you can add this rule to get a pass if the float variable is [**null**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null).


```js
const scheme = {
  'data-type' : 'float',
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
      <td>is-undefined</td>
      <td>true || false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

<br/><br/>
<code rule-name id='is-NaN'>is-NaN</code>

you can add this rule and set the value `true` to get a pass if the float variable is [**NaN**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).


```js
const scheme = {
  'data-type' : 'float',
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

you can add this rule and set the value `true` to get a pass if the float variable is [**infinity**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity).


```js
const scheme = {
  'data-type' : 'float',
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

you can validate the mili-seconds value with **Baghdad** validator base on the following restrictions :
* it is float
* minimum value 0
* max value is 59.999

```js
// define scheme object
const scheme = {
  // set float as value data-type key
  'data-type' : 'float',
  'rules'     : {
    'min-value' : 0,
    'max-value' : 59.999,
    'message'   : 'invalid counter value format' // 
  }
};
let { validator } = require('baghdad');

let counter1 = 60.5; 
vaildator(scheme,counter1) // output : { status:false, message:'invalid counter value format' }

let counter2 = 36.448; 
vaildator(scheme,counter2) // output : { status:true }

let counter3 = '55.59'; 
vaildator(scheme,counter3) // output : { status:false, message:'invalid counter value format' }



```