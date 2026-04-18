//Arrays

//insertion

let arr = [1, 2, 3, 4, 5];
console.log(arr);

//end-push
arr.push(6);
console.log(arr);

//begning-unshift
arr.unshift(0);
console.log(arr);

//middle-splice
arr.splice(2, 0, 'a', 'b', 'c');
console.log(arr);


//searching

//.indexof()
let arr1 = [1, 2, 3, 4, 5, 6];
let search = arr1.indexOf(2);
console.log(search);

let search1 = arr1.indexOf(7);
console.log(search1);//-1

//.includes()
console.log(arr1.includes(3));//true

console.log(arr1.includes(7));//false

//.find()=> return value of first element that satisfy the condition
let result = arr1.find(x => x > 3);
console.log(result);//4

//.findindex()=>return the index of first element that satisfy the condition
let result1 = arr1.findIndex(x => x > 3);
console.log(result1);//3

//.filter()=>return all the elements that satisfy the condition
let result2 = arr1.filter(x => x > 3);
console.log(result2);//[4,5,6]

//searching in objects
let users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
];

let user = users.find(u => u.name === 'Jane');
console.log(user);//{ name: 'Jane', age:25}

let user1 = users.find(function (user1)//=>predicate function
{
    return user1.name === 'Bob';
});
console.log(user1);//{ name: 'Bob', age:35}

let user2 = users.find(function (user2) {
    return user2.name === 'Abhijat';
});
console.log(user2);//undefined

//callback function
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}
function sayBye() {//passed as argument
    console.log('Bye');
}
greet('John', sayBye);//called inside greet function


//removing elements
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

//end-pop
arr2.pop();
console.log(arr2);

//beginning-shift
arr2.shift();
console.log(arr2);

//middle-splice
arr2.splice(1, 1);
console.log(arr2);

//emptying an array

let arr3 = [1, 2, 3, 4, 5];
console.log(arr3);
arr3 = [];
console.log(arr3);

let arr4 = [1, 2, 3, 4, 5];
console.log(arr4);
arr4.length = 0;
console.log(arr4);

let arr5 = [1, 2, 3, 4, 5];
arr6 = arr5;

arr5.length = 0;
console.log(arr5);
console.log(arr6);


let arr7 = [1, 2, 3, 4, 5];
console.log(arr7);
arr7.splice(0, arr7.length);
console.log(arr7);

//using loop pop()
let arr8 = [1, 2, 3, 4, 5];
console.log(arr8);
while (arr8.length > 0) {
    arr8.pop();
}
console.log(arr8);

//combining & slicing

//concat
let arr9 = [1, 2, 3];
let arr10 = [4, 5, 6];
let arr11 = arr9.concat(arr10);
console.log(arr11);//merge both the array into one single array

//spread operator
let result3 = [...arr9, ...arr10];
console.log(result3);//merge both the array into one single array

//slicing
let arr12 = [1, 2, 3, 4, 5];
console.log(arr12);
let result4 = arr12.slice(1, 3);
console.log(result4);//[2,3]

let result5 = arr12.slice(2);
console.log(result5);//[3,4,5]

let result6 = arr12.slice();
console.log(result6);//[1,2,3,4,5]//generate the copy of original array

let result7 = arr12.slice(-1);
console.log(result7);//[5] count from end

//combining & slicing on object

//combining object

//using spread operator
let person1 = { a: 1, b: 2 };
let person2 = { c: 3, d: 4 };
let result8 = { ...person1, ...person2 };
console.log(result8);//merge both the object into one single object

// if key are same
let obj1 = { a: 1 };
let obj2 = { a: 2 };
let result9 = { ...obj1, ...obj2 };
console.log(result9);//{a:2}//last one wins

//object.assign()
let obj3 = { a: 1, b: 2 };
let obj4 = { c: 3, d: 4 };
let result10 = Object.assign({}, obj3, obj4);
console.log(result10);//{a:1,b:2,c:3,d:4}//same as spread operator

//slicing object

//destructing
let obj = { a: 1, b: 2, c: 3, d: 4 };
let { a, b } = obj;
console.log(a, b);//1 2

//object.keys()+slice()
let obj11 = { a: 1, b: 2, c: 3, d: 4 };
let result11 = Object.keys(obj11).slice(0, 2);
console.log(result11);//[ 'a', 'b' ]

//iterating on array
let arr13 = [1, 2, 3, 4, 5];
console.log(arr13);
for (let i = 0; i < arr13.length; i++) {
    console.log(arr13[i]);
}

//for each loop
arr13.forEach(function (item) {
    console.log(item);
});

//for of loop
for (let item of arr13) {
    console.log(item);
}

//for in loop
for (let index in arr13) {
    console.log(arr13[index]);
}

//arrow function
arr13.forEach(item => console.log(item));

//map()
arr13.map(item => console.log(item));

//filter()
arr13.filter(item => console.log(item));

//reduce()
arr13.reduce((acc, item) => console.log(acc + item));

//joining array
let arr14 = [1, 2, 3, 4, 5];
console.log(arr14);
let result12 = arr14.join(',');
console.log(result12);//1,2,3,4,5

//split array
let str = '1,2,3,4,5';
console.log(str);
let result13 = str.split(',');
console.log(result13);//[ '1', '2', '3', '4', '5' ]

//sorting array
let arr15 = [1, 2, 3, 4, 5];
arr15.sort();
console.log(arr15);//[1,2,3,4,5]

//reverse 
arr15.reverse();
console.log(arr15);//[5,4,3,2,1]

//predicate sort array
let arr16 = [1, 2, 3, 4, 5];
arr16.sort(function (a, b) {
    return a - b;
});
console.log(arr16);//[1,2,3,4,5]

//predicate sort array
let arr17 = [1, 2, 3, 4, 5];
arr17.sort(function (a, b) {
    return b - a;
});
console.log(arr17);//[5,4,3,2,1]

//filter array
let arr18 = [1, 2, 3, 4, 5];
let result14 = arr18.filter(function (item) {
    return item >= 0;
});
console.log(result14);//[1,2,3,4,5]

//map array
let arr19 = [1, 2, 3, 4, 5];
let result15 = arr19.map(function (item) {
    return 'roll no.' + item;
});
console.log(result15);//[2,4,6,8,10]

//mapping with object
let arr21 = [1, 2, 3, 4, 5];
let result17 = arr21.map(function (item) {
    return { rollNo: item };
});
console.log(result17);//[{rollNo:1},{rollNo:2},{rollNo:3},{rollNo:4},{rollNo:5}]

//arrow function
let arr22 = [1, 2, 3, 4, 5];
let result18 = arr22.map(item => ({ rollNo: item }));
console.log(result18);//[{rollNo:1},{rollNo:2},{rollNo:3},{rollNo:4},{rollNo:5}]

// chaining methods
let numbers = [1, 2, 3, 4, 5];
let chainedResult = numbers
    .filter(item => item > 2)
    .map(item => item * 2)
    .reduce((acc, item) => acc + item);
console.log(chainedResult);//24

//reduce array
let arr20 = [1, 2, 3, 4, 5];
let result16 = arr20.reduce(function (acc, item) {
    return acc + item;
});
console.log(result16);//15