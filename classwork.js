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