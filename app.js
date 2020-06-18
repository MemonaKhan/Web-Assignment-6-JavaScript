// // Assignment # 21-25

// // Task # 1

// var firstName = prompt("Enter your First Name","First Name");
// var lastName = prompt("Enter your Last Name","Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName + "\n" + "Have a Good Day!");


// // Task # 2

// var favMobModel = prompt("Enter your favorite mobile phone model");
// var strLen = favMobModel.length;
// document.write("My favorite phone is: "+ favMobModel);
// document.write("<br>Length of String: "+ strLen);


// // Task # 3

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("String: " + word);
// document.write("<br>Index of 'n': " + index);


// // Task # 4

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.write("String: " + word);
// document.write("<br>Last index of 'l': " + lastIndex);


// // Task # 5

// var word = "Pakistani";
// var char = word.charAt(3);
// document.write("String: " + word);
// document.write("<br>Character at index 3: " + char);


// // Task # 6

// var firstName = prompt("Enter your First Name","First Name");
// var lastName = prompt("Enter your Last Name","Last Name");
// var fullName = firstName.concat(" ",lastName);
// alert("Hello " + fullName + "\n" + "Have a Good Day!");


// // Task # 7

// var word = "Hyderabad";
// var afterReplace = word.replace("Hyder","Islam");
// document.write("City: "+word);
// document.write("<br>After Replacement: "+afterReplace);



// // Task # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var afterReplaceMessage = message.replace(/and/g,"&");
// document.write("Message: "+message);
// document.write("<br>Message after replacing 'and' with '&': "+afterReplaceMessage);


// // Task # 9

// var string = "472";
// var number = parseInt(string);
// document.write("Value: "+string);
// document.write("<br>Type: "+typeof(string));
// document.write("<br>Value: "+number);
// document.write("<br>Type: "+typeof(number));


// // Task # 10

// var input = prompt("Input any string", "String here");
// var upperInput = input.toUpperCase();
// document.write("User input: "+input);
// document.write("<br>Upper case: "+upperInput);


// // Task # 11

// var input = prompt("Input any string", "String here");
// var titleInput = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
// document.write("User input: "+input);
// document.write("<br>Title case: "+titleInput);


// // Task # 12

// var num = 35.36 ;
// // num = Math.trunc(num*100)/100;
// var string = num.toString();
// string = string.replace(".","");
// document.write("Number: "+num);
// document.write("<br>Result: "+string);


// // Task # 13

// var username = prompt("Enter Username please", "Username");
// for(var i=0; i<username.length; i++){
//     if (username.charCodeAt(i)==33 || username.charCodeAt(i)==44 || username.charCodeAt(i)==46 || username.charCodeAt(i)==64){
//         alert("Please enter a valid Username");
//     }
// }


// // Task # 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
// input = input.toLowerCase();
// var i=0;
// for(i=0; i<A.length; i++){
//     if (input === A[i]){
//         document.write(input+" is <strong>Available</strong> at index "+i+" in our bakery");
//         break;
//     }
// }
// if(i>=A.length){
//     document.write("We are Sorry! "+input+" is <strong>Not Available</strong> in our bakery");
// }



// // Task # 15

// var input = prompt("Enter your Password", "Password");
// var lett = false, num = false, startNum = false, len = false;
// for (var i = 0; i < input.length; i++) {
//     if ((input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) || (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122)) {
//         lett = true;
//     }
//     if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
//         num = true;
//     }
//     if (input.charCodeAt(0) >= 48 && input.charCodeAt(0) <= 57) {
//         startNum = true;
//     }
//     if (input.length >= 6) {
//         len = true;
//     }
// }
// document.write("Entered Password " + input);
// if (lett == false) {
//     document.write("<br>Password should contain alphabet");
//     document.write("<br>Please enter a valid password");
// }
// else if (num == false) {
//     document.write("<br>Password should contain number");
//     document.write("<br>Please enter a valid password");
// }
// else if (startNum == true) {
//     document.write("<br>Password can not start with number");
//     document.write("<br>Please enter a valid password");
// }
// else if (len == false) {
//     document.write("<br>Password must atleast 6 characters long");
//     document.write("<br>Please enter a valid password");
// }
// else {
//     document.write("<br>Valid password!");
// }


// // Task # 16

var university = "University of Karachi";
var arr = university.split();
alert(university.split());


// // Task # 17
// // Task # 18
// // Task # 1
