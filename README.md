# Purpose

A JavaScript implementation of the Ruby [`#tap`](https://ruby-doc.org/core-3.1.2/Kernel.html#method-i-tap) method which
creates a chain-like functionality.

## Examples

### Synchronous callback

Tap only allows synchronous callbacks. There are ways to
make asynchrony work, but are beyond the scope of this
package.

```js
import rubyTap from "ruby-tap";

// Enhances the base prototype with "tap" function.
rubyTap.install()

console.log(
  const button = document.createElement("button").tap((button) => {
    button.type = "submit"
    button.addEventListener("click", () => console.log("submitting!"))
  })
)
// => <HTMLButtonElement>

"1,2,3,4,5,6,7,8,9,10"                      .tap((x) => console.log(`original: ${x}`))
  .split(`,`).map(Number)                   .tap((x) => console.log(`array:    ${x}`))
  .filter ((x) => x % 2 == 0)               .tap((x) => console.log(`evens:    ${x}`))
  .map ((x) => x*x)                         .tap((x) => console.log(`squares:  ${x}`))

/*
[LOG]: "original: 1,2,3,4,5,6,7,8,9,10"
[LOG]: "array:    [1,2,3,4,5,6,7,8,9,10]"
[LOG]: "evens:    [2,4,6,8,10]"
[LOG]: "squares:  [4,16,36,64,100]"
[LOG]: [4, 16, 36, 64, 100]
*/
```
