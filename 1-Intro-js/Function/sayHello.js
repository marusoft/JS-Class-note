const sayHello = (name) => {
  if (name) {
    return `Hello ${name}`;
  }
  return "Hello there";
};
let replyOne = sayHello("Kehinde");
console.log(replyOne);
let replyTwo = sayHello();
console.log(replyTwo);
