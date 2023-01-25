// Récuperer  les élémeents du DOM par l'id

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let volumeSong = document.getElementById("progressVolume");

song.volume = 0.5;

// Durée de la musique = barre de progression

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
    volumeSong.value = song.volume;
}

// Fonction Play/Pause avec changement d'icones

function playPause() {
    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrlIcon.classList.add('fa-play');
        ctrlIcon.classList.remove('fa-pause');

    }
    else {
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    }
}

// Synchroniser la barre de progression avec la musique ttes les 500 milisecondes

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
}

// Changer le temps de la musique lorsque l'on clique sur la barre de progression

progress.onchange = function (){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');

}

volumeSong.onchange = function (){
    song.volume = volumeSong.value;

}

