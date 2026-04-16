#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { runGame } from '../src/index.js'
import { generateProgressionQuestion } from '../src/games/progression-game.js'

console.log('Welcome to the Brain Games!')
const name = getName()
console.log('What number is missing in the progression?')
runGame(name, generateProgressionQuestion)
