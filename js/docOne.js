const majorText = document.getElementById("phraseDebut");
const phrase = "Bienvenue dans l'Affaire Rictus ! Il s'agit d'un documentaire qui va raconter l'histoire du rictus et qui est nommé en référence au personnage qui nous a inspiré à développer ce projet. Dans ce documentaire interactif, vous allez acquérir de nouvelles connaissances sur le sujet et relever des défis en utilisant ce que vous avez appris. Il est important de mentionner que certains mots identifiés peuvent avoir des explications supplémentaires si vous êtes intéressé vouz pouvez cliquer sur le mot identifié. Par exemple, si le mot 'bienvenue' est identifié, vous pouvez le toucher pour continuer votre exploration. ";
const audio = document.getElementById("audio");


const audioVoix = document.getElementById("audio-voix");
audioVoix.volume = 0.5;
audioVoix.play();


// volume de laudio
audio.volume = 0.05;
audio.play();
setTimeout(function() {
document.querySelector('.btn-start').style.opacity = 1;
document.querySelector('.btn-container').style.display = "block";
}, 20000);

const typingText = document.getElementById("typing-text");
const phraseDetails = "Super ! Maintenant que vous êtes prêt, vous pouvez cliquer sur le bouton 'SUIVANT' pour continuer l’aventure et acceder à la première question.";

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
      phraseEnCours += '<span id="word" class="shine">';
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
  const btn_container = document.querySelector(".btn-container");
  btn_container.style.display = "none";
  if (wordElement) { 
    wordElement.addEventListener("click", function () {
      console.log("Mot cliquer !");
      wordElement.classList.remove('shine');
      // video.src = "../video/Scene2-question1.mp4"; // Changement de video lors du clique
      audioVoix.src = "../audio/2IntroductionPart2.wav";
      audioVoix.play();
      btn_container.style.display = "block";
      majorText.style.display === "none";
      if (typingText.style.display === "none") {
        typingText.style.display = "block";
        wordElement.style.color = "white";
        wordElement.style.fontWeight = "bold";
      }
    });
  }
    
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

const interval1Id = setInterval(writer, 48);
const intervalId = setInterval(typeWriter, 43);
