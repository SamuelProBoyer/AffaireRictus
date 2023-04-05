// const majorText = document.getElementById("phraseDebut");
// const phrase = "Les Rictus peuvent être causés par de nombreuses conditions médicales, telles que la maladie de Parkinson, les dystonies faciales, les tics nerveux et les traumatismes crâniens, entre autres. Voici quelques exemples de condition d’un rictus plus détaillé.  ";

// const typingText = document.getElementById("typing-text");
// const phraseDetails = "Voici le texte caché que tu as demandé.";

// const interaction = "Samuel";

const video = document.getElementById("background");

// let i = 0;
// let j = 0;
// let phraseEnCours = "";

// function writer() {
//   let debut = phrase.indexOf(interaction);

//   let fin = debut + interaction.length;

//   if (i < phrase.length) {
//     const char = phrase.charAt(i);

//     i++;

//     if (i == debut) {
//       phraseEnCours += '<span id="word">';
//     }

//     phraseEnCours += char;

//     if (i < fin) {
//       majorText.innerHTML = phraseEnCours + "</span>";
//     } else {
//       let c = phraseEnCours.replace(interaction, "Samuel</span>");

//       majorText.innerHTML = c;
//     }
//   } else {
//     clearInterval(interval1Id);
//   }
//   const wordElement = document.getElementById("word");
//   wordElement.addEventListener("click", function () {
//     console.log("Clicked on the word!");
//     if (typingText.style.display === "none") {
//       typingText.style.display = "block";
//       wordElement.style.color = "red";
//       wordElement.style.fontWeight = "bold";
//     }
//   });
// }



const btn_action = document.querySelectorAll(".btn"); // declaration
const btn_suivant = document.querySelector(".btn-start");
btn_suivant.style.display = "none";


btn_action.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    btn_action.forEach((button) => {
      button.style.display = "none";
      btn_suivant.style.display = "inline";
    });
    typeWriter();
    video.src = "../video/Scene3-A.mp4";
  });
});


let string = "Les deux réponses sont bonnes. Les rictus proviennent du mot latin du même nom qui signifie une ouverture de la bouche ou montrer les dents. Ce sont des contractions musculaires majoritairement involontaires du visage qui entraînent une expression faciale rigide, déformée et souvent grotesque. Les rictus ont eu un grand impact dans les arts, la culture populaire et la science.";

let i = 0;
let phraseDebut = document.getElementById("phraseDebut");

function typeWriter() {
  if (i < string.length) {
    phraseDebut.innerHTML += string.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}






// function typeWriter() {
//   if (typingText.style.display === "block") {
//     if (j < phraseDetails.length) {
//       typingText.innerHTML += phraseDetails.charAt(j);
//       j++;
//     } else {
//       clearInterval(intervalId);
//     }
//   }
// }

// const interval1Id = setInterval(writer, 100);
// const intervalId = setInterval(typeWriter, 100);
