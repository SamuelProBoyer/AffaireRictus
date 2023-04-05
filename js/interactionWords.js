const majorText = document.getElementById("phraseDebut");
const phrase = "Clique sur le mot interaction pour voir le texte caché.";

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

    if (phrase.slice(i - 1, i + interaction.length) === interaction) {
      word.style.cursor = "pointer";
      i += interaction.length - 1;
    } else {
      majorText.innerHTML += char;
    }
  } else {
    clearInterval(interval1Id);
  }
  const word = document.createElement("span");
  word.append(' ');
  word.id = "word";

  majorText.appendChild(word);
  const wordElement = document.getElementById("word");
  wordElement.addEventListener("click", function () {
    console.log("Clicked on the word!");
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
