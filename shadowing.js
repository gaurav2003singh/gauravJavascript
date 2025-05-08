let a = 10;
{
  let a = 20;
  {
    let a = 30; // This 'a' shadows the outer 'a'
    console.log(a); // 30 (innermost scope)
  }
}
