import playGame from '../game-core';
import getRandomNumber from '../utils';

const rules = 'Balance the given number.';

const balanceNumber = (number) => {
  const stringNumber = String(number);
  const digitsNubmer = stringNumber.length;
  const sumOfDigits = stringNumber.split('').map(Number).reduce((acc, digit) => acc + digit, 0);
  const averageDigit = Math.floor(sumOfDigits / digitsNubmer);
  const remainder = sumOfDigits % digitsNubmer;
  const rightAnswer = new Array(digitsNubmer)
    .fill(averageDigit)
    .map((num, i) => digitsNubmer - i <= remainder ? num + 1 : num)
    .join('');

  return rightAnswer;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(10000);
  const rightAnswer = balanceNumber(question);

  return {
    question,
    rightAnswer
  };
};

const playBrainGcdGame = () => playGame(rules, getQuestionAndAnswer);

export default playBrainGcdGame;
