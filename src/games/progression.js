import playGame from '../game-core';
import getRandomNumber from '../utils';


const generateArithmeticProgression = (start, step, length) => Array(length)
  .fill(start)
  .map((number, i) => number + step * i);

const getQuestionAndAnswer = () => {
  const startOfProgression = getRandomNumber(0, 100);
  const stepOfProgression = getRandomNumber(-100, 100);
  const sizeOfProgression = 10;

  const arithmeticProgression = generateArithmeticProgression(
    startOfProgression,
    stepOfProgression,
    sizeOfProgression
  );

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

const description = 'What number is missing in this progression?';

export default () => playGame(description, getQuestionAndAnswer);
