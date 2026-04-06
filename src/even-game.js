import readlineSync from 'readline-sync'
let name1 = ''
let points = 0
export const setName = (name) => {
  name1 += name
}

const randomNum = (max) => {
  return 'Question: ' + Math.floor(Math.random() * max)
}
export const gameRunner = () => {
  setNumber()

  for (let i = 0; i < points; i++) {
    if (points <= 2) {
      setNumber()
    }
    else if (points == 3) {
      console.log(`Congratulations, ${name1}`)
    }
    else {
      break
    }
  }
}

export const setNumber = () => {
  let num = randomNum(300)
  console.log(num)
  let realnum = parseInt(num.slice(10))
  const ans = readlineSync.question('Your answer: ')
  if (realnum % 2 == 0 && ans == 'yes') {
    console.log('Correct!')
    points += 1
  }
  else if (realnum % 2 !== 0 && ans == 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`)
    console.log(`Let's try again, ${name1}`)
    points += 100
  }
  else if (realnum % 2 == 0 && ans == 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
    console.log(`Let's try again, ${name1}`)
    points += 100
  }
  else if (realnum % 2 !== 0 && ans == 'no') {
    console.log('Correct!')
    points += 1
  }
  else {
    console.log(`${ans} is unknown`)
    points += 100
  }
}
