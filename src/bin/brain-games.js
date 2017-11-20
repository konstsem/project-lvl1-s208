#!/usr/bin/env node
import {question} from '..';

console.log("Welcome to the Brain Games!\n");

const userName = question('May I have your name? ');
console.log(`Hello, ${userName}!`);
