#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { runGame } from '../src/index.js'
import { generatePrimeQuestion } from '../src/games/prime-game.js'

console.log('Welcome to the Brain Games!')
const name = getName()
console.log('Answer "yes" if given number is prime. Otherwise answer "no"')
runGame(name, generatePrimeQuestion)
