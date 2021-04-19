'use strict';


let firstImageElement = document.getElementById('first-image');
let secondImageElement = document.getElementById('second-image');
let therdImageElement = document.getElementById('therd-image');
let container =document.getElementById('container');
  
let counts = 0;
let numberOFTry = 25;
let firstIndex; 
let secondIndex;
let therdIndex;
let arrayName=[];
let arrayRepet=[];

/*function read1(){
  arrayRepet[firstIndex,secondIndex,therdIndex]
  
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
   }*/



function Bus(name,source){
  this.name= name;
  this.source = source;
  this.votes = 0;
  this.appers=0;
 Bus.Images.push(this);
 arrayName.push(this.name);
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
 /* var n = arrayRepet.includes(firstIndex);
 var b = arrayRepet.includes(secondIndex);
 var a = arrayRepet.includes(therdIndex);
 if (a||b||n) {
  */

 //arrayRepet[firstIndex,secondIndex,therdIndex]
  
  while(firstIndex === secondIndex||therdIndex=== firstIndex||secondIndex===therdIndex||arrayRepet.includes(firstIndex)||arrayRepet.includes(secondIndex)||arrayRepet.includes(therdIndex)){
    firstIndex = genrateRandomIndex();
    secondIndex=genrateRandomIndex();
    therdIndex=genrateRandomIndex();
  }
  arrayRepet[0]=firstIndex;
  arrayRepet[1]=secondIndex;
  arrayRepet[2]=therdIndex;

  Bus.Images[firstIndex].appers++;
  Bus.Images[secondIndex].appers++;
  Bus.Images[therdIndex].appers++;
  
  firstImageElement.src = Bus.Images [firstIndex].source;
  secondImageElement.src = Bus.Images [secondIndex].source;
  therdImageElement.src = Bus.Images [therdIndex].source;
}

renderThreeImages();

  container.addEventListener('click',handleClicking);
// }
//firstImageElement.addEventListener('click', handleClicking);
//secondImageElement.addEventListener('click',handleClicking);
//therdImageElement.addEventListener('click',handleClicking);

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
    chart();
    container.removeEventListener('click',handleClicking);
   //firstImageElement.removeEventListener('click', handleClicking);
    //secondImageElement.removeEventListener('click',handleClicking);
    //therdImageElement.removeEventListener('click',handleClicking);
   
  }
  
}

/* let button = document.getElementById('butn');
button.addEventListener('click',shawing);
function shawing (){
renderList();
button.removeEventListener('click',shawing);
} */

let arrayVotes = [];
let arrayAppers = [];
function renderList(){
  let ul = document.getElementById('orderList');
  for(let i = 0 ; i < Bus.Images.length;i++){
    arrayVotes.push(Bus.Images[i].votes);
    arrayAppers.push(Bus.Images[i].appers);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = Bus.Images[i].name+ " it has " +Bus.Images[i].votes+" Votes and was seen " +Bus.Images[i].appers +" times.";
  }
}



function genrateRandomIndex(){
   return Math.floor(Math.random() * Bus.Images.length); 
                
}



function chart(){
  let ctx = document.getElementById("myChart")
  let myChart = new Chart(ctx, { 
      type: 'bar',
      data: {
          labels:arrayName, 
          datasets: [{
              label: 'Number Of votes',
              data: arrayVotes,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderWidth: 1
          },{
            label:'# of Shown',
            data: arrayAppers,
            backgroundColor:[
              "rgb(0,255,255)"
            ],
            borderWidth: 1
          }]
      }
  })
  }
