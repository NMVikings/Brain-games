import { createGame, getRandomNumber } from '../utils';

const isEven = number => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();

  return {
    question,
    rightAnswer: isEven(question) ? 'yes' : 'no'
  };
};

const gameRules = {
  rules: 'Answer "yes" if number even otherwise answer "no".',
  getQuestionAndAnswer
};

const playBrainEvenGame = createGame(gameRules);

export default playBrainEvenGame;
