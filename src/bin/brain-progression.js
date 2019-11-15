#!/usr/bin/env node

import progressionLogic from '../games/progression';
import { runGame } from '..';

const quest = 'What number is missing in the progression?';
runGame(quest, progressionLogic);
