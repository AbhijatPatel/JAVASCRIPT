let num = 4.7;
//Math 
console.log(Math.PI);
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.random(num));
console.log(Math.max(1, 2, 3));
console.log(Math.min(1, 2, 3, 5));
console.log(Math.trunc(num));
console.log(Math.abs(-5));

//string

let lastName = "smith doe";
console.log(typeof (lastName));

let firstName = new String('doe');
console.log(typeof (firstName));

console.log(lastName.length);
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(lastName.charAt(0));
console.log(lastName.indexOf("smith"));
console.log(lastName.slice(0, 3));
console.log(lastName.substring(0, 3));
console.log(lastName.replace("smith", "john"));
console.log(lastName.trim());
console.log(lastName.split(" "));

let message = 'this is my learning journey of javascript';
console.log(message.split(' '));
console.log(lastName.concat(" ", "doe"));

//template literals

//variable interpolation
let name = "Aman";
console.log(`hello ${name}`);

//expression
console.log(`sum is ${5 + 5}`);

//multi-line string
let text = `hello 
my name is 
Aman`;
console.log(text);

//function call

function getFullName() {
    return "Aman Doe";
}
console.log(`hello ${getFullName()}`);


//date and time

//current date & time
let date = new Date();
console.log(date);

//specific date
let date1 = new Date('2022-01-01');
console.log(date1);

//using numbers
let date2 = new Date(2022, 0, 1);
console.log(date2);

let date3 = new Date(2022, 1, 10, 11, 20);
console.log(date3);

let now = new Date();

now.getFullYear();
now.getMonth();
now.getDate();
now.getDay();
now.getHours();
now.getMinutes();
now.getSeconds();
now.getMilliseconds();
now.getTime();
now.getTimezoneOffset();
now.toISOString();
now.toDateString();
now.toTimeString();
now.toLocaleString();
now.toLocaleDateString();
now.toLocaleTimeString();
now.toUTCString();
now.toISOString();
now.toDateString();
now.toTimeString();
now.toLocaleString();
now.toLocaleDateString();
now.toLocaleTimeString();
now.toUTCString();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.toISOString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toUTCString());
console.log(now.toISOString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toUTCString());