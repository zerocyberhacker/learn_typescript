type Greet = (name: string, age: number) => string;

const greetA: Greet = (name, age) => {
  return `Hello ${name}, your age is ${age}.`;
};

console.log(greetA('Kris',12));

interface IGreet {
    (name: string, age: number): string;
}
  
const greet: IGreet = (name, age) => {
    return `Hello ${name}, your age is ${age}.`;
};

const sumNumber = function add(x: number, y: number): number {
    return x + y;
}

console.log(sumNumber(8,6));