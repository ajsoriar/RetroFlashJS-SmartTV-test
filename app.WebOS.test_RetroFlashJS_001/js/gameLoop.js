
var scene_2;
window.PlayerCamera = null;
var renderer_2;
var Z_CAMERA_POSITION = 300;
var LINE_COUNT = 300;
var geom = new THREE.BufferGeometry();
geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6*LINE_COUNT), 3));
geom.setAttribute("velocity", new THREE.BufferAttribute(new Float32Array(2*LINE_COUNT), 1));
var pos = geom.getAttribute("position");
var pa = pos.array;
var vel = geom.getAttribute("velocity");
var va = vel.array;

window.GameLoop = {}

GameLoop.init = function() {

    window.scene_2 = new THREE.Scene();
    PlayerCamera = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight, 1, 5000);
    PlayerCamera.position.z = Z_CAMERA_POSITION;

    renderer_2= new THREE.WebGLRenderer({
        antialias: false,
        alpha: true
    });

    renderer_2.setSize(window.innerWidth, window.innerHeight);

    var base = document.getElementById("game-screen");

    //document.body.appendChild(renderer_2.domElement);
    base.appendChild(renderer_2.domElement);
    
    for (var line_index= 0; line_index < LINE_COUNT; line_index++) {
        // var x = Math.random() * 400 - 200;
        // var y = Math.random() * 200 - 100;
        // var z = Math.random() * 500 - 100;
        var x = Math.random() * 400 - 200;
        var y = Math.random() * 200 - 100;
        var z = Math.random() * 500 - 100;
        var xx = x;
        var yy = y;
        var zz = z;
        //line start
        pa[6*line_index] = x;
        pa[6*line_index+1] = y;
        pa[6*line_index+2] = z;
        //line end
        pa[6*line_index+3] = xx;
        pa[6*line_index+4] = yy;
        pa[6*line_index+5] = zz;

        va[2*line_index] = va[2*line_index+1]= 0;
    }
    //debugger;
    var mat = new THREE.LineBasicMaterial({color: 0xaaaaaa});
    var lines = new THREE.LineSegments(geom, mat);
    window.scene_2.add(lines);

    window.addEventListener("resize", onWindowResize, false);

    GameLoop.ANIMATION = true;
    animate();
}

GameLoop.clearThreeJSScene = function() {
    // Clear the scene
    
    if (window.scene_2) {
        //window.scene_2.clear();
        //window.scene_2 = null;
    }


    // ThreeJS clear canvas
    try {
        var canvas = document.getElementsByTagName('canvas')[0];
        canvas.parentNode.removeChild(canvas);
        document.body.removeChild(canvas);        
    } catch (error) {
        
    }

}

GameLoop.stopGame = function() {
    console.log('[GameLoop] stopGame');
    // stop the game
    GameLoop.ANIMATION = false;

    // clear canvas
    var canvas = document.getElementsByTagName('canvas')[0];
    
    // Function to clear the canvas
    GameLoop.clearThreeJSScene();



    // clear scene
    // scene_2 = null;
    // PlayerCamera = null;
    // renderer_2 = null;
    // geom = null;
    // pos = null;
    // pa = null;
    // vel = null;
    // va = null;



}

function onWindowResize() {
    PlayerCamera.aspect = window.innerWidth / window.innerHeight;
    PlayerCamera.updateProjectionMatrix();
    renderer_2.setSize(window.innerWidth, window.innerHeight);
}

// --------------------------------------------- ANIMATION LOOP --------------------------------------------- //
// --------------------------------------------- ANIMATION LOOP --------------------------------------------- //
// --------------------------------------------- ANIMATION LOOP --------------------------------------------- //



function animate() {

    if (GameLoop.ANIMATION) {

        Asteroids.move();
        Enemies.move();
        Assets.move();
        moveRaysOfLight ();
        Laser.moveLasersforward();
        Target.checkTarget();
        renderer_2.render( scene_2, PlayerCamera );

        //requestAnimationFrame(animate);
        setTimeout(function() { // alternative to requestAnimationFrame
            animate();
        }, 10);

    } else {
        console.log('[GameLoop] animate stoped');
    }   
}

// --------------------------------------------- ANIMATION LOOP --------------------------------------------- //
// --------------------------------------------- ANIMATION LOOP --------------------------------------------- //
// --------------------------------------------- ANIMATION LOOP --------------------------------------------- //

function moveRaysOfLight () {
    for (var line_index= 0; line_index < LINE_COUNT; line_index++) {
        va[2*line_index] += 0.03; //bump up the velocity by the acceleration amount
        va[2*line_index+1] += 0.025;
        pa[6*line_index+2] += va[2*line_index]; 
        pa[6*line_index+5] += va[2*line_index+1];

        if(pa[6*line_index+5] > 200) {
            var z= Math.random() * 200 - 100;
            pa[6*line_index+2] = z;
            pa[6*line_index+5] = z;
            va[2*line_index] = 0;
            va[2*line_index+1] = 0;
        }
    }
    pos.needsUpdate = true;
} 
