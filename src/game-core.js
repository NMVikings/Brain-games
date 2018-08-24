import readlineSync from 'readline-sync';

const playGame = (rules, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const questionsNumber = 3;
  for (let i = 0; i < questionsNumber; i += 1) {
    const { question, rightAnswer } = getQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
