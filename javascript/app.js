var Enemy = function(positionX, positionY, speed) {
    this.positionX = positionX;
    this.positionY = positionY + 60;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
};
// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.positionX <= 405) {
        this.positionX += this.speed * dt;
    } else {
        this.positionX = -2;
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
            this.sprite = 'images/char-boy.png';
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
            if (this.positionY === -10) {
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