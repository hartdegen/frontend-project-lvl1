#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { isEven } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi there, ${userName}!\n`);

isEven(userName);
