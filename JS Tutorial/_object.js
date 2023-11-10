const person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  function() {
    return this.name + " is " + this.age + " years old.";
  },
};

function myFunction() {
  "use strict";
  return this
}

console.log(myFunction());

console.log(person.function());
