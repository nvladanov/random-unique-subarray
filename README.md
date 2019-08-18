# random-unique-subarray
Get a random subarray of the specified length with unique elements
## Install
`npm install random-unique-subarray`
## Usage
```
const uniqueSubarr = require('random-unique-subarray');

const arr = [1, 2, 3, 4, 5]

console.log(uniqueSubarr(arr, 2))
// => [2, 5]

console.log(uniqueSubarr(arr, 4))
// => [5, 2, 4, 3]
```
