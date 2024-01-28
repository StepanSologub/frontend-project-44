#!/usr/bin/env node

import runGame from '../src/index.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
runGame(instruction, 'even');
