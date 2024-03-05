"use strict";
// Question-10:
Object.defineProperty(exports, "__esModule", { value: true });
// this program print  person_name and simple console message..
// Tue Mar 05 2024 09:45AM
let person_name = "areej zaheer";
let date = new Date();
console.log(`This code return the date,time and comments paractics: ${date}`);
console.log(`“Hello ${person_name} , would you like to learn some TypeScript today?”`);
// Question-11:
// this array code just for paractisc... 
// let name : string[] = ["shahzaib", "Aqib" , "Areej"];
// name.forEach(u_name => console.log(`${u_name} Wellcome to dinner `));
let friends = ["shahzaib", "Aqib", "Areej"];
for (let i = 0; i < friends.length; i++) {
    console.log(i);
}
// Question-12:
let friendNames = ["shahzaib", "Aqib", "Areej"];
for (let friendName of friendNames) {
    console.log(`“Hello ${friendName} , would you like to learn some TypeScript today?”`);
}
