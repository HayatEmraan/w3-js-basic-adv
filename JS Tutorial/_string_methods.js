const x = "bangladesh";

// string length

console.log(x.length);
console.log(x.slice(2, 5));
console.log(x.concat("is my country"));
console.log(x.toLowerCase());
console.log(x.toUpperCase());
console.log(x.split(" "));

console.log(x.substring(6, 2));
console.log(x.substr(6, 4));

console.log(x.replace("bangladesh", "বাংলাদেশ"));
console.log(x.replace(/Bangladesh/i, "BANGLADESH"));

let xy =
  "bangladesh is a beautiful country. bangladesh has a lot of beautiful places.";
xy = xy.replaceAll("bangladesh", "Bangladesh");

console.log(xy);

const trm = "  bangladesh  ";
console.log(trm.length);
console.log(trm.trim().length);
console.log(trm.trimStart().length);
console.log(trm.trimEnd().length);
