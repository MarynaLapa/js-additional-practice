const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  
  // Change code below this line
  
  getPotions() {
    return this.potions;
  },
  
  addPotion(newPotion) {
    // console.log(newPotion.name)
    for (const potion of this.potions){
    const namePotion = Object.values(potion);

    // console.log(namePotion);
    // console.log(namePotion.includes(newPotion.name));
    if (namePotion.includes(newPotion.name)) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`
    }
  }

    this.potions.push(newPotion);
    // console.log(this.potions);
    return this.potions;
  },
 
  // removePotion(potionName) {
  //    console.log("Function name = ", potionName)
  //   for (const potion of this.potions) {
  //   const name1 = Object.values(potion);
  //   console.log(name1)
  //   const potionIndex = name1.indexOf(potionName);
  //     console.log("Potion index =", potionIndex)
  //   if (potionIndex === -1) {
  //     console.log(`Potion ${potionName} is not in inventory!`)
  //     return `Potion ${potionName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1);
  //   return this.potions;

  //   }
  // },

//  updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//     const namePotion = Object.values(potion);
//       console.log(namePotion);
//     const potionIndex = namePotion.indexOf(oldName);
//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//     }
//   },
  // Change code above this line
};
console.log("нижний консоль", atTheOldToad.potions);

atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
atTheOldToad.addPotion({ name: "Invisibility", price: 620 });

atTheOldToad.removePotion("Dragon breath");
atTheOldToad.removePotion("Speed potion");

