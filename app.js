'use strict';

//let files =
//bag.jpg;
//banana.jpg;
//bathroom.jpg;
//boots.jpg;
//breakfast.jpg;
//bubblegum.jpg;
//chair.jpg;
//cthulhu.jpg;
//dog-duck.jpg;
//dragon.jpg;
//pen.jpg;
//pet-sweep.jpg;
//scissors.jpg;
//shark.jpg;
//sweep.jpg;
//tauntaun.jpg;
//unicorn.jpg;
//water-can.jpg;
//water-can.jpg;
//wine-glass;



////make a prod Array
const productionItems = [];
////using con fn create a new object for each prod
const ProductAddition = function (newName, currentLocation) {
  const object207 = {
    name: newName,
    imgPath: currentLocation,
    numberOfTimesShown: 0,
  };
  return object207;
};
  ////console.log(temp('bag', 'img/loo'));
productionItems.push(
  new ProductAddition('bag', 'img/bag.jpg'),
  new ProductAddition('banana', 'img/banana.jpg'),
  new ProductAddition('bathroom', 'img/bathroom.jpg'),
  new ProductAddition('boots', 'img/boots.jpg'),
  new ProductAddition('breakfast', 'img/breakfast.jpg'),
  new ProductAddition('bubblegum', 'img/bubblegum.jpg'),
  new ProductAddition('chair', 'img/chair.jpg'),
  new ProductAddition('cthulhu', 'img/cthulhu.jpg'),
  new ProductAddition('dog-duck', 'img/dog-duck.jpg'),
  new ProductAddition('dragon', 'img/dragon.jpg'),
  new ProductAddition('pen', 'img/pen.jpg'),
  new ProductAddition('pet-sweep', 'img/pet-swee.jpg'),
  new ProductAddition('scissors', 'img/scissors.jpg'),
  new ProductAddition('shark', 'img/shark.jpg'),
  new ProductAddition('sweep', 'img/sweep.jpg'),
  new ProductAddition('tauntaun', 'img/tauntaun.jpg'),
  new ProductAddition('unicorn', 'img/unicorn.jpg'),
  new ProductAddition('water-can', 'img/water-can.jpg'),
  new ProductAddition('wine-glass', 'img/wine-glass.jpg')
);
console.log(productionItems);

//create a fn that randomly selects 3 prods, add conditionals so no objects are repeated

const pickNewProducts = function(){
  const imageOne = Math.floor(Math.random() * productionItems.length);
  const imageTwo = Math.floor(Math.random() * productionItems.length);
  const imageThree = Math.floor(Math.random() * productionItems.length);
  const selectedObjOne = productionItems[imageOne];
  const selectedObjTwo = productionItems[imageTwo];
  const selectedObjThree = productionItems[imageThree];
  const finalOne = selectedObjOne.imgPath;
  const finalTwo = selectedObjTwo.imgPath;
  const finalThree = selectedObjThree.imgPath;
  //  console.log(finalOne)
  return [finalOne,finalTwo,finalThree];
};
//console.log(pickNewProducts());

const finalArray = pickNewProducts();
//console.log(finalArray)
const validation = function(finalArray){
  let tempArray = finalArray;
  const xyz = tempArray[0] === tempArray[1];
  const yyy = tempArray[0] === tempArray[2];
  const zzz = tempArray[1] === tempArray[2];
  while (xyz === true || yyy === true || zzz === true){
    tempArray = pickNewProducts();
  }
  return tempArray;
};
console.log(validation);

validation(finalArray);


console.log(validation(finalArray));
console.log(pickNewProducts());
