//console.log("welcome to spotify");
// intilize the song variable s
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');  
let masterPlay = document.getElementById('masterPlay');
let songBar = document.getElementById('songBar');
let gif = document.getElementById('gif');

let songs = [
    {songName:"salam-isque-hae", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"salam isque hae", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"salam isque hae", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"salam isque hae", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"salam isque hae", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"salam isque hae", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"salam isque hae", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"salam isque hae", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
]

// Audion element.play();

// Handle play pose click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play(); 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;         
    }
    else{
          audioElement.pause(); 
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');  
        gif.style.opacity = 0;  
    }
})

audioElement.addEventListener('timeupdate', () => {ß
    // update seek bar 
Progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
songBar.value = Progress;  
})
songBar.addEventListener('change', ()=> {
    audioElement.currentTime = songBar.value * audioElement.duration/100;
})