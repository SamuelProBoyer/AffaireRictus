var audioElement = document.getElementById("audioMajeur");
var videoElement = document.getElementById("background");
var musique = document.getElementById("musique");
musique.volume = 0.080;
musique.play();

var sources = [
  "../video/Histoire-2-V2.mp4",
  "../video/Chapitre3-Histoire-3.mp4",
  "../video/Chapitre3-Histoire-4.mp4",
  "../video/Chapitre3-Histoire-5.mp4",
  "../video/Chapitre3-Histoire-6.mp4",
  "../video/Chapitre3-Histoire-1.mp4"
];

var sourcesAudio = [
  "../audio/17TrouveSoutien.wav",
  "../audio/18BelExemple.wav",
  "../audio/19JackConsequence.wav",
  "../audio/20JackDefenseur.wav",
  "../audio/21JackDifficultes.wav",
  "../audio/error_sound.wav"
];

var currentAudioIndex = 0;


audioElement.play();
audioElement.addEventListener("ended", function() {
    var currentIndex = sources.indexOf(videoElement.src);
    var nextIndex = (currentIndex + 1) % sources.length;
    
    if (currentAudioIndex < sourcesAudio.length) {
      currentAudioIndex++;
    } else {
      currentAudioIndex = 0;
    }
    
    videoElement.src = sources[currentAudioIndex -1];
    audioElement.src = sourcesAudio[currentAudioIndex -1];

    console.log(currentAudioIndex);
    
    videoElement.load();
    audioElement.load();
    videoElement.play();
    audioElement.play();

    if (currentAudioIndex === 6) {
      window.location.assign("conclusion.html");
    }
});
