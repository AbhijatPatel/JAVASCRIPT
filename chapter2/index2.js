//oject creation-How?

//factory function
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log("Hello");
        }
    };
}

let p1 = createPerson("Pratyush", 10);
let p2 = createPerson("Abhijat", 21);
p1.greet();
p2.greet();
console.log(p1);
console.log(p2);

//constructor function
function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function () {
        console.log('drawing');
    }
}

let rectangleObject = new Rectangle(4, 6);
rectangleObject.draw();  // This would print "drawing"
console.log(rectangleObject.length, rectangleObject.breadth);  // This would print "4 6"

rectangleObject.color = 'yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

let Rectangle1 = new Function('len', 'bre',
    `this.length=len;
this.breadth=bre;
this.draw=function(){
    console.log('drawing');
}`)

let rectangleObject1 = new Rectangle1(4, 6);
rectangleObject1.draw();
console.log(rectangleObject1.length, rectangleObject1.breadth);

//object creation using Rectangle1
let rect = new Rectangle1(10, 20);
console.log(rect);