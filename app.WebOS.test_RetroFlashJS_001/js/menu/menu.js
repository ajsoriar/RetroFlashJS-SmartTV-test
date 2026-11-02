window.Menu = {
    arrlaserInstances: [],
    LASER_SPEED: 5,
    LASER_LONG: 20,
    LASER_DISTANCE_LIMIT: -200,
    laserCount: 0,
    LaserType: 1, // 1: normal, 2: double, 3: triple, 4: laser gun
    setLaserType: function(type){
        this.LaserType = type;
    }
}

/*
window.Laser = {
    addLaser: function(){

        if (this.LaserType == 1) {

            this.laserCount++;
            var geometry = new THREE.BoxGeometry( 0.2, 0.2, this.LASER_LONG );
            var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
            var cube_0 = new THREE.Mesh( geometry, material );
            cube_0.position.x = PlayerCamera.position.x + 0;
            cube_0.position.y = PlayerCamera.position.y - 2.5;
            cube_0.position.z = PlayerCamera.position.z - 5;
            cube_0.name = 'laser_' + this.laserCount;
            scene_2.add( cube_0 );

            this.arrlaserInstances.push(cube_0);        
        }

        if (this.LaserType == 2) {
            this.laserCount++;
            var geometry = new THREE.BoxGeometry( 0.2, 0.2, this.LASER_LONG );
            var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
            var cube_1 = new THREE.Mesh( geometry, material );
            cube_1.position.x = PlayerCamera.position.x + 4;
            cube_1.position.y = PlayerCamera.position.y - 2.5;
            cube_1.position.z = PlayerCamera.position.z - 5;
            cube_1.name = 'laser_' + this.laserCount;
            scene_2.add( cube_1 );

            this.laserCount++;
            var geometry = new THREE.BoxGeometry( 0.2, 0.2, this.LASER_LONG );
            var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
            var cube_2 = new THREE.Mesh( geometry, material );
            cube_2.position.x = PlayerCamera.position.x - 4;
            cube_2.position.y = PlayerCamera.position.y - 2.5;
            cube_2.position.z = PlayerCamera.position.z - 5;
            cube_2.name = 'laser_' + this.laserCount;
            scene_2.add( cube_2 );

            this.arrlaserInstances.push(cube_1);
            this.arrlaserInstances.push(cube_2);        
        }


        if (this.LaserType == 3) {

            this.laserCount++;
            var geometry = new THREE.BoxGeometry( 0.2, 0.2, this.LASER_LONG );
            var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
            var cube_0 = new THREE.Mesh( geometry, material );
            cube_0.position.x = PlayerCamera.position.x + 0;
            cube_0.position.y = PlayerCamera.position.y + 2.5;
            cube_0.position.z = PlayerCamera.position.z - 5;
            cube_0.name = 'laser_' + this.laserCount;
            scene_2.add( cube_0 );

            this.arrlaserInstances.push(cube_0);        

            this.laserCount++;
            var geometry = new THREE.BoxGeometry( 0.2, 0.2, this.LASER_LONG );
            var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
            var cube_1 = new THREE.Mesh( geometry, material );
            cube_1.position.x = PlayerCamera.position.x + 4;
            cube_1.position.y = PlayerCamera.position.y - 2.5;
            cube_1.position.z = PlayerCamera.position.z - 5;
            cube_1.name = 'laser_' + this.laserCount;
            scene_2.add( cube_1 );

            this.laserCount++;
            var geometry = new THREE.BoxGeometry( 0.2, 0.2, this.LASER_LONG );
            var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
            var cube_2 = new THREE.Mesh( geometry, material );
            cube_2.position.x = PlayerCamera.position.x - 4;
            cube_2.position.y = PlayerCamera.position.y - 2.5;
            cube_2.position.z = PlayerCamera.position.z - 5;
            cube_2.name = 'laser_' + this.laserCount;
            scene_2.add( cube_2 );

            this.arrlaserInstances.push(cube_1);
            this.arrlaserInstances.push(cube_2);        
        }

        if (this.LaserType == 4) {

            this.laserCount++;
            var geometry = new THREE.BoxGeometry( 0.2, 0.2, this.LASER_LONG );
            var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
            var cube_1 = new THREE.Mesh( geometry, material );
            cube_1.position.x = PlayerCamera.position.x + 4;
            cube_1.position.y = PlayerCamera.position.y - 2.5;
            cube_1.position.z = PlayerCamera.position.z - 5;
            cube_1.name = 'laser_' + this.laserCount;
            scene_2.add( cube_1 );

            this.laserCount++;
            var geometry = new THREE.BoxGeometry( 0.2, 0.2, this.LASER_LONG );
            var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
            var cube_2 = new THREE.Mesh( geometry, material );
            cube_2.position.x = PlayerCamera.position.x - 4;
            cube_2.position.y = PlayerCamera.position.y - 2.5;
            cube_2.position.z = PlayerCamera.position.z - 5;
            cube_2.name = 'laser_' + this.laserCount;
            scene_2.add( cube_2 );

            this.arrlaserInstances.push(cube_1);
            this.arrlaserInstances.push(cube_2);     
            

            this.laserCount++;
            var geometry = new THREE.BoxGeometry( 0.2, 0.2, this.LASER_LONG );
            var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
            var cube_3 = new THREE.Mesh( geometry, material );
            cube_3.position.x = PlayerCamera.position.x + 4;
            cube_3.position.y = PlayerCamera.position.y + 2.5;
            cube_3.position.z = PlayerCamera.position.z - 5;
            cube_3.name = 'laser_' + this.laserCount;
            scene_2.add( cube_3 );

            this.laserCount++;
            var geometry = new THREE.BoxGeometry( 0.2, 0.2, this.LASER_LONG );
            var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
            var cube_4 = new THREE.Mesh( geometry, material );
            cube_4.position.x = PlayerCamera.position.x - 4;
            cube_4.position.y = PlayerCamera.position.y + 2.5;
            cube_4.position.z = PlayerCamera.position.z - 5;
            cube_4.name = 'laser_' + this.laserCount;
            scene_2.add( cube_4 );

            this.arrlaserInstances.push(cube_3);
            this.arrlaserInstances.push(cube_4);
        }
        
    },
    moveLasersforward: function(){
        if (this.arrlaserInstances.length == 0) return;
        for (var i = 0; i < this.arrlaserInstances.length; i++) {
            this.arrlaserInstances[i].position.z -= this.LASER_SPEED;

            this.arrlaserInstances[i].targetObject = Target.targetObject;

            if (this.arrlaserInstances[i].position.z < this.LASER_DISTANCE_LIMIT) { // if the laser is out of the screen
                this.removeLaser(this.arrlaserInstances[i]);
                this.arrlaserInstances.splice(i, 1);
            } else { // if the laser is colliding with the target
                var ret = detectLaserCollision( this.getAllColisionableObjects(), this.arrlaserInstances[i] );
                if (ret != null){
                    var my_ray = ret.ray;
                    var my_object = ret.obj;

                    console.log('[collision] moveLasersforward() detected! obj:', my_object);

                    // remove the laser
                    this.removeLaser(this.arrlaserInstances[i]);
                    this.arrlaserInstances.splice(i, 1);

                    // remove other objects (asteroids, enemies, items)
                    if (my_object.type == 'OBJ_ASTEROID') {
                        Asteroids.removeAsteroidByName(my_object.name);
                    } else if (my_object.type == 'OBJ_ENEMY') {
                        Enemies.removeItemByName(my_object.name);
                    }
                }
            }
        }
    },
    removeLaser: function(instance){
        scene_2.remove(instance);
    },
    getAllColisionableObjects: function() {
        var allColisionableObjects = [];

        // add all asteroids
        for (var i = 0; i < Asteroids.arrayOfInstances.length; i++) {
            allColisionableObjects.push(Asteroids.arrayOfInstances[i]);
        }
        
        // add all Enemies
        for (var i = 0; i < Enemies.arrayOfInstances.length; i++) {
            allColisionableObjects.push(Enemies.arrayOfInstances[i]);
        }

        // add all Items: New lasers, new life, new shield, new speed, new weapon
        
        // final Enemy

        return allColisionableObjects;
    }
}

window.detectLaserCollision = function(arrObj, ray, callback) { // Detecs the colision between two THREE.js objects
    if (!ray) return null;
    //console.log('[collision] detectLaserCollision')
    var MID_LASER_LONG = Laser.LASER_LONG/2;
    var ASTEROID_WIDTH = 10;
    var ASTEROID_HEIGHT = 10;
    var laserFar = ray.position.z - MID_LASER_LONG;
    var laserNear = ray.position.z + MID_LASER_LONG;

    for (var i = 0; i < arrObj.length; i++) { // for each object
        var obj = arrObj[i];
        //console.log('[collision] laserFar:', laserFar, ' laserNear:', laserNear, 'obj.position.z:', obj.position.z );
        if (obj.position.z > laserFar && 
            obj.position.z < laserNear &&
            obj.position.x + ASTEROID_WIDTH/2 > ray.position.x &&
            obj.position.x - ASTEROID_WIDTH/2 < ray.position.x &&
            obj.position.y + ASTEROID_HEIGHT/2 > ray.position.y &&
            obj.position.y - ASTEROID_HEIGHT/2 < ray.position.y 
        ) { // collision detected!
            console.log('[collision] detectLaserCollision() detected!');
            if (callback) callback();
            return {
              ray: ray,
              obj: obj
            } 
        }
    }

    //console.log('[collision] collision NOT detected.');
    return null;
};

*/