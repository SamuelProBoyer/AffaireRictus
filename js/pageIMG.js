const wrongButtons = document.querySelectorAll(".wrong");
    const correctButton = document.querySelector(".correct");
    const video = document.getElementById("background");
    const image = document.getElementById("background-img");

    const audio = document.getElementById("audio");
    audio.volume = 0.1;
    audio.play();


    const errorSound = new Audio("audio/error_sound.wav");
    const correctSound = new Audio("audio/correct_sound.mp3");

    wrongButtons.forEach(button => {
      button.addEventListener("click", async () => {
        console.log("Wrong one !");

        correctSound.play();
        setTimeout(function () {
          document.location.href = "/Chapitres/chapitre2-transition.html";

        }, 2000);
      });
    });

    video.style.display = "none";
    correctButton.addEventListener("click", () => {
      console.log("Bravo !");
      image.style.display = "none";
      video.style.display = "block";
      correctSound.play();
      setTimeout(function () {
        // document.location.href = "/pageIMG2.html";
        // document.location.href = "/Chapitres/chapitre3.html";
        video.src = "video/Chapitre2-Fin.mp4";
        
      }, 1000);
      setTimeout(function () {
        document.location.href = "/Chapitres/chapitre2-transition.html";
      }, 1000);
    });