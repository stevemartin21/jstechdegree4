///  Start Grab the start button
var start = document.getElementById('start');
var closeStart = document.querySelector('#start .button');
// Finish 

var finish = document.querySelector('#finish');
var openFinish = document.querySelector('#finish .button');
finish.style.display='none';
var win = document.querySelectorAll('.screen.screen-win')[0];
//hide the win screen 
win.style.display='none';

var message = document.querySelectorAll('.message')[0];
//

var board = document.querySelector('#board');
//this is to grab the board to hide and display based on user interaction

//select the player and boxes and all the li's
var player1 = document.getElementById('player1');
var totalPlayers= 2;
var player2 = document.getElementById('player2');
var boxes = document.querySelector('.boxes');
var choices =document.querySelectorAll('.boxes li');

//Grab All Choices Boxes

var choices0 =document.querySelectorAll('.boxes li')[0];
var choices1 =document.querySelectorAll('.boxes li')[1];
var choices2 =document.querySelectorAll('.boxes li')[2];
var choices3 =document.querySelectorAll('.boxes li')[3];
var choices4 =document.querySelectorAll('.boxes li')[4];
var choices5 =document.querySelectorAll('.boxes li')[5];
var choices6 =document.querySelectorAll('.boxes li')[6];
var choices7 =document.querySelectorAll('.boxes li')[7];
var choices8 =document.querySelectorAll('.boxes li')[8];

// create two arrays to store values when the player selects a value, the values are different depending on which player is playing and selects which box

var arrayA =[];
var arrayB =[]; 
var squaresTaken =[0,1,2,3,4,5,6,7,8]; 
var tie = 0;


function addListener(){

	if( squaresTaken.indexOf(0)> -1){
		for(i=0; i<choices.length; i++){
			$(choices[i]).on('mouseover', function(e){
				
				if($(player1).hasClass('active') == true ){
					e.target.style.backgroundImage = "url('img/o.svg')";
				}else if ($(player2).hasClass('active') == true){
					e.target.style.backgroundImage = "url('img/x.svg')";
				}else {
				console.log('it is not empty')
				}
	
		}	)
	}
	}
	
}

addListener();



function addListener2(){

	if( squaresTaken.indexOf(0)> -1){
		for(i=0; i<choices.length; i++){
			$(choices[i]).on('mouseout', function(e){
				
				if($(player1).hasClass('active') == true ){
					e.target.style.backgroundImage = "url('')";
				}else if ($(player2).hasClass('active') == true){
					e.target.style.backgroundImage = "url('')";
				}else {
				console.log('it is not empty')
				}
	
		}	)
	}
	}
	
}

addListener2();

// Set up a selector for depending on e.target and add number to array 

/////List of Functions DRY
//Selects a random number to select either the first or second player
function random(){
	var answer = Math.floor((Math.random()*totalPlayers));
	return answer
}
// CLoses the start page and triggers the start of the game
closeStart.addEventListener('click', function(){

	// Hide Start Page
	start.style.display='none';
	// calls random start to start game
	let randomStart = random();
	
	// This is an if statement to randomly select a player to start the game , depending on random number determines who is selected active

	if (randomStart=== 0){
			player1.classList.add('active');
		}else if (randomStart=== 1){
		player2.classList.add('active');
	}

	// loop to run over li elements to add mouseover effect on li's and add background image
	////////////////////////

	for (i=0; i<choices.length; i++){
			$(choices[i]).on('click', function(e){

				if 	($(player1).hasClass('active')== true){
						e.target.classList.add('box-filled-1');
						
						
						// if the player seelcts one of the li's add the class and a number is added to an array
						
						if (e.target== choices0){	
							arrayA.push(0);
							var i = squaresTaken.indexOf(0);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							
							$(choices0).off();
							
							
							tie ++
							//addListener()
							
							}

						else if(e.target== choices1){
							arrayA.push(1);	
							var i = squaresTaken.indexOf(1);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices1).off();
							
							
							tie ++
						}
						else if(e.target== choices2){
							arrayA.push(2);
							var i = squaresTaken.indexOf(2);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices2).off();
							
							tie ++
						}
						else if(e.target== choices3){
							arrayA.push(3);
							var i = squaresTaken.indexOf(3);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices3).off();
							
							tie ++
						}else if(e.target== choices4){
							arrayA.push(4);
							var i = squaresTaken.indexOf(4);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices4).off();
							
							tie ++
						}else if(e.target== choices5){
							arrayA.push(5);
							var i = squaresTaken.indexOf(5);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices5).off();
							
							tie ++
						}else if(e.target== choices6){
							arrayA.push(6);
							var i = squaresTaken.indexOf(6);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices6).off();
							
							tie ++
						}else if(e.target== choices7){
							arrayA.push(7);
							var i = squaresTaken.indexOf(7);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices7).off();
							
							tie ++
						}else if(e.target== choices8){
							arrayA.push(8);
							var i = squaresTaken.indexOf(8);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices8).off();
							
							tie ++
							
						}
					//After the player chooses something it switches to the next players turn	
						player2.classList.add('active');
						player1.classList.remove("active");

					// index array 012, 345, 678, 036, 147, 258, 048, 642 winner
					//if the new array has a certain combination of numebrs the wiiner screen is flashed

					if (arrayA.indexOf(0)>-1 && arrayA.indexOf(1)>-1 && arrayA.indexOf(2)>-1 ){
						
						win.style.display='block';
						win.classList.add('screen-win-one');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}
					else if (arrayA.indexOf(3)>-1 && arrayA.indexOf(4)>-1 && arrayA.indexOf(5)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-one');
						message.innerHTML = 'Winner';
						board.style.display='none';

					}else if (arrayA.indexOf(6)>-1 && arrayA.indexOf(7)>-1 && arrayA.indexOf(8)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-one');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}else if (arrayA.indexOf(0)>-1 && arrayA.indexOf(3)>-1 && arrayA.indexOf(6)>-1 ){	
						win.style.display='block';
						win.classList.add('screen-win-one');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}else if (arrayA.indexOf(1)>-1 && arrayA.indexOf(4)>-1 && arrayA.indexOf(7)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-one');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}else if (arrayA.indexOf(2)>-1 && arrayA.indexOf(5)>-1 && arrayA.indexOf(8)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-one');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}else if (arrayA.indexOf(0)>-1 && arrayA.indexOf(4)>-1 && arrayA.indexOf(8)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-one');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}else if (arrayA.indexOf(6)>-1 && arrayA.indexOf(4)>-1 && arrayA.indexOf(2)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-one');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}
					else if(tie=== 9 ){
						win.style.display='block';
						win.classList.add('screen-win-tie');
						message.innerHTML = 'Its a tie';
						board.style.display='none';

					}

				}


				else if($(player2).hasClass('active') == true){

						e.target.classList.add('box-filled-2');
						//e.target.setAttribute('disabled', true);
						
						// Change the class name to the list  instead of disabled 
						// if the player seelcts one of the li's add the class and a numer is added to an array
						
						if (e.target== choices0 ){
							arrayB.push(10);
							var i = squaresTaken.indexOf(0);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices0).off();

							
							
							tie ++
						}
						else if(e.target== choices1){
							arrayB.push(11);
							var i = squaresTaken.indexOf(1);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices1).off();
								
							tie ++
						}
						else if(e.target== choices2){
							arrayB.push(12);
							var i = squaresTaken.indexOf(2);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices2).off();
							tie ++
						}
						else if(e.target== choices3){
							arrayB.push(13);
							var i = squaresTaken.indexOf(3);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices3).off();
							
							tie ++
						}else if(e.target== choices4){
							arrayB.push(14);
							var i = squaresTaken.indexOf(4);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices4).off();
							
							tie ++
						}else if(e.target== choices5){
							arrayB.push(15);
							var i = squaresTaken.indexOf(5);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices5).off();
							
							tie ++
						}else if(e.target== choices6){
							arrayB.push(16);
							var i = squaresTaken.indexOf(6);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices6).off();
							
							tie ++
						}else if(e.target== choices7){
							arrayB.push(17);
							var i = squaresTaken.indexOf(7);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices7).off();
							
							tie ++
						}else if(e.target== choices8){
							arrayB.push(18);
							var i = squaresTaken.indexOf(8);
							if(i != -1) {
								squaresTaken.splice(i, 1);
							}
							$(choices8).off();
							
							tie ++
							
						}
						//After the player chooses something it switches to the next players turn	
						
						player1.classList.add('active');
						player2.classList.remove("active");
					// index array 012, 345, 678, 036, 147, 258, 048, 642 winner
					//if the new array has a certain combination of numebrs the wiiner screen is flashed


					if(arrayB.indexOf(10)>-1 && arrayB.indexOf(11)>-1 && arrayB.indexOf(12)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-two');
						message.innerHTML = 'Winner';
						board.style.display='none';

					}else if(arrayB.indexOf(13)>-1 && arrayB.indexOf(14)>-1 && arrayB.indexOf(15)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-two');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}else if(arrayB.indexOf(16)>-1 && arrayB.indexOf(17)>-1 && arrayB.indexOf(18)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-two');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}else if(arrayB.indexOf(10)>-1 && arrayB.indexOf(13)>-1 && arrayB.indexOf(16)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-two');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}else if(arrayB.indexOf(11)>-1 && arrayB.indexOf(14)>-1 && arrayB.indexOf(17)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-two');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}else if(arrayB.indexOf(12)>-1 && arrayB.indexOf(15)>-1 && arrayB.indexOf(18)>-1 ){
						win.style.display='block';	
						win.classList.add('screen-win-two');
						message.innerHTML = 'Winner';
						board.style.display='none';
					}else if(arrayB.indexOf(10)>-1 && arrayB.indexOf(14)>-1 && arrayB.indexOf(18)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-two');
						message.innerHTML = 'Winner';
						board.style.display='none';	
					}else if(arrayB.indexOf(12)>-1 && arrayB.indexOf(14)>-1 && arrayB.indexOf(16)>-1 ){
						win.style.display='block';
						win.classList.add('screen-win-two');
						message.innerHTML = 'Winner';
						board.style.display='none';	
					}else if(tie=== 9 ){
						win.style.display='block';
						win.classList.add('screen-win-tie');
						message.innerHTML = 'Its a tie';
						board.style.display='none';

					}
			}
	});

}

});

 
setTimeout(openFinish.addEventListener('click', function(){
	

	//win.style.display='none';
	location.assign('index.html');
	
	
}), 2000);
	


	


