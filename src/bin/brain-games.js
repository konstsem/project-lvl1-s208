#!/usr/bin/env node
import { greeting } from '..';

console.log('Welcome to the Brain Games!\n\n');

const userName = greeting();

console.log(`Hello, ${userName}!\n`);
