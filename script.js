const   startButton = document.getElementById('start'),
        currentTime = document.getElementById('time'),
        fieldTime = document.getElementById('input-time');

let inputTime = 45;
let timer;
sec = '0' + 0;
//min = '0' + 0;
min = inputTime;
let isRunning = false;

//Start timer
function startTimer() {
    startButton.classList.replace('fa-play', 'fa-pause');
    if (isRunning != true) {
        isRunning = true;
        timer = setInterval(() => {
            sec--;
            if (min <= 0 && sec <= 0) {
                timerStop();
                isRunning = false;
                sec = '0' + 0;
                min = fieldTime.value;
                playSound();
            }
            else if (sec <= 0) {
                min--;
                sec = 59;
            }
            currentTime.innerHTML = min + ":" + sec;
        }, 1000);
    }
    else {
        timerStop();
        isRunning = false;
    }
}
//Pause timer
function timerStop() {
    clearInterval(timer);
    startButton.classList.replace('fa-pause', 'fa-play');
}
//Change timer to inputField value
function updateTime() {

    if (fieldTime.value >= 1 && fieldTime.value <= 120) {
        min = fieldTime.value;
        sec = '0' + 0;
        currentTime.innerHTML = min + ":" + sec; 
    }
    else {
        alert("Bitte geben Sie eine gültige Minutenangabe zwischen 1 und 120 ein!")
        min = '0' + 0;
        sec = '0' + 0;
        currentTime.innerHTML = min + ":" + sec; 
    }
}

//Play sound when timer finished
function playSound() {
    let audio =  new Audio("assets/sounds/complete.wav");
    audio.volume = 0.025;
    audio.play();
}

startButton.addEventListener('click', startTimer);
fieldTime.addEventListener('change', updateTime);