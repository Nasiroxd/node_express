const fs  = require("fs");
const faker = require("faker");



const peoples = [];
for(let i = 0; i<10; i++){
   const  people = {};

   people.name = faker.name.findName();
   people.email = faker.internet.email();

   people.address = {
    city: faker.address.city(),
   }

   peoples.push(people);

}

console.log(peoples);
    


// let studentsJson = `[
//     {
//         "name": "nasir uddin",
//         "fatherName": "jamal uddin",
//         "motnerName" : "kolpana khatun",
//         "roll": 2231011066
//     },
//     {
//             "name": "sagor uddin",
//             "fatherName": "jamal uddin",
//             "motnerName" : "kolpana khatun",
//             "roll": 2231011066
//         },
//         {
//             "name": "mojamam uddin",
//             "fatherName": "jamal uddin",
//             "motnerName" : "kolpana khatun",
//             "roll": 2231011066
//         }
   
// ]`;

// console.log(studentsJson);

// console.log(studentsJson[1].name);

// let json = JSON.stringify(students);
// console.log(json);

// let std = JSON.parse(studentsJson);
// console.log(std[1].roll);
