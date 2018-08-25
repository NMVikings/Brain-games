import playGame from '../game-core';
import getRandomNumber from '../utils';

const getArithmeticAction = () => ['*', '+', '-'][getRandomNumber(0, 3)];

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
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const arithmeticAction = getArithmeticAction();

  return {
    question: `${firstNumber} ${arithmeticAction} ${secondNumber}`,
    rightAnswer: String(calculateExpression(firstNumber, secondNumber, arithmeticAction))
  };
};

const description = 'What is the result of the expression?';

export default () => playGame(description, getQuestionAndAnswer);
