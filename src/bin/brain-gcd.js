#!/usr/bin/env node

import gcdLogic from '../games/gcd';
import { runGame } from '..';

const quest = 'Find the greatest common divisor of given numbers.';
runGame(quest, gcdLogic);
