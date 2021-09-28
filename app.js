'use strict';

let imageOne = document.getElementById('itemOne');
let imageTwo = document.getElementById('itemTwo');
let imageThree = document.getElementById('itemThree');


function clickMaster(event) {
  event.preventDefault();
}

imageOne.addEventListener('click',clickMaster);
imageTwo.addEventListener('click',clickMaster);
imageThree.addEventListener('click',clickMaster);


////make a prod Array
const productionItems = [];
////using con fn create a new object for each prod
const ProductAddition = function (newName, currentLocation) {
  const object207 = {
    name: newName,
    localstorage: currentLocation,
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

const pickNewProducts = function(productionItems){
  const imageOne = Math.floor(Math.random() * ProductAddition.length);
  const imageTwo = Math.floor(Math.random() * ProductAddition.length);
  const imageThree = Math.floor(Math.random() * ProductAddition.length);
};
console.log(pickNewProducts);
console.log(imageOne);
console.log(imageTwo);
console.log(imageThree);

imageOne.src = ProductAddition[imageOne].url;
imageTwo.src = ProductAddition[imageTwo].url;
imageThree.src = ProductAddition[imageThree].url;
