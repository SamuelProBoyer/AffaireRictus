const phraseDebut = document.getElementById("phraseDebut");
    const audio = document.getElementById("audio"); 
    const audioMajeur = document.getElementById("audioMajeur");
    const btn_end = document.querySelector(".btn-end");
    const typingText = document.getElementById("typing-text");
    const typingText1 = document.getElementById("typing-text1");
    const btn_start = document.querySelector(".btn-start");
    audio.volume = 0.1;
    audio.play();
    setTimeout(function () {
      document.querySelector('.btn-start').style.opacity = 1;
      document.querySelector('.btn-container').style.display = "block";
    }, 50000);
    
    audioMajeur.src = "../audio/22Conclu_part1.wav";
    audioMajeur.play();
    
    let string = "Même si le rictus est étudié depuis longtemps, il reste encore beaucoup de zones d'ombre autour de ce sujet. Il serait intéressant de mieux comprendre les mécanismes neurobiologiques qui sous-tendent le rictus. En bref, il reste beaucoup à apprendre sur le rictus, cette réaction physique et psychologique fascinante. "
    let phraseEnCours = "";

    // Interaction mécanisme
    const phraseDetails = "Des recherches pourraient être menées pour identifier les circuits neuronaux et les neurotransmetteurs qui sont impliqués dans cette expression faciale, ainsi que les facteurs environnementaux et génétiques qui peuvent y contribuer. "
    const interaction1 = "mécanismes";
    let x1 = 0;

    
    let string2 = "En conclusion, il faut savoir que le rictus ne représente pas toujours les mauvaises intentions d'une personne. Parfois, ce type de réaction n'est pas créé par des mauvaises intentions, mais plutôt par un effet d'une maladie malheureusement peu contrôlable voir pas du tout. Il faut chercher à être compréhensif envers ces personnes qui vivent des vies aussi normales que les autres, avec des familles, des émotions et des amis tout aussi compréhensibles que les autres. "
    let i = 0;
    let j = 0;


    function typeWriter() {
      let debut = string.indexOf(interaction1);
      let fin = debut + interaction1.length;
        if (i < string.length) {
          const char = string.charAt(i);
          i++;

          setTimeout(typeWriter, 45);
          if (i == debut) {
            phraseEnCours += '<span id="word" class="shine">';
          } 

          phraseEnCours += char;

          if (i < fin) {
            phraseDebut.innerHTML = phraseEnCours + "</span>";
          }
          else {
            let c1 = phraseEnCours.replace(interaction1, "mécanisme</span>");
            phraseDebut.innerHTML = c1;
          }
        }
        const wordElement = document.getElementById("word");
        if (wordElement) {
          wordElement.addEventListener("click", function () {
            console.log("Mot cliquer !");
            
            wordElement.classList.remove("shine");
            
            phraseDebut.style.display === "none";
            if (typingText1.style.display === "none") {
              audioMajeur.src = "../audio/22Amecanisme.wav";
              audioMajeur.play();
              typingText1.style.display = "block";
              wordElement.style.color = "white";
              wordElement.style.fontWeight = "bold";
            }
          });
        }
      }

      function typeWriterPlus1() {
        if (typingText1.style.display === "block") {
          if (x1 < phraseDetails.length) {
            typingText1.innerHTML += phraseDetails.charAt(x1);
            x1++;
          } else {
            clearInterval(interval1Id);
          }
        }
      }
  
    const intervalId = setInterval(typeWriterPlus1, 40);


    function typeWriterSecond() {
        if (j < string2.length) {
          typingText.innerHTML += string2.charAt(j);
          j++;

          setTimeout(typeWriterSecond, 45);
        }
      }
      typeWriter();
      setTimeout(function() {
      document.querySelector('.btn-start').style.opacity = 1;
    }, 15000);

    btn_end.style.display = "none";
    btn_start.addEventListener("click" , () => {
        audioMajeur.src = "../audio/23Conclu_part2.wav";
        audioMajeur.play();
        btn_end.style.display = "flex";
        btn_start.style.display = "none";
        console.log("Je suis cliquer");
        typeWriterSecond();
    });