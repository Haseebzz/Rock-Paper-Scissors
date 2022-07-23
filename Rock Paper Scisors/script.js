const yourChoice = document.getElementById('your-choice');
const computerChoice = document.getElementById('computer-choice');
const result = document.getElementById('result');
const yourScore = document.getElementById('your-score');
const computerScore =document.getElementById('computer-score');
const choices = document.querySelectorAll('button');
let userScore = 0;
let compScore = 0;


choices.forEach(function(choice){
    choice.addEventListener('click',(e)=>{
      yourChoice.innerText = e.target.id;
      getComputer();
    })
}

);

function getComputer(){
   let x = Math.floor(Math.random()*3)+1;
   if(x==1){
    computerChoice.innerText = 'Rock';
   }
   if(x==2){
    computerChoice.innerText = 'Paper';
   }
   if(x==3){
    computerChoice.innerText = 'Scissors';
   }
   getResult(x);
}

function getResult(x){
     console.log(x);
     if(x==1 && yourChoice.innerHTML == 'Rock'){
        result.innerText = 'Tie';
     }
     if(x==2 && yourChoice.innerHTML == 'Rock'){
        result.innerText = 'You Lose';
        compScore++;
     }
     if(x==3 && yourChoice.innerHTML == 'Rock'){
        result.innerText = 'You Win';
        userScore++;
     }
     if(x==1 && yourChoice.innerHTML == 'Paper'){
        result.innerText = 'You Win';
        userScore++;
     }
     if(x==2 && yourChoice.innerHTML == 'Paper'){
        result.innerText = 'Tie';
     }
     if(x==3 && yourChoice.innerHTML == 'Paper'){
        result.innerText = 'You Lose';
        compScore++;
     }
     if(x==1 && yourChoice.innerHTML == 'Scissors'){
        result.innerText = 'You Lose';
        compScore++;
     }
     if(x==2 && yourChoice.innerHTML == 'Scissors'){
        result.innerText = 'You Win';
        userScore++;
     }
     if(x==3 && yourChoice.innerHTML == 'Scissors'){
        result.innerText = 'Tie';
     }
     yourScore.innerText = userScore;
     computerScore.innerText = compScore;
}