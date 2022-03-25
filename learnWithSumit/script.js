// for in

const cars = { name: "volvo", weight: 500, color: "white" };

for (let car in cars) {
    console.log(cars[car]);
}

const car = { name: "volvo", weight: 500, color: "white" };

for (let x in car) {
    console.log(car);
}

const fruit = { name: "Apple", color: "Red", shape: "Round" };

for (let x in fruit) {
    console.log(fruit[x]);
}

const fruits = { name: "Apple", color: "Red", shape: "Round" };

for (let fruit in fruits) {
    console.log(fruits[fruit]);
}

const numbers = [45, 4, 9, 16, 25];

for (let number in numbers) {
    console.log(number);
}

const numbers = [45, 4, 9, 16, 25];

for (let number in numbers) {
    console.log(numbers[number]);
}

const fruits = ["Apple", "Banana", "Cherry", "Orange", "Kiwi"];

for (let fruit in fruits) {
    console.log(fruits[fruit]);
}

const students = ["soha", "suad", "nobo"];

for (let stud in students) {
    console.log(students[stud]);
}

const firstName = ["Gulshan"];
for (let fN in firstName) {
    console.log(firstName[fN]);
}

// for of loop

let x = "Gulshan Rahman";

for (let a of x) {
    console.log(a);
}

let x = ["Gulshan Rahman"];

for (let a of x) {
    console.log(a);
}

name = "Gulshan Rahman";
console.log(name);
var name;

const fName = "Gulshan";
const lastName = "Rahman";
const age = 25;

function showBio() {
    // return (
    //     " My name is " +
    //     fName +
    //     " " +
    //     lname +
    //     " " +
    //     " and I am " +
    //     age +
    //     "" +
    //     " years old "
    // );
    return `My name is ${fName.toUpperCase()} ${lastName.toUpperCase()} and i am  ${
    age - 1
  } years old`;
}

console.log(showBio());

const html = `
  <header>
  <div id="logo">
  <h1>Gulshan</h1>
  </div>
  </header>
`;

document.body.innerHTML = html;
document.getElementById("logo").style.textAlign = "center";
document.getElementById("logo").style.color = "white";
document.getElementById("logo").style.fontSize = "50px";

let LANGUAGE = "Java";
let language = "JavaScript";

function getLanguage() {
    if (!language) {
        let language = LANGUAGE;
    }
    return language;
}
console.log(`I love ${getLanguage()}`);