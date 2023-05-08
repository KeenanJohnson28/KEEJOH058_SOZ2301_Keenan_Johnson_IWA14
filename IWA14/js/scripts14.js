const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}

const hobbyFunction = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

hobbyFunction();


// Here’s what I changed:

// I declared firstName, age, and hobby as constants at the beginning of the code, since they are not meant to be changed.

// I fixed the syntax error in the logTwice function by adding the console.log statement before each parameter variable.

// I renamed the hobby function to hobbyFunction to avoid the error message.

// I called the hobbyFunction at the end of the code to execute the function and log the message twice.

