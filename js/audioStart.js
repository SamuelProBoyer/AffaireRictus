
const delay = 600; // delai avant le debut de laudio


const audio = document.querySelector('audio'); 
const audioContext = new AudioContext(); // Context audio

const sourceNode = audioContext.createMediaElementSource(audio);

// Aide ChatGPT
const analyserNode = audioContext.createAnalyser();
sourceNode.connect(analyserNode);
analyserNode.connect(audioContext.destination);


//Creation du canvas pour les soundwaves
const canvas = document.querySelector('canvas');
const canvasCtx = canvas.getContext('2d');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Le nombre de barre a dessiner
const numBars = 500;

// Aide chatGPT
const frequencyData = new Uint8Array(numBars);

// Fonction qui joue laudio
function startAudio() {
    audio.play();
}

// Dessine le visuel sonore
function draw() {
  
    requestAnimationFrame(draw);

 
    analyserNode.getByteFrequencyData(frequencyData);

    // Clear le canvas
    canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);


    // Ajoute la couleur blanche au barre donde sonore
    canvasCtx.fillStyle = "#FFFFFF";


    // Boucle qui dessine londe sonore
    for (let i = 0; i < numBars; i++) {
        const barWidth = canvasWidth / numBars;
        const barHeight = (frequencyData[i] / 255) * canvasHeight;
        const x = i * barWidth;
        const y = canvasHeight - barHeight;
        canvasCtx.fillRect(x, y, barWidth, barHeight);
    }
}

// Attent un delai avant de commencer laudio et de dessiner le canvas
setTimeout(() => {
    startAudio();
    draw();
}, delay);