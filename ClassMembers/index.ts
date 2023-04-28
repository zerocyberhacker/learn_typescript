/*
    Class Members
*/

class UserA {
    // attribute & constructor
    name : string;
    phoneNumber : number;
    email: string;
    aboutMe!: string;

    constructor(name: string, phoneNumber: number, email: string , aboutMe: string){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.aboutMe = aboutMe;
    }
}

const user = new UserA('Chris Wong', 12345678 , 'kris@yahoo.hk' , '');


class Contact {
    private passwordSeed: number = 1;
  
    // 對於會在 constructor 中出現的 fields，可以不用在上方先定義其 fields
    constructor(
      protected idNumber: string = 'A123456789',
      public name: string = 'pjchender',
      public email: string = 'no email',
    ) {
      // TS 會自己執行 this.xxx = xxx 的程式，因此我們不需要在做些什麼
    }
}
  
const c = new Contact();


interface HasEmail {
    email: string;
    name: string;
}
  
export default class User implements HasEmail {
    
    email!: string;
    name!: string;
    constructor() {};
    public setEmail =  (email: string): void => {
        this.email = email;
    };
    public setName =  (name: string): void => {
        this.name = name;
    };

    public getEmail = () => {
        return this.email;
    };   
    public getName = () => {
        return this.name;
    };  

    public running = () => {
        return  `I'm ${this.name},and I'm running!!!`;
    };

    public run(): string{
        return "I'm running!"
    }
    

}

const contactA = new User();
const contactB = new User();
const contactC = new User();
const contactD = new User();
contactA.setEmail('cybersecurity@gmail.com');
contactA.setName('Kris');
contactB.setEmail('hackerOnecyber@gmail.com');
contactC.setEmail('programmerZero@gmail.com');
contactD.setEmail('bugWrongDe@gmail.com');
contactD.setName('Wrong HO')

class Person {
    private name!: string;
    private age!: number;
    private id!: number;

    public setName(name: string){
        this.name = name;
    }

    public setAge(age: number){
        this.age = age;
    }

    public setId(id: number){
        this.id = id;
    }

    public getName():string{
        return this.name;
    }
    public getAge():number{
        return this.age;
    }

    public getId():number{
        return this.id;
    }

    public toString():string{
        return `ID:${this.id}|Name:${this.name}|Age:${this.age}`;
    }

}
// type = interface
interface Table {
   brand: string;
   color: string;
   sizes: Array<object>;
   get_price(): number;
}
// creating the table_obj of type Table
let table_obj: Table = {
   brand: "woodBrand",
   color: " grey",
   sizes: [
        {id:12 , name:"Tom"},
        {id:12 , name:"Tom"},
        {id:12 , name:"Tom"},
        {id:12 , name:"Tom"},
    ],
   get_price(): number {
      return 10;
   },
};
table_obj.sizes.push({id:12 , name:"Tom"});
console.log(table_obj)
