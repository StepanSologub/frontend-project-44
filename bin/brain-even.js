#!/usr/bin/env node

import game from '../src/index.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
game(instruction, 'even');
