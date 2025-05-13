const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const background = new Image();
background.src = 'images/background.jpg'; 
background.onload = () => {
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	drawPics();
};

function drawPics() {
	const pic1 = new Image();
	const pic2 = new Image();
	pic1.src = 'images/pic1.png';
	pic2.src = 'images/pic2.png';
	
	pic1.onload = function(){
		ctx.drawImage(pic1, canvas.width/2, 400, canvas.width/6, canvas.height/2);
	};
	pic2.onload = function(){
		ctx.drawImage(pic2, canvas.width/3+100, canvas.width/3, 150, 150);
	};
	
	drawText();
}

function drawText() {
	ctx.font = '28px Arial';
	ctx.fillStyle = 'blue';
	ctx.fillText('Basim Elgohary - Pokémon Trainer!', canvas.width/2, canvas.height/3+50);
}