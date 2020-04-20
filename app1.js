/*
GAME RULES:
- A player looses his ENTIRE score when he rolls two 6 in a row and looses roundscore if he rolls 1. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
*/


var scores,roundscore,activeplayer,gamePlaying,lastDice;

var rules=confirm('GAMERULES:The game has 2 players, playing in rounds ,In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score BUT player looses his round score when he rolls 1 and he looses his global score if he rolls 6 2times in a row .after that it is nextplayer turn. The player can choose to HOLD button, which means that his ROUND score gets added to his GLBAL score. After that, it is the next player turn,finally player who reaches final score(if u not given default value is 100 ) first is winner');
init();


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    //1.random number
    var dice=Math.floor(Math.random()*6)+1;
    //2.display 
    var diceDOM=document.querySelector('.dice');
      diceDOM.style.display='block';
    diceDOM.src='dice-' + dice + '.png';
    //3.update roundscore
    if(lastDice===6 && dice===6){
        //GLOBAL SCORE becomes 0;
        scores[activeplayer]=0;
         document.querySelector('#score-' + activeplayer).textContent= scores[activeplayer];
        nextplayer();
    }else if(dice!==1){
        //update roundscore
        roundscore+=dice;
        //UI
         document.getElementById('current-' + activeplayer).textContent=roundscore;
 
    }else{
        
        //nextplayer
        nextplayer();
    }
               lastDice=dice;
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
  
    if(gamePlaying){
       //1.update global score
    scores[activeplayer]+=roundscore;
    document.querySelector('#score-' + activeplayer).textContent= scores[activeplayer];
          var input=document.querySelector('.final-score').value;
        var winningscore;
         // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
    if(input){
    winningscore=input;
    }else{
    winningscore=50;
    }
    if(scores[activeplayer]>=winningscore){
           document.querySelector('#name-' + activeplayer).textContent='!winner';
        document.querySelector('.player-' + activeplayer + '-'+ 'panel').classList.add('winner');
          document.querySelector('.player-' + activeplayer + '-'+ 'panel').classList.remove('active');
          document.querySelector('.dice').style.display='none';
        gamePlaying=false;
    }else{
    //2.nextplayer
    nextplayer();
    }
    }
});
document.querySelector('.btn-new').addEventListener('click',init);
function nextplayer(){
    
        activeplayer===0?activeplayer=1:activeplayer=0;
        roundscore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');//if present removes ,if not present adds
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
}


function init(){
    
    scores=[0,0];
    activeplayer=0;
    roundscore=0;
    gamePlaying=true;
  
    document.querySelector('.dice').style.display='none';
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