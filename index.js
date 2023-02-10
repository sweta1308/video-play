const btnEl = document.querySelector(".btn");
const crossBtn = document.querySelector(".fa-solid")
const trailer = document.querySelector(".trailer-container");
const image = document.querySelector(".image-container")
const video = document.querySelector("video")

btnEl.addEventListener("click", btnClick)

function btnClick() {
    trailer.classList.remove("active");
    image.style.display = 'none'
}

crossBtn.addEventListener('click', btnHandle) 

function btnHandle() {
    trailer.classList.add('active');
    image.style.display = 'block'
    video.pause();
    video.currentTime = 0
}