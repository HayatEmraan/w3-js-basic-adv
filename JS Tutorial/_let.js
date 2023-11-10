var zy = "something";

{
  var zy = "something else";
  console.log(zy);
}

function something() {
  var zy = "something else, again";
  console.log(zy);
}

console.log(zy);
