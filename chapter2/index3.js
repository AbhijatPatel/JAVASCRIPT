//primitive

let a = 10;
let b = a;

a++;
console.log(a);
console.log(b);

//reference

let x = { value: 10 };
let y = x;

x.value++;
console.log(x);
console.log(y);

// pass by value

let v = 10;

function inc(v) {
    a++;
}

inc(v);
console.log(v);

// pass by reference

let obj = { value: 10 };

function inc(obj) {
    obj.value++;
}

inc(obj);
console.log(obj);
