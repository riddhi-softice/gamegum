document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 13:
      init();
      $('#scoreBoard').html('Click mouse to Shoot and Start the Game. Use mouse to move.');
      break;
  }
}

function init() {
  $('#gameOver').hide();
  var canvas = document.getElementById('ballCanvas'),
    context = canvas.getContext('2d'),
    ballBox = [],
    bulletBox = [],
    index = 0,
    b_index = 0,
    attacker_position = canvas.height / 2,
    hits_no = 0,
    balls_no = 0,
    bullets_no = 0,
    gameOver = false;

  $('#gameOver').hide();

  canvas.onkeydown = function (event) {
    switch (event.keyCode) {
      case 38:
        attacker_position = attacker_position - 10;
        break;
      case 40:
        attacker_position = attacker_position + 10;
        break;
      case 32:
        bulletBox[b_index] = Bullet(180, attacker_position + 30);
        b_index = b_index + 1;
        bullets_no = bullets_no + 1;
        if (bullets_no === 1) {
          $('#scoreBoard').html('Game Started! Protect Spaceship!');
        }
        break;
    }
  };

  canvas.addEventListener('mousemove', function (e) {
    attacker_position = e.pageY;
  });

  canvas.addEventListener('click', function (e) {
    bulletBox[b_index] = Bullet(180, attacker_position + 30);
    b_index = b_index + 1;
    bullets_no = bullets_no + 1;
    if (bullets_no === 1) {
      $('#scoreBoard').html('Game Started! Protect Spaceship!');
    }
  });

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawImages() {
    var spaceShip = new Image();
    var asteroids = new Image();
    spaceShip.src = "http://vignette1.wikia.nocookie.net/thedimensionsaga/images/f/f0/Spiff's_spacecraft.png/revision/latest?cb=20130716184758";
    asteroids.src = 'http://www.asteroidmission.org/wp-content/themes/osiris/public_assets/images/bennu-rendered.png';
    spaceShip.onload = function () {
      asteroids.onload = function () {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.drawImage(spaceShip, 100, attacker_position, 60, 60);
        for (var i = 0; i < ballBox.length; i++) {
          if (!_.isUndefined(ballBox[i]) && i < ballBox.length) {
            context.drawImage(asteroids, ballBox[i].x, ballBox[i].y, 40, 40);
          }
        }
      };
    };
  }

  function animateSpace() {
    context.beginPath();
    drawImages();
    for (var i = 0; i < ballBox.length; i++) {
      if (!_.isUndefined(ballBox[i]) && ballBox[i].x !== 0) {
        ballBox[i].x = ballBox[i].x - ballBox[i].howFast;
      }
      if (!_.isUndefined(ballBox[i]) && ballBox[i].x == 0) {
        ballBox.splice(i, 1);
        index--;
      }
    }

    if (bulletBox.length > 0) {
      drawBullet();
      for (var bulletHit = 0; bulletHit < bulletBox.length; bulletHit++) {
        for (var asteroidHit = 0; asteroidHit < ballBox.length; asteroidHit++) {
          if (!_.isUndefined(ballBox[asteroidHit]) && asteroidHit <= ballBox.length - 1) {
            if (((ballBox[asteroidHit].x) <= 140) &&
              (90 <= (ballBox[asteroidHit].x)) &&
              ((ballBox[asteroidHit].y) <= attacker_position + 50) &&
              (attacker_position <= (ballBox[asteroidHit].y))
            ) {
              gameOver = true;
            }
          }
          if (!_.isUndefined(bulletBox[bulletHit]) && !_.isUndefined(ballBox[asteroidHit]) && asteroidHit <= ballBox.length - 1 && bulletHit <= bulletBox.length - 1) {
            if (((ballBox[asteroidHit].x) <= bulletBox[bulletHit].x) && (bulletBox[bulletHit].x <= (ballBox[asteroidHit].x + 50)) &&
              ((ballBox[asteroidHit].y) <= bulletBox[bulletHit].y) && (bulletBox[bulletHit].y <= (ballBox[asteroidHit].y + 50))
            ) {
              //starBurst(bulletBox[bulletHit].x, bulletBox[bulletHit].y);
              ballBox.splice(asteroidHit, 1);
              bulletBox.splice(bulletHit, 1);
              hits_no++;
              if (hits_no == 1) {
                $('#scoreBoard').html("HIT ! " + hits_no + " Asteroid Destroyed");
              } else {
                $('#scoreBoard').html("HIT! " + hits_no + " Asteroids Destroyed");
              }
              break;
            }
          }
        }
      }
    }
    if (bulletBox.length > 0) {
      for (var bul = 0; bul < bulletBox.length; bul++) {
        if (!_.isUndefined(bulletBox[bul])) {
          bulletBox[bul].x = bulletBox[bul].x + bulletBox[bul].howFast;
        }
      }
    }
    if (!gameOver) {
      requestAnimationFrame(animateSpace);
    } else {
      setTimeout(function () { $('#gameOver').show(); $('#scoreBoard').html('Ship Destroyed by Asteroids ! Total Hits: ' + hits_no + ' Press Enter to Restart Game'); }, 1300);
    }
  }

  function Ball(xCord, yCord, coloR) {
    return {
      'bs': 10,
      'x': xCord,
      'y': yCord,
      'coloR': coloR,
      'howFast': _.sample([0.1, 0.5, 1.5, 3.5, 5.5, 7.5, 13, 17])
      // Varying velocities... ;)
    };
  }

  function Bullet(xCord, yCord) {
    return {
      'bs': 6,
      'x': xCord,
      'y': yCord,
      'howFast': 20
    };
  }

  /* Initailly used later replaced with images.
  function drawAttacker(){
     context.beginPath();
     context.arc(100, attacker_position, 30, 0, 360);
     context.fillStyle = "lightgreen";
     context.fill();
     context.closePath();
  } */

  /* function drawBalls(){
      for(var i=0;i<ballBox.length;i++){
          context.beginPath();
          context.fillStyle = ballBox[i].coloR;
          context.arc(ballBox[i].x, ballBox[i].y, ballBox[i].bs, 0, 360);
          context.fill();
          context.closePath();
      }
  } */

  function drawBullet() {
    for (var i = 0; i < bulletBox.length; i++) {
      if (!_.isUndefined(bulletBox[i])) {
        context.beginPath();
        context.fillStyle = "red";
        context.arc(bulletBox[i].x, bulletBox[i].y, bulletBox[i].bs, 0, 360);
        context.fill();
        context.closePath();
      }
    }
  }

  function randomAttack() {
    return Math.random() * (500 - 20) + 20;
  }

  function initAttack() {
    ballBox[index] = Ball(canvas.width, randomAttack(), "darkgrey");
    index++;
  }

  intVal = setInterval(function () {
    initAttack();
  }, 800);
  animateSpace();

  /*Random Asteroid Logic.. 
  Doesn't seems to work with asteroids getting vanished midway
  
   function drawSpaceship(url) {
    var i;
    for(i=0;i<ballBox.length -1;i++){
      var spaceShip = new Image();
      var asteroids = new Image();
      spaceShip.src = url;
      asteroids.src = ballBox[i].url;
      spaceShip.onload = function() {
        asteroids.onload = function(){
          context.clearRect(0,0, 1000, 600);
          context.drawImage(spaceShip, 100, attacker_position, 60, 60);
          context.drawImage(asteroids, ballBox[i].x, ballBox[i].y, 40, 40);
        }
      }
    }
  }
  
  
  function Ball(xCord,yCord,coloR){
    return {
     'url': _.sample([ "http://i1104.photobucket.com/albums/h329/zorq1/Spinning-asteroid-8.gif",
                            "http://www.minerwars.com/ForumUploads/20101222063029_5025_Asteroid2.png",
                            "http://www.icon2s.com/wp-content/uploads/2013/09/asteroid.png",
                            "http://userpages.umbc.edu/~sohisa1/images/artwork/cosmoknights/backgrounds/asteroid.png",
                            "https://www.asteroidfight.com/wp-content/uploads/2015/06/asteroid_populated_small.png",
                            "http://orig15.deviantart.net/217f/f/2013/183/3/c/asteroid_belt_12a_by_mototsume-d6brdm4.png"]),
      'bs': 10,
      'x': xCord,
      'y': yCord,
      'coloR': coloR,
      'howFast': _.sample([0.1,0.5,1,2,3,4,5,6,7,8,9,10,11,12,13,14])
      // Varying velocities... ;)
    };
  }
  */

  function starBurst(xCor, yCor) {
    for (var x = xCor; x <= xCor + 100; x++) {
      context.beginPath();
      context.clearRect(xCor, yCor, 50, 50);
      xCor = xCor + 2;
      context.fillStyle = "red";
      context.arc(xCor, yCor, 5, 0, 360);
      context.fill();
      context.closePath();
    }
  }
}

init();