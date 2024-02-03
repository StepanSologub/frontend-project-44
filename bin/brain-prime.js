#!/usr/bin/env node

import runGame from '../src/index.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(instruction, 'prime');
