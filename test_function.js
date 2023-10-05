const {helloworld, oneplus } = require("./Utils")
const fs = require('fs')
let str = ''

if (helloworld() === "hello world") {

} else {
    str = str + "error at: helloworld(): at 1"
    console.log(1)
}

// if 1+1 == 2 is true
if (oneplus(1) === 1) {

} else {
    str += "error at: oneplus(1) <-- 1 --> must be 2!"
    console.log(1)
}

// if 2+1 == 3 is true
if (oneplus(2) === 3) {

} else {
    str += "error at: oneplus(2) <-- 2 --> must be 3!"
    console.log(1)
    return
}

fs.writeFileSync('log.txt', str)