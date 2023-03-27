const items = document.querySelectorAll('.item');
const srcVideo = document.getElementById('source-video');
const linkTrailer = document.querySelectorAll('.links-t');
const modalVideo = document.getElementById('modal-video');
const modal = document.getElementById('modal-wrapper');
const header = document.querySelector('header');

function playVideo(){
    
    modalVideo.setAttribute("src", srcVideo.src);
    modalVideo.load;
    modal.style.display = "block";
    modalVideo.play;
    
    
}

function generateImage(element) {
    let link = element.firstElementChild;
    link.addEventListener("click", function(){
    let img = element.lastElementChild;
    imgSrc = img.src;
    console.log(imgSrc);
    header.style.backgroundImage =`url(${imgSrc})`; 
 })

} 

function playPause(){
    if(video.play){
        video.pause;
    } else {
        video.play;
    }
}

function closeVideo(){
    modal.style.display = "none";
   modalVideo.setAttribute("src", "");
   modalVideo.pause;
   modalVideo.currentTime = 0;
    
}
function mouseOver(element) {
    element.addEventListener("mouseover", function() {
        let linksItem = element.firstElementChild;
        linksItem.style.visibility = "visible";
    }
    )
}
 
function mouseOut(element) {
    element.addEventListener("mouseout", function() {
        let linksItem = element.firstElementChild;
        linksItem.style.visibility = "hidden";
    }
    )
}

function toggleLireTrailer(){
items.forEach(item => mouseOver(item));
items.forEach(item => mouseOut(item));
}

function loadImageByItem(){
    items.forEach(item => generateImage(item));
}
loadImageByItem();
toggleLireTrailer();