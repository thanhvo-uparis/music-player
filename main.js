const playList = document.querySelector(".playlist");
const titlePlaying = document.querySelector(".title-playing");
let idSongCurrent = 0;

const player = {
    songs:  [
        {
            id: 1,
            title: "Perfect",
            singer: "Ed Sheeran",
            img: "./assets/imgs/Perfect.jpg",
            path: "./assets/audios/Ed Sheeran - Perfect (Lyrics⧸Vietsub).mp3"
        },
        {
            id: 2,
            title: "Let Her Go",
            singer: "Passenger",
            img: "./assets/imgs/Let Her Go.jpg",
            path: "./assets/audios/Let Her Go - Passenger  ( Lyrics).mp3"
        },
        {
            id: 3,
            title: "That Girl",
            singer: "Olly Murs",
            img: "./assets/imgs/That Girl.jpg",
            path: "./assets/audios/That Girl - Olly Murs (Lyric Video).mp3"
        },
        {
            id: 4,
            title: "Song 4",
            singer: "Olly Murs",
            img: "./assets/imgs/That Girl.jpg",
            path: "./assets/audios/That Girl - Olly Murs (Lyric Video).mp3"
        },
        {
            id: 5,
            title: "Song 5",
            singer: "Olly Murs",
            img: "./assets/imgs/That Girl.jpg",
            path: "./assets/audios/That Girl - Olly Murs (Lyric Video).mp3"
        },
    ],
    renderSong: function() {
        
        const html = this.songs.map((song, index) => {
            return `
                <div class="song" data-index=${index}>
                        <div class="thumb">
                            <img src="${song.img}">
                        </div>
                        <div class="body-song">
                            <p class="name">${song.title}</p>
                            <p class="singer">${song.singer}</p>
                        </div>
                        <div class="option">
                            <i class="fa-solid fa-heart" style="color: #ff427b;"></i>
                        </div>
                    </div>
                `
        })
        playList.innerHTML = html.join("");
        this.updateTitle(idSongCurrent);
    },
    updateTitle: function(index) {
        const titleSong = document.querySelector("#title-song");
        const cdThumb = document.querySelector("#cd-thumb");

        titleSong.textContent = this.songs[index]["title"];
        cdThumb.setAttribute("src", this.songs[index]["img"])
    },
    selectedSong: function() {
        playList.addEventListener("click", (event) => {
            const songClicked = event.target.closest(".song");

            if (songClicked) {
                idSongCurrent = songClicked.getAttribute("data-index");
                this.updateTitle(idSongCurrent);

                const listSongs = document.querySelectorAll(".song");
                listSongs.forEach(song => {
                    song.classList.remove("active");
                })
                songClicked.classList.add("active");
            }
        })
    },
    start: function() {
        this.renderSong();
        this.selectedSong();
    }
}

player.start();