import { createGame, getRandomNumber } from '../utils';

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
  const firstNumber = getRandomNumber();
  const secondNubmer = getRandomNumber();

  const gcd = calculateGCD(firstNumber, secondNubmer);

  return {
    question: `${firstNumber} ${secondNubmer}`,
    rightAnswer: String(gcd)
  };
};

const gameRules = {
  rules: 'Find the greatest common divisor of given numbers.',
  getQuestionAndAnswer,
};

const playBrainEvenGame = createGame(gameRules);

export default playBrainEvenGame;
