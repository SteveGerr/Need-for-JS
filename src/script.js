const score    = document.querySelector('.score'),
      start    = document.querySelector('.start'),
      gameArea = document.querySelector('.gameArea'),
      car      = document.createElement('div');

car.classList.add('car');
start.addEventListener('click', startGame);

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

const setting = {
    start: false,
    score: 0,
    speed: 3
};


function startGame() {
    start.classList.add('hide');
    requestAnimationFrame(playGame);
    setting.start = true;
    setting.x = car.offsetLeft;
    setting.y = car.offsetTop;
    gameArea.appendChild(car); 
}

function playGame() {
    if (setting.start) {
        if (keys.ArrowLeft && setting.x > 0) {
            setting.x -= setting.speed;
        }
        if (keys.ArrowRight) {
            setting.x += setting.speed;
        }
        if (keys.ArrowDown) {
            setting.x += setting.speed;
        }
        if (keys.ArrowUp && setting.y > 0) {
            setting.x -= setting.speed;
        }

        car.style.left = setting.x + 'px';
        car.style.top = setting.y + 'px';

        requestAnimationFrame(playGame);

    }
}

function startRun(event) {
   event.preventDefault();
   keys[event.key] = true;     
}

function stopRun(event) {
    event.preventDefault();
    keys[event.key] = false;
}






