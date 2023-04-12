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
        btn_start.style.display = "none";
        btn_next.style.display = "flex";
        bloc_content.style.display = "block";
        video.src = "../video/Chapitre2-Loop.mp4";
        typeWriter();
        const audioMajeur = document.getElementById("audioMajeur");
        audioMajeur.src = "/audio/8RechercheEquipe.wav";
        audioMajeur.play();
        setTimeout(function () {
          document.querySelector(".btn-next").style.opacity = 1;
        }, 15000);
        console.log("Je suis cliquer");
      });
  

      // AFFICHE LE DEUXIEME TEXTE
      btn_next.addEventListener("click", () => {
        const audioMajeur = document.getElementById("audioMajeur");
        audioMajeur.src = "/audio/10rictusPasMaladie.wav";
        audioMajeur.play();
        btn_next.style.display = "none";
        btn_continue.style.display = "flex";
        typeWriterSecond();
        console.log("Je suis cliquer aussi !");
      });

      btn_introLoop.addEventListener("click", () => {

      });

      
      btn_continue.addEventListener("click" , () => {
        // video.src = "../video/Chapitre2-Loupe-Identifiez1.mp4";
        // audio.play();
        // setTimeout(function () {
        //   video.src = "../video/Chapitre1-B.mp4";
        // }, 15000);
        // bloc_content.style.display = "none";
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
      // btn_toImg.addEventListener("click", () => {

      // });
      

      let string =
        "L'équipe de l'Affaire Rictus a effectué des recherches et a découvert que les rictus peuvent être causés par de nombreuses conditions médicales, telles que la maladie de Parkinson, les dystonies faciales, les tics nerveux et les traumatismes crâniens, entre autres. Dans la liste des maladies les plus connues causant le rictus il y a : Rictus sardonique , Rictus de la maladie de Parkinson , Dystonies faciales et Troubles du mouvement ";
      let string2 =
        "Le rictus en tant que tel n'est pas considéré comme une maladie en soi, mais plutôt comme une manifestation de certaines maladies ou troubles musculaires. Par conséquent, il n'existe pas de médicament spécifique pour traiter le rictus en tant que tel. Au lieu de cela, le traitement dépend de la maladie sous-jacente ou du trouble musculaire impliqué. Les médicaments utilisés pour traiter ces affections peuvent avoir des effets secondaires indésirables et affecter le patient de diverses manières. ";
      let stringLoop =
        "Maintenant que vous avez une meilleure connaissance des rictus, l'équipe de l'affaire Rictus a préparé un test pour savoir si vous êtes capable de détecter qui est affligé d'un rictus involontaire. Vous êtes dans une rue d'une ville quelconque. Parmi les gens que vous allez croiser, identifiez la personne avec un rictus involontaire. ";

      let i = 0;
      let j = 0;
      let l = 0;

      let phraseDebut = document.getElementById("phraseDebut");
      let typing_text = document.getElementById("typing-text");

      btn_next.setAttribute("disabled", true);
      
      if(i === string.length) {
        //   btn_next.disable = false;
          btn_next.setAttribute("disabled", false);
      }

      function typeWriter() {
        if (i < string.length) {
          phraseDebut.innerHTML += string.charAt(i);
          i++;

          setTimeout(typeWriter, 45);
        }
      }
      function typeWriterSecond() {
        if (j < string2.length) {
          typing_text.innerHTML += string2.charAt(j);
          j++;

          setTimeout(typeWriterSecond, 45);
        }
      }
      
      function typeWriterLoop() {
          
        if (l < stringLoop.length) {
          phraseDebut.innerHTML += stringLoop.charAt(l);
          l++;
  
          setTimeout(typeWriterLoop, 45);
        }
      }