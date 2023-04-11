
const video = document.getElementById("background");
const btn_action = document.querySelectorAll(".btn-question"); // declaration
const btn_start = document.querySelector(".btn-start");
const btn_next = document.querySelector(".btn-next");
const bloc_content = document.querySelector(".bloc-content");
const audioBtn = new Audio("../audio/5DeuxBonnesReponses.wav");
const audio = document.getElementById("audio");
      
      
      audio.volume = 0.1;
      audio.play();

bloc_content.style.display = "none";
btn_next.style.display = "none";
btn_action.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    btn_action.forEach((button) => {
      bloc_content.style.display = "flex";
      video.src = "../video/Chapitre1-B.mp4";
      setTimeout(function() {
        document.querySelector('.btn-start').style.opacity = 1;
        btn_start.style.display = "flex";
      }, 10000);
      button.style.display = "none";
      audioBtn.play();
      
    });
    typeWriter();
  });
});
const audioMajeur = document.getElementById("audioMajeur");


btn_start.addEventListener("click" , () => {
  bloc_content.style.display = "none";
  btn_start.style.display = "none";
  btn_start.style.opacity = 0;
  btn_next.style.display = "flex";
  // video.src = "../video/Chapitre2-A.mp4";
  video.src = "../video/Chapitre2-Positif-Negatif-Normaliser.mp4";
  audioMajeur.volume = 0.5;
  audioMajeur.src = "../audio/6ComparaisonSourire.wav";
  audioMajeur.play();

  setTimeout(function() {
    btn_next.style.opacity = 1;
    
  }, 20000);
  
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

  // if(i === string.length) {
  //   btn_next.style.display = "flex";
  // }
}


