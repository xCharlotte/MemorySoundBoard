document.getElementById('js-soundboard-1').addEventListener('mouseenter', (event) => {
  console.log('he');
  audioHandler('js-sound-1');
});

function audioHandler(target) {   
    let audioFile = document.getElementById(target);

    audioFile.volume = 0.3;
    audioFile.autoplay = true;
    audioFile.loop = true;
    audioFile.load();
}