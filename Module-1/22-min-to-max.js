// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив

 function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  let i = min;
  while (i <= max) {
    numbers.push(i);
    console.log(i);
    i += 1;
  }
  console.log('numbebs = [', numbers, ']')
  // Change code above this line
  return numbers;
}
createArrayOfNumbers(1, 3);
createArrayOfNumbers(14, 17);
createArrayOfNumbers(29, 34);

// В циклі for використовувався метод push

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   let i = min;
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//     console.log(i);
//   }
//   console.log('numbebs =', numbers)
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);
