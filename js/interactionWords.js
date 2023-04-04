const majorText = document.getElementById("phraseDebut");
const phrase = "Clique sur le mot il va changer";

const typingText = document.getElementById("typing-text");
const phraseDetails = "Cette phrase ajoute de l'expliquation";

const interaction = "interaction ";

let i = 0;
let j = 0;
let k = 0;

function Writer() {
  if (i < phrase.length) {
    const char = phrase.charAt(i);
    majorText.innerHTML += char;
    i++;

    if (char === " " || i === phrase.length) {
      majorText.innerHTML += " ";
    }
    // Si l'index de phrase arrive à "il", ajoute une balise span et ajoute le mot interaction à l'intérieur
    if (phrase.indexOf("il") !== -1 && i === phrase.indexOf("il")) {
      const word = document.createElement("span");
      word.id = "word";
      word.innerHTML = interaction;
    //   if (k < interaction.length) {
    //     const char = interaction.charAt(k);
    //     word.innerHTML += char;
    //     k++;
    //   }
      majorText.innerHTML = phrase.slice(0, phrase.indexOf("il"));
      majorText.appendChild(word);
    }
}
else {
    clearInterval(interval1Id);
}
const word = document.getElementById("word");
// Si le mot avec le id word et cliqué, change le display du texte caché
word.addEventListener("click", function () {
  if (typingText.style.display === "none") {
    typingText.style.display = "block";
  }
  word.style.color = "red";
  word.style.fontWeight = "bold";
});
}

function typeWriter() {
    // Si le display est en block, écrit le texte
  if (typingText.style.display === "block") {
    if (j < phraseDetails.length) {
      typingText.innerHTML += phraseDetails.charAt(j);
      j++;
    } else {
        // Sinon clear l'interval
      clearInterval(intervalId);
    }
  }
}

const interval1Id = setInterval(Writer, 100);
const intervalId = setInterval(typeWriter, 100);
