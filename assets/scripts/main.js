// main.js

// TODO
let volumeNumber = document.getElementById("volume-number");
let volumeImage = document.getElementById("volume-image");
let volumeSlider = document.getElementById("volume-slider");

let airHorn = document.getElementById("radio-air-horn");
let carHorn = document.getElementById("radio-car-horn");
let partyHorn = document.getElementById("radio-party-horn");

let hornSound = document.getElementById("horn-sound");
var honkButton = document.getElementById("honk-btn");

let soundImage = document.getElementById("sound-image");

let form = document.getElementById("party-horn-form");

const soundLevel = {
    level0: 0,
    level1: 33,
    level2: 66,
    level3: 100
};


//function to update the image correcponding to volume
function changeVolumeIcon(vLevel, vImage){
    if(vLevel > soundLevel['level2']){
        vImage.scr = "./assets/media/icons/volume-level-3.svg";
    }
    else if(vLevel > soundLevel['level1']){
        vImage.scr = "./assets/media/icons/volume-level-2.svg";
    }
    else if(vLevel > soundLevel['level0']){
        vImage.scr = "./assets/media/icons/volume-level-1.svg";
    }
    else{
        vImage.scr = "./assets/media/icons/volume-level-0.svg";
    }
};

//call changeVolumeIcon function
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
volumeSlider.addEventListener("input", function(){
    volumeNumber.value = volumeSlider.value;
    hornSound.volume = volumeSlider.value / 100; //volume ranges from 0 to 1
    
    if(volumeSlider.value == 0){
        honkButton.disabled = true;
    }
    else{
        honkButton.disabled = false;
    }
    changeVolumeIcon(volumeSlider.value, volumeImage);
});

volumeNumber.addEventListener("input", function(){
    volumeSlider.value = volumeNumber.value;
    hornSound.volume = volumeNumber.value / 100; //volume ranges from 0 to 1
    if(volumeNumber.value == 0){
        honkButton.disabled = true;
    }
    else{
        honkButton.disabled = false;
    }
    changeVolumeIcon(volumeNumber.value, volumeImage);
});

//Update the 3 radios (car/air/party) to corresponding sources
carHorn.addEventListener("click", function(){
    hornSound.scr = "./assets/media/audio/car-horn.mp3";
    soundImage.src = "./assets/media/images/car.svg";
});
airHorn.addEventListener("click", function(){
    hornSound.src = "./assets/media/audio/air-horn.mp3";
    soundImage.src = "./assets/media/images/air-horn.svg";
});
partyHorn.addEventListener("click", function(){
    hornSound.src = "./assets/media/audio/party-horn.mp3";
    soundImage.src = "./assets/media/images/party-horn.svg";
});

form.addEventListener("submit", playHorn);

//play horn
//from https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit 
function playHorn(e) {
    e.preventDefault();
    hornSound.play();
};