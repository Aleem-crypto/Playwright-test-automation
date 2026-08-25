let x: number = 10;
console.log(typeof (x));
let y: String = 'Testing';

y = 'Software';
console.log(typeof (y));
console.log(y);

let isValid: boolean = true;
let city: undefined = undefined;
let country: null = null;

let z: any = 'Software Playwright testing';
console.log(z);

//Array
let arr1: number[] = [1, 2, 4, 5, 6, 7]
let arr2: Array<string> = ['Samsung', 'Apple', 'Nothing', 'Google']
console.log(arr1[2]);
console.log(arr2[0]);

//function

function addition(a: number, b: number): number {
    return (a + b);
}

console.log(addition(12, 24));

//Objects

type manufacturer = {
    brand: string;
    Model: string;
    IMEI: number;

}

let company: manufacturer = {
    brand: 'Apple',
    Model: 'Iphone',
    IMEI: 325232362362
}

console.log(company.brand);

//Class

class Addition1 {
    c: number;
    d: number;
    constructor(c: number, d: number) {
        this.c = c;
        this.d = d;
    }

    add(): number {
        return this.c + this.d;
    }
}

let sum1 = new Addition1(23, 532);
console.log(sum1.add());