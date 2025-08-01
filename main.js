const playList = document.querySelector(".playlist");
const titlePlaying = document.querySelector(".title-playing");
//handle music: play/pause, next, prev
const btnHandlePlay = document.querySelector("#btn-handlePlay");
const audio = document.querySelector("#audio");
const nextSong = document.querySelector("#next-song");
const prevSong = document.querySelector("#prev-song");

let isPlaying = false;
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
            title: "Until You",
            singer: "Shayne Ward",
            img: "./assets/imgs/That Girl.jpg",
            path: "./assets/audios/Shayne Ward - Until You (Lyrics).mp3"
        },
        {
            id: 4,
            title: "Apologize",
            singer: "Timbaland",
            img: "./assets/imgs/That Girl.jpg",
            path: "./assets/audios/Timbaland - Apologize ft. OneRepublic.mp3"
        },
        {
            id: 5,
            title: "See You Again",
            singer: "Wiz Khalifa ft. Charlie Puth",
            img: "./assets/imgs/That Girl.jpg",
            path: "./assets/audios/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp3"
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
                            <i class="fa-solid fa-heart" style="color: #e1e2e5;"></i>
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
        document.querySelector(".song").classList.add("active");
    },
    updateSongCurrent: function() {
        //upload src file audio
        audio.setAttribute("src", this.songs[idSongCurrent]["path"]);
        const listSongs = document.querySelectorAll(".song");
        listSongs.forEach(song => {
            song.classList.remove("active");
        })
        listSongs[idSongCurrent].className += " active";
},
    playAudio: function() {
        this.updateSongCurrent();
        audio.play();
    },
    togglePlay: function() {
        //verifie si musique est en pause
        if (audio.paused) {
            btnHandlePlay.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            this.playAudio();
        }
        else {
            btnHandlePlay.innerHTML = `<i class="fa-solid fa-play"></i>`;
            audio.pause();
        }
    },
    handleNext: function() {
       nextSong.addEventListener("click", () => {
            idSongCurrent = (idSongCurrent + 1) % this.songs.length;
            if (!audio.paused) {
                this.playAudio();
            } else {
                this.updateSongCurrent();
            }
            console.log(`khi bam next: ${idSongCurrent}`);
        }) 
    },
    handlePrev: function() {
       prevSong.addEventListener("click", () => {
            idSongCurrent = (idSongCurrent + this.songs.length - 1) % this.songs.length;
            if (!audio.paused) {
                this.playAudio();
            } else {
                this.updateSongCurrent();
            }
            console.log(`khi bam prev: ${idSongCurrent}`);
        }) 
    },
    handleEvents: function() {
        btnHandlePlay.addEventListener("click", () => {
            this.togglePlay();
        });

        this.handleNext();
        this.handlePrev();
    },
    selectedSong: function() {
        playList.addEventListener("click", (event) => {
            const songClicked = event.target.closest(".song");
            if (songClicked) {
                
                idSongCurrent = parseInt(songClicked.getAttribute("data-index"));
                console.log(`khi bam chon bai: ${idSongCurrent}`);
            
                this.updateTitle(idSongCurrent);
                this.updateSongCurrent(); //update src of song

                btnHandlePlay.innerHTML = `<i class="fa-solid fa-pause"></i>`;
                audio.play();
            }
        })
    },
    start: function() {
        this.renderSong();
        this.selectedSong();
        this.handleEvents();
    }
}

player.start();