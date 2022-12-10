
let click = 0;
let field = [0,0,0,0,0,0,0,0,0];
let ai = 0;
let difficultylevel = 0;
let defendstate = 0;
let AIattackordefend = 0;
let dontcheckdraw = 0;

game()

function game()
{
	
	const form = document.querySelector("form");
	const log = document.querySelector("#log");

	form.addEventListener(
	  "submit",
	  (event) => {
		const data = new FormData(form);
		
		for (const entry of data) {
			output = `${entry[1]}\r`;
		}


		if(output==1)
		{	
			newgamereset()			
			ai = 0;
		}

		else if(output==2)
		{	
			difficultylevel = 0;
			newgamereset()			
			ai = 1;
		}
		
		
		else if(output==3)
		{	
			difficultylevel = 0;
			newgamereset()	
			ai = 1;
			

			var random = Math.floor(Math.random() * 9);
			click = click + 1;
			
			let zero = '0';
			let randomplus1 = random+1;
			let join = zero.concat(randomplus1);
					
			let startstring = '../TicTacToe/2/';
			let endstring = '.bmp';
			let join2 = startstring.concat(randomplus1);
			let join3 = join2.concat(endstring);
			
			field[random] = 2;
			document.getElementById(join).src = join3;
							
		}

		else if(output==4)
		{	
			difficultylevel = 1;
			newgamereset()		
			ai = 1;
		}
		
		
		else if(output==5)
		{	
			difficultylevel = 1;
			newgamereset()		
			ai = 1;
			

			var random = Math.floor(Math.random() * 9);
			click = click + 1;
			
			let zero = '0';
			let randomplus1 = random+1;
			let join = zero.concat(randomplus1);
					
			let startstring = '../TicTacToe/2/';
			let endstring = '.bmp';
			let join2 = startstring.concat(randomplus1);
			let join3 = join2.concat(endstring);
			
			field[random] = 2;
			document.getElementById(join).src = join3;
							
		}
		else{
			newgamereset()
			ai = 0;
		}

		event.preventDefault();
	  },
	  false
	);
	

	
	document.getElementById("01").addEventListener("click", function()
	{
		if (field[0]==0)
		{
			click = click + 1;
			if (click % 2 == 0)
			{
				field[0] = 1;
				document.getElementById("01").src = '../TicTacToe/1/1.bmp';
			} else {
				field[0] = 2;
				document.getElementById("01").src = '../TicTacToe/2/1.bmp';
			}
			
			if (click>4){
				checkredwin()
				checkbluewin()
			}

			if (click>8 && dontcheckdraw == 0){
				var win = document.getElementById("win");
	    		win.innerHTML = "Draw!";
			}
			dontcheckdraw = 0;
			if (ai == 1)
			{
				aimakesmove()
			}
		}		
	});

	document.getElementById("02").addEventListener("click", function()
	{
		if (field[1]==0)
		{
			click = click + 1;
			if (click % 2 == 0)
			{
				field[1] = 1;
				document.getElementById("02").src = '../TicTacToe/1/2.bmp';
			} else {
				field[1] = 2;
				document.getElementById("02").src = '../TicTacToe/2/2.bmp';
			}
			if (click>4){
				checkredwin()
				checkbluewin()
			}
			if (click>8 && dontcheckdraw == 0){
				var win = document.getElementById("win");
	    		win.innerHTML = "Draw!";
			}
			dontcheckdraw = 0;
			if (ai == 1)
			{
				aimakesmove()
			}	
		}		
	});

	document.getElementById("03").addEventListener("click", function()
	{
		if (field[2]==0)
		{
			click = click + 1;
			if (click % 2 == 0)
			{
				field[2] = 1;
				document.getElementById("03").src = '../TicTacToe/1/3.bmp';
			} else {
				field[2] = 2;
				document.getElementById("03").src = '../TicTacToe/2/3.bmp';
			}
			if (click>4){
				checkredwin()
				checkbluewin()
			}
			if (click>8 && dontcheckdraw == 0){
				var win = document.getElementById("win");
	    		win.innerHTML = "Draw!";
			}
			dontcheckdraw = 0;
			if (ai == 1)
			{
				aimakesmove()
			}	
		}		
	});

	document.getElementById("04").addEventListener("click", function()
	{
		if (field[3]==0)
		{
			click = click + 1;
			if (click % 2 == 0)
			{
				field[3] = 1;
				document.getElementById("04").src = '../TicTacToe/1/4.bmp';
			} else {
				field[3] = 2;
				document.getElementById("04").src = '../TicTacToe/2/4.bmp';
			}
			if (click>4){
				checkredwin()
				checkbluewin()
			}
			if (click>8 && dontcheckdraw == 0){
				var win = document.getElementById("win");
	    		win.innerHTML = "Draw!";
			}
			dontcheckdraw = 0;
			if (ai == 1)
			{
				aimakesmove()
			}	
		}	
	});

	document.getElementById("05").addEventListener("click", function()
	{
		if (field[4]==0)
		{
			click = click + 1;
			if (click % 2 == 0)
			{
				field[4] = 1;
				document.getElementById("05").src = '../TicTacToe/1/5.bmp';
			} else {
				field[4] = 2;
				document.getElementById("05").src = '../TicTacToe/2/5.bmp';
			}
			if (click>4){
				checkredwin()
				checkbluewin()
			}
			if (click>8 && dontcheckdraw == 0){
				var win = document.getElementById("win");
	    		win.innerHTML = "Draw!";
			}
			dontcheckdraw = 0;
			if (ai == 1)
			{
				aimakesmove()
			}	
		}	
	});

	document.getElementById("06").addEventListener("click", function()
	{
		if (field[5]==0)
		{
			click = click + 1;
			if (click % 2 == 0)
			{
				field[5] = 1;
				document.getElementById("06").src = '../TicTacToe/1/6.bmp';
			} else {
				field[5] = 2;
				document.getElementById("06").src = '../TicTacToe/2/6.bmp';
			}
			if (click>4){
				checkredwin()
				checkbluewin()
			}
			if (click>8 && dontcheckdraw == 0){
				var win = document.getElementById("win");
	    		win.innerHTML = "Draw!";
			}
			dontcheckdraw = 0;
			if (ai == 1)
			{
				aimakesmove()
			}	
		}		
	});

	document.getElementById("07").addEventListener("click", function()
	{
		if (field[6]==0)
		{
			click = click + 1;
			if (click % 2 == 0)
			{
				field[6] = 1;
				document.getElementById("07").src = '../TicTacToe/1/7.bmp';
			} else {
				field[6] = 2;
				document.getElementById("07").src = '../TicTacToe/2/7.bmp';
			}
			if (click>4){
				checkredwin()
				checkbluewin()
			}
			if (click>8 && dontcheckdraw == 0){
				var win = document.getElementById("win");
	    		win.innerHTML = "Draw!";
			}
			dontcheckdraw = 0;
			if (ai == 1)
			{
				aimakesmove()
			}	
		}		
	});

	document.getElementById("08").addEventListener("click", function()
	{
		if (field[7]==0)
		{
			click = click + 1;
			if (click % 2 == 0)
			{
				field[7] = 1;
				document.getElementById("08").src = '../TicTacToe/1/8.bmp';
			} else {
				field[7] = 2;
				document.getElementById("08").src = '../TicTacToe/2/8.bmp';
			}
			if (click>4){
				checkredwin()
				checkbluewin()
			}
			if (click>8 && dontcheckdraw == 0){
				var win = document.getElementById("win");
	    		win.innerHTML = "Draw!";
			}
			dontcheckdraw = 0;
			if (ai == 1)
			{
				aimakesmove()
			}	
		}		
	});

	document.getElementById("09").addEventListener("click", function()
	{
		if (field[8]==0)
		{
			click = click + 1;
			if (click % 2 == 0)
			{
				field[8] = 1;
				document.getElementById("09").src = '../TicTacToe/1/9.bmp';
			} else {
				field[8] = 2;
				document.getElementById("09").src = '../TicTacToe/2/9.bmp';
			}
			if (click>4){
				checkredwin()
				checkbluewin()
			}
			if (click>8 && dontcheckdraw == 0){
				var win = document.getElementById("win");
	    		win.innerHTML = "Draw!";
			}
			dontcheckdraw = 0;
			if (ai == 1)
			{
				aimakesmove()
			}	
		}		
	});
}


function newgamereset()
{
	click = 0;
	field[0] = 0;
	field[1] = 0;
	field[2] = 0;
	field[3] = 0;
	field[4] = 0;
	field[5] = 0;
	field[6] = 0;
	field[7] = 0;
	field[8] = 0;
	document.getElementById("01").src = '../TicTacToe/0/1.bmp';
	document.getElementById("02").src = '../TicTacToe/0/2.bmp';
	document.getElementById("03").src = '../TicTacToe/0/3.bmp';
	document.getElementById("04").src = '../TicTacToe/0/4.bmp';
	document.getElementById("05").src = '../TicTacToe/0/5.bmp';
	document.getElementById("06").src = '../TicTacToe/0/6.bmp';
	document.getElementById("07").src = '../TicTacToe/0/7.bmp';
	document.getElementById("08").src = '../TicTacToe/0/8.bmp';
	document.getElementById("09").src = '../TicTacToe/0/9.bmp';
	var win = document.getElementById("win");
	win.innerHTML = "";
}


function checkredwin()
{	
	if(field[0] == 1 && field[1] == 1 && field[2] == 1){	
		redwin()
	}
	if(field[3] == 1 && field[4] == 1 && field[5] == 1){	
		redwin()
	}
	if(field[6] == 1 && field[7] == 1 && field[8] == 1){	
		redwin()
	}
	if(field[0] == 1 && field[3] == 1 && field[6] == 1){	
		redwin()
	}
	if(field[1] == 1 && field[4] == 1 && field[7] == 1){	
		redwin()
	}
	if(field[2] == 1 && field[5] == 1 && field[8] == 1){	
		redwin()
	}
	if(field[0] == 1 && field[4] == 1 && field[8] == 1){	
		redwin()
	}
	if(field[2] == 1 && field[4] == 1 && field[6] == 1){	
		redwin()
	}
}

function checkbluewin()
{	
	if(field[0] == 2 && field[1] == 2 && field[2] == 2){	
		bluewin()
	}
	if(field[3] == 2 && field[4] == 2 && field[5] == 2){	
		bluewin()
	}
	if(field[6] == 2 && field[7] == 2 && field[8] == 2){	
		bluewin()
	}
	if(field[0] == 2 && field[3] == 2 && field[6] == 2){	
		bluewin()
	}
	if(field[1] == 2 && field[4] == 2 && field[7] == 2){	
		bluewin()
	}
	if(field[2] == 2 && field[5] == 2 && field[8] == 2){	
		bluewin()
	}
	if(field[0] == 2 && field[4] == 2 && field[8] == 2){	
		bluewin()
	}
	if(field[2] == 2 && field[4] == 2 && field[6] == 2){	
		bluewin()
	}	
}


function redwin()
{
	dontcheckdraw = 1;
	field[0] = 3;
	field[1] = 3;
	field[2] = 3;
	field[3] = 3;
	field[4] = 3;
	field[5] = 3;
	field[6] = 3;
	field[7] = 3;
	field[8] = 3;
	var win = document.getElementById("win");
    win.innerHTML = "Red win!";
}

function bluewin()
{
	dontcheckdraw = 1;
	field[0] = 3;
	field[1] = 3;
	field[2] = 3;
	field[3] = 3;
	field[4] = 3;
	field[5] = 3;
	field[6] = 3;
	field[7] = 3;
	field[8] = 3;
	var win = document.getElementById("win");
    win.innerHTML = "Blue win!";
}


function aimakesmove()
{
	if (click<9)
	{
		
		if (difficultylevel == 1)
		{
		
			AIattackordefend = 0;
			
			if (click % 2 == 0)
			{
				AIchecksthreats(2,1) //AI start, AI attack
			}
			else
			{
				AIchecksthreats(1,1) //player start, AI attack
			}
					
			AIattackordefend = 1;
			if (defendstate == 0)
			{
				if (click % 2 == 0)
				{
					AIchecksthreats(1,2) //AI start, player attack
				}
				else
				{
					AIchecksthreats(2,2) //player start, player attack
				}
			}		
		}
		if (click>4)
		{
			checkredwin()
			checkbluewin()
		}
		
		if (defendstate == 0)
		{
			var random = Math.floor(Math.random() * 9);
							
			for (let i=1; i<10; i++) {

				
				if (field[random] == 0)
				{
				
					click = click + 1;
					
					let zero = '0';
					let randomplus1 = random+1;
					let join = zero.concat(randomplus1);


					if (click % 2 == 0)
					{
						let startstring = '../TicTacToe/1/';
						let endstring = '.bmp';
						let join2 = startstring.concat(randomplus1);
						let join3 = join2.concat(endstring);
											
						field[random] = 1;
						
						document.getElementById(join).src = join3;
					} else {
						
						let startstring = '../TicTacToe/2/';
						let endstring = '.bmp';
						let join2 = startstring.concat(randomplus1);
						let join3 = join2.concat(endstring);
						
						field[random] = 2;
						document.getElementById(join).src = join3;
					}						
					break;
				}			
				if (random == 8)
				{
					random = 0;
				}
				else
				{
					random=random+1;
				}
			}
		}

		if (click>4)
		{
			checkredwin()
			checkbluewin()
		}

		if (click>8 && dontcheckdraw == 0){
			var win = document.getElementById("win");
	    	win.innerHTML = "Draw!";
		}
		dontcheckdraw = 0;
		defendstate = 0;
	}
}


function AIchecksthreats(player, movetype)
{	
	if(field[0] == player && field[1] == player && field[2] == 0){	
		aidefend(2, player, movetype)
	}
	else if(field[0] == player && field[1] == 0 && field[2] == player){	
		aidefend(1, player, movetype)
	}
	else if(field[0] == 0 && field[1] == player && field[2] == player){	
		aidefend(0, player, movetype)
	}
	
	else if(field[3] == player && field[4] == player && field[5] == 0){	
		aidefend(5, player, movetype)
	}
	else if(field[3] == player && field[4] == 0 && field[5] == player){	
		aidefend(4, player, movetype)
	}
	else if(field[3] == 0 && field[4] == player && field[5] == player){	
		aidefend(3, player, movetype)
	}
	
	else if(field[6] == player && field[7] == player && field[8] == 0){	
		aidefend(8, player, movetype)
	}
	else if(field[6] == player && field[7] == 0 && field[8] == player){	
		aidefend(7, player, movetype)
	}
	else if(field[6] == 0 && field[7] == player && field[8] == player){	
		aidefend(6, player, movetype)
	}
	
	else if(field[0] == player && field[3] == player && field[6] == 0){	
		aidefend(6, player, movetype)
	}
	else if(field[0] == player && field[3] == 0 && field[6] == player){	
		aidefend(3, player, movetype)
	}
	else if(field[0] == 0 && field[3] == player && field[6] == player){	
		aidefend(0, player, movetype)
	}
	
	else if(field[1] == player && field[4] == player && field[7] == 0){	
		aidefend(7, player, movetype)
	}
	else if(field[1] == player && field[4] == 0 && field[7] == player){	
		aidefend(4, player, movetype)
	}
	else if(field[1] == 0 && field[4] == player && field[7] == player){	
		aidefend(1, player, movetype)
	}
	
	else if(field[2] == player && field[5] == player && field[8] == 0){	
		aidefend(8, player, movetype)
	}
	else if(field[2] == player && field[5] == 0 && field[8] == player){	
		aidefend(5, player, movetype)
	}
	else if(field[2] == 0 && field[5] == player && field[8] == player){	
		aidefend(2, player, movetype)
	}
	
	else if(field[0] == player && field[4] == player && field[8] == 0){	
		aidefend(8, player, movetype)
	}
	else if(field[0] == player && field[4] == 0 && field[8] == player){	
		aidefend(4, player, movetype)
	}
	else if(field[0] == 0 && field[4] == player && field[8] == player){	
		aidefend(0, player, movetype)
	}
	
	else if(field[2] == player && field[4] == player && field[6] == 0){	
		aidefend(6, player, movetype)
	}
	else if(field[2] == player && field[4] == 0 && field[6] == player){	
		aidefend(4, player, movetype)
	}	
	else if(field[2] == 0 && field[4] == player && field[6] == player){	
		aidefend(2, player, movetype)
	}
}

function aidefend(fielddefend, player, movetype)
{
	click = click + 1;
	
	if (AIattackordefend == 0)
	{
		
		if (player == 1 && movetype == 1) //player start, AI attack
		{
			
			let zero = '0';
			let fielddefendplus1 = fielddefend+1;
			let join = zero.concat(fielddefendplus1);
			defendstate = 1;		
			let startstring = '../TicTacToe/1/';	
			let endstring = '.bmp';
			let join2 = startstring.concat(fielddefendplus1);
			let join3 = join2.concat(endstring);	
			document.getElementById(join).src = join3;			
			
			field[fielddefend] = 1;
			
		}
		else if (player == 2 && movetype == 1) //AI start, AI attack
		{
			
			let zero = '0';
			let fielddefendplus1 = fielddefend+1;
			let join = zero.concat(fielddefendplus1);
			defendstate = 1;		
			let startstring = '../TicTacToe/2/';
			let endstring = '.bmp';
			let join2 = startstring.concat(fielddefendplus1);
			let join3 = join2.concat(endstring);	
			document.getElementById(join).src = join3;			
			
			field[fielddefend] = 2;
			
		}
		defendstate = 1;
		
	}
	else if (AIattackordefend == 1)
	{
		
		if (player == 1 && movetype == 2) //AI start, player attack
		{
			
			let zero = '0';
			let fielddefendplus1 = fielddefend+1;
			let join = zero.concat(fielddefendplus1);
			defendstate = 1;		
			let startstring = '../TicTacToe/2/';	
			let endstring = '.bmp';
			let join2 = startstring.concat(fielddefendplus1);
			let join3 = join2.concat(endstring);	
			document.getElementById(join).src = join3;		
			
			field[fielddefend] = 2;
			
		}
		else if (player == 2 && movetype == 2) //player start, player attack
		{
			
			let zero = '0';
			let fielddefendplus1 = fielddefend+1;
			let join = zero.concat(fielddefendplus1);
			defendstate = 1;		
			let startstring = '../TicTacToe/1/';	
			let endstring = '.bmp';
			let join2 = startstring.concat(fielddefendplus1);
			let join3 = join2.concat(endstring);	
			document.getElementById(join).src = join3;		
			
			field[fielddefend] = 1;	
		}
	}

}

