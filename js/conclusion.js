const phraseDebut = document.getElementById("phraseDebut");
    const audio = document.getElementById("audio"); 
    const audioMajeur = document.getElementById("audioMajeur");
    const btn_end = document.querySelector(".btn-end");
    const typingText = document.getElementById("typing-text");
    const btn_start = document.querySelector(".btn-start");
    let string = "Même si le rictus est étudié depuis longtemps, il reste encore beaucoup de zones d'ombre autour de ce sujet. Il serait intéressant de mieux comprendre les mécanismes neurobiologiques qui sous-tendent le rictus. En bref, il reste beaucoup à apprendre sur le rictus, cette réaction physique et psychologique fascinante. "
    let string2 = "En conclusion, il faut savoir que le rictus ne représente pas toujours les mauvaises intentions d'une personne. Parfois, ce type de réaction n'est pas créé par des mauvaises intentions, mais plutôt par un effet d'une maladie malheureusement peu contrôlable voir pas du tout. Il faut chercher à être compréhensif envers ces personnes qui vivent des vies aussi normales que les autres, avec des familles, des émotions et des amis tout aussi compréhensibles que les autres. "
    audio.volume = 0.1;
    audio.play();
    setTimeout(function () {
      document.querySelector('.btn-start').style.opacity = 1;
      document.querySelector('.btn-container').style.display = "block";
    }, 50000);

    audioMajeur.src = "../audio/22Conclu_part1.wav";
    audioMajeur.play();

    let i = 0;
    let j = 0;
    function typeWriter() {
        if (i < string.length) {
          phraseDebut.innerHTML += string.charAt(i);
          i++;

          setTimeout(typeWriter, 45);
        }
      }
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