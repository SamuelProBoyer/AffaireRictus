const phraseDebut = document.getElementById("phraseDebut");
    const btn_start = document.querySelector(".btn-start");
    const typingText = document.getElementById("typing-text");
    const audioMajeur = document.getElementById("audioMajeur");
    audioMajeur.src = "/audio/12ResultatFacile.wav";
    audioMajeur.play();
    let string = "Comme vous pouvez le constater, s'il y a des sourires sur les visages de toutes les personnes présentes devant vous, il est bien difficile de détecter la personne atteinte d'un rictus involontaire. Essayons cette épreuve dans des conditions plus réalistes. Vous devez trouver la personne avec un rictus involontaire. "
    const audio = document.getElementById("audio");
    audio.volume = 0.1;
    audio.play();
    setTimeout(function () {
      document.querySelector('.btn-start').style.opacity = 1;
    }, 10000);


    let i = 0;
    function typeWriter() {
        if (i < string.length) {
          phraseDebut.innerHTML += string.charAt(i);
          i++;

          setTimeout(typeWriter, 45);
        }
      }
      typeWriter();

      btn_start.addEventListener("click" , () => {
        console.log("Cliquer");
        
        // Code here..
      });