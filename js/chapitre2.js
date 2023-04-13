const btn_start = document.querySelector(".btn-start");
const btn_introLoop = document.querySelector(".btn-introLoop");
const btn_next = document.querySelector(".btn-next");
const btn_continue = document.querySelector(".btn-continue");
const btn_toImg = document.querySelector(".btn-toImg");
const bloc_content = document.querySelector(".bloc-content");
const video = document.getElementById("background");
const audio = document.getElementById("audio");
audio.volume = 0.1;
audio.play();

bloc_content.style.display = "none";
btn_introLoop.style.display = "none";
btn_next.style.display = "none";
btn_continue.style.display = "none";
btn_toImg.style.display = "none";
setTimeout(function () {
  document.querySelector(".btn-start").style.opacity = 1;
}, 10000);
// AFFICHE LE RPEMIER TEXTE
btn_start.addEventListener("click", () => {
  console.log("start clique");
  btn_start.style.display = "none";
  btn_next.style.display = "flex";
  bloc_content.style.display = "block";
  video.src = "../video/Chapitre2-Loop.mp4";
  setTimeout(function () {
    document.querySelector(".btn-next").style.opacity = 1;
  }, 25000);
  typeWriter();
  const audioMajeur = document.getElementById("audioMajeur");
  audioMajeur.src = "/audio/8RechercheEquipe.wav";
  audioMajeur.play();
  console.log("Je suis cliquer");
});

// AFFICHE LE DEUXIEME TEXTE
btn_next.addEventListener("click", () => {
  const audioMajeur = document.getElementById("audioMajeur");
  audioMajeur.src = "/audio/10rictusPasMaladie.wav";
  audioMajeur.play();
  btn_next.style.display = "none";
  typingText.style.display = "none";
  typingText2.style.display = "none";
  typingText3.style.display = "none";
  typingText4.style.display = "none";
  setTimeout(function () {
    document.querySelector(".btn-continue").style.opacity = 1;
    btn_continue.style.display = "flex";
  }, 25000);
  typeWriterSecond();
  console.log("Je suis cliquer aussi !");
});

btn_continue.addEventListener("click", () => {
  btn_continue.style.display = "none";
  const audioMajeur = document.getElementById("audioMajeur");
  audioMajeur.src = "/audio/11IntroTest.wav";
  audioMajeur.play();
  typing_text.innerHTML = "";
  phraseDebut.innerHTML = "";
  btn_toImg.style.display = "flex";
  setTimeout(function () {
    document.querySelector(".btn-toImg").style.opacity = 1;
  }, 10000);
  typeWriterLoop();
});

let phraseDebut = document.getElementById("phraseDebut");
let typing_text = document.getElementById("typing-text");
let phraseEnCours = "";
let phraseEnCours2 = "";

let string =
  "L'équipe de l'Affaire Rictus a effectué des recherches et a découvert que les rictus peuvent être causés par de nombreuses conditions médicales, telles que la maladie de Parkinson, les dystonies faciales, les tics nerveux et les traumatismes crâniens, entre autres. Dans la liste des maladies les plus connues causant le rictus il y a : Rictus sardonique , Rictus de la maladie de parkinson , Dystonies faciales et Troubles du mouvement ";

let string2 =
  "Le rictus en tant que tel n'est pas considéré comme une maladie en soi, mais plutôt comme une manifestation de certaines maladies ou troubles musculaires. Par conséquent, il n'existe pas de médicament spécifique pour traiter le rictus en tant que tel. Au lieu de cela, le traitement dépend de la maladie sous-jacente ou du trouble musculaire impliqué. Les médicaments utilisés pour traiter ces affections peuvent avoir des effets secondaires indésirables et affecter le patient de diverses manières. ";
let stringLoop =
  "Maintenant que vous avez une meilleure connaissance des rictus, l'équipe de l'affaire Rictus a préparé un test pour savoir si vous êtes capable de détecter qui est affligé d'un rictus involontaire. Vous êtes dans une rue d'une ville quelconque. Parmi les gens que vous allez croiser, identifiez la personne avec un rictus involontaire. ";

let i = 0;
let j = 0;
let l = 0;

// Interaction sardonique
const typingText = document.getElementById("typing-text1");
const phraseDetails =
  "Le rictus sardonique est une contraction musculaire qui affecte principalement les muscles de la mâchoire et du cou, ce qui donne une expression faciale tordue et souriante. Cette forme de rictus est souvent associée à la tétanie, une affection qui provoque des spasmes musculaires généralisés. ";
const interaction1 = "sardonique";
let x1 = 0;
let interaction1Writing = false;

// Interaction Parkinson
const typingText2 = document.getElementById("typing-text2");
const phraseDetails2 =
  "Le rictus de la maladie de Parkinson est une contraction musculaire qui affecte les muscles du visage, ce qui donne une expression faciale figée et sans émotion. Cela est dû à un déficit en dopamine, une substance chimique qui permet la communication entre les cellules nerveuses, qui est caractéristique de la maladie de Parkinson. ";
const interaction2 = "parkinson";
let x2 = 0;
let interaction2Writing = false;

// Interaction Dystonie
const typingText3 = document.getElementById("typing-text3");
const phraseDetails3 =
  "Les dystonies faciales sont des affections qui provoquent des contractions musculaires involontaires et prolongées dans les muscles du visage. Cela peut entraîner une expression faciale tordue et douloureuse. Les dystonies faciales peuvent être causées par des lésions cérébrales, des troubles neurologiques ou des facteurs génétiques. ";
const interaction3 = "Dystonies";
let x3 = 0;
let interaction3Writing = false;

// Interaction mouvement
const typingText4 = document.getElementById("typing-text4");
const phraseDetails4 =
  "Les troubles du mouvement, tel que la dystonie, peuvent également entraîner des formes de rictus. Dans la dystonie, les contractions musculaires prolongées peuvent entraîner des déformations du visage et une expression faciale anormale. Ces troubles peuvent être causés par des anomalies génétiques et affectent souvent la qualité de vie des personnes atteintes. Les rictus sont donc des symptômes importants qui peuvent aider à diagnostiquer ces troubles du mouvement. ";
const interaction4 = "mouvement";
let x4 = 0;
let interaction4Writing = false;

// Interaction effets
const typingText5 = document.getElementById("typing-text5");
const phraseDetails5 =
  "Il y a plusieurs effets secondaires indésirables, tels que la somnolence, la confusion, la bouche sèche, la constipation, la prise de poids ou la diminution de la libido. Consulter un expert de la santé est la meilleure option pour avoir conscience de toutes les répercussions. ";
const interaction5 = "effets";
let x5 = 0;
let interaction5Writing = false;

btn_next.setAttribute("disabled", true);

if (i === string.length) {
  btn_next.setAttribute("disabled", false);
}

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
    if (i == debut2) {
      phraseEnCours += '<span id="word2" class="shine2">';
    }
    if (i == debut3) {
      phraseEnCours += '<span id="word3" class="shine3">';
    }
    if (i == debut4) {
      phraseEnCours += '<span id="word4" class="shine4">';
    }

    phraseEnCours += char;

    if (i < fin) {
      phraseDebut.innerHTML = phraseEnCours + "</span>";
    }
    if (i < fin2) {
      phraseDebut.innerHTML = phraseEnCours + "</span>";
    }
    if (i < fin3) {
      phraseDebut.innerHTML = phraseEnCours + "</span>";
    }
    if (i < fin4) {
      phraseDebut.innerHTML = phraseEnCours + "</span>";
    } else {
      let c1 = phraseEnCours.replace(interaction1, "sardonique</span>");
      let c2 = c1.replace(interaction2, "Parkinson</span>");
      let c3 = c2.replace(interaction3, "Dystonies</span>");
      let c4 = c3.replace(interaction4, "mouvement</span>");
      phraseDebut.innerHTML = c4;
    }
  }

  // sardonique
  const wordElement = document.getElementById("word");
  if (wordElement) {
    wordElement.addEventListener("click", function () {
      console.log("Mot cliquer !");

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

  const wordElement2 = document.getElementById("word2");
  if (wordElement2) {
    wordElement2.addEventListener("click", function () {
      console.log("Mot cliquer !");

      wordElement2.classList.remove("shine2");

      phraseDebut.style.display === "none";
      wordElement.classList.add("shine");
      wordElement3.classList.add("shine3");
      wordElement4.classList.add("shine4");
      if (typingText2.style.display === "none") {
        console.log("Mot change !");
        typingText2.style.display = "block";
        wordElement2.style.color = "white";
        wordElement2.style.fontWeight = "bold";
        typingText.style.display = "none";
        typingText3.style.display = "none";
        typingText4.style.display = "none";
      }
    });
  }

  const wordElement3 = document.getElementById("word3");
  if (wordElement3) {
    wordElement3.addEventListener("click", function () {
      console.log("Mot cliquer !");

      wordElement3.classList.remove("shine3");
      wordElement.classList.add("shine");
      wordElement2.classList.add("shine2");
      wordElement4.classList.add("shine4");

      phraseDebut.style.display === "none";
      if (typingText3.style.display === "none") {
        console.log("Mot change !");
        typingText3.style.display = "block";
        wordElement3.style.color = "white";
        wordElement3.style.fontWeight = "bold";
        typingText.style.display = "none";
        typingText2.style.display = "none";
        typingText4.style.display = "none";
      }
    });
  }

  const wordElement4 = document.getElementById("word4");
  if (wordElement4) {
    wordElement4.addEventListener("click", function () {
      console.log("Mot cliquer !");

      wordElement4.classList.remove("shine4");
      wordElement.classList.add("shine");
      wordElement2.classList.add("shine2");
      wordElement3.classList.add("shine3");

      phraseDebut.style.display === "none";
      if (typingText4.style.display === "none") {
        console.log("Mot change !");
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
  if (
    typingText.style.display === "block" &&
    interaction2Writing === false &&
    interaction3Writing === false &&
    interaction4Writing === false
  ) {
    if (x1 < phraseDetails.length) {
      typingText.innerHTML += phraseDetails.charAt(x1);
      x1++;

      interaction1Writing = true;
    } else {
      clearInterval(intervalId);

      interaction1Writing = false;
    }
  }
}

function typeWriterPlus2() {
  if (
    typingText2.style.display === "block" &&
    interaction1Writing === false &&
    interaction3Writing === false &&
    interaction4Writing === false
  ) {
    if (x2 < phraseDetails2.length) {
      typingText2.innerHTML += phraseDetails2.charAt(x2);
      x2++;

      interaction2Writing = true;
    } else {
      clearInterval(interval2Id);

      interaction2Writing = false;
    }
  }
}

function typeWriterPlus3() {
  if (
    typingText3.style.display === "block" &&
    interaction1Writing === false &&
    interaction2Writing === false &&
    interaction4Writing === false
  ) {
    if (x3 < phraseDetails3.length) {
      typingText3.innerHTML += phraseDetails3.charAt(x3);
      x3++;

      interaction3Writing = true;
    } else {
      clearInterval(interval3Id);

      interaction3Writing = false;
    }
  }
}

function typeWriterPlus4() {
  if (
    typingText4.style.display === "block" &&
    interaction1Writing === false &&
    interaction2Writing === false &&
    interaction3Writing === false
  ) {
    if (x4 < phraseDetails4.length) {
      typingText4.innerHTML += phraseDetails4.charAt(x4);
      x4++;

      interaction4Writing = true;
    } else {
      clearInterval(interval4Id);

      interaction4Writing = false;
    }
  }
}

const intervalId = setInterval(typeWriterPlus, 100);
const interval2Id = setInterval(typeWriterPlus2, 100);
const interval3Id = setInterval(typeWriterPlus3, 100);
const interval4Id = setInterval(typeWriterPlus4, 100);

function typeWriterSecond() {
  let debut5 = string2.indexOf(interaction5);
  let fin5 = debut5 + interaction5.length;

  if (j < string2.length) {
    const char = string2.charAt(j);
    j++;

    if (j == debut5) {
      phraseEnCours2 += '<span id="word5" class="shine">';
    }

    phraseEnCours2 += char;

    if (j < fin5) {
      phraseDebut.innerHTML = phraseEnCours2 + "</span>";
    } else {
      let c5 = phraseEnCours2.replace(interaction5, "effets</span>");
      phraseDebut.innerHTML = c5;
    }
    setTimeout(typeWriterSecond, 45);
  }
  // effets
  const wordElement5 = document.getElementById("word5");
  const audioMajeur = document.getElementById("audioMajeur");
  if (wordElement5) {
    wordElement5.addEventListener("click", function () {
      console.log("Mot cliquer !");
      audioMajeur.src = "../audio/10Aeffets.wav";
      audioMajeur.play();

      wordElement5.classList.remove("shine");

      phraseDebut.style.display === "none";
      if (typingText5.style.display === "none") {
        typingText5.style.display = "block";
        wordElement5.style.color = "white";
        wordElement5.style.fontWeight = "bold";
      }
    });
  }
}

function typeWriterPlus5() {
  if (typingText5.style.display === "block") {
    if (x5 < phraseDetails5.length) {
      typingText5.innerHTML += phraseDetails5.charAt(x5);
      x5++;

      interaction5Writing = true;
    } else {
      clearInterval(interval5Id);

      interaction5Writing = false;
    }
  }
}

const interval5Id = setInterval(typeWriterPlus5, 48);

function typeWriterLoop() {
  typingText5.style.display = "none";
  if (l < stringLoop.length) {
    phraseDebut.innerHTML += stringLoop.charAt(l);
    l++;

    setTimeout(typeWriterLoop, 45);
  }
}
