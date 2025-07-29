const audio = document.querySelector("#audio");
const playBtn = document.querySelector("#play-btn");

playBtn.addEventListener("click", () => {
    audio.play();
})