var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var body = document.getElementsByTagName('body')[0];
var width = document.getElementById('game').offsetWidth;
var height = document.getElementById('game').offsetHeight;
window.onresize = function() {
  var winw = window.innerWidth;
  var winh = window.innerHeight;
  var xvalue = winw / width;
  var yvalue = winh / height;
  scale = xvalue;
  if (yvalue < xvalue) {
    scale = yvalue
  }
  canvas.style.transform = "scale(" + scale + ")";
  canvas.style.left = (winw - width) / 2 + "px";
  canvas.style.top = (winh - height) / 2 + "px";
};
window.onload = function() {
  var winw = window.innerWidth;
  var winh = window.innerHeight;
  var xvalue = winw / width;
  var yvalue = winh / height;
  scale = xvalue;
  if (yvalue < xvalue) {
    scale = yvalue
  }
  canvas.style.transform = "scale(" + scale + ")";
  canvas.style.left = (winw - width) / 2 + "px";
  canvas.style.top = (winh - height) / 2 + "px";
}
//For all browsers
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

function distance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2))
};

var treesDeath = 1;
var normalR = 40;
var s = 8;
var sc = 0;
var count = 1;
var countG = 0;
var countB = 0;
var level = 19;
var rProtection = 1;
var Pr = 1;
var Pr1 = 1;
var Pr2 = 1;
var ShopSpd = 1;
var rangeNormal = 9;
var rangeGreen = 10;
var rangeBee = 19;
var property = 30;
var secondRangeNormal = 4;
var secondRangeGreen = 14;
var bossLevel = 9;

var spdCamera = 5;

document.addEventListener("keydown", keydown, false);
document.addEventListener("keyup", keyup, false);
var keys = [];

function keydown(e) {
  keys[e.keyCode] = true;
  if (keys[192]) {
    if (document.getElementById('cons').style.visibility == 'visible') {

      document.getElementById('cons').style.visibility = 'hidden';
      document.getElementById('cons_button').style.visibility = 'hidden';

    } else {
      document.getElementById('cons').style.visibility = 'visible';
      document.getElementById('cons_button').style.visibility = 'visible';
    }
  }
}

function keyup(e) {
  delete keys[e.keyCode];

  if (e.keyCode == '70') {
    if (current_loc == 0) {
      portalTOhome.collision();
    } else {
      portalTOarena.collision();
    }
  }
}
//gameConsole
var damageResist = 0;
var speedIncreased = 100;

function consolEnter() {
  let command = document.getElementById('cons').value.toLowerCase();
  args = command.split(" ");
  //console.log(args);

  //Resistance Command
  if (args[0] == 'resist' && isNaN(args[1]) == false && args[1] <= 100 && args[1] >= 0) {
    console.log(args[1] + '% reduced damage taken.');
    damageResist = args[1];
  }

  //Speed Command
  if (args[0] == 'speedup' && isNaN(args[1]) == false && args[1] <= 1000 && args[1] >= 0) {
    console.log(args[1] + '% increased Speed.');
    speedIncreased = args[1];
  }

  //SC Command
  if (args[0] == 'points' && isNaN(args[1]) == false && args[1] <= 100 && args[1] >= -100) {
    console.log(`You got ${Math.floor(args[1])} points.`);
    sc = sc + Math.floor(args[1]);
  }

  //Home Command
  if (args[0] == 'home') {
    console.log(`Teleporting home...`);
    player.x = 100;
    player.y = 1100;
    current_loc = 1;
    opacity = 1;
  }

  //Arena Command
  if (args[0] == 'arena') {
    console.log(`Teleporting arena...`);
    player.x = 50;
    player.y = 250;
    current_loc = 0;
    opacity = 1;
  }

  //Restart Command
  if (args[0] == 'restart') {
    console.log(`Restarting...`);
    restart_on_death();
  }

  document.getElementById('cons').value = '';
}
var opacity = 1;

function black_screen() {
  context.beginPath();
  context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
  context.fillRect(0, 0, width, height);

  if (opacity > 0) {
    opacity = opacity - 0.025;
  } else opacity = 0;
}

function restart_on_death(){
  Pr = 1;
  s = 8;
  sc = 0;
  count = 1;
  countS = 1;
  level = 1;
  col.x = 1700;
  hp.hp = 750;
  player.x = 100;

  Pr = 1;
  Pr1 = 1;
  Pr2 = 1;

  ShopSpd = 1;

  rangeNormal = 9;
  rangeGreen = 10;

  secondRangeNormal = 4;
  secondRangeGreen = 14;

  property = 20;

  rProtection = 1;
  exp.exp = 750;
  exp.unitExp = 0;
  exp.maxExp = 750;
  exp.plusExp = 125;
  exp.expLevel = 0;
  treesDeath = 2;

  chooseEnemies.splice(0, chooseEnemies.length);
  normalArr.splice(0, normalArr.length)
  normalArr[0] = new normalEnemies(Math.floor(Math.random() * (800 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, 40, Math.floor(Math.random() * 4) + 2, Math.floor(Math.random() * 4) + 2, 50, 100, height/2);
  chooseEnemies = normalArr;

  function save() {
    const saveLevel = [Pr, s, sc, count, countS, level, col.x, hp.hp, player.x];
    var saveLevelVar = saveLevel.join('');
    return saveLevelVar
  }
  console.log(save());
}
var fps = 100;
