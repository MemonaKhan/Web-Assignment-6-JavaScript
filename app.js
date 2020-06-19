// // Assignment # 21-25

// // Task # 1

// var firstName = prompt("Enter your First Name", "First Name");
// var lastName = prompt("Enter your Last Name", "Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName + "\n" + "Have a Good Day!");


// // Task # 2

// var favMobModel = prompt("Enter your favorite mobile phone model");
// var strLen = favMobModel.length;
// document.write("My favorite phone is: " + favMobModel);
// document.write("<br>Length of String: " + strLen);


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

// var firstName = prompt("Enter your First Name", "First Name");
// var lastName = prompt("Enter your Last Name", "Last Name");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello " + fullName + "\n" + "Have a Good Day!");


// // Task # 7

// var word = "Hyderabad";
// var afterReplace = word.replace("Hyder", "Islam");
// document.write("City: " + word);
// document.write("<br>After Replacement: " + afterReplace);



// // Task # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var afterReplaceMessage = message.replace(/and/g, "&");
// document.write("Message: " + message);
// document.write("<br>Message after replacing 'and' with '&': " + afterReplaceMessage);


// // Task # 9

// var string = "472";
// var number = parseInt(string);
// document.write("Value: " + string);
// document.write("<br>Type: " + typeof (string));
// document.write("<br>Value: " + number);
// document.write("<br>Type: " + typeof (number));


// // Task # 10

// var input = prompt("Input any string", "String here");
// var upperInput = input.toUpperCase();
// document.write("User input: " + input);
// document.write("<br>Upper case: " + upperInput);


// // Task # 11

// var input = prompt("Input any string", "String here");
// var titleInput = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
// document.write("User input: " + input);
// document.write("<br>Title case: " + titleInput);


// // Task # 12

// var num = 35.36;
// // num = Math.trunc(num*100)/100;
// var string = num.toString();
// string = string.replace(".", "");
// document.write("Number: " + num);
// document.write("<br>Result: " + string);


// // Task # 13

// var username = prompt("Enter Username please", "Username");
// for (var i = 0; i < username.length; i++) {
//     if (username.charCodeAt(i) == 33 || username.charCodeAt(i) == 44 || username.charCodeAt(i) == 46 || username.charCodeAt(i) == 64) {
//         alert("Please enter a valid Username");
//     }
// }


// // Task # 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
// input = input.toLowerCase();
// var i = 0;
// for (i = 0; i < A.length; i++) {
//     if (input === A[i]) {
//         document.write(input + " is <strong>Available</strong> at index " + i + " in our bakery");
//         break;
//     }
// }
// if (i >= A.length) {
//     document.write("We are Sorry! " + input + " is <strong>Not Available</strong> in our bakery");
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

// var university = "University of Karachi";
// var arr = university.split("");
// document.write("Elements of Array are");
// for (var i = 0; i < arr.length; i++) {
//     document.write("<br>" + arr[i]);
// }


// // Task # 17

// var input = prompt("Enter any string");
// document.write("User input: " + input);
// document.write("<br>Last character of input: " + input.charAt(input.length - 1));


// // Task # 18

// var string = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The") {
//         count++;
//     }
// }
// document.write("Text: " + string);
// document.write("<br>There are " + count + " occurence(s) of the word 'the'");



// // Assignment # 26-30

// // Task # 1

// var num = prompt("Enter any positive integer", "Positive Number");
// document.write("Number: " + num);
// document.write("<br>Round off value: " + Math.round(num));
// document.write("<br>Floor Value: " + Math.floor(num));
// document.write("<br>Ceil Value: " + Math.ceil(num));


// // Task # 2

// var num = prompt("Enter any negative floating point ", "Negative Number");
// document.write("Number: " + num);
// document.write("<br>Round off value: " + Math.round(num));
// document.write("<br>Floor Value: " + Math.floor(num));
// document.write("<br>Ceil Value: " + Math.ceil(num));


// // Task # 3

// var num = prompt("Enter any number ", "Number");
// document.write("The absolute value of " + num + " is " + Math.abs(num));


// // Task # 4

// var dice = (Math.random() * 6) + 1;
// document.write("Random Dice Value: " + Math.floor(dice));


// // Task # 5

// var toss = Math.floor((Math.random() * 2) + 1);
// document.write(toss);
// if (toss === 2) {
//     document.write("<br>Random Coin Value: Heads");
// }
// else {
//     document.write("<br>Random Coin Value: Tails");
// }


// // Task # 6

// var num = Math.floor((Math.random() * 100) + 1);
// document.write("Random number between 1 and 100: " + num);


// // Task # 7

// var weight = prompt("Enter you weight in Kilograms please", "Weight in kilograms");
// document.write("The weight of user is " + parseFloat(weight) + " Kilograms");


// // Task # 8

// var secNum = Math.floor((Math.random() * 10) + 1);
// var input = +prompt("Enter any number between 1 and 10");
// if (input === secNum) {
//     alert("Congratulate!");
// }
// else {
//     alert("Try Again!");
// }



// // Assignment # 31-34


// // Task # 1

// var date = new Date();
// document.write(date);


// // Task # 2

// var date = new Date();
// var index = date.getMonth()
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// alert("Current Month: " + month[index]);


// // Task # 3

// var date = new Date();
// var day = date.getDay();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// alert("Today is " + days[day]);


// // Task # 4

// var date = new Date;
// if (date.getDay() === 6 || date.getDay() === 0) {
//     alert("It’s Fun day");
// }


// // Task # 5

// var fullDate = new Date();
// var date = fullDate.getDate();
// if (date < 16) {
//     alert("First fifteen days of the month");
// }
// else {
//     alert("Last days of the month");
// }


// // Task # 6

// var date = new Date();
// var ms = date.getTime();
// var m = ms / (1000 * 60);
// document.write("Current Date: " + date);
// document.write("<br>Elapsed milliseconds since January 1, 1970: " + ms);
// document.write("<br>Elapsed minutes since January 1, 1970: " + m);


// // Task # 7

// var date = new Date();
// var hrs = date.getHours();
// if (hrs < 12) {
//     alert("Its AM");
// }
// else {
//     alert("Its PM");
// }


// // Task # 8

// var laterDate = new Date(2020, 11, 31);
// document.write("Later Date: " + laterDate);


// // Task # 9

// var ramzanDate = new Date(2020, 3, 25);
// var currDate = new Date();
// var ramzanTime = ramzanDate.getTime();
// var currTime = currDate.getTime();
// var diff = (currTime - ramzanTime);
// var days = Math.floor(diff / (1000 * 60 * 60 * 24));
// alert(days + " days have passed since 1st Ramadan 2020");


// // Task # 10

// var refDate = new Date();
// var startDate = new Date(2015, 0, 1, 0, 0, 0);
// var refTime = refDate.getTime();
// var startTime = startDate.getTime();
// var diff = (refTime - startTime);
// var sec = Math.floor(diff / (1000));
// document.write("On reference Date " + refDate);
// document.write("<br>" + sec + " seconds had passed since beginning of 2015");


// // Task # 11

// var currDate = new Date();
// document.write("Current date: " + currDate);
// currDate.setHours(currDate.getHours()-1);
// document.write("<br>1 hour ago, it was " + currDate);


// // Task # 12

// var currDate = new Date();
// alert("Current date: " + currDate);
// currDate.setFullYear(currDate.getFullYear()-100);
// alert("100 years back, it was " + currDate);


// // Task # 13

// var age = +prompt("Enter your age please");
// var birthYear = (new Date().getFullYear())-age;
// document.write("Your Age is: "+age);
// document.write("<br>Your Birth Year is: "+birthYear);


// // Task # 14

// var custName = "ABC Customer";
// var currMonth = "February";
// var units = 410;
// var chargerPerUnit = 16;
// var netAmntPayable = units*chargerPerUnit;
// var latePaySurcharge = 350;
// var grossAmntPayable = netAmntPayable + latePaySurcharge;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("<br>Customer Name: "+custName+"</strong>");
// document.write("<br>Month: <strong>"+currMonth+"</strong>");
// document.write("<br>Number of units : <strong>"+units+"</strong>");
// document.write("<br>Charges per unit: <strong>"+chargerPerUnit+"</strong>");
// document.write("<br><br>Net Amount Payable (within Due Date) : <strong>"+netAmntPayable+"</strong>");
// document.write("<br>Late Payment Surcharge : <strong>"+latePaySurcharge+"</strong>");
// document.write("<br>Gross Amount Payable (after Due Date): <strong>"+grossAmntPayable+"</strong>");




// // Assignment # 35-38


// // Task # 1




// // Task # 2
// // Task # 3
// // Task # 4
// // Task # 5
// // Task # 6
// // Task # 7
// // Task # 8
// // Task # 9
// // Task # 10
// // Task # 11
// // Task # 12
// // Task # 13
// // Task # 14

