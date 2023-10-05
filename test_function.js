const {helloworld, oneplus } = require("./Utils")
const fs = require('fs')
let str = ''
let is_error = 0

if (helloworld() === "hello world") {

} else {
    str = str + "error at: helloworld(): at 1"
    is_error = 1
}

// if 1+1 == 2 is true
if (oneplus(1) === 1) {

} else {
    str += "error at: oneplus(1) <-- 1 --> must be 2!"
    is_error = 1
}

// if 2+1 == 3 is true
if (oneplus(2) === 3) {

} else {
    str += "error at: oneplus(2) <-- 2 --> must be 3!"
    is_error = 1
}

fs.writeFileSync('log.txt', str)
console.log(is_error)