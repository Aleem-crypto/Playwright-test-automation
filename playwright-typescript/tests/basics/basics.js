"use strict";
let x = 10;
console.log(typeof (x));
let y = 'Testing';
y = 'Software';
console.log(typeof (y));
console.log(y);
let isValid = true;
let city = undefined;
let country = null;
let z = 'Software Playwright testing';
console.log(z);
//Array
let arr1 = [1, 2, 4, 5, 6, 7];
let arr2 = ['Samsung', 'Apple', 'Nothing', 'Google'];
console.log(arr1[2]);
console.log(arr2[0]);
//function
function addition(a, b) {
    return (a + b);
}
console.log(addition(12, 24));
let company = {
    brand: 'Apple',
    Model: 'Iphone',
    IMEI: 325232362362
};
console.log(company.brand);
//Class
class Addition1 {
    c;
    d;
    constructor(c, d) {
        this.c = c;
        this.d = d;
    }
    add() {
        return this.c + this.d;
    }
}
let sum1 = new Addition1(23, 532);
console.log(sum1.add());
