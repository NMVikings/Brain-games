import playGame from '../game-core';
import getRandomNumber from '../utils';

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
    question: `${firstNumber} ${arithmeticAction} ${secondNumber}`,
    rightAnswer: String(calculateExpression(firstNumber, secondNumber, arithmeticAction))
  };
};

const rules = 'What is the result of the expression?';
const playBrainCalcGame = () => playGame(rules, getQuestionAndAnswer);

export default playBrainCalcGame;
