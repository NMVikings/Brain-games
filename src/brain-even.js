import readlineSync from 'readline-sync';

const possibleAnswers = { no: false, yes: true };

const getRandomNumber = () => Math.floor(Math.random() * 100);

const parseAnswer = (userAnswer) => {
  if (!Object.keys(possibleAnswers).includes(userAnswer)) {
    return null;
  }

  return possibleAnswers[userAnswer];
};

const playGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    const rightAnswer = number % 2 === 0;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = parseAnswer(userAnswer);

    if (answer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer ? 'yes' : 'no'}.`);
      return false;
    }

    console.log('Correct!');
  }

  return true;
};

export default playGame;
