/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundscores,activeplayer,gamePlaying;



var rules=confirm('GAMERULES:The game has 2 players, playing in rounds ,In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score BUT player looses his round score when he rolls 1  and then its nextplayer turn, The player can choose the HOLD button, which means that his ROUND score gets added to his GLOBAL score. After that, it is the next player turn ,finally player who reaches final score(if u not given default value is 100 ) first is winner');
//here 'gamePlaying' is a STATE variable that tells us condition of a system; 
init();
document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
    //1.random number
    var dice=Math.floor(Math.random()*6)+1;
    
    //2.dispplay result
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-' + dice + '.png';
    
    //3.update round score if dice not equal to 1;
    if(dice!==1){
        //add score
        roundscore+=dice;
        document.querySelector('#current-' + activeplayer).textContent=roundscore;
        
    }else{
        //2.nextplayer
        nextplayer();
    }
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
    winningscore=100;
    }
    
    
     //check if player wins the game
        if(scores[activeplayer]>=winningscore){
            gamePlaying=false;
        document.querySelector('#name-' + activeplayer).innerHTML= '<em>' + "!winner" + '</em>';
        document.querySelector('.player-'+ activeplayer + '-'+'panel').classList.add('winner');
       document.querySelector('.player-'+ activeplayer + '-'+'panel').classList.remove('active');
            document.querySelector('.dice').style.display='none';
        }else{
            
            //nextplayer
            nextplayer();
   
        }
    
    }
});


document.querySelector('.btn-new').addEventListener('click',init); //passing init function as arg;

function nextplayer(){
    
    
        activeplayer===0?activeplayer=1:activeplayer=0;
        roundscore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');//if present removes ,if not present adds
        document.querySelector('.player-1-panel').classList.toggle('active');
          //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.dice').style.display='none';
}


function init(){
    
    scores=[0,0];
roundscore=0;
activeplayer=0;
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













//document.querySelector('#current-' + activeplayer).textcontent=dice;
//document.querySelector('#current-' + activeplayer).innerHTML= '<em>' + dice + '</em>';//used to change html content;