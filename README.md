# Getting Started

Welcome to the Baghdad validator documentation!

If you have questions about anything related to Baghdad validator, you're always welcome to [ask our community](/ask).

**Baghdad** is a module for Node.js applications to allow easy as cake to data validating. The project got started back in 2019, today it is the solution most Node.js users turn to by default.

**Baghdad** is licensed under **MIT license**. See license details in the [License page](/license).

## Setting

Install Nodemailer from [npm](https://www.npmjs.com/package/baghdad).

```js
npm install baghdad
# or
yarn add baghdad
```

## String data-type

to validating your **string** data, you must be writing a scheme to your data shape as following for example :

```js

const { validator } = require('baghdad');

const scheme = {
  'data-type' : 'string',
  'rules' : {
    'min-length': 1,
    'max-length': 10,
    'message'   : 'invalid',
  }
}
let data = 'hello world !!!';

var { status , messages , error } = validator(scheme,data);
// output : { status:false, messages:'invalid' };

```

## Integer data-type

if you would like to build as scheme for variable as integer, you can take a look for the following scheme with some familar rules:

```js

const scheme = {
  'data-type' : 'integer',
  'rules' : {
    'min-value': 100,
    'max-value': 200,
    'message'   : 'invalid',
  }
}
let Integer =  126;

var { status , messages , error } = validator(scheme,Integer);
// output : { status:false, messages:'invalid' };

```

## Float data-type

In this package, we are spliting the types of number as integer and float, the following sample example explain to you how to make scheme to float variable : 

```js

const scheme = {
  'data-type' : 'float',
  'rules' : {
    'min-value': 3.14,
    'max-value': 21.7,
    'message'   : 'invalid',
  }
}
let Float =  12.6;

var { status , messages , error } = validator(scheme,Float);
// output : { status:false, messages:'invalid' };

```

## Object Data-type
In Javascript langauge when trying to check the typeof a variable like { } or [ ], the return value is object, In this package we are naming this {} as object anf this [] as array,
to validating object variable you have to set dat-type within scheme as 'object' as the following : 

```js

const scheme = {
  'data-type' : 'object',
  'properties' : {
    'fullname'  : {
      'data-type' : 'string',
      'rules'     : {
        'min-length'  : 3,
        'max-length'  : 22,
        'message'     : 'invalid'
      }
    },
    'email'     : {
      'data-type' : 'string',
      'rules'     : {
        'min-length'  : 3,
        'max-length'  : 22,
        'message'     : 'invalid'
      }
    },
    'phone'     : {
      'data-type' : 'string',
      'rules'   : {
        'pattren'     : /^[+0-9]{5,18}$/,
        'message'     : 'invalid'
      }
    }
  },
  'rules' : {
    'message' : 'invalid'
  }
}
let Obj = {
  'fullname'  : 'john doe',
  'email'     : 'johndoe@mail.com',
  'phone'     : '+00 000 000 0000'
};

var { status , messages , error } = validator(scheme,Obj);
// output : { status:true };

```

## Array data-type

The following sample example explain to you how to make scheme For array variable : 

```js

const scheme = {
  'data-type' : 'array',
  'content' : {
    'data-type' : ['integer-1','string-2'],
    'integer-1' : {
      'data-type' : 'integer',
      'rules' : {
        'in-array' : [ 1, 2 ],
        'message' : 'invalid'
      }
    },
    'string-2' : {
      'data-type' : 'string',
      'rules' : {
        'in-array' : [ 'active', 'passive' ],
        'message'  : 'invalid',
      }
    }
  },
  'rules' : {
    'min-length' : 1,
    'message' : 'invalid'
  }
}
let Arr =  ['active'];

var { status , messages , error } = validator(scheme,Arr);
// output : { status:true };

```
