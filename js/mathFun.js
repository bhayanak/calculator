// mathFun.js: Math Fun instructions and logic

const mathFunList = [
  {
    title: 'Seven',
    instruction: 'Try dividing 1, 2, or 3 by 7 (e.g., 1/7, 2/7, 3/7).\nYou will see the same digits "142857" repeat in the decimal part, just starting at a different spot each time!\nIt’s a fun repeating pattern.',
    example: '1/7',
  },
  {
    title: 'Magic 9',
    instruction: 'Multiply any number by 9, then add the digits of the answer.\nNo matter what number you start with, the digits will always add up to 9!\nTry with 23 × 9.',
    example: '23×9',
  },
  {
    title: 'Palindrome Play',
    instruction: 'Pick a number, reverse its digits, and add it to the original.\nRepeat this process until you get a palindrome (a number that reads the same forwards and backwards).\nTry with 56: 56 + 65 = 121.',
    example: '56+65',
  },
  {
    title: 'Square Surprise',
    instruction: 'Try squaring numbers ending in 5.\nThe trick: Take the first digit(s) n, multiply by n+1, then put 25 at the end.\nFor 25×25: 2×3=6, so answer is 625.',
    example: '25×25',
  },
  {
    title: 'Eleven Trick',
    instruction: 'Multiply 11 by numbers like 11, 111, 1111...\nYou’ll see a neat pattern: 11×11=121, 11×111=1221, 11×1111=12221, and so on!\nTry 11×111.',
    example: '11×111',
  },
  {
    title: 'Nines Squared',
    instruction: 'Try 1 divided by 81 (1/81).\nYou get 0.012345679... Notice the digits go up in order, but 8 is missing!\nTry 1/9801 for an even longer pattern.',
    example: '1/81',
  },
  {
    title: 'Eighty Nine',
    instruction: 'Type 1 divided by 89 (1/89).\nThe decimal part starts 0.011235... which is the Fibonacci sequence!\nSee how the digits follow the pattern?',
    example: '1/89',
  },
  {
    title: 'Ends With Seven Magic',
    instruction: 'Type any 3-digit number twice (e.g., 638638).\nDivide by 11, then by 13, then by your original number.\nYou always get 7! Try with 638638.',
    example: '638638/11/13/638',
  },
  {
    title: 'Ends With Seventy Three Magic',
    instruction: 'Type any 4-digit number twice (e.g., 63856385).\nDivide by 137, then by your original number.\nYou always get 73! Try with 63856385.',
    example: '63856385/137/6385',
  },
  {
    title: 'Guess the Number',
    instruction: 'Ask a friend to pick a number 1-9 and multiply by 12345679.\nTake their answer and multiply by 9.\nThe result will be all the same digit as their original number! Try with 7.',
    example: '7×12345679×9',
  },
  {
    title: 'Guess The Numbers',
    instruction: 'A friend picks two numbers 1-9.\nMultiply the first by 5, add 7, double it, add the second number.\nSubtract 14 from the result: the answer is their two numbers side by side! Try 4 and 9.',
    example: '(((4×5)+7)×2)+9-14',
  },
  {
    title: 'Calculator Words',
    instruction: 'Do a calculation, then turn the calculator upside down to read a word!\nFor example, 101×8=808 (BOB), 1−0.2266=0.7734 (HELLO).\nTry 1−0.2266 and flip the display!',
    example: '1-0.2266',
  },
  {
    title: 'Seven Again',
    instruction: 'Try 1 divided by 49 (1/49).\nYou get 0.0204081632... Notice how every two digits double each time: 2, 4, 8, 16, 32, 64!\nIt’s a doubling pattern in the decimals.',
    example: '1/49',
  },
  {
    title: 'Digital Root',
    instruction: 'Add the digits of any number repeatedly until you get a single digit.\nThis is called the digital root. Try with 9876: 9+8+7+6=30, 3+0=3.',
    example: '9+8+7+6',
  },
  {
    title: 'Multiplying by 11',
    instruction: 'To multiply a two-digit number by 11, add the digits and put the sum in between.\nFor 23×11: 2+3=5, so answer is 253.',
    example: '23×11',
  },
  {
    title: 'All the Same',
    instruction: 'Multiply any number by 37, then by 3.\nThe answer will be a number with all the same digits! Try 123×37×3=13653.',
    example: '123×37×3'
  },
  {
    title: 'Digital Root',
    instruction: 'Add the digits of any number repeatedly until you get a single digit. Try with 9876!',
    example: '9+8+7+6',
  },
  {
    title: 'Multiplying by 11',
    instruction: 'To multiply a two-digit number by 11, add the digits and put the sum in between. Try 23 × 11!',
    example: '23×11',
  },
  {
    title: 'All the Same',
    instruction: 'Multiply any number by 37, then by 3. Try 123 × 37 × 3!',
    example: '123×37×3',
  },
  {
    title: 'Divisibility by 3',
    instruction: 'If the sum of a number’s digits is divisible by 3, so is the number! Try 12345.',
    example: '1+2+3+4+5',
  },
  {
    title: 'Multiplying by 5',
    instruction: 'To multiply by 5, multiply by 10 and halve it. Try 24 × 5!',
    example: '24×5',
  },
  {
    title: 'Kaprekar’s Constant',
    instruction: 'Pick any 4-digit number (not all digits the same), subtract the smallest arrangement from the largest, repeat. You’ll get multiple of 3087!',
    example: '4321-1234',
  },
  {
    title: 'Multiplying by 15',
    instruction: 'To multiply by 15, multiply by 10 and add half again. Try 14 × 15!',
    example: '14×15',
  },
  {
    title: 'Finger Trick for 9s',
    instruction: 'Hold out 10 fingers. To multiply 9 × n, fold down the nth finger. The number of fingers left of the fold is tens, right is ones!',
    example: '9×7',
  },
  {
    title: 'Multiplying by 25',
    instruction: 'To multiply by 25, multiply by 100 and divide by 4. Try 36 × 25!',
    example: '36×25',
  },
  {
    title: 'Sum of First N Numbers',
    instruction: 'The sum of the first N numbers is N(N+1)/2. Try for N=10!',
    example: '10×11÷2',
  },
  {
    title: 'Multiplying by 99',
    instruction: 'To multiply by 99, multiply by 100 and subtract the number. Try 47 × 99!',
    example: '47×99',
  },
  {
    title: 'Squaring Numbers Near 50',
    instruction: 'To square a number near 50, use (50+x)² = 2500 + 100x + x². Try 53²!',
    example: '53×53',
  },
  {
    title: 'Multiplying by 4',
    instruction: 'Double the number twice! Try 13 × 4.',
    example: '13×4',
  },
  {
    title: 'Sum of Odd Numbers',
    instruction: 'The sum of the first N odd numbers is N². Try for N=5!',
    example: '1+3+5+7+9',
  },
  {
    title: 'Multiplying by 12',
    instruction: 'Multiply by 10, then add double the number. Try 8 × 12!',
    example: '8×12',
  },
  {
    title: 'Multiplying by 6',
    instruction: 'To multiply by 6, first multiply by 3, then double the result.\nFor example: 7×3=21, then 21×2=42, so 7×6=42.\nTry 7 × 6 using this trick!',
    example: '7×6',
  },
  {
    title: 'Multiplying by 8',
    instruction: 'To multiply by 8, double the number three times.\nFor example: 6×2=12, 12×2=24, 24×2=48, so 6×8=48.\nTry 6 × 8 and follow the doubling steps!',
    example: '6×8',
  },
  {
    title: 'Multiplying by 7',
    instruction: 'To multiply by 7, multiply by 5, then add double the number.\nFor example: 9×5=45, 9×2=18, 45+18=63, so 9×7=63.\nTry 9 × 7 using this method!',
    example: '9×7',
  },
  {
    title: 'Multiplying by 13',
    instruction: 'To multiply by 13, multiply by 10, then add triple the number.\nFor example: 7×10=70, 7×3=21, 70+21=91, so 7×13=91.\nTry 7 × 13 using this trick!',
    example: '7×13',
  },
  {
    title: 'Multiplying by 14',
    instruction: 'Double, then multiply by 7. Try 6 × 14!',
    example: '6×14',
  },
  {
    title: 'Multiplying by 15',
    instruction: 'Multiply by 10, add half again. Try 8 × 15!',
    example: '8×15',
  },
  {
    title: 'Multiplying by 16',
    instruction: 'Double four times! Try 3 × 16.',
    example: '3×16',
  },
  {
    title: 'Multiplying by 17',
    instruction: 'Multiply by 10, add seven times the number. Try 4 × 17!',
    example: '4×17',
  },
  {
    title: 'Multiplying by 18',
    instruction: 'Double, then multiply by 9. Try 5 × 18!',
    example: '5×18',
  },
  {
    title: 'Multiplying by 19',
    instruction: 'Multiply by 20, subtract the number. Try 6 × 19!',
    example: '6×19',
  },
  {
    title: 'Multiplying by 21',
    instruction: 'Multiply by 20, add the number. Try 7 × 21!',
    example: '7×21',
  },
  {
    title: 'Multiplying by 25',
    instruction: 'Multiply by 100, divide by 4. Try 12 × 25!',
    example: '12×25',
  },
  {
    title: 'Multiplying by 50',
    instruction: 'Multiply by 100, halve it. Try 18 × 50!',
    example: '18×50',
  },
  {
    title: 'Multiplying by 99',
    instruction: 'Multiply by 100, subtract the number. Try 23 × 99!',
    example: '23×99',
  },
];
function getRandomFun() {
  const idx = Math.floor(Math.random() * mathFunList.length);
  return mathFunList[idx];
}
window.mathFunList = mathFunList;
window.getRandomFun = getRandomFun;
