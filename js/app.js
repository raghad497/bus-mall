
//  Important Note for TA : My JS , css and html work is based on Samer Allaham class repo , I followed all the steps we were told to follow to build this code and repeated the structure of some functions in the class demo .

'use strict'
let firstElement= document.getElementById('first');
let secondElement= document.getElementById('second');
let thirdElement= document.getElementById('third');

let maximumTries=25;
let counter=0;

let firstIndex;
let secondIndex;
let thirdIndex;

function Items(item,src){
this.item=item;
this.source=src;
this.votes=0;
Items.push(this)

}

let items=[];
items.prototype.allitems=[];
items.all=[];

new item('bag','img/bag.jpg');0
new item('banana','img/banana.jpg');1
new item('bathroom','img/bathroom.jpg');2
new item('boots','img/boots.jpg');3
new item('breakfast','img/breakfast.jpg');4
new item('bubblegum','img/bubblegum.jpg');5
new item('chair','img/chair.jpg');6
new item('cthulhu','img/cthulhu.jpg');7
new item('dog-duck','img/dog-duck.jpg');8
new item('dragon','img/dragon.jpg');9
new item('pen','img/pen.jpg');10
new item('pet-sweep','img/pet-sweep.jpg');11
new item('scissors','img/scissors.jpg');12
new item('shark','img/shark.jpg');13
new item('sweep','img/sweep.jpg');14
new item('tauntaun','img/tauntaun.jpg');15
new item('unicorn','img/unicorn.jpg');16
new item('water-can','img/water-can.jpg');17
new item('wine-glass','img/wine-glass.jpg');18

function getRandomIndex(){
    return Math.floor(Math.random()*items.length);
}

function renderThreeImages(){

    first=getRandomIndex();
    second=getRandomIndex();
    third=getRandomIndex();

    while (firstIndex===secondIndex||firstIndex===thirdIndex||secondIndex===thirdIndex){
        firstIndex=getRandomIndex();
        secondIndex=getRandomIndex();
        thirdIndex=getRandomIndex();
    }
    firstElement.src=items[firstIndex].source;
    secondElement.src=items[secondIndex].source;
    thirdElement.src=items[thirdIndex].source;
}

renderThreeImages();

let ThreeImagesDiv=document.getElementById('ThreeImages-div');

function handleUserClick(event){
    counter++;
}



    const data = {
      labels: namesArr,
      datasets: [{
        label: 'Votes',
        data: votesArr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      },
      {
        label: 'Shown',
        data: shownArr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    
    ]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };
  
  
    var myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  
  }
  
   