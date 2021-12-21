<!-- "{"next_page":{"pathname":"/best-practice","title":"Best Practice"},"prev_page":{"pathname":"/getting-started/introduction","title":"Introduction"},"github_url":"/en/getting-started/install.md"}" -->
# install

Assuming you’ve already installed **npm** or **yarn**.

```js
npm install baghdad
// OR
yarn add baghdad
```

## Node.js

You can use **baghdad** with node to validating the data before sending it to the browser or inserting it into the database.

```
const { validator } = require("baghdad");
let AgeScheme = {
  'data-type' : 'integer',
  'rules'     : {
    'min-value' : {
      'value' : 22,
      'message' : 'employer age must greater than 22'
    },
    'min-value' : {
      'value' : 60,
      'message' : 'employer age must less than 60'
    },
  }
}

let { status, messages } = validator(AgeScheme,35);
// output
// { status:true }

let { status, messages } = validator(AgeScheme,14);
// output
// { status:false, messages:'employer age must greater than 22' }
```

## ES6 Modules

You can importing **validator** function in your application as following :

```js
import { validator } from 'baghdad';

```

## CDN

**baghdad** module is available over a CDN.

```html
<script src="https://unpkg.com/baghdad@0.0.2/index.js"></script>

```