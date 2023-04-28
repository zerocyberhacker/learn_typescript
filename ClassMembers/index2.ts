import User from './index';

const user = new User();
user.setName("Mary Chen");
user.setEmail("mary@gmail.com");
console.log(`Your name is ${user.getName()}.`);
console.log(`Your email is ${user.getEmail()}.`);