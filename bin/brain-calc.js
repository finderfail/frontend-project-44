#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { runGame } from '../src/index.js'
import { generateCalcQuestion } from '../src/games/calc-game.js'
console.log('Welcome to the Brain Games!')
const name = getName()
console.log('What is the result of the expression?')
runGame(name, generateCalcQuestion)
