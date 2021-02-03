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

//let form = document.getElementById("party-horn-form");

const soundLevel = {
    level0: 0,
    level1: 33,
    level2: 66,
    level3: 100
};


//function to update the image correcponding to volume
function changeVolumeIcon(){
    honkButton.disabled = false;
    hornSound.volume = (volumeNumber.value)/100.0;  //volume is range from 0 to 1
    if(volumeNumber.value > soundLevel['level2']){
        volumeImage.scr = "./assets/media/icons/volume-level-3.svg";
    }
    else if(volumeNumber.value > soundLevel['level1']){
        volumeImage.scr = "./assets/media/icons/volume-level-2.svg";
    }
    else if(volumeNumber.value > soundLevel['level0']){
        volumeImage.scr = "./assets/media/icons/volume-level-1.svg";
    }
    else{
        volumeImage.scr = "./assets/media/icons/volume-level-0.svg";
        honkButton.disabled = true;   //dissable button if not in range of 0-100
        volumeImage.alt = "Off";
    }
};

//call changeVolumeIcon function
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
volumeSlider.addEventListener("input", function(){
    volumeNumber.value = volumeSlider.value;
    changeVolumeIcon();
});
volumeNumber.addEventListener("input", function(){
    volumeSlider.value = volumeNumber.value;
    changeVolumeIcon();
});

//Update the 3 radios (car/air/party) to corresponding sources
carHorn.oninput = function(){
    hornSound.scr = "./assets/media/audio/car-horn.mp3";
    soundImage.src = "./assets/media/images/car.svg";
};
airHorn.oninput = function(){
    hornSound.src = "./assets/media/audio/air-horn.mp3";
    soundImage.src = "./assets/media/images/air-horn.svg";
};
partyHorn.oninput = function(){
    hornSound.src = "./assets/media/audio/party-horn.mp3";
    soundImage.src = "./assets/media/images/party-horn.svg";
};


//play horn
//from https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit 
honkButton.onclick = function(e){
    e.preventDefault();
    hornSound.play();
};