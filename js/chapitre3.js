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
      }, 1000);
      // AFFICHE LE RPEMIER TEXTE
      btn_start.addEventListener("click", () => {
        console.log("start clique");
        btn_start.style.display = "none";
        btn_next.style.display = "flex";
        bloc_content.style.display = "block";
        video.src = "../video/Histoire-0-V2.mp4";
        setTimeout(function () {
          document.querySelector(".btn-next").style.opacity = 1;
        }, 2000);
        typeWriter();
        const audioMajeur = document.getElementById("audioMajeur");
        audioMajeur.src = "/audio/14Chapitre3Intro.wav";
        audioMajeur.play();
        console.log("Je suis cliquer");
      });
  

      // AFFICHE LE DEUXIEME TEXTE
      btn_next.addEventListener("click", () => {
        bloc_content.style.display = "none";
        btn_next.style.display = "none";
        btn_continue.style.display = "flex";
        console.log("Je suis cliquer aussi !");
      });

      btn_introLoop.addEventListener("click", () => {

      });


      let phraseDebut = document.getElementById("phraseDebut");
      let typing_text = document.getElementById("typing-text");
      let phraseEnCours = "";
      let phraseEnCours2 = "";

      let string = "Malheureusement, cette maladie n'est pas connue de tous et, par conséquent, les rictus peuvent avoir un impact significatif sur la vie quotidienne des personnes atteintes. Les traitements pour les rictus peuvent inclure des médicaments, des interventions chirurgicales et d'autres thérapies pour soulager les symptômes et améliorer la qualité de vie. Afin de mieux comprendre les défis associés à cette maladie, l'équipe de l'affaire Rictus vous fera découvrir la vie d'une personne atteinte de rictus involontaires. ";
      
      // Interaction vie quotidienne
      const typingText = document.getElementById("typing-text1");
      const phraseDetails = "La vie quotidienne est impactée notamment sur leur capacité à interagir socialement et à communiquer efficacement. "
      const interaction1 = "vie";
      let x1 = 0;
      let interaction1Writing = false;

      let i = 0;
      let j = 0;
      let l = 0;

      btn_next.setAttribute("disabled", true);
      
      if(i === string.length) {
          btn_next.setAttribute("disabled", false);
      }

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
            let c1 = phraseEnCours.replace(interaction1, "vie</span>");
            phraseDebut.innerHTML = c1;
          }
        }
      // vie quotidienne
      const wordElement = document.getElementById("word");
      if (wordElement) {
        wordElement.addEventListener("click", function () {
          console.log("Mot cliquer !");
          audioMajeur.src = "/audio/14AImpactSocial.wav";
          audioMajeur.play();
          wordElement.classList.remove("shine");
          
          phraseDebut.style.display === "none";
          if (typingText.style.display === "none") {
            typingText.style.display = "block";
            wordElement.style.color = "white";
            wordElement.style.fontWeight = "bold";
          }
        });
      }
    }

    function typeWriterPlus() {
      if (typingText.style.display === "block") {
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

    const intervalId = setInterval(typeWriterPlus, 47);