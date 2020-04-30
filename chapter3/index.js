const {odd,even} = require("./var");
const checkNumber = require("./func");

function checkStringOddOrEven(str) {
    // if 문은 1이면 true를 반환 하고 0이면 false를 반환한다 
    if(str.length % 2){
        return odd;
    }else {
        return even;
    }
}
console.log('모듈 module.exports == exports 의 결과 : '+(module.exports === exports));
console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));
