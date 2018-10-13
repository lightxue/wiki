# JavaScript

* console.log输入完整对象

```javascript
const util = require('util')

console.log(util.inspect(myObject, {showHidden: false, depth: null}))
// alternative shortcut
console.log(util.inspect(myObject, false, null, true /* enable colors */))
```
