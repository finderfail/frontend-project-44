import readlineSync from 'readline-sync'

export const getName = () => {
  const us =  readlineSync.question('May I have your name? ')
  console.log(`Hello, ${us}`)
}
