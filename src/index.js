import readlineSync from 'readline-sync'

const ROUNDS = 3

export const runGame = (name, gameLogic) => {
  let points = 0

  for (let i = 0; i < ROUNDS; i++) {
    const { question, correctAnswer } = gameLogic()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!')
      points += 1
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      break
    }
  }
  if (points === ROUNDS) {
    console.log(`Congratulations, ${name}!`)
  }
}
