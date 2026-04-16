#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { runGame } from '../src/index.js'
import { generateEvenQuestion } from '../src/games/even-game.js'
console.log('Welcome to the Brain Games!')
const name = getName()
console.log('Answer "yes" if the number is even, otherwise answer "no"')
runGame(name, generateEvenQuestion)
