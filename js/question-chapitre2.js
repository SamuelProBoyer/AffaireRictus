const video = document.getElementById("background");
const btn_action = document.querySelectorAll(".btn-question"); // declaration
const btn_start = document.querySelector(".btn-start");
const btn_next = document.querySelector(".btn-next");
const bloc_content = document.querySelector(".bloc-content");
const audioBtn = new Audio("../audio/5DeuxBonnesReponses.wav");
const audio = document.getElementById("audio");
const audioMajeur = document.getElementById("audioMajeur");

audio.volume = 0.3;
audio.play();

bloc_content.style.display = "none";
btn_next.style.display = "none";
btn_action.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    btn_action.forEach((button) => {
      bloc_content.style.display = "flex";
      video.src = "../video/Chapitre1-B.mp4";
      setTimeout(function () {
        document.querySelector(".btn-start").style.opacity = 1;
        btn_start.style.display = "flex";
      }, 20000);
      button.style.display = "none";
      audioBtn.play();
    });
    typeWriter();
  });
});

btn_start.addEventListener("click", () => {
  bloc_content.style.display = "none";
  btn_start.style.display = "none";
  btn_start.style.opacity = 0;
  btn_next.style.display = "flex";
  video.src = "../video/Chapitre1-Positif-Negatif-Normaliser_V2.mp4";
  audioMajeur.src = "../audio/6ComparaisonSourire.wav";
  audio.src = "../audio/PP_projet3_attente.mp3";
  audio.volume = 0.2;
  setTimeout(function () {
    audio.play();
    audioMajeur.play();
  }, 2000);

  setTimeout(function () {
    btn_next.style.opacity = 1;
  }, 30000);
});

// Les mots avec interactions ----------------------------------------------------------------------------------------------------

let interaction1Writing = false;
let interaction2Writing = false;
let interaction3Writing = false;
let interaction4Writing = false;

let string = "Les deux réponses sont bonnes. Les rictus proviennent du mot latin du même nom qui signifie une ouverture de la bouche ou montrer les dents. Ce sont des contractions musculaires majoritairement involontaires du visage qui entraînent une expression faciale rigide, déformée et souvent grotesque. Les rictus ont eu un grand impact dans les arts, la culture populaire et la science. ";
let i = 0;

let phraseDebut = document.getElementById("phraseDebut");
let phraseEnCours = "";

const interaction1 = "involontaires";
const interaction2 = "arts";
const interaction3 = "culture";
const interaction4 = "science";

const typingText = document.getElementById("typing-text");
const phraseDetails = "es rictus volontaires sont souvent considérés comme une représentation humoristique exagérée d'une émotion. ";
let j = 0;

const typingText2 = document.getElementById("typing-text2");
const phraseDetails2 = "Dans les arts, le rictus a grandement influencé les mouvements sombres de l'art. Le rictus a souvent été utilisé pour représenter les émotions sombres et négatives de l'existence humaine, en particulier pour mettre en valeur la souffrance psychologique et les émotions intenses de l'homme. ";
let y = 0;

const typingText3 = document.getElementById("typing-text3");
const phraseDetails3 = "Dans la culture populaire, de nombreux personnages célèbres sont connus pour arborer des sourires forcés qui pourraient être identifiés comme des rictus. Parmi ces personnages, nous pouvons citer le Joker et Freddy Krueger, qui représentent des personnages ayant des troubles psychologiques et des rictus incontrôlables. Les rictus sont souvent représentés à travers des personnages aliénées ou ayant des problèmes psychologiques majeurs. ";
let z = 0;

const typingText4 = document.getElementById("typing-text4");
const phraseDetails4 = "Les études scientifiques sur le rictus ont impacté le domaine de la neurologie et de la psychologie. En psychologie, les expressions faciales créer par un rictus ont été étudié afin de mieux comprendre le traitement des émotions à travers ce mouvement. En neurologie, les chercheurs ont étudié les rictus pour mieux comprendre les mécanismes sous-jacents de ces maladies et pour développer de nouveaux traitements. Les rictus peuvent également être utilisés pour diagnostiquer certaines maladies, car ils peuvent être un indicateur de la fonction cérébrale altérée. ";
let v = 0;

function typeWriter() {
  let debut = string.indexOf(interaction1);
  let fin = debut + interaction1.length;

  let debut2 = string.indexOf(interaction2);
  let fin2 = debut2 + interaction2.length;

  let debut3 = string.indexOf(interaction3);
  let fin3 = debut3 + interaction3.length;
  
  let debut4 = string.indexOf(interaction4);
  let fin4 = debut4 + interaction4.length;

  if (i < string.length) {
    const char = string.charAt(i);

    i++;

    setTimeout(typeWriter, 45);

    if (i == debut) {
      phraseEnCours += '<span id="word" class="shine">';
    } 
    else if (i == debut2) {
      phraseEnCours += '<span id="word2" class="shine2">';
    } 
    else if (i == debut3) {
      phraseEnCours += '<span id="word3" class="shine3">';
    }
    else if (i == debut4) {
      phraseEnCours += '<span id="word4" class="shine4">';
    }

    phraseEnCours += char;

    if (i < fin) {
      phraseDebut.innerHTML = phraseEnCours + "</span>";
    } else if (i < fin2) {
      phraseDebut.innerHTML = phraseEnCours + "</span>";
    } else if (i < fin3) {
      phraseDebut.innerHTML = phraseEnCours + "</span>";
    } else if (i < fin4) {
      phraseDebut.innerHTML = phraseEnCours + "</span>";
    } 
    else {
      let c1 = phraseEnCours.replace(interaction1, "involontaires</span>");

      let c2 = c1.replace(interaction2, "arts</span>");

      let c3 = c2.replace(interaction3, "culture</span>");

      let c4 = c3.replace(interaction4, "science</span>");

      phraseDebut.innerHTML = c4;
    }
  }
  // Involontaire
  const wordElement = document.getElementById("word");
  if (wordElement) {
    let jouerSon = false;
    wordElement.addEventListener("click", function () {
      console.log("Mot cliquer !");
      if (!jouerSon) { 
        audioMajeur.src = "../audio/5Dinvolontaire.wav";
        audioMajeur.play();
        jouerSon = true;
      }
      
      wordElement.classList.remove("shine");
      wordElement2.classList.add("shine2");
      phraseDebut.style.display === "none";
      
      if (typingText.style.display === "none") {
        typingText.style.display = "block";
        wordElement.style.color = "white";
        wordElement.style.fontWeight = "bold";
        typingText2.style.display = "none";
        typingText3.style.display = "none";
        typingText4.style.display = "none";
      }
    });
  }
  //  art
  const wordElement2 = document.getElementById("word2");
  if (wordElement2) {
    let jouerSon = false;
    wordElement2.addEventListener("click", function () {
      console.log("Mot cliquer !"); 
      if (!jouerSon) { 
        audioMajeur.src = "../audio/5Aart.wav";
        audioMajeur.play();
        jouerSon = true;
      }
      
      wordElement2.classList.remove("shine2");
      
      phraseDebut.style.display === "none";
      wordElement.classList.add("shine");
      wordElement3.classList.add("shine3");
      wordElement4.classList.add("shine4");
      
      
      if (typingText2.style.display === "none") {
        typingText2.style.display = "block";
        wordElement2.style.color = "white";
        wordElement2.style.fontWeight = "bold";
        typingText.style.display = "none";
        typingText3.style.display = "none";
        typingText4.style.display = "none";
      }
    });
  }
  // culture
  const wordElement3 = document.getElementById("word3");
  if (wordElement3) {
    let jouerSon = false;
    wordElement3.addEventListener("click", function () {
      console.log("Mot cliquer !"); 
      if (!jouerSon) { 
        audioMajeur.src = "../audio/5Bculture.wav";
        audioMajeur.play();
        jouerSon = true;
      }
      
      wordElement3.classList.remove("shine3");
      wordElement.classList.add("shine");
      wordElement2.classList.add("shine2");
      wordElement4.classList.add("shine4");
      
      phraseDebut.style.display === "none";
      
      if (typingText3.style.display === "none") {
        typingText3.style.display = "block";
        wordElement3.style.color = "white";
        wordElement3.style.fontWeight = "bold";
        typingText.style.display = "none";
        typingText2.style.display = "none";
        typingText4.style.display = "none";
      }
    });
  }
  // science
  const wordElement4 = document.getElementById("word4");
  if (wordElement4) {
    let jouerSon = false;
    wordElement4.addEventListener("click", function () {
      console.log("Mot cliquer !"); 
      if (!jouerSon) { 
        audioMajeur.src = "../audio/5Cscience.wav";
        audioMajeur.play();
        jouerSon = true;
      }
      
      wordElement4.classList.remove("shine4");
    wordElement.classList.add("shine");
    wordElement2.classList.add("shine2");
    wordElement3.classList.add("shine3");
    
    phraseDebut.style.display === "none";
    
    if (typingText4.style.display === "none") {
      typingText4.style.display = "block";
      wordElement4.style.color = "white";
      wordElement4.style.fontWeight = "bold";
      typingText.style.display = "none";
      typingText2.style.display = "none";
      typingText3.style.display = "none";
    }
  });
}
}

function typeWriterPlus() {
  if (typingText.style.display === "block" && interaction2Writing === false && interaction3Writing === false && interaction4Writing === false) {
    if (j < phraseDetails.length) {
      typingText.innerHTML += phraseDetails.charAt(j);

      j++;

      interaction1Writing = true;
    } else {
      clearInterval(intervalId);

      interaction1Writing = false;
    }
  }
}

function typeWriterPlus2() {
  if (typingText2.style.display === "block" &&interaction1Writing === false &&interaction3Writing === false  && interaction4Writing === false) {
    if (y < phraseDetails2.length) {
      typingText2.innerHTML += phraseDetails2.charAt(y);

      y++;

      interaction2Writing = true;
    } else {
      clearInterval(interval2Id);

      interaction2Writing = false;
    }
  }
}

function typeWriterPlus3() {
  if (typingText3.style.display === "block" &&interaction1Writing === false && interaction2Writing === false  && interaction4Writing === false) {
    if (z < phraseDetails3.length) {
      typingText3.innerHTML += phraseDetails3.charAt(z);

      z++;
      interaction3Writing = true;
    } else {
      clearInterval(interval3Id);

      interaction3Writing = false;
    }
  }
}

function typeWriterPlus4() {
  if (typingText4.style.display === "block" && interaction1Writing === false && interaction2Writing === false  && interaction3Writing === false) {
    if (v < phraseDetails4.length) {
      typingText4.innerHTML += phraseDetails4.charAt(v);

      v++;
      interaction4Writing = true;
    } else {
      clearInterval(interval4Id);

      interaction4Writing = false;
    }
  }
}

const intervalId = setInterval(typeWriterPlus, 48);
const interval2Id = setInterval(typeWriterPlus2, 48);
const interval3Id = setInterval(typeWriterPlus3, 48);
const interval4Id = setInterval(typeWriterPlus4, 48);
