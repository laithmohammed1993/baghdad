<!-- "{"next_page":{"pathname":"/data-types/string","title":"String Data Type"},"prev_page":{"pathname":"/data-types/float","title":"Float Data Type"},"github_url":"/en/data-types/boolean.md"}" -->

# Boolean

A JavaScript [`Boolean`](https://www.w3schools.com/js/js_booleans.asp) represents one of two values: `true` or `false`.

Very often, in programming, you will need a data type that can only have one of two values, like
  * YES / NO
  * ON / OFF
  * TRUE / FALSE

For this, JavaScript has a `Boolean` data type. It can only take the values true or false.

## Scheme Structure

<table>
  <thead><tr><th style="width: 150px;">Property</th><th>Remark</th></tr></thead>
  <tbody>
    <tr><td>data-type</td><td>boolean</td></tr>
    <tr><td>rules</td><td>
      <a href="#true"  class="a-tag-role-name">true</a>
      <a href="#false"  class="a-tag-role-name">false</a>
      <a href="#in-array"  class="a-tag-role-name">in-array</a>
      <a href="#message"  class="a-tag-role-name">message</a>
      <a href="#is-undefined"  class="a-tag-role-name">is-undefined</a>
      <a href="#is-null"  class="a-tag-role-name">is-null</a>
    </td></tr>
    <tr><td>options</td><td><a href="#all-messages"  class="a-tag-role-name">all-messages</a></td></tr>
  </tbody>
</table>

## Rules

<code rule-name id='true'>true</code>

you can set a `true` rule to prevent assigning `true` value to a variable.


```js
const scheme = {
  'data-type' : 'boolean',
  'rules'     : {
    ...
    'true' : {
      'message' : 'true value is not expected now'
    },
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
      <td>true</td>
      <td>object including a message string as {  message } only</td>
    </tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='false'>false</code>

you can set a `false` rule to prevent assigning `false` value to a variable.


```js
const scheme = {
  'data-type' : 'boolean',
  'rules'     : {
    ...
    'false' : {
      'message' : 'false value is not expected now'
    },
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
      <td>false</td>
      <td>object including a message string as {  message } only</td>
    </tr>
  </tbody>
</table>

<br/><br/>

<code rule-name id='is-undefined'>is-undefined</code>

you can add this rule to get a pass if the variable is [**undefined**](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

accuratly, create a variable but assign it no value

```js
const scheme = {
  'data-type' : 'boolean',
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

you can add this rule to get a pass if the boolean variable is [**null**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null).


```js
const scheme = {
  'data-type' : 'boolean',
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

it is declared if the variable data type is not boolean or at least one infraction rule is existed,

```js
const scheme = {
  'data-type' : 'boolean',
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

<br/>

## Options

<br/>
<code rule-name id=all-messages>all-messages</code>

if you want to declare only the message of first Infraction from the included rules within rules property of scheme and ignore remained messages if exists , you must set `all-messages` value as `false` :

```js
const scheme = {
  'data-type' : 'boolean',
  'rules'     : {
    ...
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