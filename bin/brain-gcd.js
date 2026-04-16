#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { runGame } from '../src/index.js'
import { generateGcdQuestion } from '../src/games/gcd-game.js'

console.log('Welcome to the Brain Games!')
const name = getName()
console.log('Find the greatest common divisor of given numbers.')
runGame(name, generateGcdQuestion)
