const   startButton = document.getElementById('start'),
        currentTime = document.getElementById('time');



sec = '0' + 0;
min = '0' + 0;
var timer;

let isRunning = false;

//Timer funtion
function startTimer() {
    startButton.classList.replace('fa-play', 'fa-pause');
    if (isRunning != true) {
        isRunning = true;
        timer = setInterval(() => {
            sec++;
            sec = sec < 10 ? '0' + sec : sec;

            if (sec == 60) {
                min++;
                min = min < 10 ? '0' + min : min;
                sec = '0' + 0;
            }
            currentTime.innerHTML = min + ":" + sec;
        }, 1000);
    }
    else {
        timerStop();
        isRunning = false;
    }
}
//Pause Timer
function timerStop() {
    clearInterval(timer)
    startButton.classList.replace('fa-pause', 'fa-play');
}

startButton.addEventListener('click', startTimer);