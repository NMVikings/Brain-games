import createGame from '../game-core';

const getRandomNumber = (interval = 100) => Math.floor(Math.random() * interval);

const getArithmeticAction = () => ['*', '+', '-'][getRandomNumber(3)];

const getExpression = () => `${getRandomNumber()} ${getArithmeticAction()} ${getRandomNumber()}`;

const calculateExpression = (expression) => {
  const [firstPartOfExpression, arithmeticAction, secondPartOfExpression] = expression.split(' ');

  const firstNumber = Number(firstPartOfExpression);
  const secondNumber = Number(secondPartOfExpression);

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

const data = {
  rules: 'What is the result of the expression?',
  getQuestion: getExpression,
  getRightAnswer: expression => String(calculateExpression(expression)),
};

const playBrainEvenGame = createGame(data);

export default playBrainEvenGame;
