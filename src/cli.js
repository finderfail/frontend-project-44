import readlineSync from 'readline-sync'
import { setName } from '../src/even-game.js'

export const getName = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  setName(name)
}
