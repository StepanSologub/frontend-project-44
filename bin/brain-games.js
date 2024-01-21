#!/usr/bin/env node

import * as client from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = client.askForName();
console.log(`Hello, ${name}!`);
