window.Radar = {
    with: 17, //odd number, mandatory
    height: 9, //odd number, mandatory
    limits: {
        x: {
            min: 0,
            max: null
        },
        y: {
            min: 0,
            max: null
        }
    },
    scuaresize: 9,
    currentPosition: {
        x: null,
        y: null
    },
    paintRadar: function(){
        console.log('[radar] paintRadar');

        // get base dom element
        var base = document.getElementById("radar");

        // create a new Dom element
        var radar = document.createElement("div");
        radar.className = "radar";
        radar.style.bottom = (this.height * this.scuaresize + 10) + "px";
        radar.style.left = 10 + "px";
        radar.style.position = "absolute";
        radar.style.backgroundColor = "#000000";
        base.appendChild(radar);
        console.log('[radar] radar', radar);

        // Create (inside radar element) una cuadricula con divs de Radar.width x Radar.height and absolute positions to each scuare and width and height of 20px.
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.with; j++) {
                var cuadricula = document.createElement("div");
                cuadricula.className = "cuadricula";
                cuadricula.style.top = i * this.scuaresize + "px";
                cuadricula.style.left = j * this.scuaresize + "px";
                cuadricula.style.position = "absolute";
                cuadricula.style.display = "inline-block";
                cuadricula.style.width = this.scuaresize +"px";
                cuadricula.style.height = this.scuaresize +"px";
                cuadricula.style.outline = "1px solid #0000FF";
                cuadricula.style.backgroundColor = "transparent";
                radar.appendChild(cuadricula);
            }
        }

        var display = document.createElement("div");
        display.className = "display";
        display.id = "radarDisplay";
        display.style.left = "-1px";
        display.style.width = (this.with * this.scuaresize) + 4 +"px";
        radar.appendChild(display);
    },
    init: function(){
        console.log('[radar] init');
        this.paintRadar();
        this.limits.x.max = this.with;
        this.limits.y.max = this.height;
        this.currentPosition.x = Math.floor((this.with - 1)/2);
        this.currentPosition.y = Math.floor((this.height - 1)/2);
        this.refresh();
    },
    paintPosition: function (){
        console.log('[radar] paintPosition');
        // paint the position of the spaceship
        var cuadricula = document.getElementsByClassName("cuadricula");
        for (var i = 0; i < cuadricula.length; i++) {
          cuadricula[i].style.backgroundColor = "transparent";
        }
        cuadricula[this.currentPosition.x + this.currentPosition.y * this.with].style.backgroundColor = "red";
        // print position   on screen
        var position = document.getElementById("position");
        position.innerHTML = "x: " + this.currentPosition.x + " y: " + this.currentPosition.y;
    },
    refresh: function(){
        console.log('[radar] refresh');
        this.paintPosition();
        this.painNumbers()
    },
    painNumbers: function(){
        var display = document.getElementById("radarDisplay");
        var halfWidth = Math.floor(this.with/2);
        var halfHeight = Math.floor(this.height/2);
        display.innerHTML = (this.currentPosition.x -halfWidth) + " " + (this.currentPosition.y -halfHeight);
    }
}

Radar.init();