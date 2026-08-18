// test.js
const {add} = require('./math.js');

console.log("Running test: 2+3 should equal 5")

if(add(2,3)===5){
    console.log("test passed!");
    process.exit(0);
}
else{
    console.error("test failed!");
    process.exit(1);
}