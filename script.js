var score, roundscore,active, gamePlaying;
intit();
 var dice;
 var dice1;
 var prvdice=0;
 var prvdice=0;
document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gamePlaying){
   
    prvdice1 = dice1    
    prvdice = dice
    dice = Math.floor(Math.random() * 6 + 1)
    dice1 = Math.floor(Math.random() * 6 + 1)
    
    if(prvdice== 6 && dice == 6 || prvdice1 == 6 && dice1 == 6){
            document.querySelector('#score--' + active).textContent = '0';
            prvdice.length = 0;
            prvdice1.length = 0;
            nextPlayer();
        }
        else if(dice !== 1 || dice1 !== 1){
        roundscore += dice + dice1;
        document.querySelector('#current--' + active).textContent = roundscore;
        } 
         else{
        nextPlayer();
         }
    
    var diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block'
    diceDom.src = 'dice-' + dice + '.png'
    var diceDom1 = document.querySelector('.dice1')
    diceDom1.style.display = 'block'
    diceDom1.src = 'dice-' + dice1 + '.png'
    
    }
})

const btnhold = document.querySelector('.btn--hold')
btnhold.addEventListener("click", function(){
    if(gamePlaying){
         score[active] += roundscore
    document.querySelector('#score--' + active).textContent = score[active]
    var number = document.getElementById('fname').value
    if(!number){
        number = 100
    }
    if(score[active]>=number){
        document.querySelector('#name--' + active).textContent = 'winner!'
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.dice1').style.display = 'none'
        document.querySelector('.player--' + active).classList.add('winner')
        document.querySelector('.player--' + active).classList.remove('player--active')
        gamePlaying = false
    }
    else{
        nextPlayer();
    }
    }
})
function nextPlayer(){
    active === 0 ? active =1 : active=0;
        roundscore = 0;
        document.getElementById('current--0').textContent = '0'
        document.getElementById('current--1').textContent = '0'
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.dice1').style.display = 'none'
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
        prvdice=0
        prvdice1=0
    }
    document.querySelector('.btn--new').addEventListener('click',intit )

    function intit(){
    score =[0, 0];
    roundscore = 0;
    gamePlaying = true;
    active = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none'
    document.querySelector('#current--0').textContent = '0';
    document.querySelector('#current--1').textContent = '0';
    document.querySelector('#score--0').textContent = '0';
    document.querySelector('#score--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Playe 2';
    document.querySelector('.player--0').classList.remove('winner');
    document.querySelector('.player--1').classList.remove('winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    }
