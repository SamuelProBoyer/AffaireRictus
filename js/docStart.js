const majorText = document.getElementById("phraseDebut");
const phrase = "La culture contemporaine regorge de personnages arborant un sourire aux lèvres qui semble forcé, voire malsain. En 1981, un personnage nommé Rictus est apparu dans une bande dessinée française. Son sourire permanent et déformé a suscité l'intérêt de notre équipe, nous incitant à en apprendre davantage sur cette expression faciale. Cette contraction musculaire a un nom, et cela s'appelle le rictus, exactement comme le personnage de bande dessinée. Par conséquent, nous avons décidé de réaliser un documentaire sur le sujet du rictus.";


const typingText = document.getElementById("typing-text");
const phraseDetails = "Super ! Maintenant que vous êtes prêt, vous pouvez cliquer sur le bouton SUIVANT pour accéder à la première question. ";

const interaction = "bienvenue";
const interaction2 = "autre Mot";


const video = document.getElementById("background");

let i = 0;
let j = 0;
let phraseEnCours = "";

function writer() {
  let debut = phrase.indexOf(interaction);

  let fin = debut + interaction.length;

  if (i < phrase.length) {
    const char = phrase.charAt(i);

    i++;

    if (i == debut) {
      phraseEnCours += '<span id="word">';
    }

    phraseEnCours += char;

    if (i < fin) {
      majorText.innerHTML = phraseEnCours + "</span>";
    } else {
      let c = phraseEnCours.replace(interaction, "bienvenue</span>");

      majorText.innerHTML = c;
    }
  } else {
    clearInterval(interval1Id);
  }
  const wordElement = document.getElementById("word");
  wordElement.addEventListener("click", function () {
    console.log("Mot cliquer !");
    // video.src = "../video/Scene2-question1.mp4"; // Changement de video lors du clique
    majorText.style.display === "none";
    if (typingText.style.display === "none") {
      typingText.style.display = "block";
      wordElement.style.color = "red";
      wordElement.style.fontWeight = "bold";
    }
  });

}



function typeWriter() {
  if (typingText.style.display === "block") {
    if (j < phraseDetails.length) {
      typingText.innerHTML += phraseDetails.charAt(j);
      j++;
    } else {
      clearInterval(intervalId);
    }
  }
}

const interval1Id = setInterval(writer, 50);
const intervalId = setInterval(typeWriter, 100);
