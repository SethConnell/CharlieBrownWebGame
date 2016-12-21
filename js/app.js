// Enemies our player must avoid
var Enemy = function() {
    // These are the enemy class' width, height, x and y positions, and speed that will later be manipulated by other functions and classes.
    this.sprite = 'images/enemy-bug.png';
    this.x = 200;
    this.y = 200;
    this.speed = 200;
    this.width = 50;
    this.height = 100;

};

// This updates the enemy's position.
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x < 500){
        this.x = this.x + this.speed * dt;
    }
    else {
        this.x = -100;
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
};

// This draws the enemy on the screen.
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This is a player class that will be used to control the player's position on the screen using the x and y cords.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 1;
    this.height = 100;
    this.width = 50;
    this.update = function(dt) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
    this.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
}


// Here, I created a few enemies that will be displayed in different
// spots on the screen.
enemy1 = new Enemy;
enemy1.y = 300
enemy1.x = 150
enemy2 = new Enemy;
enemy2.y = 400;
enemy2.x = 499;
enemy3 = new Enemy;
enemy3.y = 200;
enemy3.x = 300;
allEnemies = [enemy1, enemy2, enemy3];


// Here, I activate the peanuts theme song to play in the background
// of the game.
var audio = new Audio('music/peanuts.mp3');
audio.play();


// Here, I create a new player object that will be controlled by key presses.
var player = new Player;
Player.prototype.handleInput = function (key) {
    if (key === 'left') {
        if (this.x > 35) {
            this.x = this.x - 100;
        }
    }
    if (key === 'right') {
        if (player.x < 400) {
            this.x = this.x + 100;
        }

    }
    if (key === 'up') {
        if (this.y > 50) {
            this.y = this.y - 100;
        }
    }
    if (key === 'down') {
        if (this.y < 500) {
            this.y = this.y + 100;
        }
        else {
            this.y = this.y
            this.x = this.x
            }
    }
    if (this.y > 500) {
        yay();
        alert("YOU WON!!!!");
        resetGame();
    }
}

// This listens for key presses and sends the keys to the
// Player.handleInput()
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// this is a custom sound file that says "good grief" that will play after the player is hit by an enemy.
var goodgrief = function() {
    var audio = new Audio('music/goodgrief.mp3');
    audio.play();
}

// this is a custom sound file that says "yay" that will play after beats the level.
var yay = function() {
    var audio = new Audio('music/yay.mp3');
    audio.play();
}

// this function resets the enemies and player to their original positions. This will be called if the player either wins the game or is hit by an enemy.
var resetGame = function() {
    player.x = 200;
    player.y = 1;
    enemy1.y = 400
    enemy1.x = 150
    enemy2.y = 200;
    enemy2.x = 499;
    enemy3.y = 300;
    enemy3.x = 300;
}

// This function checks to see if the player collided with an enemy. If so, then the game resets.
var checkCollisions = function() {
    if (enemy1.x < player.x + player.width &&
        enemy1.x + enemy1.width > player.x &&
        enemy1.y < player.y + player.height &&
        enemy1.height + enemy1.y > player.y) {
            resetGame();
            goodgrief();
    }
    
    if (enemy2.x < player.x + player.width &&
        enemy2.x + enemy2.width > player.x &&
        enemy2.y < player.y + player.height &&
        enemy2.height + enemy2.y > player.y) {
            resetGame();
            goodgrief();
    }
    
    if (enemy3.x < player.x + player.width &&
        enemy3.x + enemy3.width > player.x &&
        enemy3.y < player.y + player.height &&
        enemy3.height + enemy3.y > player.y) {
            resetGame();
            goodgrief();
    }

    else {
        return false;
    }
};