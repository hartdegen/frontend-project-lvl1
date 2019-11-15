#!/usr/bin/env node

import isEvenLogic from '../games/even';
import { runGame } from '..';

const quest = 'Answer "yes" if the number is even, otherwise answer "no".';
runGame(quest, isEvenLogic);
