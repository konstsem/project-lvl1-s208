#!/usr/bin/env node
import { greeting, game } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n\n');

const userName = greeting();

console.log(`Hello, ${userName}!\n`);

game(userName);
