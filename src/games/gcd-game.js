const randomNum = (max) => {
  return Math.floor(Math.random() * max) + 1 // NOSONAR
}

const findGCD = (a, b) => {
  let num1 = a
  let num2 = b

  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }

  return num1
}

export const generateGcdQuestion = () => {
  const num1 = randomNum(100)
  const num2 = randomNum(100)
  const question = `${num1} ${num2}`
  const correctAnswer = findGCD(num1, num2)

  return {
    question,
    correctAnswer,
  }
}
