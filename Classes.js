class front {
  constructor(x, y, camX, camY) {
    this.x = x;
    this.y = y;
    this.camX = camX;
    this.camY = camY;
  }
  draw() {
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    context.fillStyle = ("Black");
    context.fillRect(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 1900, 350);
  }
}
class trees {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  firstTree() {
    if (treesDeath == 2) {
      this.x -= 1;
    }
    if (this.x == 68) {
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
class Shop {
  constructor(x, y, camX, camY) {
    this.x = x;
    this.y = y;
    this.camX = camX;
    this.camY = camY;
  }
  draw() {
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    context.fillStyle = "rgba(135,113,88,0.7)";
    context.fillRect(this.x - player.x + width / 2 - dirX, this.y - 30 - player.y - 30 + height / 2 - dirY, 42, 120);
    context.fillStyle = "rgba(135,113,88,1)";
    context.fillRect(this.x + 15 - player.x + 15 + width / 2 - dirX, this.y - 30 - player.y - 30 + height / 2 - dirY, 15, 120);
    context.fillStyle = "rgba(214,182,92,0.9)"
    context.beginPath();
    context.arc(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 50, 0.5 * Math.PI, Math.PI * 1.5, true);
    context.fill();
    context.closePath();
    context.fillStyle = "rgba(214,182,92,0.9)"
    context.beginPath();
    context.arc(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 35, 0.5 * Math.PI, Math.PI * 1.5, true);
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
    restart_on_death();
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
  constructor(x, y, x2, y2, toLoc, camX, camY) {
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.toLoc = toLoc;
    this.camX = camX;
    this.camY = camY;
  }
  draw() {
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    context.fillStyle = "#276ad6";
    context.beginPath();
    context.arc(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 60, 0, Math.PI * 2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#ffffff';
    context.lineWidth = 4;
    context.arc(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 50, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(this.x - player.x + width / 2 - dirX, this.y - 50 - player.y + height / 2 - dirY, 10, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(this.x - player.x + width / 2 - dirX, this.y + 50 - player.y + height / 2 - dirY, 10, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(this.x - 50 - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 10, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(this.x + 50 - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 10, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(this.x - player.x + width / 2 - dirX, this.y - 25 - player.y + height / 2 - dirY);
    context.lineTo(this.x - player.x + width / 2 - dirX, this.y + 25 - player.y + height / 2 - dirY);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(this.x - 25 - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY);
    context.lineTo(this.x + 25 - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(this.x - 20 - player.x + width / 2 - dirX, this.y - 20 - player.y + height / 2 - dirY);
    context.lineTo(this.x + 20 - player.x + width / 2 - dirX, this.y + 20 - player.y + height / 2 - dirY);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(this.x + 20 - player.x + width / 2 - dirX, this.y - 20 - player.y + height / 2 - dirY);
    context.lineTo(this.x - 20 - player.x + width / 2 - dirX, this.y + 20 - player.y + height / 2 - dirY);
    context.stroke();
    context.closePath();

  }
  collision() {
    var b1 = player.x - this.x;
    var c1 = player.y - this.y;
    var hyp1 = Math.sqrt((b1 * b1) + (c1 * c1));
    if (hyp1 <= (player.r + 40)) {
      player.x = this.x2;
      player.y = this.y2;
      current_loc = this.toLoc;
      opacity = 0.8;
    }
  }
}
var current_loc = 0;

class Player {
  constructor(x, y, r, spd, sp, camX, camY) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.spd = spd;
    this.sp = sp;
    this.camX = camX;
    this.camY = camY;
  }
  draw() {
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    context.fillStyle = "rgba(214,182,92,0.5)";
    context.beginPath();
    context.arc(this.x - this.x + width / 2 - dirX, this.y - this.y + height / 2 - dirY, rProtection, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
    context.fillStyle = ("#B0C4DE");
    context.beginPath();
    context.arc(this.x - this.x + width / 2 - dirX, this.y - this.y + height / 2 - dirY, this.r, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    context.fillStyle = ("#00CED1");
    context.beginPath();
    context.arc(this.x - this.x + width / 2 - dirX, this.y - this.y + height / 2 - dirY, 15, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
    context.fillStyle = ("#00FFFF");
    context.beginPath();
    context.arc(this.x - this.x + width / 2 - dirX, this.y - this.y + height / 2 - dirY, exp.unitExp / 50, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
    if (current_loc == 0) {
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
        this.spd = 5 * (speedIncreased * 0.01);
      }
    }

    if (current_loc == 1) {
      if (keys['40'] && this.y < 2500 - this.r || keys['83'] && this.y < 1500 - this.r) {
        this.y = this.y + this.spd;
      }
      if (keys['39'] && this.x < 500 - this.r || keys['68'] && this.x < 500 - this.r) {
        this.x = this.x + this.spd;
      }
      if (keys['38'] && this.y > 2000 + this.r || keys['87'] && this.y > 1000 + this.r) {
        this.y = this.y - this.spd;
      }
      if (keys['37'] && this.x > 0 + this.r || keys['65'] && this.x > 0 + this.r) {
        this.x = this.x - this.spd;
      }
      if (keys['16'] && this.x > 0 + this.r) {
        this.spd = 3;
      } else {
        this.spd = 5 * (speedIncreased * 0.01);
      }
    }
    if (keys['13']) {
      document.getElementById('game').style.visibility = 'visible';
      document.getElementById('Menu').style.visibility = 'hidden';
    }
  }
}
class Points {
  constructor(x, y, r, camX, camY) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.camX = camX;
    this.camY = camY
  }
  draw() {
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    context.fillStyle = ("#c8a");
    context.beginPath();
    context.arc(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, this.r, 0, Math.PI * 2, true);
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
  constructor(x, y, camX, camY) {
    this.x = x;
    this.y = y;
    this.camX = camX;
    this.camY = camY;
  }
  draw(x, y) {
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    context.fillStyle = ("#fadadd");
    context.fillRect(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 200, 480);
  }
}
class gameZone {
  constructor(x, y, camX, camY) {
    this.x = x;
    this.y = y;
    this.camX = camX;
    this.camY = camY;
  }
  draw() {
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    context.fillStyle = ("#ffebee");
    context.fillRect(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 1500, 480);
  }
}
class home {
  constructor(x, y, camX, camY) {
    this.x = x;
    this.y = y;
    this.camX = camX;
    this.camY = camY;
  }
  draw(x, y) {
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    context.fillStyle = ("#ffebee");
    context.fillRect(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 500, 500);
  }
}
class normalEnemies {
  constructor(x, y, r, spdX, spdY, camX, camY) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.spdX = spdX;
    this.spdY = spdY;
    this.camX = camX;
    this.camY = camY;
  }
  draw() {
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    context.fillStyle = ("#BC8F8F");
    context.beginPath();
    context.arc(this.x - player.x + width / 2 - dirX , this.y - player.y + height / 2 - dirY, this.r, 0, Math.PI * 2, true);
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
      hp.hp -= damage - damage * (damageResist * 0.01);;
    }
  }
  move() {
    this.x += this.spdX;
    this.y += this.spdY;
    if (this.x + normalR*2 > 1700 + normalR) {
      this.spdX = -this.spdX;
    }
    if (this.x - normalR*2 < 200 - normalR) {
      this.spdX = -this.spdX;
    }
    if (this.y + normalR*2 > 280 + normalR) {
      this.spdY = -this.spdY;
    }
    if (this.y - normalR*2 < 600 - normalR) {
      this.spdY = -this.spdY;
    }
  }
}
class slowEnemies {
  constructor(x, y, r, rs, spdX, spdY, spdYS, spdXS, camX, camY) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rs = rs;
    this.spdX = spdX;
    this.spdY = spdY;
    this.spdXS = spdXS;
    this.spdYS = spdYS;
    this.camX = camX;
    this.camY = camY;
  }
  draw() {
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    var xs = this.x;
    var ys = this.y;
    context.fillStyle = "rgba(0, 255, 127, 0.09)";
    context.beginPath();
    context.arc(xs - player.x + width / 2 - dirX, ys - player.y + height / 2 - dirY, this.rs, 0, Math.PI * 2, true);
    context.fill();
    context.fillStyle = "rgba(46, 139, 87, 1)";
    context.beginPath();
    context.arc(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, this.r, 0, Math.PI * 2, true);
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
      hp.hp -= damage - damage * (damageResist * 0.01);;
    }
    var xs = this.x;
    var ys = this.y;
    var b2 = player.x - xs;
    var c2 = player.y - ys;
    var hyp2 = Math.sqrt((b2 * b2) + (c2 * c));
    if (hyp2 <= (player.r + this.rs)) {
      console.log(player.spd);
      hp.hp -= 1 - 1 * (damageResist * 0.01);;
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
  constructor(x, y, spdX, spdY, camX, camY) {
    this.x = x;
    this.y = y;
    this.spdX = spdX;
    this.spdY = spdY;
    this.camX = camX;
    this.camY = camY;
  }
  draw() {
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    context.fillStyle = ("black");
    context.beginPath();
    context.arc(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 30, 0, Math.PI * 2, true);
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
        hp.hp -= damage - damage * (damageResist * 0.01);
    }
  }
  move() {
    var dx = player.x - this.x;
    var dy = player.y - this.y;
    var b = player.x - this.x;
    var c = player.y - this.y;
    var hyp = Math.sqrt((b * b) + (c * c));
    if (hyp <= (player.r + 250) && player.x > 200 && player.x < 1700) {
    this.x += (dx / distance(player, this) * 3);
    this.y += (dy / distance(player, this) * 3);
    if (this.x + 50 > 1720) {
      dx -= -3;
    }
    if (this.x - 50 < 180) {
      dx -= 3;
    }
  } else {
    this.x += this.spdX;
    this.y += this.spdY;
    if (this.x + 50 > 1720) {
      this.spdX = -this.spdX;
    }
    if (this.x - 50 < 180) {
      this.spdX = -this.spdX;
    }
    if (this.y + 50 > 280 ) {
      this.spdY = -this.spdY;
    }
    if (this.y - 50 < 600) {
      this.spdY = -this.spdY;
    }
   }
  }
 }
class colider {
  constructor(x, y, camX, camY) {
    this.x = x;
    this.y = y;
    this.camX = camX;
    this.camY = camY;
  }
  draw() {
    if (level == property) {
      property += 30;
      rangeNormal += 30;
      rangeGreen += 30;
      rangeBee += 30;
      secondRangeNormal += 20;
      secondRangeGreen += 20;
      normalR /= 1.3;
    }
    let dirX = player.x - this.camX;
    let dirY  = player.y - this.camY;
    this.camX += dirX/spdCamera;
    this.camY += dirY/spdCamera;
    context.fillStyle = ("#ffebee");
    context.fillRect(this.x - player.x + width / 2 - dirX, this.y - player.y + height / 2 - dirY, 1, 480);
    //first Normal enemie
    if (player.x >= this.x && this.x == 1700 && level <= rangeNormal) {
      console.log(chooseEnemies.length);
      normalArr[count] = new normalEnemies(Math.floor(Math.random() * (800 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, normalR, Math.floor(Math.random() * 4) + 2, Math.floor(Math.random() * 4) + 2, 1, height/2);
      count += 1;
      level += 1;
      this.x = 200;
      player.sp = 1800;
      chooseEnemies = normalArr;
    }
    if (player.x <= this.x && this.x == 200 && level <= rangeNormal) {
      console.log(chooseEnemies.length);
      normalArr[count] = new normalEnemies(Math.floor(Math.random() * (800 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, normalR, Math.floor(Math.random() * 4) + 2, Math.floor(Math.random() * 4) + 2, 1, height/2);
      count += 1;
      level += 1;
      this.x = 1700;
      player.sp = 100;
      chooseEnemies = normalArr;
    }
    //first Green enemie
    if (player.x >= this.x && this.x == 1700 && level >= rangeGreen && level <= rangeBee) {
      console.log("chooseEnemies.length");
      slowArr[countG] = new slowEnemies(Math.floor(Math.random() * (1200 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, 10, 100, 2, 2, 2, 2, 1, height/2);
      chooseEnemies = slowArr
      countG += 1;
      level += 1;
      this.x = 200;
      player.sp = 1800;
    }
    if (player.x <= this.x && this.x == 200 && level >= rangeGreen && level <= rangeBee) {
      console.log(chooseEnemies.length);
      slowArr[countG] = new slowEnemies(Math.floor(Math.random() * (1200 - 250)) + 250, Math.floor(Math.random() * (400 - 250)) + 250, 10, 100, 2, 2, 2, 2, 1, height/2);
      chooseEnemies = slowArr;
      countG += 1;
      level += 1;
      this.x = 1700;
      player.sp = 100;
    }
    //First Bee enemie
    if (player.x >= this.x && this.x == 1700 && level >= rangeBee) {
      console.log("Hello");
      beeArr[countB] = new BossEnemies(400, 400, 3, 3, 100, height/2);
      countB += 1;
      level += 1;
      this.x = 200;
      player.sp = 1800;
      chooseEnemies = beeArr;
    }
    if (player.x <= this.x && this.x == 200 && level >= rangeBee) {
      console.log("Bye");
      beeArr[countB] = new BossEnemies(400, 400, 3, 3, 100, height/2);
      countB += 1;
      level += 1;
      this.x = 1700;
      player.sp = 100;
      chooseEnemies = beeArr;
    }
  }
}
