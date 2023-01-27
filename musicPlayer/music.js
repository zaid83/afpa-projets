
// initialisation

// Recuperer  les élémeents du DOM par l'id

const track = document.getElementById("trackmp3");
const repeatIcon = document.getElementById("repeat");
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const volumeSong = document.getElementById("progressVolume");
const titleTrack = document.getElementById("titleTrack");
const authorTrack = document.getElementById("authorTrack");
const backtrack = document.getElementById("backtrack");
const fortrack = document.getElementById("fortrack");
const imgTrack = document.getElementById("imgTrack");
const artists = ["Tupac Shakur", "Artic Monkeys", "Damso", "Damso"];
const titles = ["Changes", "R U Mine", "J Respect R", "Tueurs"];
const covers = ["https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/0/1/8/0728706300810/tsp20120923101435/All-eyez-on-me-remasterise.jpg",
    "https://i.ytimg.com/vi/ngzC_8zqInk/hqdefault.jpg", "https://static.fnac-static.com/multimedia/Images/FR/NR/4f/77/9a/10123087/1507-1/tsp20221209165218/Ipseite.jpg", "https://images.genius.com/8acfc71149a71fa2d33061a21b4196cc.958x958x1.png"];
const tracks = ["2Pac - Changes ft. Talent.mp3", "Arctic Monkeys - R U Mine.mp3", "Damso - N. J Respect R.mp3", "Tueurs.mp3"];
let tracksId = 0;
let trackIsPlaying = false;
let repeat = false;
loadTrack();




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



// Volume de base
song.volume = 0.5;






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
        song.load();
        song.play();
        loadTrack();

    }
    else {
        tracksId = tracks.length - 1;
        song.load();
        song.play();
        loadTrack();

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

// Fonction pour répéter la musique
function repeatTrack() {
    let repeat = true;
    if (repeat) {
        repeatIcon.classList.add("repeatActive");
        setInterval(() => {
            // Passer à la track suivante à la fin automatiquement
            if (song.duration == song.currentTime) {
                song.currentTime = 0;
                song.load;
                song.play;
            };
        }, 500)
        repeat = false;
    } else {
        repeatIcon.classList.add("repeatActive");
    }
}



