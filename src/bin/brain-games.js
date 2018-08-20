#! /usr/bin/env node
import askUserName from '../'

console.log('Welcome to the Brain Games!');


const name = askUserName();
console.log(`Hello, ${name}!`);
