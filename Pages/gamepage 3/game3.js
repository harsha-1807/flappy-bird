// speed 
let move_speed = 3; 
	
// Gravity 
let gravity = 0.5; 

// score
let score = 0;


// sounds 
let wing = new Audio("../assets/wing.mp3");
let hit = new Audio("../assets/hit.mp3");
let point = new Audio("../assets/point.mp3");
let die = new Audio("../assets/die.mp3");

// creating bird element
let bird = document.querySelector('.bird'); 
	
let bird_props = bird.getBoundingClientRect(); 
let background = 
	document.querySelector('.background') 
			.getBoundingClientRect(); 


//name element
let Name = 	document.querySelector('.name');
let input = localStorage.getItem("Name2")
// console.log(input)
let pname = document.getElementById("pname")
pname.textContent = input + "'s  "+"  turn"
// creating score element 
let score_val = 
	document.querySelector('.score_val'); 
let message = 
	document.querySelector('.message'); 
let score_title = 
	document.querySelector('.score_title'); 
	


// make button hidden in desktop mode 
let button = document.getElementById("touchbutton")
button.textContent = " "

// initial 
let game_state = 'Start'; 
	
// key press
document.addEventListener('keydown', (e) => { 
	
// Starting the game if enter key is pressed 
if (e.key == ' ' && 
	game_state != 'Play') { 
	document.querySelectorAll('.pipe_sprite') 
			.forEach((e) => { 
	e.remove(); 
	}); 
	bird.style.top = '40vh';
	game_state = 'Play'; 
	message.innerHTML = '';
	pname.textContent = ' '
	Name.innerHTML = input;
	score_title.innerHTML = 'Score : '; 
	score_val.innerHTML = '0';
	play(); 
} 
}); 
function play() { 
function move() { 
	
	// Detect game has ended or not
	if (game_state != 'Play') return; 
	
	// creating pipe element
	let pipe_sprite = document.querySelectorAll('.pipe_sprite'); 
	pipe_sprite.forEach((element) => { 
		
	let pipe_sprite_props = element.getBoundingClientRect(); 
	bird_props = bird.getBoundingClientRect(); 
		
	// Delete the pipes if they have moved out of the screen 
	if (pipe_sprite_props.right <= 0) { 
		element.remove(); 
	} else { 
		// Collision detection with bird and pipes 
		if ( 
		bird_props.left < pipe_sprite_props.left + 
		pipe_sprite_props.width && 
		bird_props.left + 
		bird_props.width > pipe_sprite_props.left && 
		bird_props.top < pipe_sprite_props.top + 
		pipe_sprite_props.height && 
		bird_props.top + 
		bird_props.height > pipe_sprite_props.top 
		) { 
			hit.play();
			
		// Changing game state and end the game after collision
		game_state = 'End';
        window.open("../score page 2p/score2.html","_self")
		// message.innerHTML = 'Press Enter To Restart'; 
		// message.style.left = '28vw'; 
		return; 
		} else { 
		// Increasing the score if player crossed the pipe
		if ( 
			pipe_sprite_props.right < bird_props.left && 
			pipe_sprite_props.right + 
			move_speed >= bird_props.left && 
			element.increase_score == '1'
			
		) { 
			score_val.innerHTML = +score_val.innerHTML + 1;
			// console.log(score_val)
			score++;
			point.play()
	
			localStorage.setItem("score p2",score)

			
		}
		
		element.style.left = 
			pipe_sprite_props.left - move_speed + 'px'; 
		} 
	} 
	}); 

	requestAnimationFrame(move); 
} 
requestAnimationFrame(move); 

let bird_dy = 0; 
function apply_gravity() { 
	if (game_state != 'Play') return; 
	bird_dy = bird_dy + gravity; 
	document.addEventListener('keydown', (e) => { 
	if (e.key == 'ArrowUp' || e.key == ' ') { 
		bird_dy = -7.6; 
		wing.play();
	} 
	}); 

	// Collision detection with bird and 
	// window top and bottom 

	if (bird_props.top <= 0 || 
		bird_props.bottom >= background.bottom) { 
			die.play();
			game_state = 'End'; 
	// message.innerHTML = 'Press Enter To Restart'; 
	// message.style.left = '28vw'; 
    window.open("../score page 2p/score2.html","_self")

	return; 
	} 
	bird.style.top = bird_props.top + bird_dy + 'px'; 
	bird_props = bird.getBoundingClientRect(); 
	requestAnimationFrame(apply_gravity); 
} 
requestAnimationFrame(apply_gravity); 

let pipe_seperation = 0; 
	
// Constant value for the gap between two pipes 
let pipe_gap = 30; 
function create_pipe() { 
	if (game_state != 'Play') return; 
	
	// Create another set of pipes 
	// if distance between two pipe has exceeded 
	// a predefined value 
	if (pipe_seperation > 115) { 
	pipe_seperation = 0 
		
	// Calculate random position of pipes on y axis 
	let pipe_posi = Math.floor(Math.random() * 43) + 8; 
	let pipe_sprite_inv = document.createElement('div'); 
	pipe_sprite_inv.className = 'pipe_sprite'; 
	pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh'; 
	pipe_sprite_inv.style.left = '100vw'; 
		
	// Append the created pipe element in DOM 
	document.body.appendChild(pipe_sprite_inv); 
	let pipe_sprite = document.createElement('div'); 
	pipe_sprite.className = 'pipe_sprite'; 
	pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh'; 
	pipe_sprite.style.left = '100vw'; 
	pipe_sprite.increase_score = '1'; 
		
	// Append the created pipe element in DOM 
	document.body.appendChild(pipe_sprite); 
	} 
	pipe_seperation++; 
	requestAnimationFrame(create_pipe); 
} 
requestAnimationFrame(create_pipe); 
} 


localStorage.setItem("score p2", "0")










// responsive game
var x = window.matchMedia("(max-width: 600px)")
if(x.matches){
	console.log('mobile')
	button.textContent = "start"
	

	let message = document.getElementById("message")
	message.textContent = "Use the button below to start and jump"


	button.onclick = function() { 
		console.log("clicked");
		button.textContent = "Jump"
		pname.textContent = " "
		// Starting the game if space key is pressed 
		if (game_state != 'Play') { 
			document.querySelectorAll('.pipe_sprite') 
					.forEach((e) => { 
			e.remove(); 
			}); 
			
			bird.style.top = '40vh';
			game_state = 'Play'; 
			message.innerHTML = '';
			
			Name.innerHTML = input;
			score_title.innerHTML = 'Score : '; 
			score_val.innerHTML = '0';
			play(); 
			
		} 
		}; 
		function play() { 
		function move() { 
			
			// Detecting game has ended or not
			if (game_state != 'Play') return; 
			
			// creating pipe element
			let pipe_sprite = document.querySelectorAll('.pipe_sprite'); 
			pipe_sprite.forEach((element) => { 
				
			let pipe_sprite_props = element.getBoundingClientRect(); 
			bird_props = bird.getBoundingClientRect(); 
				
			// Delete the pipes if they have moved out of the screen 
			if (pipe_sprite_props.right <= 0) { 
				element.remove(); 
			} else { 
				// Collision detection with bird and pipes 
				if ( 
				bird_props.left < pipe_sprite_props.left + 
				pipe_sprite_props.width && 
				bird_props.left + 
				bird_props.width > pipe_sprite_props.left && 
				bird_props.top < pipe_sprite_props.top + 
				pipe_sprite_props.height && 
				bird_props.top + 
				bird_props.height > pipe_sprite_props.top 
				) { 
				hit.play()
				
				// Changing game state and end the game after collision
				game_state = 'End';
				
				
				
				
				window.open("../score page 2p/score2.html","_self")
				// message.innerHTML = 'Press Enter To Restart'; 
				// message.style.left = '28vw'; 
				return; 
				} else { 
				// Increasing the score if player crossed the pipe
				if ( 
					pipe_sprite_props.right < bird_props.left && 
					pipe_sprite_props.right + 
					move_speed >= bird_props.left && 
					element.increase_score == '1'
					
				) { 
					score_val.innerHTML = +score_val.innerHTML + 1;
					// console.log(score_val)
					score++;
					point.play()
					
					localStorage.setItem("score p2",score)
					
		
					
				}
				
				element.style.left = 
					pipe_sprite_props.left - move_speed + 'px'; 
				} 
			} 
			}); 
		
			requestAnimationFrame(move); 
		} 
		requestAnimationFrame(move); 
		
		let bird_dy = 0; 
		function apply_gravity() { 
			if (game_state != 'Play') return; 
			
			bird_dy = bird_dy + gravity; 
			button.onclick = function() {
			
				bird_dy = -7.6; 
				wing.play();
				// die.play()
			} 
			 
		
			// Collision detection with bird and 
			// window top and bottom 
		
			if (bird_props.top <= 0 || 
				bird_props.bottom >= background.bottom) { 
			die.play()
			game_state = 'End'; 
			// message.innerHTML = 'Press Enter To Restart'; 
			// message.style.left = '28vw'; 
			die.play();
			window.open("../score page 2p/score2.html","_self")
		
			return; 
			} 
			bird.style.top = bird_props.top + bird_dy + 'px'; 
			bird_props = bird.getBoundingClientRect(); 
			requestAnimationFrame(apply_gravity); 
		} 
		requestAnimationFrame(apply_gravity); 
		
		let pipe_seperation = 0; 
			
		// Constant value for the gap between two pipes 
		let pipe_gap = 30; 
		function create_pipe() { 
			if (game_state != 'Play') return; 
			
			// Create another set of pipes 
			// if distance between two pipe has exceeded 
			// a predefined value 
			if (pipe_seperation > 115) { 
			pipe_seperation = 0 
				
			// Calculate random position of pipes on y axis 
			let pipe_posi = Math.floor(Math.random() * 43) + 8; 
			let pipe_sprite_inv = document.createElement('div'); 
			pipe_sprite_inv.className = 'pipe_sprite'; 
			pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh'; 
			pipe_sprite_inv.style.left = '100vw'; 
				
			// Append the created pipe element in DOM 
			document.body.appendChild(pipe_sprite_inv); 
			let pipe_sprite = document.createElement('div'); 
			pipe_sprite.className = 'pipe_sprite'; 
			pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh'; 
			pipe_sprite.style.left = '100vw'; 
			pipe_sprite.increase_score = '1'; 
				
			// Append the created pipe element in DOM 
			document.body.appendChild(pipe_sprite); 
			} 
			pipe_seperation++; 
			requestAnimationFrame(create_pipe); 
		} 
		requestAnimationFrame(create_pipe);
		} 




}