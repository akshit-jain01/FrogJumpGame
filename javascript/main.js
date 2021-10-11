
var Enemy = function(positionX, positionY, speed) {
    this.positionX = positionX;
    this.positionY = positionY + 60;
    this.sprite = 'images/snake.png';
    this.speed = speed;
};
// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.positionX <= 1400) {
        this.positionX += this.speed * dt;
    } else {
        this.positionX = -500;
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.positionX, this.positionY);
};
class Player {
    constructor() {
            this.positionX = 102 * 2;
            this.positionY = 83 * 5 - 10;
            this.sprite = 'images/frog-green.svg';
            this.complete = false;
        }
        
        /*collision*/
    update() {
            for (let enemy of allEnemies) {
                if (this.positionX < enemy.positionX + 50 && this.positionX + 50 > enemy.positionX && this.positionY < enemy.positionY + 60 && this.positionY + 60 > enemy.positionY) {
                    this.reset();
                }
            }
            //game winning condition
            if (this.positionY === -10 ) {
                const winScreen = document.querySelector('#winScreen');
                winScreen.classList.add('show');
                const buttonPlayAgain = document.querySelector('#playAgain');
                buttonPlayAgain.focus();
                buttonPlayAgain.addEventListener('click', function() {
                    winScreen.classList.remove('show');
                    player.reset();
                });
            }
        }
        /*display the player on the game board*/
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.positionX, this.positionY);
    }
    handleInput(keyPress) {
            if (keyPress == 'left' && this.positionX > 0) {
                this.positionX -= 102;
            };
            if (keyPress == 'right' && this.positionX < 1400) {
                this.positionX += 102;
            };
            if (keyPress == 'up' && this.positionY > 0) {
                this.positionY -= 83;
            };
            if (keyPress == 'down' && this.positionY < 400) {
                this.positionY += 83;
            };
        }
        /*reset player back to the starting point after the collision*/
    reset() {
        this.positionX = 102 * 2;
        this.positionY = 83 * 5 - 10;
    }

}
const player = new Player();
const enemy1 = new Enemy(-100, 200, 230);
const enemy2 = new Enemy(-202, 83, 530);
const enemy3 = new Enemy(-302, 103, 330);
const enemy4 = new Enemy(-402, -50, 430);
const enemy5 = new Enemy(-502, 90, 430);
const enemy6 = new Enemy(-602, 30, 230);
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3, enemy4,enemy5,enemy6);
// This listens for key presses and sends the keys to player
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        "ArrowLeft": 'left',
        "ArrowUp": 'up',
        "ArrowRight": 'right',
        "ArrowDown": 'down'
    };
    player.handleInput(allowedKeys[e.key]);
});

function startScreen() {
    const startScreen = document.querySelector('#startScreen');
    startScreen.classList.add('show');
    const buttonPlay = document.querySelector('#playGame');
    buttonPlay.focus();
    buttonPlay.addEventListener('click', function() {
        startScreen.classList.remove('show');
    });
}
window.onload = startScreen();