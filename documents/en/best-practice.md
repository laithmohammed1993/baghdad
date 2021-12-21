<!-- "{"next_page":{"pathname":"/data-types","title":"Data Types"},"prev_page":{"pathname":"/getting-started/install","title":"Install"},"github_url":"/en/data-types.md","current_page":{"title":"Best Practice"}}" -->

# Best Practice

## Multi Data-types

if you want to set more than one `data-type` for your variable within scheme,

you must set the value of `data-type` property as array of possible data types for your variable, as following :

```js
const scheme = {
  'data-type' : ['integer-1','string-2'],
  ...
}

```

> **_Note:_**   <br/>the format of possible data-type within array must be compined between data-type and the sequence then seperated by dash, for example "object-1" then "array-2" or "array-1" then "array-2"

The following example is the defintion of possible data-type within the scheme :

```js
const StatusScheme = {
  'data-type' : ['integer-1','string-2'],
  'integer-1' : {
    'data-type' : 'integer',
    'rules'     : {
      'min-value' : 1,
      'max-value' : 2
    }
  },
  'string-2'  : {
    'data-type' : 'string',
    'rules'     : {
      'in-array' : ['active','passive']
    }
  }
}
```

The above scheme is validating an Integer data type or a String data type for `status` variable. 

> **_Note:_**<br/>you must set the scheme for each format within the array of data types as key/value pair where `key` is the format of targeted data-type and `value` is the scheme for targeted data-type that included into the array of data types, as shown at previous example.

## Error messages

you have two kind of messages,

the first kind is a global `message` is property defined within `rules` object of scheme and declared if the variable data type is wrong or at least one infraction rule is existed, it is define as following :


```js
let scheme = {
  'data-type' : '<name-of-data-type>',
  'rules'     : {
    ...
    'message' : '<error-message>',
    ...
  }
}
```

the secound kind is the rule's `message` is property defined within the object of rule name and declared if the variable is infracted the rule scope, it is define as following :

```js
let scheme = {
  'data-type' : '<name-of-data-type>',
  'rules'     : {
    '<rule-name>' : {
      'message'  : '<rule-error-message>',
    },
    ...
    'message' : '<error-message>',
    ...
  }
}
```