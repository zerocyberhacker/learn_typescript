/*      
    Basic Types:
        1.  boolean
        2.  number
        3.  string
        4.  array
        5.  typle
        6.  enum
        7.  unknow
        8.  any
        9.  null
        10. never
        11. object
        12. undefined
    ref: https://www.staging-typescript.org/docs/handbook/basic-types.html   
*/ 

//  boolean type: "true" or "false"
let isTypescriptHard: boolean = true;

console.log('1. Boolean:',isTypescriptHard);
console.log()

//  number type
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log('2. Number:');
console.log('   Decimal number is :',decimal);
console.log('   Hex number is :',hex);
console.log('   Binary number is :',binary);
console.log('   Octal number is :',octal);
console.log()

// string type
let username: string;
let age: number;
let isBoy: boolean;

username = 'Kris John';
age = 26;
isBoy = true;

console.log('3. String:');
console.log(`   My name is ${username} , and I'm ${age} years old!`);
console.log("   I will be "+(age + 1)+" years old next month.");
console.log();

// array type: two way
console.log('4. Array:');
let arrayListA: string[] = ['A', 'B', 'C'];
let arrayListA2: (string|number)[] = ['A', 'B', 'C' , 4 , 5 , 6];
let arrayListB: Array<number> = [1, 2, 3];
let arrayListC: Array<boolean> = [true, false, false];
let arrayListD: Array<any> = [true, 'E', 999];
let arrayListE = [1, 3, 'Apple', 'Orange', 'Banana', true, false];

console.log('   List A is',arrayListA);
console.log('   List A2 is',arrayListA2);
console.log('   List B is',arrayListB);
console.log('   List C is',arrayListC);
console.log('   List D is',arrayListD);
console.log('   List E is',arrayListE);
console.log('   The index 2 from list A is',arrayListA[1]);
console.log('   Add one element to list D ',arrayListD.push(false),',list D is',arrayListD,'now!');
console.log();

// Tuple: cannot change the length
console.log('5. Tuple:');
let tupleA: [number, string, boolean, number] = [3, 'foo', true, 10];
tupleA = [4, 'bar', false, 30];

type PersonInfo = [name: string, country: string, age: number];
const aaron: PersonInfo = ['Aaron', 'Taiwan', 32];
console.log('   Tuple A is',tupleA);
console.log('   aaron A is',aaron);
console.log();

// Not much else we can assign to these variables!
console.log('6. Null:');
let u: undefined = undefined;
console.log(`   u is ${u}`);
console.log();

// Not much else we can assign to these variables!
console.log('7. Undefined:');
let n: null = null;
console.log(`   n is ${n}`);
console.log();

// Not much else we can assign to these variables!
console.log('8. Any:');
let foo; // any
type A = 'string' | 'number' | any; // type A = any
console.log("   If the type is not been decare that mean the type is any type.");
console.log();

console.log('9. Never:');
type B = string | number | never; // type B = "string" | "number"
let BigName : B ;
BigName = 'Kris';
BigName = 26;
console.log(BigName);
console.log();

// let isAny: any;
// let isUnknown: unknown;

// isAny.hello(); // 可以對 any 型別進行任何操作
// isUnknown.hello(); // 不可以對 unknown 型別進行任何操作

console.log('10. Object:');

const aaronChen = { firstName: 'Aaron', phone: 31 };
const { firstName, phone }: { firstName: string; phone: number } = aaronChen;
  
type People = {
    name: string;
    phone_number: number;
    email: string;
  };
  
  
let userA : People = {
    name: 'Chris Wong',
    phone_number: 938423094,
    email: "chrisWong@gmail.com",
};

let userB : People = {
    name: 'Kris Ho',
    phone_number: 934585739,
    email: "krisHo@gmail.com",
};

console.log(userA)
console.log(userB)
console.log(aaronChen,firstName,phone)
  
// Use arrow function
const getNameA = (person: { firstName: string; lastName: string }) => {
    const { firstName, lastName } = person;
    return `${firstName} ${lastName}`;
};
  
// Or normal named function
function getNameB(person: { firstName: string; lastName: string }) {
    const { firstName, lastName } = person;
    return `${firstName} ${lastName}`;
}
  
const newuser = getNameA({
    firstName: 'Aaron',
    lastName: 'Chen',
});

console.log(newuser)

const data = JSON.stringify({
    foo: 'foo',
    bar: 'bar',
});
console.log(data)
  
// 使用 <> 進行 type assertions
let parsedJSON1 = <{ foo: string; bar: string }>JSON.parse(data);
console.log(parsedJSON1)
// 使用 as 進行 type assertions
let parsedJSON2 = JSON.parse(data) as { foo: string; bar: string };