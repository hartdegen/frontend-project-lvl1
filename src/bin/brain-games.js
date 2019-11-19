#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi there, ${userName}!`);

// Можно весь код выше поместить в отдельную функцию вне, импортировать её сюда и запускать тут
// Но этот файл даже не игра, а приветствие. В общем, жду замечаний
