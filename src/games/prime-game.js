const randomNum = (max) => {
  return Math.floor(Math.random() * max) + 2 // NOSONAR
}

const isPrime = (number) => {
  if (number < 2) {
    return false
  }
  for (let divisor = 2; divisor * divisor <= number; divisor += 1) {
    if (number % divisor === 0) {
      return false
    }
  }
  return true
}

export const generatePrimeQuestion = () => {
  const number = randomNum(100)
  let correctAnswer

  if (isPrime(number)) {
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
