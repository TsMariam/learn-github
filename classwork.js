//1.	Given a number. Print “odd” if the number is odd and “even” if it’s even.

let x = 123;

if (x % 2 == 1) {
    console.log("odd");
}
else {
    console.log("Even");
}

// 2.	Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
let x = 3;
let y = 14;


if (x === y) {
    console.log(1);
} else if (x > y) {
    if (x % y == 0) {
        console.log(1);
    }
    else {
        console.log(0);
    }
} else {
    if (y % x == 0) {
        console.log(1);
    }
    else {
        console.log(0);
    }
}

//3.	Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).

let x = 45;
let y = 90;

console.log(180 - (x + y));

//4.	Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.

let x = 367;
let n, a;

if (x % 10 == 0 || x % 10 == x) {
    console.log(x);
} else {
    n = 0;
    a = x;
    while (x != 0) {
        n++;
        x = (x - x % 10) / 10;
    }
    console.log(a % 10 * Math.pow(10, n - 1) + (a - a % 10) / 10);
}

let c = 250;

if (c % 10 == 0 || c % 10 == c) {
    console.log(c);
} else {
    n = 0;
    a = c;
    while (y != 0) {
        n++;
        d = (d - d % 10) / 10;
    }
    console.log(a % 10 * Math.pow(10, n - 1) + (a - a % 10) / 10);
}

