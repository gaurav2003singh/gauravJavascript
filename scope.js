let a = 10; // Global scope

function test() {
  let b = 20; // Function scope
  if (true) {
    let c = 30; // Block scope
    console.log(a, b, c); // ✅ All accessible here
  }
  // console.log(c); ❌ Error (c is block-scoped)
}
test();
// console.log(b); ❌ Error (b is function-scoped)
// console.log(b); // ✅ Accessible (a is global)