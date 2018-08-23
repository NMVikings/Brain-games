import { createGame, getRandomNumber } from '../utils';

const getArithmeticAction = () => ['*', '+', '-'][getRandomNumber(3)];

const calculateExpression = (firstNumber, secondNumber, arithmeticAction) => {
  switch (arithmeticAction) {
    case '*':
      return firstNumber * secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
    case '+':
      return firstNumber + secondNumber;
  }
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const arithmeticAction = getArithmeticAction();

  return {
    answer: `${firstNumber()} ${arithmeticAction()} ${secondNumber()}`,
    rightAnswer: calculateExpression(firstNumber, secondNumber, arithmeticAction)
  };
};

const gameRules = {
  rules: 'What is the result of the expression?',
  getQuestionAndAnswer
};

const playBrainEvenGame = createGame(gameRules);

export default playBrainEvenGame;
