const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

let characterX = 300;
let background = new Image();
let character = new Image();
let item1 = new Image();
let item2 = new Image();
let item3 = new Image();

background.src = 'images/bg1.png';
background.onload = updateScene;

character.src = 'images/character.png';
item1.src = 'images/item1.png';
item2.src = 'images/item2.png';
item3.src = 'images/item3.png';

const sound1 = new Audio('sounds/sound1.mp3');
const sound2 = new Audio('sounds/sound2.mp3');
const sound3 = new Audio('sounds/sound3.mp3');

function playSound(n) {
    if (n === 1) sound1.play();
    else if (n === 2) sound2.play();
    else if (n === 3) sound3.play();
}

function updateScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.drawImage(character, characterX, 300, 150, 200);

    if (document.getElementById('item1Check').checked)
        ctx.drawImage(item1, 250, 475, 100, 100);

    if (document.getElementById('item2Check').checked)
        ctx.drawImage(item2, 200, 400, 100, 100);

    if (document.getElementById('item3Check').checked)
        ctx.drawImage(item3, 600, 350, 100, 100);
}

document.querySelectorAll('input[name="bg"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        background.src = `images/${e.target.value}`;
        background.onload = updateScene;
    });
});

document.getElementById('slider').addEventListener('input', (e) => {
    characterX = parseInt(e.target.value);
    updateScene();
});

document.querySelectorAll('input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', updateScene);
});