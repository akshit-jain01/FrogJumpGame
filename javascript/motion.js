
var Snake = function(positionX, positionY, speed) {
    this.positionX = positionX;
    this.positionY = positionY + 60;
    this.sprite = 'images/snake.png';
    this.speed = speed;
};
// Update the Snake's position
// Parameter: dt, a time delta between each requestFrameAnimation
Snake.prototype.update = function(dt) {
    if (this.positionX <= 1400) {
        this.positionX += this.speed * dt;
    } else {
        this.positionX = -500;
    }
};
// Draw the enemy on the screen, required method for game
Snake.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.positionX, this.positionY);
};
class Player {
    constructor() {
            this.positionX = 102 * 7;
            this.positionY = 83 * 5 - 10;
            this.sprite = 'images/frog-green.svg';
            this.complete = false;
        }
        
        /*collision*/
    update() {
            for (let Snake of allSnakes) {
                if (this.positionX < Snake.positionX + 50 && this.positionX + 50 > Snake.positionX && this.positionY < Snake.positionY + 60 && this.positionY + 60 > Snake.positionY) {
                    this.reset();
                }
            }
            //game winning condition
            console.log(this.positionY);
            if (this.positionY === 0 ) {
                const winScreen = document.querySelector('#winScreen');
                winScreen.classList.add('show');
                const buttonPlayAgain = document.querySelector('#playAgain');
                buttonPlayAgain.focus();
                buttonPlayAgain.addEventListener('click', function() {
                    winScreen.classList.remove('show');
                    // startScreen();
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
        this.positionX = 102 * 7;
        this.positionY = 83 * 6;
    }

}
// Creation of the player objects and snakes objects
const player = new Player();
const snake1 = new Snake(500, 83, 600);
const snake2 = new Snake(400, 30, 530);
const snake3 = new Snake(600, 57, 830);
const snake4 = new Snake(820, 50,860);
const snake5 = new Snake(520, 90, 630);
const snake6 = new Snake(540, 60, 790);
const snake7 = new Snake(440, 10, 890);
const snake8 = new Snake(640, -7, 990);
const allSnakes = [];
allSnakes.push(snake1, snake2,snake3, snake4,snake5,snake6,snake7,snake8);
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

// Loads the start screen
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