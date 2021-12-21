<!-- "{"next_page":null,"prev_page":{"pathname":"/data-types/array","title":"Array Data Type"},"github_url":"/en/data-types/json.md"}" -->

# JSON

JavaScript Object Notation ([JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)) is a standard text-based format for representing structured data based on JavaScript object syntax.

It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

JSON exists as a string.

You can include the same basic data types inside JSON as you can in a standard JavaScript `object — strings`, `numbers`, `arrays`, `booleans`, and `other object literals`. This allows you to construct a data hierarchy,

For Example :

```js
// declare Javascript object
let JSObject = {
    fullname : "John Doe",
    jobTitle : "software developer",
    age      : 21
}

// a JSON format for JSObject varaible

let JSONString = '{"fullname":"John Doe","jobTitle":"software developer","age":21}';

```
[JSON](https://www.w3schools.com/js/js_json_intro.asp) is text, and we can convert any JavaScript object into JSON,

If you have data stored in a JavaScript object, you can convert the object into JSON, by this way :

```js

var myObj = {name: "John", age: 31, city: "New York"};
var myJSON = JSON.stringify(myObj);
// '{"name":"John","age":31,"city":"New York"}'

```

If you have data in JSON format, you can convert it into a JavaScript object, by this way : 

```js

var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
// {name: "John", age: 31, city: "New York"}

```

## Scheme Structure

<table>
  <thead><tr><th style="width: 150px;">Property</th><th>Remark</th></tr></thead>
  <tbody>
    <tr><td>data-type</td><td>json</td></tr>
    <tr><td>content</td><td>it is BV scheme, used to identify the content of JSON text string</td></tr>
    <tr><td>rules</td><td>
      <a href="#length"  class="a-tag-role-name">length</a>
      <a href="#min-length"  class="a-tag-role-name">min-length</a>
      <a href="#max-length"  class="a-tag-role-name">max-length</a>
      <a href="#message"  class="a-tag-role-name">message</a>
      <a href="#is-undefined"  class="a-tag-role-name">is-undefined</a>
      <a href="#is-null"  class="a-tag-role-name">is-null</a>
    </td></tr>
    <tr><td>options</td><td><a href="#all-messages"  class="a-tag-role-name">all-messages</a></td></tr>
  </tbody>
</table>

## Content

you can use this property to identify the content of json text string, it is optional property,

you can representation it as BV scheme for the content, For a example :

```js

let filterCasesAsJson = '[ "assigned", "active", "cancelled", "live" ]';

let scheme = {
  'data-type' : 'json',
  'content' : {
    'data-type' : 'array',
    'content' : {
      'data-type' : 'string',
      'rules' : { 'in-array' :[] }
    },
    'rules' : {
      'min-length' : 1,
      'max-length' : 2,
    }
  },
  ...
} 

```