// mathFun.js: Math Fun instructions and logic

const mathFunList = [
  {
    title: 'Seven',
    instruction: 'Try dividing 1, 2, or 3 by 7 (e.g., 1/7, 2/7, 3/7).\nYou will see the same digits "142857" repeat in the decimal part, just starting at a different spot each time!\nFor example: 1/7 = 0.142857142857..., 2/7 = 0.285714285714...\nIt’s a fun repeating pattern.',
    example: '1/7',
  },
  {
    title: 'Magic 9',
    instruction: 'Multiply any number by 9, then add the digits of the answer.\nNo matter what number you start with, the digits will always add up to 9!\nFor example: 23 × 9 = 207, 2+0+7=9. Try with 23 × 9.',
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
    instruction: 'To multiply by 15, multiply by 10 and add half again. Try 14 × 15!\nStep 1: 14 × 10 = 140\nStep 2: Half of 140 is 70\nStep 3: 140 + 70 = 210',
    example: '14×15',
  },
  {
    title: 'Birthday Math',
    instruction: 'Ask a friend to multiply their birth month by 2, add 5, multiply by 50, add their birth day, then subtract 250.\nThe answer will be their birth month and day together!\nFor example: If birthday is March 14: 3×2=6, 6+5=11, 11×50=550, 550+14=564, 564-250=314 (March 14).',
    example: '3×2+5×50+14-250',
  },
  {
    title: 'Handy 9s Trick',
    instruction: 'Hold out 10 fingers. To multiply 9 × n, fold down the nth finger.\nThe number of fingers left of the fold is tens, right is ones!\nFor example: 9 × 7, fold down the 7th finger: 6 fingers left, 3 right, so 63.',
    example: '9×7',
  },
  {
    title: 'Make 100!',
    instruction: 'Can you use four 9s and any math operations to make 100?\nTry: 99 + (9/9) = 100.\nChallenge: Try with four 4s!',
    example: '99+9/9',
  },
  {
    title: 'The Answer is Always 5',
    instruction: 'Pick any number. Multiply by 2, add 10, divide by 2, subtract your original number.\nThe answer is always 5!\nTry with 8: 8×2=16, 16+10=26, 26/2=13, 13-8=5.',
    example: '8×2+10÷2−8',
  },
  {
    title: 'Reverse and Add',
    instruction: 'Pick a two-digit number, reverse it, and add.\nMost of the time, you get a palindrome!\nTry: 34 + 43 = 77.',
    example: '34+43',
  },
  {
    title: 'Multiplying by 25',
    instruction: 'To multiply by 25, multiply by 100 and divide by 4.\nFor example: 36 × 25 = (36 × 100) ÷ 4 = 3600 ÷ 4 = 900.',
    example: '36×25',
  },
  {
    title: 'Guess the Age',
    instruction: 'Ask a friend to multiply their age by 2, add 5, multiply by 50, add 1769, subtract their birth year.\nThe answer ends with their age!\nTry with age 12, born in 2013: 12×2=24, 24+5=29, 29×50=1450, 1450+1769=3219, 3219-2013=1206.',
    example: '12×2+5×50+1769-2013',
  },
  {
    title: 'Magic Square Puzzle',
    instruction: 'Arrange the numbers 1 to 9 in a 3×3 grid so every row, column, and diagonal adds up to 15.\nCan you find the solution?\n(Hint: Center is 5!)',
    example: '',
  },
  {
    title: 'Triangle Numbers',
    instruction: 'The sum of the first N numbers is N(N+1)/2.\nFor example, for N=10: 10×11=110, 110÷2=55.\nTry for N=10!',
    example: '10×11÷2',
  },
  {
    title: 'Multiplying by 13',
    instruction: 'To multiply by 13, multiply by 10, then add triple the number.\nFor example: 7×10=70, 7×3=21, 70+21=91, so 7×13=91.',
    example: '7×13',
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
    title: 'Multiplying by 12',
    instruction: 'Multiply by 10, then add double the number.\nFor example: 8×10=80, 8×2=16, 80+16=96, so 8×12=96.',
    example: '8×12',
  },
  {
    title: 'Multiplying by 4',
    instruction: 'Double the number twice!\nFor example: 13×2=26, 26×2=52, so 13×4=52.',
    example: '13×4',
  },
  {
    title: 'Multiplying by 99',
    instruction: 'To multiply by 99, multiply by 100 and subtract the number.\nFor example: 47×100=4700, 4700-47=4653, so 47×99=4653.',
    example: '47×99',
  },
  {
    title: 'Sum of Odd Numbers',
    instruction: 'The sum of the first N odd numbers is N².\nFor N=5: 1+3+5+7+9=25=5².',
    example: '1+3+5+7+9',
  },
  {
    title: 'Multiplying by 6',
    instruction: 'To multiply by 6, first multiply by 3, then double the result.\nFor example: 7×3=21, 21×2=42, so 7×6=42.\nTry 7 × 6 using this trick!',
    example: '7×6',
  },
  {
    title: 'Multiplying by 14',
    instruction: 'Double, then multiply by 7.\nFor example: 6×2=12, 12×7=84, so 6×14=84.',
    example: '6×14',
  },
  {
    title: 'Multiplying by 16',
    instruction: 'Double four times!\nFor example: 3×2=6, 6×2=12, 12×2=24, 24×2=48, so 3×16=48.',
    example: '3×16',
  },
  {
    title: 'Multiplying by 17',
    instruction: 'Multiply by 10, add seven times the number.\nFor example: 4×10=40, 4×7=28, 40+28=68, so 4×17=68.',
    example: '4×17',
  },
  {
    title: 'Multiplying by 18',
    instruction: 'Double, then multiply by 9.\nFor example: 5×2=10, 10×9=90, so 5×18=90.',
    example: '5×18',
  },
  {
    title: 'Multiplying by 19',
    instruction: 'Multiply by 20, subtract the number.\nFor example: 6×20=120, 120-6=114, so 6×19=114.',
    example: '6×19',
  },
  {
    title: 'Multiplying by 21',
    instruction: 'Multiply by 20, add the number.\nFor example: 7×20=140, 140+7=147, so 7×21=147.',
    example: '7×21',
  },
  {
    title: 'Multiplying by 50',
    instruction: 'Multiply by 100, halve it.\nFor example: 18×100=1800, 1800÷2=900, so 18×50=900.',
    example: '18×50',
  },
  {
    title: 'Quick Square',
    instruction: 'To square a number ending in 5: Take the first digit(s) n, multiply by n+1, then put 25 at the end.\nFor example: 25×25: 2×3=6, so answer is 625.',
    example: '25×25',
  },
  {
    title: 'Calculator Words',
    instruction: 'Do a calculation, then turn the calculator upside down to read a word!\nFor example, 101×8=808 (BOB), 1−0.2266=0.7734 (HELLO).\nTry 1−0.2266 and flip the display!',
    example: '1-0.2266',
  },
  {
    title: 'Number Riddle',
    instruction: 'I am a two-digit number. My digits add up to 9. If you reverse my digits, I am 27 more than the original. What number am I?\n(Try to solve it!)',
    example: '',
  },
  {
    title: 'Pattern Play',
    instruction: 'Type 12345679 × 9 = 111111111.\nNow try 12345679 × 18 = 222222222!\nWhat happens if you multiply by 27, 36, ...?',
    example: '12345679×9',
  },
  {
    title: 'Fibonacci Surprise',
    instruction: 'Type 1 divided by 89 (1/89).\nThe decimal part starts 0.011235... which is the Fibonacci sequence!\nSee how the digits follow the pattern?',
    example: '1/89',
  },
  {
    title: 'Palindrome Play',
    instruction: 'Pick a number, reverse its digits, and add it to the original.\nRepeat this process until you get a palindrome (a number that reads the same forwards and backwards).\nTry with 56: 56 + 65 = 121.',
    example: '56+65',
  },
  {
    title: 'Digital Root',
    instruction: 'Add the digits of any number repeatedly until you get a single digit.\nThis is called the digital root. Try with 9876: 9+8+7+6=30, 3+0=3.',
    example: '9+8+7+6',
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
