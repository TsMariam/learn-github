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

//7.	Given three numbers. Sort them by the ascending order.

let x = 45, y = 26, z = 78;

if (x == Math.min(x, y, z) && y == Math.max(x, y, z)) {
    console.log(x, z, y);
} else if (x == Math.max(x, y, z) && y == Math.min(x, y, z)) {
    console.log(y, z, x);
} else if (x == Math.min(x, y, z) && z == Math.max(x, y, z)) {
    console.log(x, y, z);
} else if (x == Math.max(x, y, z) && z == Math.min(x, y, z)) {
    console.log(z, y, x);
} else if (y == Math.min(x, y, z) && z == Math.max(x, y, z)) {
    console.log(y, x, z);
} else {
    console.log(z, x, y);
}

//8.	Find the sign of product of two numbers without multiplication operator. Display the specified sign.

let x = -14, y = 0;

if (x == 0 || y == 0) {
    console.log("unsigned");
} else if (x / y < 0) {
    console.log("-");
} else {
    console.log("+");
}

//9. Input three numbers a, b, c respectively, where a is a non zero number and write a program to solve quadratic equations: 〖ax〗^2+ bx+c=0. (Hint: use Math.pow or Math.sqrt).

let a = 1, b = 2, c = 1;
let x1, x2, d;

if (a == 0) {
    console.log("Enter valid constans");
} else {

    d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        console.log("Solution does not exists");
    } else {

        x1 = (-b - Math.sqrt(d)) / (2 * a);
        x2 = (-b + Math.sqrt(d)) / (2 * a);

        if (x1 == x2) {
            console.log("Solution is " + x1);
        } else {
            console.log("Solutions are " + x1 + " and " + x2);
        }
    }
}

//10.	Insert a digit and a number. Check whether the digits contains in the number or not.
let x = 2463;
let y = 5;
let answer = "NO"


while (x != 0) {
    if (x % 10 == y) {
        console.log("YES");
        answer = "YES";
        break;
    }
    x = (x - x % 10) / 10;
}


if (answer == "NO") {
    console.log("NO");
}

// 11.(***) Enter a number.Find the difference between its biggest and smallest digits.

let x = 4593653;
let max, min, temp;

if (x < 10) {
    console.log(0);
} else {
    max = x % 10;
    min = x % 10;
    x = (x - x % 10) / 10;
    console.log(x)

    while (x != 0) {
        temp = x % 10;
        if (temp > max) {
            max = temp;
        }
        if (temp < min) {
            min = temp;
        }
        x = (x - x % 10) / 10;
    }
    console.log(max - min);
}


