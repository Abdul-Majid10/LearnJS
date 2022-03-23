// Q1 Start
// Declare variable and assign value,
var userName;
userName = "Abdul Majid";

// define function that returns text,
userName = "AD Majid";
function getUserName() {
    return userName;
}
document.write("<br>" + getUserName());

// return number of characters in a string,
function getLenght(string) {
    return string.length;
}
document.write("<br>" + getLenght("My Name is Majid"));

// function to return characters of a string inUpper,
function getUpperCaseString(string) {
    return string.toUpperCase();
}
document.write("<br>" + getUpperCaseString("My Name is Majid"));

// function to return characters of a string in lowercase,
function getLowerCaseString(string) {
    return string.toLowerCase();
}
document.write("<br>" + getLowerCaseString("My Name is Majid"));

// function to replace character in string,
function replaceChr(string) {
    return string.replace(/M/g, "N");
}
document.write("<br>" + replaceChr("My Name is Majid"));

// Write a function addWithSurcharge that adds two amounts with surcharge.
// For each amount less than or equal to 10 , the surcharge is 1 .
// For each amount greater than 10 , the surcharge is 2 .
// The call addWithSurcharge(5, 15) should return 23 .
// 5+1 + 15+2 = 23

var addWithSurcharge = function (amount1, amount2) {
    var surcharge = amount1 + amount2;
    var amountArray = [amount1, amount2];

    amountArray.forEach((element) => {
        if (element <= 10 && element >= 0) {
            surcharge = surcharge + 1;
        } else if (element > 10 && element >= 0) {
            surcharge = surcharge + 2;
        }
    });
    return surcharge;
};
document.write("<br>" + addWithSurcharge(5, 15));

// function to get first element of an array,
var info = ["Majid", "25", "Comsats"];
function getFirstElement(array) {
    return array[0];
}
document.write("<br> " + getFirstElement(info));
// q1 End

// Q2 start
// Get current date,
var getCurrentDate = () => {
    var date = new Date();
    return date.toLocaleDateString();
};
document.write("<br>" + getCurrentDate());

// find area of triangle,
var getAreaOfTriangle = (base, height) => {
    return 0.5 * base * height;
};
document.write("<br>" + getAreaOfTriangle(5, 2));

// calculate days until christmas,
var daysInChrism = () => {
    today = new Date();
    var chrism = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        chrism.setFullYear(chrism.getFullYear() + 1);
    }
    var one_day = 1000 * 60 * 60 * 24;
    return Math.ceil((chrism.getTime() - today.getTime()) / one_day);
};
document.write("<br>" + daysInChrism() + " days left until Christmas!");

// convert temperatures,
// // celsius to fahrenheit
var temCToF = (temC) => {
    return (9 / 5) * temC + 32;
};
// // fahrenheit to celsius
var temFToC = (temF) => {
    return (temF - 32) * (5 / 9);
};

// program to get website url,
var getURL = () => {
    return document.URL;
};
document.write("<br>" + getURL());

// calculate sum/product of two integers,
var sum = (a, b) => {
    return a + b;
};
var product = (a, b) => {
    return a * b;
};
document.write("<br>" + sum(5, 6));
document.write("<br>" + product(5, 6));

// find duplicates in array,
var findDuplicte = (arr) => {
    var dup = [];
    for (let i = 0; i < arr.length; i++) {
        findFlag = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                findFlag = true;
            }
        }
        if (dup.indexOf(arr[i]) === -1 && findFlag) {
            dup.push(arr[i]);
        }
    }
    return dup;
};
var arr = [2, 4, 5, 6, 1, 5, 2, 8, 1, 2, 5, "majid", "ok", "majid", 10, 11];
console.table(findDuplicte(arr));
document.write("<br>" + findDuplicte(arr));

// check if matrix is diagonal or not,
// a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero; the term usually refers to square matrices.
var isDiagonal = (matrix) => {
    diagonalFlag = true;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i == j) {
                continue;
            }
            if (matrix[i][j] != 0) {
                diagonalFlag = false;
                break;
            }
        }
    }
    return diagonalFlag;
};

var matrix = [
    [2, 0, 0],
    [0, 1, 0],
    [0, 0, 2],
];

if (isDiagonal(matrix)) {
    document.write("<br>" + "Matrix is Diagonal");
} else {
    document.write("<br>" + "Matrix is not Diagonal");
}

// find longest string in array,
var largestString = (arr) => {
    largerValueIndex = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[largerValueIndex].length < arr[index].length) {
            largerValueIndex = index;
        }
    }
    return arr[largerValueIndex];
};

var arr = ["Majid", "25", "Comsats", "lahore"];
document.write("<br>" + largestString(arr));

// find even digits
var gatEvenNo = (arr) => {
    return arr.filter((number) => {
        return number % 2 === 0;
    });
};
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write("<br>" + gatEvenNo(arr)); // 👉️ [2, 4, 6, 8]
