const item = document.getElementsByClassName('item');
const video = document.getElementsByClassName('modal-video');


function playVideo(){
    console.log(video);
    const modal = document.getElementsByClassName('modal-wrapper');
    modal[0].style.display = "block";
    video.play;
    
    
}