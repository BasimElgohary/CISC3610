let data;
fetch('data.json')
    .then(response => response.json())
    .then(json => {
        data = json.pokemon;
        data.sort((a, b) => (a.pokedexNumber || 0) - (b.pokedexNumber || 0));
        const spriteGrid = document.getElementById('spriteGrid');
        data.forEach((poke, index) => {
            if (poke.image) {
                const icon = new Image();
                icon.src = poke.image; // Use full-size image
                icon.alt = poke.name;
                icon.title = poke.name;
                icon.width = 32;
                icon.height = 32;
                icon.style.objectFit = "cover";
                icon.style.cursor = "pointer";

                icon.addEventListener('click', () => {
                    showPokemon(poke);
                });
                spriteGrid.appendChild(icon);
            }
        });
        if (data.length > 0) {
            showPokemon(data[0]);
        }
    });

function showPokemon(poke) {
    document.getElementById('pokeTitle').textContent = poke.name;
    document.getElementById('pokeDesc').textContent = poke.description;
	
    drawImageToCanvas(poke.image);
    document.getElementById('pokeType').textContent = Array.isArray(poke.type) ? poke.type.join(' / ') : poke.type;
    document.getElementById('pokeGen').textContent = poke.generation || 'Unknown';
    document.getElementById('pokeHabitat').textContent = poke.habitat || 'Unknown';
    document.getElementById('pokeDex').textContent = poke.pokedexNumber || 'Unknown';
    document.getElementById('pokeRegion').textContent = poke.region || 'Unknown';
    document.getElementById('pokeAbilities').textContent = Array.isArray(poke.abilities) ? poke.abilities.join(', ') : 'Unknown';
    document.getElementById('pokeStrong').textContent = Array.isArray(poke.strongAgainst) ? poke.strongAgainst.join(', ') : 'Unknown';
    document.getElementById('pokeWeak').textContent = Array.isArray(poke.weakAgainst) ? poke.weakAgainst.join(', ') : 'Unknown';
    document.getElementById('pokeEvos').textContent = Array.isArray(poke.evolutions) ? poke.evolutions.join(' → ') : 'Unknown';
}

function drawImageToCanvas(imageSrc) {
    const canvas = document.getElementById('pokeCanvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 50, 50, 200, 200);
    };
    img.src = imageSrc;
}
let currentIndex = 0;

function showPokemonAtIndex(index) {
    if (index >= 0 && index < data.length) {
        currentIndex = index;
        showPokemon(data[currentIndex]);
    }
}

function nextPokemon() {
    const next = (currentIndex + 1) % data.length;
    showPokemonAtIndex(next);
}

function prevPokemon() {
    const prev = (currentIndex - 1 + data.length) % data.length;
    showPokemonAtIndex(prev);
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const installBtn = document.getElementById('installBtn');
    installBtn.style.display = 'inline-block';

    installBtn.addEventListener('click', () => {
        installBtn.style.display = 'none';
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
});