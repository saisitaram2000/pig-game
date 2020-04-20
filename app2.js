/*
GAMERULES:
 Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/





var scores,activeplayer,gameplaying,roundscore;

var rules=confirm('GAMERULES:The game has 2 players, playing in rounds and there are two dices in a game,In each turn, a player rolls a dices as many times as he whishes. Each result get added to his ROUND score BUT player looses his round score when one of dice is a 1 after that it is nextplayer turn.The player can choose the HOLD BUTTON, which means that his ROUND score gets added to his GLBAL score. After that its nextplayer turn and finally player who reaches final score(if u not given default value is 100 ) first is winner');
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
    //1.randomscore
    var dice1=Math.floor(Math.random()*6)+1;
     var dice2=Math.floor(Math.random()*6)+1;
     document.getElementById('dice-1').style.display = 'block';
     document.getElementById('dice-2').style.display = 'block';
      document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
     document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
    //2.display
    if(dice1!=1 && dice2!=1){
        //update roundscore
        roundscore+=dice1+dice2;
        document.querySelector('#current-' + activeplayer).textContent=roundscore;
        
    }else{
        
        //nextplayer
        
        nextplayer();
    }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(gamePlaying){
    //update global score
    
    scores[activeplayer]+=roundscore;
     document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    var input=document.querySelector('.final-score').value;
    var winningscore;
         // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
    if(input){
        winningscore=input;
    }else{
        winningscore=100;
    }
    if(scores[activeplayer]>=winningscore){
        document.querySelector('#name-' + activeplayer).textContent='!winner';
        document.querySelector('.player' + '-' + activeplayer + '-' + 'panel').classList.add('winner');
        document.querySelector('.player' + '-' + activeplayer + '-' + 'panel').classList.remove('active');
         document.querySelector('#dice-1').style.display='none';
        document.querySelector('#dice-2').style.display='none';
        gamePlaying=false;
    }else{
        
    //nextplayer
    nextplayer();
    } 
    }
});

document.querySelector('.btn-new').addEventListener('click',init);
function nextplayer(){
    
    activeplayer===0?activeplayer=1:activeplayer=0;
    roundscore=0;
    
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#dice-2').style.display='none';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
    
}

function init(){
    
    
    scores=[0,0];
    activeplayer=0;
    roundscore=0;
    gamePlaying=true;
   // prev=false;
  
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#dice-2').style.display='none';
    document.getElementById('score-0').textContent='0';//we can also select query selector, but this is bit faster and only usable for ids;
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='player1';
    document.getElementById('name-1').textContent='player2';
     document.querySelector('.player-0-panel').classList.remove('winner');
      document.querySelector('.player-1-panel').classList.remove('winner');
     document.querySelector('.player-0-panel').classList.remove('active');
      document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    
}