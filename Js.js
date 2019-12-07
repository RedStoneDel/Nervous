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
function distance(pos1, pos2){
  return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2))
};

var treesDeath = 1;

var normalR = 40;

var s = 8;
var sc = 0;
var count = 1;
var countS = 0;
var level = 1;

var rProtection = 1;

var Pr = 1;
var Pr1 = 1;
var Pr2 = 1;

var ShopSpd = 1;

var rangeNormal = 9;
var rangeGreen = 10;

var property = 20;

var secondRangeNormal = 4;
var secondRangeGreen = 14;

var bossLevel = 9;
document.addEventListener("keydown", keydown, false);
document.addEventListener("keyup", keyup, false);
var keys = [];

function keydown(e) {
  keys[e.keyCode] = true;
  if(keys[192]){
    if(document.getElementById('cons').style.visibility=='visible'){
      document.getElementById('cons').style.visibility = 'hidden';
      document.getElementById('cons_button').style.visibility = 'hidden';

  } else{
      document.getElementById('cons').style.visibility = 'visible';
      document.getElementById('cons_button').style.visibility = 'visible';
        }
  }
}

function keyup(e) {
  delete keys[e.keyCode];

  if (e.keyCode=='70') {
   if (current_loc == 0) {
    portalTOhome.collision();
  } else{
    portalTOarena.collision();
  }
  }
}
class trees {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  firstTree(){
    if(treesDeath == 2){
      this.x -= 1;
    }
    if (this.x == 68){
      treesDeath = 1;
      console.log("hi")
    }
    context.fillStyle = "rgba(40,85,0,1)";
    context.beginPath();
    context.arc(this.x, this.y, 120, 0, Math.PI * 2, true);
    context.fill();
    context.fillStyle = "rgba(40,85,0,1)";
    context.beginPath();
    context.arc(this.x + 90, this.y, 90, 0, Math.PI * 2, true);
    context.fill();
    context.fillStyle = "rgba(40,95,0,1)";
    context.beginPath();
    context.arc(this.x, this.y, 95, 0, Math.PI * 2, true);
    context.fill();
    context.fillStyle = "rgba(40,95,0,1)";
    context.beginPath();
    context.arc(this.x + 70, this.y, 70, 0, Math.PI * 2, true);
    context.fill();
  }
}
//gameConsole
var damageResist = 0;
var speedIncreased = 100;

function consolEnter(){
let command = document.getElementById('cons').value.toLowerCase();
args = command.split(" ");
//console.log(args);

//Resistance Command
if(args[0]=='resist' && isNaN(args[1])==false && args[1]<=100 && args[1]>=0){
  console.log(args[1] + '% reduced damage taken.');
  damageResist = args[1];
}

//Speed Command
if(args[0]=='speedup' && isNaN(args[1])==false && args[1]<=1000 && args[1]>=0){
  console.log(args[1] + '% increased Speed.');
  speedIncreased = args[1];
}

//SC Command
if(args[0]=='points' && isNaN(args[1])==false && args[1]<=100 && args[1]>=-100){
  console.log(`You got ${Math.floor(args[1])} points.`);
  sc = sc + Math.floor(args[1]);
}

//Home Command
if(args[0]=='home'){
  console.log(`Teleporting home...`);
      player.x=100;
      player.y=1100;
      current_loc = 1;
      opacity = 1;
}

//Arena Command
if(args[0]=='arena'){
  console.log(`Teleporting arena...`);
      player.x=50;
      player.y=250;
      current_loc = 0;
      opacity = 1;
}



  document.getElementById('cons').value = '';
}
class Shop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    context.fillStyle = "rgba(135,113,88,0.7)";
    context.fillRect(this.x - player.x + width / 2, this.y - 30 - player.y - 30 + height / 2, 42, 120);
    context.fillStyle = "rgba(135,113,88,1)";
    context.fillRect(this.x + 15 - player.x + 15 + width / 2, this.y - 30 - player.y - 30 + height / 2, 15, 120);
    context.fillStyle = "rgba(214,182,92,0.9)"
    context.beginPath();
    context.arc(this.x - player.x + width / 2, this.y - player.y + height / 2, 50, 0.5 * Math.PI, Math.PI * 1.5, true);
    context.fill();
    context.closePath();
    context.fillStyle = "rgba(214,182,92,0.9)"
    context.beginPath();
    context.arc(this.x - player.x + width / 2, this.y - player.y + height / 2, 35, 0.5 * Math.PI, Math.PI * 1.5, true);
    context.fill();
    context.closePath();
  }
  colision() {

    var b = player.x - this.x;
    var c = player.y - this.y;
    var hyp = Math.sqrt((b * b) + (c * c));
    var strokeX = 422.5;
    if (keys["72"] && Pr1 == 1) {
      Pr1 = 2;
      console.log("whats.up")
    }
    if (Pr1 == 2) {
      strokeX = 822;
      ShopSpd = 2;
    }
    if (hyp <= (player.r + 50)) {

      context.strokeStyle = "rgba(59, 59, 59, 0.6)";
      context.lineWidth = 5;
      context.strokeRect(strokeX, 222.5, 235, 235);

      context.fillStyle = "rgba(59, 59, 59, 0.4)";
      context.fillRect(240, 140, 1000, 400);

      context.fillStyle = "rgba(59, 59, 59, 0.4)";
      context.fillRect(420, 220, 240, 240);

      context.fillStyle = "rgba(59, 59, 59, 0.4)";
      context.fillRect(820, 220, 240, 240);

      context.fillStyle = "rgba(214,182,92,1)"
      context.beginPath();
      context.arc(540, 340, 50, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();

      context.fillStyle = "white"
      context.beginPath();
      context.arc(940, 340, 50, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();

      context.fillStyle = "#90EE90";
      context.fillRect(912.5, 335, 55, 15);

      context.fillStyle = "#90EE90";
      context.fillRect(932.5, 315.5, 15, 55);

      context.font = "30px Comic Sans MS";
      context.fillStyle = "White";
      context.textAlign = "center";
      context.fillText("Protection", canvas.width / 2 - 200, 200);

      context.font = "30px Comic Sans MS";
      context.fillStyle = "White";
      context.textAlign = "center";
      context.fillText("Cost:25 points", canvas.width / 2 - 200, 500);

      context.font = "30px Comic Sans MS";
      context.fillStyle = "White";
      context.textAlign = "center";
      context.fillText("Health", canvas.width / 2 + 200, 200);

      context.font = "30px Comic Sans MS";
      context.fillStyle = "White";
      context.textAlign = "center";
      context.fillText("Cost:50 points", canvas.width / 2 + 200, 500);

      context.font = "25px Comic Sans MS";
      context.fillStyle = "White";
      context.textAlign = "center";
      context.fillText("Your points: " + sc, 1100, 170);
      if (keys["70"] && sc >= 25 && Pr == 1 && Pr1 == 1) {
        console.log("hi")
        sc -= 25;
        Pr = 2;
      }
      if (Pr == 2) {
        rProtection = 25;
      }
      if (keys["70"] && sc >= 50 && Pr2 == 1 && Pr1 == 2) {
        console.log("hi")
        sc -= 50;
        Pr2 = 2;
      }
      if (Pr2 == 2) {
        if (hp.hp <= 550) {
          hp.hp += 200;
        } else {
          hp.hp += 750 - hp.hp
        }

        Pr2 = 1;
      }
      if (keys['71'] && Pr1 == 2) {
        Pr1 = 1;
      }
    }
  }
}
class AbilityShop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    context.fillStyle = "rgba(135,113,88,1)";
    context.fillRect(this.x + 15 - player.x + 15 + width / 2, this.y - 30 - player.y - 30 + height / 2, 15, 120);
    context.fillStyle = "rgba(135,113,88,0.7)";
    context.fillRect(this.x - player.x + width / 2, this.y - 30 - player.y - 30 + height / 2, 42, 120);
    context.fillStyle = "rgba(0,204,170,0.65)";
    context.beginPath();
    context.arc(this.x - player.x + width / 2, this.y - player.y + height / 2, 50, 0.5 * Math.PI, Math.PI * 1.5, true);
    context.fill();
    context.closePath();
    context.fillStyle = "rgba(0,204,170,0.9)"
    context.beginPath();
    context.arc(this.x - player.x + width / 2, this.y - player.y + height / 2, 35, 0.5 * Math.PI, Math.PI * 1.5, true);
    context.fill();
    context.closePath();
  }
  colision() {
    var b = player.x - this.x;
    var c = player.y - this.y;
    var hyp = Math.sqrt((b * b) + (c * c));
    if (hyp <= (player.r + 50)) {
      context.fillStyle = "rgba(59, 59, 59, 0.4)";
      context.fillRect(240, 140, 1000, 400);

      context.fillStyle = "rgba(59, 59, 59, 0.4)";
      context.fillRect(420, 220, 240, 240);

      context.fillStyle = "rgba(59, 59, 59, 0.4)";
      context.fillRect(820, 220, 240, 240);
    }
  }
}
class Hp {
  constructor(hp, x, y) {
    this.hp = hp;
    this.x = x;
    this.y = y;
  }
  draw() {
    context.fillStyle = ("#DC143C");
    context.fillRect(this.x, this.y, 750, 10);
    context.fillStyle = ("#90EE90");
    context.fillRect(this.x, this.y, this.hp, 10);
    if (this.hp <= 1) {
      Pr = 1;
      s = 8;
      sc = 0;
      count = 1;
      countS = 1;
      level = 1;
      col.x = 1700;
      this.hp = 750;
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
      chooseEnemies.splice(0, chooseEnemies.length + 1);
      normalArr.splice(0, normalArr.length + 1)
      normalArr[0] = new normalEnemies(Math.floor(Math.random() * (800 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, 40, Math.floor(Math.random() * 4) + 2, Math.floor(Math.random() * 4) + 2, 50);
      chooseEnemies = normalArr;
    }
  }
}
class Exp {
  constructor(exp, unitExp, maxExp, plusExp, expLevel, x, y) {
    this.exp = exp;
    this.unitExp = unitExp;
    this.maxExp = maxExp;
    this.plusExp = plusExp;
    this.expLevel = expLevel;
    this.x = x;
    this.y = y;
  }
  draw() {
    context.fillStyle = ("#00CED1");
    context.fillRect(this.x, this.y, 750, 10);
    context.fillStyle = ("#00FFFF");
    context.fillRect(this.x, this.y, this.unitExp, 10);
    context.font = "30px Comic Sans MS";
    context.fillStyle = "	#5F9EA0";
    context.textAlign = "center";
    context.fillText(this.expLevel, canvas.width / 2, 647);
    if (this.unitExp >= this.maxExp) {
      this.unitExp = 0;
      this.plusExp /= 1.5;
      this.expLevel += 1;
    }
  }
}
class Portal {
  constructor(x, y, x2, y2, toLoc) {
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.toLoc = toLoc;
  }
  draw() {
    context.fillStyle = "#276ad6";
    context.beginPath();
    context.arc(this.x - player.x + width / 2, this.y - player.y + height / 2, 60, 0, Math.PI * 2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#ffffff';
    context.lineWidth = 4;
    context.arc(this.x - player.x + width / 2, this.y - player.y + height / 2, 50, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(this.x - player.x + width / 2, this.y - 50 - player.y + height / 2, 10, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(this.x - player.x + width / 2, this.y + 50 - player.y + height / 2, 10, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(this.x - 50 - player.x + width / 2, this.y - player.y + height / 2, 10, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(this.x  + 50 - player.x + width / 2, this.y - player.y + height / 2, 10, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(this.x - player.x + width / 2, this.y -25 - player.y + height / 2);
    context.lineTo(this.x - player.x + width / 2, this.y + 25 - player.y + height / 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(this.x - 25 - player.x + width / 2, this.y - player.y + height / 2);
    context.lineTo(this.x + 25 - player.x + width / 2, this.y - player.y + height / 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(this.x - 20 - player.x + width / 2, this.y - 20 - player.y + height / 2);
    context.lineTo(this.x + 20 - player.x + width / 2, this.y + 20 - player.y + height / 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(this.x + 20 - player.x + width / 2, this.y - 20 - player.y + height / 2);
    context.lineTo(this.x - 20 - player.x + width / 2, this.y + 20 - player.y + height / 2);
    context.stroke();
    context.closePath();

  }
  collision(){
    var b1 = player.x - this.x;
    var c1 = player.y - this.y;
    var hyp1 = Math.sqrt((b1 * b1) + (c1 * c1));
     if (hyp1 <= (player.r+40)) {
      player.x=this.x2;
      player.y=this.y2;
      current_loc = this.toLoc;
      opacity = 0.8;
     }
  }
}
var current_loc = 0;

class Player {
  constructor(x, y, r, spd, sp) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.spd = spd;
    this.sp = sp;
  }
  draw() {
    context.fillStyle = "rgba(214,182,92,0.5)";
    context.beginPath();
    context.arc(this.x - this.x + width / 2, this.y - this.y + height / 2, rProtection, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
    context.fillStyle = ("#B0C4DE");
    context.beginPath();
    context.arc(this.x - this.x + width / 2, this.y - this.y + height / 2, this.r, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    context.fillStyle = ("#00CED1");
    context.beginPath();
    context.arc(this.x - this.x + width / 2, this.y - this.y + height / 2, 15, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
    context.fillStyle = ("#00FFFF");
    context.beginPath();
    context.arc(this.x - this.x + width / 2, this.y - this.y + height / 2, exp.unitExp/50, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
     if(current_loc==0){
    if (keys['40'] && this.y < 680 - this.r || keys['83'] && this.y < 680 - this.r) {
      this.y = this.y + this.spd;
    }
    if (keys['39'] && this.x < 1900 - this.r || keys['68'] && this.x < 1900 - this.r) {
      this.x = this.x + this.spd;
    }
    if (keys['38'] && this.y > 200 + this.r || keys['87'] && this.y > 200 + this.r) {
      this.y = this.y - this.spd;
    }
    if (keys['37'] && this.x > 0 + this.r || keys['65'] && this.x > 0 + this.r) {
      this.x = this.x - this.spd;
    }
    if (keys['16'] && this.x > 0 + this.r) {
      this.spd = 3;
    } else {
      this.spd = 5 * (speedIncreased*0.01);
    }}

    if(current_loc==1){
    if (keys['40'] && this.y < 1500 - this.r || keys['83'] && this.y < 1500 - this.r) {
      this.y = this.y + this.spd;
    }
    if (keys['39'] && this.x < 500 - this.r || keys['68'] && this.x < 500 - this.r) {
      this.x = this.x + this.spd;
    }
    if (keys['38'] && this.y > 1000 + this.r || keys['87'] && this.y > 1000 + this.r) {
      this.y = this.y - this.spd;
    }
    if (keys['37'] && this.x > 0 + this.r || keys['65'] && this.x > 0 + this.r) {
      this.x = this.x - this.spd;
    }
    if (keys['16'] && this.x > 0 + this.r) {
      this.spd = 3;
    } else {
      this.spd = 5 * (speedIncreased*0.01);
    }}
    if (keys['13']) {
      document.getElementById('game').style.visibility = 'visible';
      document.getElementById('Menu').style.visibility = 'hidden';
    }
  }
}
class Points {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  draw() {
    context.fillStyle = ("#AFEEEE");
    context.beginPath();
    context.arc(this.x - player.x + width / 2, this.y - player.y + height / 2, this.r, 0, Math.PI * 2, true);
    context.fill();
  }
  eat(b, c, hyp) {
    var b = player.x - this.x;
    var c = player.y - this.y;
    var hyp = Math.sqrt((b * b) + (c * c));
    if (hyp <= (player.r + this.r)) {
      sc = sc + 0.5;
      exp.unitExp += exp.plusExp;
      console.log("Update");
      return true;
    }
  }
}
class safeZone {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw(x, y) {
    context.fillStyle = ("#dcdcdc");
    context.fillRect(this.x - player.x + width / 2, this.y - player.y + height / 2, 200, 480);
  }
}
class gameZone {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    context.fillStyle = ("#f0f0f0");
    context.fillRect(this.x - player.x + width / 2, this.y - player.y + height / 2, 1500, 480);
  }
}
class home{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw(x, y) {
    context.fillStyle = ("#dcdcdc");
    context.fillRect(this.x - player.x + width / 2, this.y - player.y + height / 2, 500, 500);
  }
}
class normalEnemies {
  constructor(x, y, r, spdX, spdY) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.spdX = spdX;
    this.spdY = spdY;
  }
  draw() {
    context.fillStyle = ("#BC8F8F");
    context.beginPath();
    context.arc(this.x - player.x + width / 2, this.y - player.y + height / 2, this.r, 0, Math.PI * 2, true);
    context.fill();

  }
  collision() {
    var damage;
    if (Pr == 1) {
      damage = 50;
    } else if (Pr == 2) {
      damage = 20;
    }
    var b = player.x - this.x;
    var c = player.y - this.y;
    var hyp = Math.sqrt((b * b) + (c * c));
    if (hyp <= (player.r + this.r)) {
      hp.hp -=damage - damage*(damageResist*0.01);;
    }
  }
  move() {
    this.x += this.spdX;
    this.y += this.spdY;
    if (this.x + normalR > 1700) {
      this.spdX = -this.spdX;
    }
    if (this.x - normalR < 200) {
      this.spdX = -this.spdX;
    }
    if (this.y + normalR > 280) {
      this.spdY = -this.spdY;
    }
    if (this.y - normalR < 600) {
      this.spdY = -this.spdY;
    }
  }
}
class slowEnemies {
  constructor(x, y, r, rs, spdX, spdY, spdYS, spdXS) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rs = rs;
    this.spdX = spdX;
    this.spdY = spdY;
    this.spdXS = spdXS;
    this.spdYS = spdYS;
  }
  draw() {
    var xs = this.x;
    var ys = this.y;
    context.fillStyle = "rgba(0, 255, 127, 0.09)";
    context.beginPath();
    context.arc(xs - player.x + width / 2, ys - player.y + height / 2, this.rs, 0, Math.PI * 2, true);
    context.fill();
    context.fillStyle = "rgba(46, 139, 87, 1)";
    context.beginPath();
    context.arc(this.x - player.x + width / 2, this.y - player.y + height / 2, this.r, 0, Math.PI * 2, true);
    context.fill();
  }
  collision() {
    var damage;
    if (Pr == 1) {
      damage = 70;
    } else if (Pr == 2) {
      damage = 40;
    }
    var b = player.x - this.x;
    var c = player.y - this.y;
    var hyp = Math.sqrt((b * b) + (c * c));
    if (hyp <= (player.r + this.r)) {
      hp.hp -= damage - damage*(damageResist*0.01);;
    }
    var xs = this.x;
    var ys = this.y;
    var b2 = player.x - xs;
    var c2 = player.y - ys;
    var hyp2 = Math.sqrt((b2 * b2) + (c2 * c));
    if (hyp2 <= (player.r + this.rs)) {
      console.log(player.spd);
      hp.hp -= 1 -1*(damageResist*0.01);;
    }
  }
  move() {
    this.x += this.spdX;
    this.y += this.spdY;
    if (this.x + this.r > 1700) {
      this.spdX = -this.spdX;
    }
    if (this.x - this.r < 200) {
      this.spdX = -this.spdX;
    }
    if (this.y + this.r > 220) {
      this.spdY = -this.spdY;
    }
    if (this.y - this.r < 665) {
      this.spdY = -this.spdY;
    }
    this.xs += this.spdXS;
    this.ys += this.spdYS;
    if (this.xs + this.r > 1700) {
      this.spdXS = -this.spdXS;
    }
    if (this.xs - this.r < 200) {
      this.spdXS = -this.spdXS;
    }
    if (this.ys + this.r > 220) {
      this.spdYS = -this.spdYS;
    }
    if (this.ys - this.r < 665) {
      this.spdYS = -this.spdYS;
    }
  }
}
class BossEnemies {
  constructor(x,y,spdX,spdY){
    this.x = x;
    this.y = y;
    this.spdX = spdX;
    this.spdY = spdY;
  }
  draw() {
    var dx = player.x - this.x;
    var dy = player.y - this.y;
    dx;
    dy;
    this.x = this.x + (dx / distance(player, this)*this.spdX);
    this.y = this.y + (dy / distance(player, this)*this.spdY);
    context.fillStyle = ("black");
    context.beginPath();
    context.arc(this.x - player.x + width / 2, this.y - player.y + height / 2, 30, 0, Math.PI * 2, true);
    context.fill();

  }
  collision() {
    var damage;
    if (Pr == 1) {
      damage = 50;
    } else if (Pr == 2) {
      damage = 20;
    }
    var b = player.x - this.x;
    var c = player.y - this.y;
    var hyp = Math.sqrt((b * b) + (c * c));
    if (hyp <= (player.r + 30)) {
      hp.hp -= damage - damage*(damageResist*0.01);;
    }
  }
  move() {
    if (this.x + 30 > 1700) {
      this.spdX = -this.spdX;
    }
    if (this.x - 30 < 200) {
      this.spdX = -this.spdX;
    }
    if (this.y + 30 > 280) {
      this.spdY = -this.spdY;
    }
    if (this.y - 30 < 600) {
      this.spdY = -this.spdY;
    }
  }
}
class colider {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
if (level == property) {
  property += 20;
  rangeNormal += 20;
  rangeGreen += 20;
  secondRangeNormal += 20;
  secondRangeGreen += 20;
  normalR /= 1.3;
}
    context.fillStyle = ("#f0f0f0");
    context.fillRect(this.x - player.x + width / 2, this.y - player.y + height / 2, 1, 480);
    // bossLevel
    if(player.x >= this.x && this.x == 1700 && level == bossLevel){
      console.log("Boss");
      normalArr[count] = new normalEnemies(width/2, height/2, 100,0,15);
      count += 1;
      bossLevel += 10;
      chooseEnemies = normalArr;
    }
    if (player.x <= this.x && this.x == 200 && level == bossLevel) {
      console.log("Boss");
      normalArr[count] = new normalEnemies(width/2, height/2, 100,0,15);
      count += 1;
      bossLevel += 10;
      chooseEnemies = normalArr;
    }
    // second norm enemie
    if(player.x >= this.x && this.x == 1700 && level > secondRangeNormal && level < property - 10){
      console.log("Wow");
      normalArr[count] = new normalEnemies(Math.floor(Math.random() * (800 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, normalR/2, Math.floor(Math.random() * 4) + 2, Math.floor(Math.random() * 4) + 2);
      count += 1;
      chooseEnemies = normalArr;
    }
    if (player.x <= this.x && this.x == 200 && level > secondRangeNormal && level < property - 10) {
      console.log("wow 2");
      normalArr[count] = new normalEnemies(Math.floor(Math.random() * (800 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, normalR/2, Math.floor(Math.random() * 4) + 2, Math.floor(Math.random() * 4) + 2);
      count += 1;
      chooseEnemies = normalArr;
    }
    //second green enemie
    if(player.x >= this.x && this.x == 1700 && level > secondRangeGreen && level < property){
      console.log(chooseEnemies.length);
      slowArr[countS] = new slowEnemies(Math.floor(Math.random() * (1200 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, 40, 100, 2, 2, 2, 2);
      countS += 1;
      chooseEnemies = slowArr
    }
    if (player.x <= this.x && this.x == 200 && level > secondRangeGreen && level < property) {
      console.log(chooseEnemies.length);
      slowArr[countS] = new slowEnemies(Math.floor(Math.random() * (1200 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, 40, 100, 2, 2, 2, 2);
      countS += 1;
      chooseEnemies = slowArr
    }
    //first Normal enemie
    if (player.x >= this.x && this.x == 1700 && level <= rangeNormal) {
      console.log(chooseEnemies.length);
      normalArr[count] = new normalEnemies(Math.floor(Math.random() * (800 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, normalR, Math.floor(Math.random() * 4) + 2, Math.floor(Math.random() * 4) + 2);
      count += 1;
      level += 1;
      this.x = 200;
      player.sp = 1800;
      chooseEnemies = normalArr;
    }
    if (player.x <= this.x && this.x == 200 && level <= rangeNormal) {
      console.log(chooseEnemies.length);
      normalArr[count] = new normalEnemies(Math.floor(Math.random() * (800 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, normalR, Math.floor(Math.random() * 4) + 2, Math.floor(Math.random() * 4) + 2);
      count += 1;
      level += 1;
      this.x = 1700;
      player.sp = 100;
      chooseEnemies = normalArr;
    }
    //first Green enemie
    if (player.x >= this.x && this.x == 1700 && level >= rangeGreen) {
      console.log("chooseEnemies.length");
      slowArr[countS] = new slowEnemies(Math.floor(Math.random() * (1200 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, 10, 100, 2, 2, 2, 2);
      countS += 1;
      level += 1;
      this.x = 200;
      player.sp = 1800;
      chooseEnemies = slowArr
    }
    if (player.x <= this.x && this.x == 200 && level >= rangeGreen) {
      console.log(chooseEnemies.length);
      slowArr[countS] = new slowEnemies(Math.floor(Math.random() * (1200 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, 10, 100, 2, 2, 2, 2);
      countS += 1;
      level += 1;
      this.x = 1700;
      player.sp = 100;
      chooseEnemies = slowArr;
    }
  }
}
var opacity = 1;
function black_screen(){
  context.beginPath();
  context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
  context.fillRect(0, 0, width, height);

  if(opacity>0){
    opacity = opacity - 0.025;
  } else opacity = 0;
}
var portalTOhome = new Portal(100, height / 2 + 250, 400, height / 2 + 1060, 1);
var portalTOarena = new Portal(400, height / 2 + 1060, 100, height / 2 + 250, 0);
var hideout = new home(1, 1000);
var player = new Player(100, height / 2 + 100, 20, 5, 100);
var safe_zone = new safeZone(1, 200);
var safe_zone2 = new safeZone(1700, 200);
var game_zone = new gameZone(200, 200);
var col = new colider(1700, 200);
var hp = new Hp(750, 370, 600);
var exp = new Exp(750, 0, 750, 125, 0, 370, 630);
var shop = new Shop(0, height / 2 + 1100);
var abShop = new AbilityShop(0, height / 2 + 900);
var bsEnemies = new BossEnemies(400, 400, 3, 3);
var Trees = new trees(68,620);
var points = [];
for (var i = 1; i < 20; i++) {
  points[i] = new Points(Math.floor(Math.random() * 1500) + 208, Math.floor(Math.random() * 480) + 200, 8);
}
var normalArr = [];
  normalArr[0] = new normalEnemies(Math.floor(Math.random() * (800 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, normalR, Math.floor(Math.random() * 4) + 2, Math.floor(Math.random() * 4) + 2);
var slowArr = [];
var chooseEnemies = [];
chooseEnemies = normalArr;
function animate() {
  context.clearRect(0, 0, width, height);
  context.fillStyle = ("#f5f5f5");
  context.fillRect(0, 0, width, height);
  safe_zone.draw();
  safe_zone2.draw();
  game_zone.draw();
  hideout.draw();
  portalTOhome.draw();
  portalTOarena.draw();
  col.draw();
  col.draw();
  for (var i = 1; i < points.length; i++) {
    points[i].draw();
    points[i].eat();
    if (points[i].eat(true)) {
        points[i] = new Points(Math.floor(Math.random() * 1500) + 208, Math.floor(Math.random() * 480) + 200, 8);
    }
  }
    bsEnemies.draw();
    bsEnemies.collision();
    bsEnemies.move();
  for (var i = 0; i < chooseEnemies.length; i++) {
    chooseEnemies[i].draw();
    chooseEnemies[i].collision();
    chooseEnemies[i].move();
  }
  player.draw();
  shop.draw();
  abShop.draw();
  shop.colision();
  abShop.colision();
  Trees.firstTree();
  hp.draw();
  exp.draw();
  context.font = "30px Comic Sans MS";
  context.fillStyle = "Grey";
  context.textAlign = "center";
  context.fillText("Level " + level, canvas.width / 2, 35);
  black_screen();
  window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
