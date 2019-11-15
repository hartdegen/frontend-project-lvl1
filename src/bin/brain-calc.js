#!/usr/bin/env node

import calcLogic from '../games/calc';
import { runGame } from '..';

const quest = 'What is the result of the expression?';
runGame(quest, calcLogic);
