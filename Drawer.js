function step_animate() {
  setTimeout(function() {
window.requestAnimationFrame(step_animate);
  context.clearRect(0, 0, width, height);
  col.draw();
  context.fillStyle = ("#E0FFFF");
  context.fillRect(0, 0, width, height);
  fronty.draw();
  safe_zone.draw();
  safe_zone2.draw();
  game_zone.draw();
  hideout.draw();
  portalTOhome.draw();
  portalTOarena.draw();
  for (var i = 1; i < points.length; i++) {
    points[i].draw();
    points[i].eat();
    if (points[i].eat(true)) {
      points[i] = new Points(Math.floor(Math.random() * 1500) + 208, Math.floor(Math.random() * 480) + 200, 8, 100, height/2);
    }
  }
  for (var i = 0; i < chooseEnemies.length; i++) {
    chooseEnemies[i].draw();
    chooseEnemies[i].collision();
    chooseEnemies[i].move();
  }
  player.draw();
  shop.draw();
  //abShop.draw();
  shop.colision();
  //abShop.colision();
  //doing here nothing
  hp.draw();
  exp.draw();
  context.font = "30px Comic Sans MS";
  context.fillStyle = "Grey";
  context.textAlign = "center";
  context.fillText("Level " + level, canvas.width / 2, 35);
  black_screen();
}, 1000 / fps);
}
window.requestAnimationFrame(step_animate);
