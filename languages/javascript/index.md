# JavaScript

## `call` vs `apply` vs `bind`

```javascript
const obj = { name: 'fish' }
function sum(a, b) {
    return `sum of ${this.name} is ${a + b}.`
}

sum.call(obj, 1, 3)

sum.apply(obj, [1, 3])

const add = sum.bind(obj)
add(1, 3)
```

## Proxy

```javascript
var handler = {
    get: function(obj, prop) {
        return prop in obj ?  obj[prop] : 37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
```

函数                               | 解释
---                                | ---
handler.getPrototypeOf()           | A trap for Object.getPrototypeOf.
handler.setPrototypeOf()           | A trap for Object.setPrototypeOf.
handler.isExtensible()             | A trap for Object.isExtensible.
handler.preventExtensions()        | A trap for Object.preventExtensions.
handler.getOwnPropertyDescriptor() | A trap for Object.getOwnPropertyDescriptor.
handler.defineProperty()           | A trap for Object.defineProperty.
handler.has()                      | A trap for the in operator.
handler.get()                      | A trap for getting property values.
handler.set()                      | A trap for setting property values.
handler.deleteProperty()           | A trap for the delete operator.
handler.ownKeys()                  | A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
handler.apply()                    | A trap for a function call.
handler.construct()                | A trap for the new operator.

# console.log

```javascript
const util = require('util')

console.log(util.inspect(myObject, {showHidden: false, depth: null}))
// alternative shortcut
console.log(util.inspect(myObject, false, null, true)) /* enable colors */
```


