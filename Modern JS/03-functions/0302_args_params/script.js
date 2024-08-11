const getCelcius = (f) => (f - 32) * (5 / 9);

console.log(`The temperature is ${getCelcius(32)}\xB0C`); // 0

const minMax = (nums) => {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return { min, max };
};

let minAndMax = minMax([1, 5, 6, 42, 6, 3])

let stringtest = "test, this, is, some, string, values, 42/n"

stringtest.


console.log(string.)

console.log(`Min num is ${minAndMax.min} and max num is ${minAndMax.max}`); // Min num is 1 and max num is 42


// You can create and call functions in a single block of code
((name, language) => {
    console.log(`My name is ${name} and I'm learning ${language}!`)  
  }
  )('Daniel', 'Javascript');
  
  // Outputs: My name is Daniel and I'm learning Javascript!

   const calculate = (num1, num2, op) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return 'Invalid operator';
    }
  }

  console.log(calculate(5, 2, 'k')); // 7