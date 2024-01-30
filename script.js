console.log("Welcome to Spotify");

//Initialize the Variable
let songIndex = 0;
let audioElement = new Audio("Spotify Clone/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let mastersongName = document.getElementsByClassName("mastersongName")[0];

let songs = [
  {
    songName: "Sanam theri kasam",
    filePath: "Spotify Clone/songs/1.mp3",
    coverPath: "Spotify Clone/covers/1.jpg",
  },
  {
    songName: "Enna Sona",
    filePath: "Spotify Clone/songs/2.mp3",
    coverPath: "Spotify Clone/covers/2.jpg",
  },
  {
    songName: "Oh Sainaba",
    filePath: "Spotify Clone/songs/3.mp3",
    coverPath: "Spotify Clone/covers/3.jpg",
  },
  {
    songName: "We don't talk anymore",
    filePath: "Spotify Clone/songs/4.mp3",
    coverPath: "Spotify Clone/covers/4.jpg",
  },
  {
    songName: "Animals",
    filePath: "Spotify Clone/songs/5.mp3",
    coverPath: "Spotify Clone/covers/5.jpg",
  },
  {
    songName: "Maps",
    filePath: "Spotify Clone/songs/6.mp3",
    coverPath: "Spotify Clone/covers/6.jpg",
  },
  {
    songName: "Chikkni Chammele",
    filePath: "Spotify Clone/songs/7.mp3",
    coverPath: "Spotify Clone/covers/7.jpg",
  },
  {
    songName: "Chammak Challo",
    filePath: "Spotify Clone/songs/8.mp3",
    coverPath: "Spotify Clone/covers/8.jpg",
  },
  {
    songName: "Enthira Lokathe",
    filePath: "Spotify Clone/songs/9.mp3",
    coverPath: "Spotify Clone/covers/9.jpg",
  },
  {
    songName: "Google Google",
    filePath: "Spotify Clone/songs/10.mp3",
    coverPath: "Spotify Clone/covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//Listen to events
audioElement.addEventListener("timeupdate", () => {
  // console.log('timeupdate');
  //update seekbar

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress);
  myProgressBar.value = progress;
});

//progressbar seek
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value / 100) * audioElement.duration;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

//make pause and play for each elements
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `Spotify Clone/songs/${songIndex + 1}.mp3`;
      mastersongName.innerHTML = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");

    });
  }
);

//next button works
document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `Spotify Clone/songs/${songIndex + 1}.mp3`;
  mastersongName.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

//previos button works
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex < 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `Spotify Clone/songs/${songIndex + 1}.mp3`;
  mastersongName.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
