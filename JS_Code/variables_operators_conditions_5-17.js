// Types of variables in JS
// var , let , const

var name = "<b>Abdul Majid</b>";
document.write(name);

var age = 20;
document.write("<br>My age is " + age) //+ for concatination

// In let same variable name cannot be declare but in Var we can
//Allow
var DOBMonth = "Jan";
var DOBMonth = "Feb";
DOBMonth = "<br>Mar<br>";
document.write(DOBMonth);
//Not Allow
let DOBDate = 28;
// let DOBDate = 29; // not Allow
DOBDate = 30;
document.write(DOBDate);

// CONSTANT
const PI = 3.14;
//PI = 3.1415; //not allow

// DATATYPES
/*
    Same as PHP only some chages
    var x = ["HTML","CSS","JS"]; ..................Array
    var x = {first:"HTML", sec:"CSS", last:"JS"}; ..................Object
    var x = null; ..................Null
    var x ; ..................Undefined
*/

//find DataType using typeof
document.write("<br>" + typeof DOBDate);

//Operator
// ** exponentioal
//All same as PHP

// all logigal and comparision operation are same as PHP

