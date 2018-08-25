import playGame from '../game-core';
import getRandomNumber from '../utils';

const calculateGCD = (a, b) => {
  if (a % b === 0) {
    return b;
  }

  if (b > a) {
    return calculateGCD(a, b % a);
  }

  return calculateGCD(b, a % b);
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNubmer = getRandomNumber(0, 100);

  const gcd = calculateGCD(firstNumber, secondNubmer);

  return {
    question: `${firstNumber} ${secondNubmer}`,
    rightAnswer: String(gcd)
  };
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => playGame(description, getQuestionAndAnswer);
