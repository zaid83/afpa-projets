
// initialisation

// Recuperer  les élémeents du DOM par l'id

let track = document.getElementById("trackmp3");
let repeatIcon = document.getElementById("repeat");
let shuffleIcon = document.getElementById("shuffle");
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let volumeSong = document.getElementById("progressVolume");
let titleTrack = document.getElementById("titleTrack");
let authorTrack = document.getElementById("authorTrack");
let backtrack = document.getElementById("backtrack");
let fortrack = document.getElementById("fortrack");
let imgTrack = document.getElementById("imgTrack");
let artists = ["Tupac Shakur", "Artic Monkeys", "Damso", "Damso"];
let titles = ["Changes", "R U Mine", "J Respect R", "Tueurs"];
let covers = ["https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/0/1/8/0728706300810/tsp20120923101435/All-eyez-on-me-remasterise.jpg",
    "https://i.ytimg.com/vi/ngzC_8zqInk/hqdefault.jpg", "https://static.fnac-static.com/multimedia/Images/FR/NR/4f/77/9a/10123087/1507-1/tsp20221209165218/Ipseite.jpg", "https://images.genius.com/8acfc71149a71fa2d33061a21b4196cc.958x958x1.png"];
const tracks = ["2Pac - Changes ft. Talent.mp3", "Arctic Monkeys - R U Mine.mp3", "Damso - N. J Respect R.mp3", "Tueurs.mp3"];
let tracksId = 0;
let trackIsPlaying = false;
let repeat = false;
let shuffle = false;


//Chargement de la track et des informations
loadTrack();

// Volume de base
song.volume = 0.5;



function loadTrack() {

    imgTrack.src = covers[tracksId];
    authorTrack.textContent = artists[tracksId];
    titleTrack.textContent = titles[tracksId];
    track.src = tracks[tracksId];
    song.load();
}




// Durée de la musique = barre de progression
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
    volumeSong.value = song.volume;
}



// Synchroniser la barre de progression avec la musique ttes les 500 milisecondes 
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
        // Passer à la track suivante à la fin automatiquement
        if (song.duration == song.currentTime && repeat == false) {
            forTrack();
        };
    }, 500)
}

// Changer le temps de la musique lorsque l'on clique sur la barre de progression
progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');

}

//// Changer le volume lorsque l'on clique sur la barre 
volumeSong.onchange = function () {
    song.volume = volumeSong.value;

}

// Fonction Play/Pause avec changement d'icones
function playPause() {
    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrlIcon.classList.add('fa-play');
        ctrlIcon.classList.remove('fa-pause');
        trackIsPlaying = false;

    }
    else {
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
        trackIsPlaying = true;
    }
}

// Fonction pour passer à la musique précédente
function backTrack() {
    if (tracksId > 0) {
        tracksId--;
        loadTrack();
        song.play();

    }
    else {
        tracksId = tracks.length - 1;
        loadTrack();
        song.play();

    }

}


// Fonction pour passer à la musique suivante
function forTrack() {

    if (tracksId < tracks.length - 1) {
        tracksId++;
        loadTrack();
        song.play();

    }
    else {
        tracksId = 0;
        loadTrack();
        song.play();

    }

}

// Fonction pour répéter la musiquess
function repeatTrack() {
    repeat = true;
    repeatIcon.classList.toggle("repeatActive");

    if (repeat && document.getElementsByClassName("repeatActive")) {
        setInterval(() => {
            // Passer à la track suivante à la fin automatiquement
            if (song.duration == song.currentTime && repeat) {
                loadTrack();
                song.play();
                repeat = false;

            }
            else if (repeat == false && document.getElementsByClassName("repeatActive")) {
                repeatIcon.classList.remove("repeatActive");
            }
            ;
        }, 500)
    }
}

// passer a la musique suivante au hasard 
function shuffleTrack() {
    shuffle = true;
    let trackplaying = tracksId;

    let randomId = Math.floor(Math.random() * tracks.length);

    if (shuffle && repeat == false && randomId != trackplaying) {

        tracksId = randomId;
        console.log(tracksId);
        loadTrack();
        song.play();
        shuffle == false;
    }
}
