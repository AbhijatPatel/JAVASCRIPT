//object cloning

//iteration

let object1 = { name: "Abhijat", age: 21 };
let object2 = {};

for (let key in object1) {
    object2[key] = object1[key];
}

console.log("Cloned object2:", object2);

//assign

let obj1 = { name: "Abhijat", age: 21 };
let obj2 = Object.assign({}, obj1);
console.log(obj2);

//spread

let obj3 = { name: "Abhijat", age: 21 };
let obj4 = { ...obj3 };
console.log(obj4);