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

//5.	Given five numbers as input. Calculate and print the average of the numbers.

let a = 45;
let b = -12;
let c = 0;
let d = 3;
let e = -15;

function averageOfNumber(a, b, c, d, e) {
    return ((a + b + c + d + e + f) / 5);
}
console.log(averageOfNumber(45, -12, 0, 3, -15));

//6.	Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1 year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18 years and more ). Also check that age in months is between 1 and 12. 

let x = 8, y = "months";

if (y == "months") {
    console.log("baby");
} else {
    if (x <= 2) {
        console.log("toddler");
    } else if (x <= 12) {
        console.log("child");
    } else if (x <= 17) {
        console.log("teenager");
    } else {
        console.log("adult");
    }
}
