'use strict';


let firstImageElement = document.getElementById('first-image');
let secondImageElement = document.getElementById('second-image');
let therdImageElement = document.getElementById('therd-image');

  
let counts = 0;
let numberOFTry = 10;
let firstIndex; 
let secondIndex;
let therdIndex;

function Bus(name,source){
  this.name= name;
  this.source = source;
  this.votes = 0;
  this.appers=0;
 Bus.Images.push(this);
}

Bus.Images =[];

new Bus('bag','photo/bag.jpg');//[0]
new Bus('banana','photo/banana.jpg');//[1]
new Bus('bathroom','photo/bathroom.jpg');//[2]
new Bus('boots','photo/boots.jpg');//[3]
new Bus('breakfast','photo/breakfast.jpg');//[4]
new Bus('bubblegum','photo/bubblegum.jpg');//[5]
new Bus('chair','photo/chair.jpg');//[6]
new Bus('cthulhu','photo/cthulhu.jpg')//[7]
new Bus('dog-duck','photo/dog-duck.jpg')//[8]
new Bus('dragon','photo/dragon.jpg')//[9]
new Bus('pen','photo/pen.jpg')//[10]
new Bus('pet-sweep','photo/pet-sweep.jpg')//[11]
new Bus('shark','photo/shark.jpg')//[12]
new Bus('sweep','photo/sweep.png')//[13]
new Bus('tauntaun','photo/tauntaun.jpg')//[14]
new Bus('usb','photo/usb.gif')//[15]
new Bus('water-can','photo/water-can.jpg')//[16]
new Bus('wine-glass','photo/wine-glass.jpg')//[17]

console.log (Bus.Images);

function renderThreeImages(){
  firstIndex = genrateRandomIndex(); 
 secondIndex = genrateRandomIndex(); 
 therdIndex = genrateRandomIndex(); 
  
  while(firstIndex === secondIndex||therdIndex=== firstIndex||secondIndex===therdIndex){
    firstIndex = genrateRandomIndex();
    secondIndex=genrateRandomIndex();
  }
  Bus.Images[firstIndex].appers++;
  Bus.Images[secondIndex].appers++;
  Bus.Images[therdIndex].appers++;
  
 
  firstImageElement.src = Bus.Images [firstIndex].source;
  secondImageElement.src = Bus.Images [secondIndex].source;
  therdImageElement.src = Bus.Images [therdIndex].source;

}

renderThreeImages();
firstImageElement.addEventListener('click', handleClicking);
secondImageElement.addEventListener('click',handleClicking);
therdImageElement.addEventListener('click',handleClicking);

function handleClicking(event){
 console.log(event.target.id);
    counts++; 
    if(numberOFTry >= counts){
      if(event.target.id ==='first-image'){
         Bus.Images[firstIndex].votes++;
       }else if(event.target.id ==='second-image'){
         Bus.Images [secondIndex].votes++;
    }else if(event.target.id ==='therd-image'){
        Bus.Images [therdIndex].votes++;
    }
    renderThreeImages();
    console.log (Bus.Images);
  }else {
    renderList();
    firstImageElement.removeEventListener('click', handleClicking);
    secondImageElement.removeEventListener('click',handleClicking);
    therdImageElement.removeEventListener('click',handleClicking);
   
  }
}

function renderList(){
  let ul = document.getElementById('orderList');
  for(let i = 0 ; i < Bus.Images.length;i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = Bus.Images[i].name+ " it has " +Bus.Images[i].votes+" Votes and was seen " +Bus.Images[i].appers +" times.";
  }
}



function genrateRandomIndex(){
   return Math.floor(Math.random() * Bus.Images.length); 
                
}