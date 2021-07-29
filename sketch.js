let player;
let bgImage;
let playerImage;
let obstacleImage;
let obstacles = [];
let wordClassifier;
function preload() {
  bgImage = loadImage("backgrund.jpg");
  playerImage = loadImage("player.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(800, 600);
  let options = {
    probabilitythreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("speechCommands18w", options);
  player = new Player();
}

function keyPressed() {
  if (key == " ") {
    player.jump();
    console.log("up");
  }
}

function draw() {
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  background(bgImage);
  player.show();
  player.move();

  for (let obs of obstacles) {
    obs.show();
    obs.move();

    if (player.collided(obs) == true) {
      console.log("game-over");
      noLoop();
    }
  }
}
