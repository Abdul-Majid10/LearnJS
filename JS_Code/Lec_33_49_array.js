// Arrays
//1.
var arr = [10, 20, 30];
//2.
var arr = new Array();
var arr = new Array(3);
arr[0] = 'majid';

//multidemension array

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]

// delete value from array

delete arr[1]; // undefiend

// thare are many array methodes which are same same or different with php so see picture to see methodes

//forEach loop

arr.forEach(function (value, index) {
    document.write(index + " " + value);
});

//forin loop 
// this loop is used for print objects

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}