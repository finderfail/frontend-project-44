const randomNum = (max) => {
  return Math.floor(Math.random() * max) // NOSONAR
}

export const generateEvenQuestion = () => {
  const number = randomNum(100)
  const isEven = number % 2 === 0
  let correctAnswer

  if (isEven) {
    correctAnswer = 'yes'
  }
  else {
    correctAnswer = 'no'
  }

  return {
    question: number,
    correctAnswer,
  }
}
