console.log("welcome to spotify");
// intilize the song variable s
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = documnet.getElementById('myProgeressBar');

let songs = [
    {songName:"salam isque hae", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam isque hae", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam isque hae", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam isque hae", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam isque hae", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam isque hae", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam isque hae", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"salam isque hae", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
]

// Audion element.play();

// Handle play pose click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play(); 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');        
    }
})

myProgressBar.addEventListener('timeUpdate', () => {
    console.log('timeUpdate');
    // update seek bar 

})
