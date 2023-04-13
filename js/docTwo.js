
const video = document.getElementById("background");
const btn_action = document.querySelectorAll(".btn-question"); // declaration
const btn_start = document.querySelector(".btn-start");
const btn_next = document.querySelector(".btn-next");
const bloc_content = document.querySelector(".bloc-content");
const audioBtn = new Audio("../audio/5DeuxBonnesReponses.wav");



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

const videoRoller = document.getElementById("background");

let string = "Les deux réponses sont bonnes. Les rictus proviennent du mot latin du même nom qui signifie une ouverture de la bouche ou montrer les dents. Ce sont des contractions musculaires majoritairement involontaires du visage qui entraînent une expression faciale rigide, déformée et souvent grotesque. Les rictus ont eu un grand impact dans les arts, la culture populaire et la science. ";

let i = 0;
let y = 0;
let j = 0;
let phraseDebut = document.getElementById("phraseDebut");
let phraseEnCours = "";

const interaction1 = "involontaires";
const interaction2 = "arts";
const interaction3 = "culture";

const typingText = document.getElementById("typing-text");
const phraseDetails = "Les rictus volontaires sont souvent considérés comme une représentation humoristique exagérée d'une émotion. "

const typingText2 = document.getElementById("typing-text2");
const phraseDetails2 = "Dans les arts, le rictus a grandement influencé les mouvements sombres de l'art. Le rictus a souvent été utilisé pour représenter les émotions sombres et négatives de l'existence humaine, en particulier pour mettre en valeur la souffrance psychologique et les émotions intenses de l'homme. "

const typingText3 = document.getElementById("typing-text3");
const phraseDetails3 = "Dans la culture populaire, de nombreux personnages célèbres sont connus pour arborer des sourires forcés qui pourraient être identifiés comme des rictus. Parmi ces personnages, nous pouvons citer le Joker et Freddy Krueger, qui représentent des personnages ayant des troubles psychologiques et des rictus incontrôlables. Les rictus sont souvent représentés à travers des personnages aliénées ou ayant des problèmes psychologiques majeurs. "
let z = 0;

function typeWriter() {
  let debut = string.indexOf(interaction1);
  let fin = debut + interaction1.length;

  let debut2 = string.indexOf(interaction2);
  let fin2 = debut + interaction2.length;
  
  let debut3 = string.indexOf(interaction3);
  let fin3 = debut + interaction3.length;

  if (i < string.length) {
    const char = string.charAt(i);
    i++;
    
    setTimeout(typeWriter, 45);
    if (i == debut) {
      phraseEnCours += '<span id="word" class="shine">';
    }else if (i == debut2) {
      phraseEnCours += '<span id="word2" class="shine">';
    }
    else if (i == debut3) {
      phraseEnCours += '<span id="word3" class="shine">';
    }

    phraseEnCours += char;

    if (i < fin) {
      phraseDebut.innerHTML = phraseEnCours + "</span>";
    } else if (i < fin2) {
      phraseDebut.innerHTML = phraseEnCours + "</span>";
    } 
    else if (i < fin3) {
      phraseDebut.innerHTML = phraseEnCours + "</span>";
    } 
    else{
      let c1 = phraseEnCours.replace(interaction1, "involontaires</span>");
      let c2 = c1.replace(interaction2, "arts</span>");
      let c3 = c2.replace(interaction3, "culture</span>");
      phraseDebut.innerHTML = c3;
    }
  }

  const wordElement = document.getElementById("word");
  wordElement.addEventListener("click", function () {
    wordElement.classList.remove('shine');
    phraseDebut.style.display === "none";
    if (typingText.style.display === "none") {
      typingText.style.display = "block";
      wordElement.style.color = "white";
      wordElement.style.fontWeight = "bold";
    }
  });

  const wordElement2 = document.getElementById("word2");
  wordElement2.addEventListener("click", function () {
    wordElement2.classList.remove('shine');
    phraseDebut.style.display === "none";
    if (typingText2.style.display === "none") {
      typingText2.style.display = "block";
      wordElement2.style.color = "white";
      wordElement2.style.fontWeight = "bold";
    }
  });

  const wordElement3 = document.getElementById("word3");
  wordElement3.addEventListener("click", function () {
    wordElement3.classList.remove('shine');
    phraseDebut.style.display === "none";
    if (typingText3.style.display === "none") {
      typingText3.style.display = "block";
      wordElement3.style.color = "white";
      wordElement3.style.fontWeight = "bold";
    }
  });
}

function typeWriterPlus() {
  if (typingText.style.display === "block") {
    if (j < phraseDetails.length) {
      typingText.innerHTML += phraseDetails.charAt(j);
      j++;
    } else {
      clearInterval(intervalId);
    }
  }
}
function typeWriterPlus2() {
  if (typingText2.style.display === "block") {
    if (y < phraseDetails2.length) {
      typingText2.innerHTML += phraseDetails2.charAt(y);
      y++;
    } else {
      clearInterval(interval2Id);
    }
  }
}
function typeWriterPlus3() {
  if (typingText2.style.display === "block") {
    if (z < phraseDetails2.length) {
      typingText2.innerHTML += phraseDetails2.charAt(z);
      z++;
    } else {
      clearInterval(interval3Id);
    }
  }
}

const intervalId = setInterval(typeWriterPlus, 100);
const interval2Id = setInterval(typeWriterPlus2, 100);
const interval3Id = setInterval(typeWriterPlus3, 100);
