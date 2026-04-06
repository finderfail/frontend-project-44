#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { gameRunner } from '../src/even-game.js'

console.log('Welcome to the Brain Games!')
getName()
console.log('Answer "yes" if the number is even, otherwise answer "no"')
gameRunner()
