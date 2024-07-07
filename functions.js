// index.js
const importantMessage = 'You are beautiful!';

process.stdout.write("hellow world");
const argument = process.argv[2];

switch (argument) {
  case '--hello':
    console.log('Hello');
    break;
  case '--bye':
    console.log('Bye');
    break;
  default:
    break;
};