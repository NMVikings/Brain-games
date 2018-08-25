import playGame from '../game-core';
import getRandomNumber from '../utils';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    rightAnswer
  };
};

const description = 'Is this number prime?';

export default () => playGame(description, getQuestionAndAnswer);
