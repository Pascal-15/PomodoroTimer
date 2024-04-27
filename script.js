const   startButton = document.getElementById('start'),
        currentTime = document.getElementById('time');


let inputTime = 11;
let timer;
sec = '0' + 0;
min = '0' + 0;
min = inputTime;
let isRunning = false;

//Start timer
function startTimer() {
    startButton.classList.replace('fa-play', 'fa-pause');
    if (isRunning != true) {
        isRunning = true;
        timer = setInterval(() => {
            sec--;
            if (min == 0 && sec == 0) {
                timerStop()
                isRunning = false
                sec = '0' + 0;
                min = inputTime;
                playSound();

                //Play sound TOTO
            }
            else if (sec <= 0) {
                min--;
                sec = 59;
            }
            currentTime.innerHTML = min + ":" + sec;
        }, 1);
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

//Play sound
function playSound() {
    let audio =  new Audio("assets/sounds/complete.wav");
    audio.volume = 0.1
    audio.play();
}

startButton.addEventListener('click', startTimer);