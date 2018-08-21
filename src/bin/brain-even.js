#! /usr/bin/env node
import askName from '..';
import playGame from '../brain-even';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const name = askName();
console.log(`Hello, ${name}!\n`);

const gameResult = playGame();

console.log(`${gameResult ? 'Congratulations' : 'Let\'s try again'}, ${name}!`);
