#! /usr/bin/env node
import askUserName from '../'

console.log('Welcome to the Brain Games!\n');


const name = askUserName();
console.log(`Hello, ${name}!`);
