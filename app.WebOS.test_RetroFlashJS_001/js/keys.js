// Use keydown and keyup events to detect a long press

var currentKey = null;
var previousKey = null;
var keyString = null;

window.addEventListener("keydown", function (e) {
  previousKey = currentKey;
  currentKey = e.keyCode;
  console.log("[key] keydown", e.keyCode);

  if (currentKey == previousKey) {
    console.log(
      "[key] keydown",
      e.keyCode,
      "is the same as previous keydown",
      previousKey + " so we ignore it"
    );
    return;
  } else {
    console.log(
      "[key] keydown",
      e.keyCode,
      "is different than previous keydown",
      previousKey
    );
  }

  // Check route

  var path = Router.getCurrentPath();

  if (path == "MAIN_MENU") {
    // ---- GAME MAIN MENU ----
    if (currentKey == 37) {
      console.log("[key] left", e.keyCode);
      keyString = "KEY_LEFT";
      nav.move.left();
    }
    if (currentKey == 38) {
      console.log("[key] up", e.keyCode);
      keyString = "KEY_UP";
      nav.move.up();
    }
    if (currentKey == 39) {
      console.log("[key] right", e.keyCode);
      keyString = "KEY_RIGHT";
      nav.move.right();
    }
    if (currentKey == 40) {
      console.log("[key] down", e.keyCode);
      keyString = "KEY_DOWN";
      nav.move.down();
    }
    if (currentKey == 13) {
      console.log("[key] enter", e.keyCode);
      keyString = "KEY_ENTER";
      nav.action();
    }
    if (currentKey == 461) {
      console.log("[key] BACK", e.keyCode);
      webOS.platformBack();
    }
    // ---- GAME MAIN MENU ----
  } else if (path == "GAME") {
    // ---- GAME SECTION ----
    if (currentKey == 461) {
      console.log("[key] BACK", e.keyCode);
      Router.goTo("MAIN_MENU");
    }
    if (currentKey == 37) {
      console.log("[key] left", e.keyCode);
      keyString = "KEY_LEFT";
    }
    if (currentKey == 38) {
      console.log("[key] up", e.keyCode);
      keyString = "KEY_UP";
    }
    if (currentKey == 39) {
      console.log("[key] right", e.keyCode);
      keyString = "KEY_RIGHT";
    }
    if (currentKey == 40) {
      console.log("[key] down", e.keyCode);
      keyString = "KEY_DOWN";
    }
    if (currentKey == 13) {
      console.log("[key] enter", e.keyCode);
      keyString = "KEY_ENTER";
      Laser.addLaser();
    }
    if (currentKey == 27) {
      console.log("[key] esc", e.keyCode);
      keyString = "KEY_ESC";
      Router.goTo("MAIN_MENU");
    }
    if (currentKey == 8) {
      console.log("[key] backspace", e.keyCode);
      keyString = "KEY_BACK";
    }
    if (currentKey == 32) {
      console.log("[key] space", e.keyCode);
      keyString = "KEY_SPACE";
    }
    if (currentKey == 36) {
      console.log("[key] home", e.keyCode);
      keyString = "KEY_HOME";
    }

    switch (currentKey) {
      case 49:
        Laser.setLaserType(1);
        break;
      case 50:
        Laser.setLaserType(2);
        break;
      case 51:
        Laser.setLaserType(3);
        break;
      case 52:
        Laser.setLaserType(4);
        break;
    }

    uiEnableButton(keyString);

    // ---- GAME SECTION ----
  } else if (path == "GAME_OVER") {
    // ---- GAME MAIN MENU ----
    // ---- GAME MAIN MENU ----
  } else if (path == "SETTINGS") {
    // ---- SETTINGS ----
    if (currentKey == 461) {
      console.log("[key] BACK", e.keyCode);
      Router.goTo("MAIN_MENU");
    }
    if (currentKey == 37) {
      console.log("[key] left", e.keyCode);
      keyString = "KEY_LEFT";
      nav.move.left();
    }
    if (currentKey == 38) {
      console.log("[key] up", e.keyCode);
      keyString = "KEY_UP";
      nav.move.up();
    }
    if (currentKey == 39) {
      console.log("[key] right", e.keyCode);
      keyString = "KEY_RIGHT";
      nav.move.right();
    }
    if (currentKey == 40) {
      console.log("[key] down", e.keyCode);
      keyString = "KEY_DOWN";
      nav.move.down();
    }
    if (currentKey == 13) {
      console.log("[key] enter", e.keyCode);
      keyString = "KEY_ENTER";
      nav.action();
    }
    if (currentKey == 27) {
      console.log("[key] esc", e.keyCode);
      keyString = "KEY_ESC";
      Router.goTo("MAIN_MENU");
    }
    if (currentKey == 8) {
      console.log("[key] backspace", e.keyCode);
      keyString = "KEY_BACK";
    }
    // ---- SETTINGS ----
  } else if (path == "CREDITS") {
    if (currentKey == 461) {
      console.log("[key] BACK", e.keyCode);
      Router.goTo("MAIN_MENU");
    }
    if (currentKey == 37) {
      console.log("[key] left", e.keyCode);
      keyString = "KEY_LEFT";
      nav.move.left();
    }
    if (currentKey == 13) {
      console.log("[key] enter", e.keyCode);
      keyString = "KEY_ENTER";
      nav.action();
    }
    if (currentKey == 27) {
      console.log("[key] esc", e.keyCode);
      keyString = "KEY_ESC";
      Router.goTo("MAIN_MENU");
    }
  }
});

var uiEnableButton = function (keyString) {
  // change opacity pending on every keyStrinf

  if (keyString == "KEY_LEFT") {
    Utils.setOpacityByClassName("btn4", 1);
  }
  if (keyString == "KEY_UP") {
    Utils.setOpacityByClassName("btn2", 1);
  }
  if (keyString == "KEY_RIGHT") {
    Utils.setOpacityByClassName("btn6", 1);
  }
  if (keyString == "KEY_DOWN") {
    Utils.setOpacityByClassName("btn8", 1);
  }
  if (keyString == "KEY_ENTER") {
    Utils.setOpacityByClassName("btn5", 1);
  }
  if (keyString == "KEY_ESC") {
    Utils.setOpacityByClassName("btn9", 1);
  }
  if (keyString == "KEY_BACK") {
    Utils.setOpacityByClassName("btn1", 1);
  }
  if (keyString == "KEY_SPACE") {
    Utils.setOpacityByClassName("btn3", 1);
  }
  if (keyString == "KEY_HOME") {
    Utils.setOpacityByClassName("btn7", 1);
  }

  moveSpaceship(keyString);
};

var moveSpaceship = function (keyString) {
  console.log("[radar] Radar.limits.x.min", Radar.limits.x.min);
  console.log("[radar] Radar.limits.x.max", Radar.limits.x.max);
  console.log("[radar] Radar.limits.y.min", Radar.limits.y.min);
  console.log("[radar] Radar.limits.y.max", Radar.limits.y.max);
  // Radar.currentPosition
  console.log("[radar] Radar.currentPosition.x", Radar.currentPosition.x);
  console.log("[radar] Radar.currentPosition.y", Radar.currentPosition.y);

  if (keyString == "KEY_LEFT") {
    if (Radar.currentPosition.x > Radar.limits.x.min) {
      Radar.currentPosition.x -= 1;
      PlayerCamera.position.x -= 10;
    } else {
      Indicators.showAndHide.leftLimit();
    }
  }

  if (keyString == "KEY_UP") {
    if (Radar.currentPosition.y > Radar.limits.y.min) {
      Radar.currentPosition.y -= 1;
      PlayerCamera.position.y += 10;
    } else {
      Indicators.showAndHide.topLimit();
    }
  }

  if (keyString == "KEY_RIGHT") {
    if (Radar.currentPosition.x < Radar.limits.x.max - 1) {
      Radar.currentPosition.x += 1;
      PlayerCamera.position.x += 10;
    } else {
      Indicators.showAndHide.rightLimit();
    }
  }

  if (keyString == "KEY_DOWN") {
    if (Radar.currentPosition.y < Radar.limits.y.max - 1) {
      Radar.currentPosition.y += 1;
      PlayerCamera.position.y -= 10;
    } else {
      Indicators.showAndHide.bottomLimit();
    }
  }

  Radar.refresh();
};

window.addEventListener("keyup", function (e) {
  currentKey = null;
  console.log("[key] keyup", e.keyCode);

  // change opacity to 0.5 all elements from btn1 to btn9
  for (var i = 1; i <= 9; i++) {
    Utils.setOpacityByClassName("btn" + i, 0.5);
  }
});
