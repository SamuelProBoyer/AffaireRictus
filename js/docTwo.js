const majorText = document.getElementById("phraseDebut");
const phrase = "Clique sur le mot 'Samuel' pour voir le texte caché.";

const typingText = document.getElementById("typing-text");
const phraseDetails = "Voici le texte caché que tu as demandé.";

const interaction = "Samuel";

let i = 0;
let j = 0;
let phraseEnCours = "";

function writer() {
  let debut = phrase.indexOf(interaction);

  let fin = debut + interaction.length;




  if (i < phrase.length) {

   

    const char = phrase.charAt(i);

    i++;

   if(i == debut)

   {

    phraseEnCours += '<span id="word">';

   }




    phraseEnCours += char;




    if(i<fin)  

      {

        majorText.innerHTML = phraseEnCours + "</span>";

      }

      else

      {

       let c =  phraseEnCours.replace(interaction,"Samuel</span>");

       majorText.innerHTML = c;

      }
  } else {
    clearInterval(interval1Id);
  }
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
