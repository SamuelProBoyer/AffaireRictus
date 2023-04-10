const majorText = document.getElementById("phraseDebut");
const phrase = "Bienvenue dans l'affaire Rictus. Dans ce documentaire interactif, vous allez acquérir de nouvelles connaissances sur le sujet et vous devrez affronter des épreuves et des énigmes en utilisant ce que vous avez appris. Il est important de mentionner que certains mots identifiés peuvent avoir des explications supplémentaires si vous êtes intéressé. Par exemple, le mot 'bienvenue' est identifié. Touchez-le pour continuer";


const typingText = document.getElementById("typing-text");
const phraseDetails = "Super ! Maintenant que vous êtes prêt, vous pouvez cliquer sur le bouton SUIVANT pour accéder à la première question. ";

const interaction = "bienvenue";
const interaction2 = "autre Mot";

const video = document.getElementById("background");

const wordToClick = ["interaction", "Samuel", "Test"];

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
      let c = phraseEnCours.replace(interaction, "Bienvenue</span>");

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

const interval1Id = setInterval(writer, 100);
const intervalId = setInterval(typeWriter, 100);
