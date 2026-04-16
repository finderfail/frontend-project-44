const randomNum = (max) => {
  return Math.floor(Math.random() * max) // NOSONAR
}

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  return operators[Math.floor(Math.random() * operators.length)] // NOSONAR
}

export const generateCalcQuestion = () => {
  const num1 = randomNum(100)
  const num2 = randomNum(100)
  const operator = getRandomOperator()
  const question = `${num1} ${operator} ${num2}`
  let correctAnswer

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    case '*':
      correctAnswer = num1 * num2
      break
  }

  return {
    question,
    correctAnswer,
  }
}
