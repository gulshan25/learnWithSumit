const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let age = 18;

if (age < 18) {
  console.log("You are young!");
} else if (age == 18) {
  console.log("welcome adult");
} else if (age > 18 && age < 30) {
  console.log("You are matured!");
} else {
  console.log("You are old!");
}

const cars = cars[("A", "B", "C", "D", "E")];

let i = 0;
i = 1;

for (; ; i++) {
  if (i > 10) {
    break;
  } else {
    console.log(i);
  }
}
console.log("I am done");

const person = {
  fname: "john",
  lname: "doe",
  age: 30,
  email: "john@example.com",
  phone: "00020202",
};

for (let x in person) {
  console.log(person[x]);
}
