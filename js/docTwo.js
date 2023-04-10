
const video = document.getElementById("background");
const btn_action = document.querySelectorAll(".btn"); // declaration
const btn_start = document.querySelector(".btn-start");
const btn_next = document.querySelector(".btn-next");
const bloc_content = document.querySelector(".bloc-content");
const audioBtn = new Audio("../audio/btn-laugh.wav");
console.log(audioBtn);

// btn_suivant.style.display = "none";

bloc_content.style.display = "none";
btn_next.style.display = "none";
btn_action.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    btn_action.forEach((button) => {
      bloc_content.style.display = "block";
      video.src = "../video/Chapitre1-Loop.mp4";
      setTimeout(function() {
        document.querySelector('.btn-start').style.opacity = 1;
        btn_start.style.display = "block";
      }, 10000);
      button.style.display = "none";
      audioBtn.play();
      
    });
    typeWriter();
  });
});
// btn_start.style.display = "none";
btn_start.addEventListener("click" , () => {
  bloc_content.style.display = "none";
  btn_start.style.display = "none";
  btn_next.style.display = "block";
  video.src = "../video/Chapitre2-A.mp4";
  setTimeout(function() {
    document.querySelector('.btn-next').style.opacity = 1;
    
  }, 30000);
  
});

btn_next.addEventListener("click", () => {
  video.src = "../video/Chapitre2-Loupe-Identifiez1.mp4";
  
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
    btn_next.style.display = "inline";
  }
}


