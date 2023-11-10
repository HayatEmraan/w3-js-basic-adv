// Javascript assignment operators

let x = 5;

x += 5;

x -= 5;

x *= 5;

x /= 5;

x %= 5;

x **= 5;

x++;

x--;

// Javascript Arithmetic operator

const y = 5 + 5;

const z = 5 - 5;

const xy = x * y;

const div = x / y;

const mod = x % y;

const exp = x ** y;

// Javascript comparison operators

const abz = 5,
  abc = 5;

const result = abz == abc;

const result2 = abz === abc;

const result3 = abz != abc;

const result4 = abz !== abc;

const result5 = abz > abc;

const result6 = abz >= abc;

const result7 = abz < abc;

const result8 = abz <= abc;

const result9 = abz && abc;

const result10 = abz === "5" ? true : false;

// Javascript string operators

let yt = "hello";

const ye = "A";
const ze = "B";

const result11 = ye > ze;

yt += " youtube";

// Javascript logical operators

const has = true;

const isHas = has && "yes";

const isHas2 = has || "no";

const resultHas = !has && "yes";

console.log(resultHas);

// JavaScript Type Operators

const a = 5;

const b = "5";

if (typeof a === typeof b) {
  console.log("true");
} else {
  console.log("false");
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("John", 30);

if (person instanceof Person) {
  console.log("true");
} else {
  console.log("false");
}
