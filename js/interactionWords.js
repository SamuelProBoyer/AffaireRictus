const majorText = document.getElementById("phraseDebut");
const phrase = "Clique sur le mot 'interaction' pour voir le texte caché.";

const typingText = document.getElementById("typing-text");
const phraseDetails = "Voici le texte caché que tu as demandé.";

const interaction = "interaction";

let i = 0;
let j = 0;

function writer() {
  if (i < phrase.length) {
    const char = phrase.charAt(i);
    i++;

    if (char === " ") {
      majorText.innerHTML += " ";
    }

    if (char === "i" && phrase.slice(i, i + interaction.length) === interaction) {
      i += interaction.length;
    } else {
      majorText.innerHTML += char;
    }
  } else {
    clearInterval(interval1Id);

    const word = document.createElement("span");
    word.id = "word";
    word.innerHTML = interaction;
    majorText.appendChild(word);

    word.addEventListener("click", function () {
      console.log("Clicked on the word!");
      if (typingText.style.display === "none") {
        typingText.style.display = "block";
        word.style.color = "red";
        word.style.fontWeight = "bold";
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

const interval1Id = setInterval(writer, 100);
const intervalId = setInterval(typeWriter, 100);
