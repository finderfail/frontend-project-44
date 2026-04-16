const randomNum = (max) => {
  return Math.floor(Math.random() * max) + 1 // NOSONAR
}

const randomInt = (max) => {
  return Math.floor(Math.random() * max) // NOSONAR
}

export const generateProgressionQuestion = () => {
  const length = randomInt(6) + 5
  const start = randomNum(20)
  const step = randomNum(10)
  const hiddenIndex = randomInt(length)
  const progression = []

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }

  const correctAnswer = progression[hiddenIndex]
  progression[hiddenIndex] = '..'

  return {
    question: progression.join(' '),
    correctAnswer,
  }
}
