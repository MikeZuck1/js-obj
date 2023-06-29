// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const theMethodAndProperties = () => { // my function with an object 
  let thePerson = { // object with properties 
      firstName : 'John', // peer key-value 
      lastName :  'Doe', // peer key-value 
      birth : null, // peer key-value 
      age : 34, // peer key-value 
      eyeColor: 'blue', // peer key-value 
      country : 'UK', // peer key-value 
      loc : 'Lon', // peer key-value 
      sayHi () { // function 
          return `My name is ${this.firstName} and I live in ${this.country}.`; 
          // return 'My name is John and I live in UK' 
      } 
  }; 

  let theNextPerson = {
      firstName : 'Jane', // peer key-value 
      lastName : 'Doe', // peer key-value 
      birth : null, // peer key-value 
      age : 32, // peer key-value 
      eyeColor : 'green', // peer key-value
      country :'UK', // peer key-value 
      loc : 'Lon', // peer key-value
      sayHiToo () { // function 
          return `Hello i'm ${this.firstName} ${this.lastName} and I live in ${this.country} too.`;
          // return 'Hello i'm Jane Doe and I live in UK too.'
      }
  }; 
  // print the first object 
  console.log(thePerson.sayHi()); // appel à la fonction 
  console.log(delete thePerson.eyeColor); // removes 'eyeColor: 'blue',' 
  console.log(thePerson); // print the object 

  // print the second object
  console.log(delete theNextPerson['birth']); // remove property from object
  console.log(theNextPerson.sayHiToo()); // call the function and return 'Hello i'm Jane Doe and I live in UK too.'
  console.log(theNextPerson);// prints out the new object without a birth date 
  console.log(delete theNextPerson['age']); // remove property from object
}; 

theMethodAndProperties(); // call the function 
