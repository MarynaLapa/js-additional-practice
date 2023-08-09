function findLongestWord(string) {
  // Change code below this line
    const stringArray = string.split(" ");
    console.log(stringArray);
    const numbers = [];
    for (let i = 0; i < stringArray.length; i += 1) {
      const a = stringArray[i].length;
      numbers.push(a);
    }
    console.log(numbers);
    const max = Math.max(...numbers);
    console.log(max);
    const maxIndex = numbers.indexOf(max);
    console.log(maxIndex);
    console.log(string[maxIndex]);
  // return string[maxIndex];
    
  
  // Change code above this line
}
findLongestWord("The quick brown fox jumped over the lazy dog"); // jumped 
findLongestWord("Google do a roll");  // Google
findLongestWord("May the force be with you"); //force