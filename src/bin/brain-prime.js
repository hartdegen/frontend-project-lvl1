#!/usr/bin/env node

import primeLogic from '../games/prime';
import { runGame } from '..';

const quest = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(quest, primeLogic);
