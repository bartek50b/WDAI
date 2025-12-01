const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const bgImg = new Image();
bgImg.src = "assets/Flappy Bird/background-day.png";
const birdImg = new Image();
birdImg.src = "assets/Flappy Bird/bird-animation.png";
const pipeImg = new Image();
pipeImg.src = "assets/Flappy Bird/pipe-green.png";

const gameStartImg = new Image();
gameStartImg.src = "assets/UI/message.png";
const gameOverImg = new Image();
gameOverImg.src = "assets/UI/gameover.png";

const music = document.getElementById("gameMusic");
const hitSound = document.getElementById("hitSound");

const pipeWidth = 80;
const pipesHoleHeight = 150;
const pipeDefaultSpacing = 250;
let pipes = [];
let score = 0;
let bestScores = [];
let gameOver = false;
let currentScreen = "start";

const Bird = {
  x: 80,
  y: 360,
  width: 36,
  height: 34,
  frame: 0,
  frameCount: 3,
  frameTick: 0,
  velocity: 0,
  gravity: 0.1,
  angle: 0,
};

function drawBird() {
  ctx.save();
  ctx.translate(Bird.x + Bird.width / 2, Bird.y + Bird.height / 2);
  ctx.rotate((Bird.angle * Math.PI) / 180);
  ctx.drawImage(
    birdImg,
    Bird.frame * Bird.width,
    0,
    Bird.width,
    Bird.height,
    -Bird.width / 2,
    -Bird.height / 2,
    Bird.width,
    Bird.height
  );
  ctx.restore();
}

function animateBird() {
  Bird.frameTick++;
  if (Bird.frameTick >= 5) {
    Bird.frame = (Bird.frame + 1) % Bird.frameCount;
    Bird.frameTick = 0;
  }
}

function spawnPipe() {
  const pipePos = Math.random() * 400 + 50;
  pipes.push({
    x: canvas.width + Math.random() * 300 - 100,
    pos: pipePos,
    passed: false,
  });
}

function updatePipes() {
  for (let p of pipes) p.x -= 2;
  if (
    pipes.length == 0 ||
    pipes[pipes.length - 1].x < canvas.width - pipeDefaultSpacing
  ) {
    spawnPipe();
  }
  for (let i = pipes.length - 1; i >= 0; i--) {
    if (pipes[i].x + pipeWidth <= 0) {
      pipes.splice(i, 1);
    }
  }
}

function drawPipes() {
  for (let p of pipes) {
    ctx.drawImage(pipeImg, p.x, 0, pipeWidth, p.pos);
    ctx.save();
    ctx.translate(
      p.x + pipeWidth / 2,
      p.pos + pipesHoleHeight + (canvas.height - p.pos - pipesHoleHeight) / 2
    );
    ctx.rotate(Math.PI);
    ctx.drawImage(
      pipeImg,
      -pipeWidth / 2,
      -(canvas.height - p.pos - pipesHoleHeight) / 2,
      pipeWidth,
      canvas.height - p.pos - pipesHoleHeight
    );
    ctx.restore();
  }
}

function checkCollision() {
  for (let p of pipes) {
    if (!p.passed && p.x + pipeWidth < Bird.x) {
      score++;
      p.passed = true;
    }
    if (
      Bird.x + Bird.width > p.x &&
      Bird.x < p.x + pipeWidth &&
      (Bird.y < p.pos || Bird.y + Bird.height > p.pos + pipesHoleHeight)
    ) {
      endGame();
    }
  }
  if (Bird.y + Bird.height >= canvas.height) endGame();
}

function saveScore(s) {
  bestScores = JSON.parse(localStorage.getItem("bestScores")) || [];
  bestScores.push({ score: s, date: new Date().toLocaleString("pl-PL") });
  bestScores = bestScores.sort((a, b) => b.score - a.score).slice(0, 5);
  localStorage.setItem("bestScores", JSON.stringify(bestScores));
}

function endGame() {
  if (!gameOver) {
    gameOver = true;
    music.pause();
    hitSound.play();
    saveScore(score);
  }
}

function showScore() {
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.font = "bold 50px serif";
  ctx.fillText(score, canvas.width / 2, 70);
}

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImg, 0, -800, 1280, 1900);
  if (currentScreen === "start") {
    showStartScreen();
  } else if (currentScreen === "game") {
    updatePipes();
    drawPipes();
    drawBird();
    showScore();
    animateBird();

    Bird.velocity += Bird.gravity;
    Bird.y += Bird.velocity;
    Bird.angle = Bird.velocity * 6;

    checkCollision();

    if (gameOver) {
      currentScreen = "gameover";
    }
  } else if (currentScreen === "gameover") {
    drawBird();
    Bird.velocity += Bird.gravity;
    Bird.y += Bird.velocity;
    Bird.angle = 90;
    drawPipes();
    showGameOverScreen();
  }

  requestAnimationFrame(game);
}

function showStartScreen() {
  ctx.drawImage(
    gameStartImg,
    (canvas.width - gameStartImg.width) / 2,
    (canvas.height - gameStartImg.height) / 2
  );
}

function showGameOverScreen() {
  ctx.drawImage(
    gameOverImg,
    (canvas.width - gameOverImg.width) / 2,
    (canvas.height - gameOverImg.height) / 2 - 200
  );
  ctx.fillStyle = "orange";
  ctx.shadowColor = "#FFFFFF";
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.textAlign = "center";
  ctx.font = "bold 30px serif";
  ctx.fillText("Najlepsze wyniki:", canvas.width / 2, 270);
  const bestScores = JSON.parse(localStorage.getItem("bestScores")) || [];
  ctx.textAlign = "center";
  for (let i = 0; i < bestScores.length; i++)
    ctx.fillText(
      `${i + 1}. ${bestScores[i].score} - ${bestScores[i].date}`,
      canvas.width / 2,
      320 + i * 30
    );
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    if (currentScreen === "start") {
      currentScreen = "game";
      gameOver = false;
      score = 0;
      pipes = [];
      Bird.y = 300;
      Bird.velocity = 0;
      music.play();
    } else if (currentScreen === "game" && !gameOver) {
      Bird.velocity = -4;
    } else if (currentScreen === "gameover") {
      currentScreen = "start";
    }
  }
});

game();
