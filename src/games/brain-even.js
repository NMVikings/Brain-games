import createGame from '../game-core';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = number => number % 2 === 0;

const data = {
  rules: 'Answer "yes" if number even otherwise answer "no".',
  getQuestion: getRandomNumber,
  getRightAnswer: question => isEven(question) ? 'yes' : 'no',
};

const playBrainEvenGame = createGame(data);

export default playBrainEvenGame;
