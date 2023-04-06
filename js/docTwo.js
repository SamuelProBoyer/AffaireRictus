
const video = document.getElementById("background");
const btn_action = document.querySelectorAll(".btn"); // declaration
const btn_suivant = document.querySelector(".btn-start");
const audioBtn = new Audio("../audio/btn-laugh.wav");
console.log(audioBtn);

btn_suivant.style.display = "none";


btn_action.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    btn_action.forEach((button) => {
      button.style.display = "none";
      audioBtn.play();
      
    });
    typeWriter();
    video.src = "../video/Chapitre1-B.mp4";
  });
});


let string = "Les deux réponses sont bonnes. Les rictus proviennent du mot latin du même nom qui signifie une ouverture de la bouche ou montrer les dents. Ce sont des contractions musculaires majoritairement involontaires du visage qui entraînent une expression faciale rigide, déformée et souvent grotesque. Les rictus ont eu un grand impact dans les arts, la culture populaire et la science. ";

let i = 0;
let phraseDebut = document.getElementById("phraseDebut");

function typeWriter() {
  if (i < string.length) {
    phraseDebut.innerHTML += string.charAt(i);
    i++;
    
    setTimeout(typeWriter, 45);
  }

  if(i === string.length) {
    btn_suivant.style.display = "inline";
  }
}


