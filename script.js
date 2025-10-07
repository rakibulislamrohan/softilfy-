//console.log("welcome to spotify");
// intilize the song variable s
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');  
let masterPlay = document.getElementById('masterPlay');
let songBar = document.getElementById('songBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"salam-isque-hae", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"tere-mere-kahani ", filePath:"song/2.mp3", coverPath:"cover/2.jpg"},
    {songName:"dill-dey-diye", filePath:"song/3.mp3", coverPath:"cover/3.jpg"},
    {songName:"dill mere manta nehi", filePath:"song/4.mp3", coverPath:"cover/4.jpg"},
    {songName:"thu - jo- mila ", filePath:"song/5.mp3", coverPath:"cover/5.jpg"},
    {songName:"thum-hei-hon", filePath:"song/6.mp3", coverPath:"cover/6.jpg"},
    {songName:"payer-lavsome-kaha", filePath:"song/7.mp3", coverPath:"cover/7.jpg"},
    {songName:"pal-ek-pal", filePath:"song/8.mp3", coverPath:"cover/8.jpg"},
]

songItem.forEach((element,i) => {
    // console.log(element,i);
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

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

audioElement.addEventListener('timeupdate', () => { 
    // update seek bar 
Progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
songBar.value = Progress;  
})
songBar.addEventListener('change', ()=> {
    audioElement.currentTime = songBar.value * audioElement.duration/100;
})
const makeAllPlays = () =>{
 Array.from(document.getElementsByClassName("sonItemPlay")).forEach((element) => {
    element.target.classList.add('fa-pasue-circle');
 })
}

Array.from(document.getElementsByClassName("sonItemPlay")).forEach((element) => {
element.addEventListener('click', (e) => {
   // console.log(e.target);
    makeAllPlays();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pasue-circle')
    audioElement.src = 'song/3.mp3';
    audioElement.currentTime = 0;
    audioPlay(); 
} )

    
})

