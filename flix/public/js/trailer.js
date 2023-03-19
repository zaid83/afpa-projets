function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('.trailer__video');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}