
window.Asteroids = {
    arrayOfInstances: [],
    ASTEROIDS_SPEED: 1,
    NUM_OF_ASTEROIDS: 20,
    lastCreationTimestamp: 0,
    asteroidsCount: 0,
    addAsteroid: function(){
        this.asteroidsCount++;
        this.lastCreationTimestamp = Date.now();
        var geometry = new THREE.BoxGeometry( 10, 10, 10 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
        var asteroid = new THREE.Mesh( geometry, material );
        var position = window.getRandomAsteroidPosition();
        asteroid.position.x = position.x * 10;
        asteroid.position.y = position.y * 10;
        asteroid.position.z = -200
        asteroid.name = 'asteroid_' + this.asteroidsCount;
        scene_2.add( asteroid );
        this.arrayOfInstances.push(asteroid);
    },
    move: function(){
        if (this.arrayOfInstances.length < this.NUM_OF_ASTEROIDS) this.trygenerateAsteroid();
        for (var i = 0; i < this.arrayOfInstances.length; i++) {
            this.arrayOfInstances[i].position.z += this.ASTEROIDS_SPEED;
            if (this.arrayOfInstances[i].position.z > Z_CAMERA_POSITION) {
                this.removeAsteroid(this.arrayOfInstances[i]);
                this.arrayOfInstances.splice(i, 1);
            }
        }
    },
    trygenerateAsteroid: function(){

        if (this.arrayOfInstances.length < this.NUM_OF_ASTEROIDS) {
            if (Date.now() - this.lastCreationTimestamp > 500) {
                this.addAsteroid();
            }
        }
    },
    removeAsteroid: function(instance){
        scene_2.remove(instance);
    },
    removeAsteroidByName: function(name){
        console.log('[asteroid] removeAsteroidByName, name:', name);
        for (var i = 0; i < this.arrayOfInstances.length; i++) {
            if (this.arrayOfInstances[i].name == name) {
                this.removeAsteroid(this.arrayOfInstances[i]);
                this.arrayOfInstances.splice(i, 1);
            }
        }
    }
};

window.getRandomAsteroidPosition = function() {
    var defaultPosition = {
        x: Utils.randomNumInRange(),
        y: Utils.randomNumInRange(),
        z: 0
    };
    return defaultPosition
};
