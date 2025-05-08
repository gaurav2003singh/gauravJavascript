const arr = [2,3,4,5,6]
const output2 = arr.map((n)=>n*2)
console.log(output2)

const users = [
  { firstName: "gaurav", age: 26 },
  { firstName: "arav", age: 29 },
  { firstName: "saurav", age: 31 },
  { firstName: "raju", age: 26 },
];

const output = users.filter((x) => x.age < 30);

console.log(output);
