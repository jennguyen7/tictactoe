/*
 Project #1: The Game

Overview

Let's start out with something fun - a game!

Everyone will get a chance to be creative, and work through some really tough programming challenges – Let's start out with something fun - a game! We'll be making tic tac toe (knots and crosses). What a nice surprise! But it's up to you to come up with a fun and interesting approach to this classic game.

You will be working individually for this project, but we'll be guiding you along the process and helping you as you go. Show us what you've got!

Technical Requirements

Your app must:

Render a game in the browser
Switch turns between more than one player
Design logic for winning & visually display which player won
Include separate HTML / CSS / JavaScript files
Stick with KISS (Keep It Simple Stupid) principles
Use Javascript for DOM manipulation
Deploy your game online, where the rest of the world can access it
Use semantic markup for HTML and CSS (adhere to best practices)
Necessary Deliverables

Due today - At least one artefact of either pseudocode, flow diagram, wireframe, mockup or storyboard demonstrating planning - Due today
A working game, built by you, hosted somewhere on the internet
A link to your hosted working game in the URL section of your GitHub repo
A git repository hosted on GitHub, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
Bonus extensions

These are for extra credit! DON'T focus on these until you've hit the core requirements.

Keep track of multiple game rounds with a win counter
Allow game customizable options, time limits, board size, game rounds, name & profiles etc
Allow players to customize their token (X, O, name, picture, avatar etc)
Get inventive with your styling - research CSS effects, animations to spiff things up
Research LocalStorage or SessionStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
Use timers to display "waiting..." messages while users are waiting to be matched
Resarcg web audio API and add sound effects to your game
Be creative! Bend the rules and give it a twist!
Suggested Ways to Get Started

Break the project down into different components (data, presentation, markup, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
Use your Development Tools (console.log, inspector, debugger, etc) to debug and solve problems
Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... procrastinating.
Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
Consult documentation resources (MDN etc.) at home to better understand what you’ll be getting into.
Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.
Useful Resources

MDN Javascript Docs (a great reference for all things Vanilla Javascript)
GitHub Pages (for hosting your game)
lol commits
Project Feedback + Evaluation

Project Workflow: Did you complete the user pseudocode, flow diagram, wireframe, mockup, user stories, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

Technical Requirements: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

Creativity: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

Code Quality: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

Deployment: Did you deploy your application to a public url using GitHub Pages?

*/

//tic tac toe game
//Grid constructed of 3 columns and 3 rows
//Press "start" button to commence it
//2 players available
//Alert boxes will pop up just before each player has the first turn.
//Alert box: "Player 1 is X." After Player 1 has a turn
//Alert box: "Player 2 is Y."
//Player 1 automatically assigned "X" and gray color
//Player 2 automatically assigned "O" and skyblue color

//taking turns!! Click on a square, X/O will appear after click.
//If sqaure already occupied, nothing happens OR box that updates to let player know
//whether it is Player1 or Player2's turn automatically. 
//Or the box can update image of the token to indicate player's turn. 
//i.e. token image changes immediately after previous player clicks on an empty square.
//nothing happens if player clicks outside of the grid.

//Alert boxes will stop the script. It will annoy the player.

//If player forgets to have a turn nothing happens
//Once a player scores 3 in a row (3 across, 3 diagnol, 3 down)
//Game will recognise which player got 3 in a row.
//Alert box: "Game over! X wins!" OR "Game over! O wins!" Press "okay" screen then re starts with empty grid


console.log("game");

//will output the array of all the div
//document.querySelectorAll(".main-box div")

//!!! document.querySelector(".main-box div") will only return the FIRST div it finds

//access the array using box notation
//document.querySelectorAll(".main-box div")[i]





var p1WinConditions = [

["box1", "box2", "box3"],
["box4", "box5", "box6"],
["box7", "box8", "box9"],
["box1", "box4", "box7"],
["box2", "box5", "box8"],
["box3", "box6", "box9"],
["box1", "box5", "box9"],
["box3", "box5", "box7"]

];

var p2WinConditions = [

["box1", "box2", "box3"],
["box4", "box5", "box6"],
["box7", "box8", "box9"],
["box1", "box4", "box7"],
["box2", "box5", "box8"],
["box3", "box6", "box9"],
["box1", "box5", "box9"],
["box3", "box5", "box7"]

];



var currentPlayer = 1; //using numbers will be easier to track
var p1Arr = [];
var p2Arr = [];
   
var play = function (event) {

	if (currentPlayer % 2 !=0 && currentPlayer <= 9){ 
		event.target.classList.add("occupied1");
		//retrieve the id of the box clicked
		//compare using forEach
		//push into resultB array
		var p1Id = event.target.id;
		console.log(p1Id);
		//id gets pushed into an array, and retain the information
		p1Arr.push(p1Id);
		console.log(p1Arr);
	} else if (currentPlayer <= 9) {
		event.target.classList.add("occupied2");
		var p2Id = event.target.id;
		console.log(p2Id);
		p2Arr.push(p2Id);
		console.log(p2Arr);
	} 
	currentPlayer ++ ;//you are increasing the count each time to enable a type of loop

	if (p1Arr.length >= 3) {
		var winningCombinationPlayer1TheWinner = detWinner (p1WinConditions, p1Arr);
		console.log("winningCombinationPlayer1TheWinner:"+winningCombinationPlayer1TheWinner);
	}
	if (p2Arr.length >= 3) {
		var winningCombinationPlayer2TheWinner = detWinner (p2WinConditions, p2Arr);
		console.log("winningCombinationPlayer2TheWinner:"+winningCombinationPlayer2TheWinner);
	}
}

var detWinner = function (winConditions, pArr) {
	var winningCombination;
	for (let win of winConditions) {
		var winCheck = true;
		for (let p1x of pArr) {
			if(win.indexOf(p1x) < 0) {
				winCheck = false;
				break;
			}
		}
		if (winCheck === true) {
			winningCombination = win;
			break;
		}
	}
	return winningCombination;
}




//detWinner (p2WinConditions)





/*
if () {
			console.log("Player 1 wins!");

			}else if(        _.contains(p2Arr) ) {
				p2WinConditions.forEach(function(somethingElse) {
				if (p2Arr === //one of the arrats) {
				console.log("Player 2 wins!");
			})
		}

*/

var allBoxes = document.querySelectorAll(".square");
//this is an object, not array! but it looks like an array of objects!
//This will also work
//var allBoxes = document.querySelectorAll(".main-box div");


allBoxes.forEach(function(box) {
	box.addEventListener("click", play);
})








/*
var resultB = ["n", "n", "n",
			"n", "n", "n",
			"n", "n", "n"];
*/

/*
for (var i = 0; i < resultB.length; i++) {
	//if current player chooses a tile, that tile will no longer be available for the next player
	if (currentPlayer === player2)	{
		currentPlayer = player1;
	} else {
		currentPlayer = player2;
		};

	if(document.querySelector.classList("occupied1") || document.querySelector.classList("occupied2")) {	
		alert("choose another square!")
		}else {
			var chosen; 
			chosen = document.querySelectorAll(".main-box div")[i];
			//take chosen and link to resultB array
			var resultBUp = function (i, currentPlayer){
				console.log(resultB.splice(i, 0, currentPlayer));
				return resultB.splice(i, 0, currentPlayer); //returns updated array
			}	
		};	
}
*/

/*
//keeping track of players but I re wrote it in the main function. Not sure if
//this needs to be separate function
var changeTurn = function (playerT) {
	if (playerT === true) {
		playerT = player1;
		} else {
			playerT = player2;
		}
	}
}

*/





