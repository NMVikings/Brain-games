import playGame from '../game-core';
import getRandomNumber from '../utils';

const sizeOfProgression = 10;

const generateArithmeticProgression = () => {
  const startOfProgression = getRandomNumber(0, 100);
  const stepOfProgression = getRandomNumber(-100, 100);

  const arithmeticProgression = Array(sizeOfProgression)
    .fill(startOfProgression)
    .map((number, i) => number + stepOfProgression * i);

  return arithmeticProgression;
};

const getQuestionAndAnswer = () => {
  const arithmeticProgression = generateArithmeticProgression();

  const positionOfUndefinedNumber = getRandomNumber(0, arithmeticProgression.length);

  const rightAnswer = String(arithmeticProgression[positionOfUndefinedNumber]);

  const question = arithmeticProgression
    .map((number, i) => i === positionOfUndefinedNumber ? '..' : number)
    .join(' ');

  return {
    question,
    rightAnswer
  };
};

const rules = 'What number is missing in this progression?';

export default () => playGame(rules, getQuestionAndAnswer);
