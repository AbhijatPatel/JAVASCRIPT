//iteration through objects

//(i) for-in loop

//object

let person = {
    name: 'Pratyush',
    age: 21,
    city: 'Delhi'
};

for (let key in person) {
    console.log(key);
    //keys are reflected through key variables
    console.log(person[key]);
    //values are reflected through rectangle[key]
}

//array(but not recommended) because ot gives index not values

let arr = [1, 2, 3, 4, 5];

for (let value in arr) {
    console.log(value);
}
//(ii) for-of loop
//hack to iterateon object using for-of loop

for (let key of Object.keys(person)) {
    console.log(key);
}

for (let value of Object.values(person)) {
    console.log(value);
}

for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}

//array

let arr1 = [1, 2, 3, 4, 5];

for (let value of arr1) {
    console.log(value);
}

//string

let str = "Pratyush";

for (let value of str) {
    console.log(value);
}


//(iii) for-each loop

//array

let arr2 = [1, 2, 3, 4, 5];

arr2.forEach(function (value) {
    console.log(value);
});

//or
arr2.forEach(value => console.log(value));
