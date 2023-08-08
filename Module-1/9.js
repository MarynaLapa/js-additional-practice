function getExtremeElements(array) {
  // Change code below this line

//   const arrayElement = array;
    const args = Array.from(array);
    const firstArray = args[0];
    const lastArray = args[array.length - 1];
    console.log(firstArray, lastArray)
  return array;

  // Change code above this line
}
getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(["Earth", "Mars", "Venus"]);
getExtremeElements(["apple", "peach", "pear", "banana"]);
