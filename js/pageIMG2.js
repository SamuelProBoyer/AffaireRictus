const wrongButtons = document.querySelectorAll(".wrong");
    const correctButton = document.querySelector(".correct");
    const video = document.getElementById("background");
    const image = document.getElementById("background-img");
    const audioMajeur = document.getElementById("audioMajeur");
    audioMajeur.volume = 0.5;

    const audio = document.getElementById("audio");
    audio.volume = 0.1;
    audio.play();


    const errorSound = new Audio("audio/error_sound.wav");
    const correctSound = new Audio("audio/correct_sound.mp3");

    wrongButtons.forEach(button => {
      button.addEventListener("click", async () => {
        errorSound.play();
      });
    });

    video.style.display = "none";
    correctButton.addEventListener("click", () => {
      image.style.display = "none";
      video.style.display = "block";
      correctSound.play();
      setTimeout(function () {
        video.src = "video/Chapitre2-Fin-V2.mp4";
        audio.src = "/audio/PP_projet3_attente.mp3"
        audio.play();
        audioMajeur.src = "/audio/13TestHard.wav";
        audioMajeur.play(); 
      }, 1000);
      setTimeout(function () {
        document.location.href = "/Chapitres/chapitre3.html";
      }, 20000);
    });