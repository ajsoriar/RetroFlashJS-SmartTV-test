
window.Assets = {
    arrayOfInstances: [],
    ITEM_SPEED: 2,
    NUM_OF_ITEMS: 1,
    lastCreationTimestamp: 0,
    itemsCount: 0,
    LAST_CREATION_TIMESTAMP: 5000,
    addItem: function(){
        this.itemsCount++;
        this.lastCreationTimestamp = Date.now();
        var geometry = new THREE.BoxGeometry( 10, 10, 10 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
        var item = new THREE.Mesh( geometry, material );
        var position = window.getRandomItemPosition();
        item.position.x = position.x * 10;
        item.position.y = position.y * 10;
        item.position.z = -200
        item.name = 'item_' + this.itemsCount;
        item.type = 'OBJ_ENEMY';
        scene_2.add( item );
        this.arrayOfInstances.push(item);
    },
    move: function(){
        if (this.arrayOfInstances.length < this.NUM_OF_ITEMS) this.tryGenerateItem();
        for (var i = 0; i < this.arrayOfInstances.length; i++) {
            this.arrayOfInstances[i].position.z += this.ITEM_SPEED;

            if (this.arrayOfInstances[i].position.z > Z_CAMERA_POSITION - 10) {
                if (this.arrayOfInstances[i].position.x == PlayerCamera.position.x && this.arrayOfInstances[i].position.y == PlayerCamera.position.y) {
                    this.removeItemByArrPosition(i);
                    Indicators.showAndHide.achievement();
                    continue;
                }      
            }

            // if the enemy is out of the screen remove it
            if (this.arrayOfInstances[i].position.z > Z_CAMERA_POSITION) {
                this.removeItemByArrPosition(i);  
            }
        }
    },
    tryGenerateItem: function(){
        if (this.arrayOfInstances.length < this.NUM_OF_ITEMS) {
            if (Date.now() - this.lastCreationTimestamp > this.LAST_CREATION_TIMESTAMP) {
                this.addItem();
            }
        }
    },
    removeItem: function(instance){
        scene_2.remove(instance);
    },
    removeItemByArrPosition: function(i){
        var instance = this.arrayOfInstances[i];
        scene_2.remove(instance);
        this.arrayOfInstances.splice(i, 1); 
    },
    removeItemByName: function(name){
        console.log('[item] removeItemByName, name:', name);
        for (var i = 0; i < this.arrayOfInstances.length; i++) {
            if (this.arrayOfInstances[i].name == name) {
                this.removeItem(this.arrayOfInstances[i]);
                this.arrayOfInstances.splice(i, 1);
            }
        }
    }
};

window.getRandomItemPosition = function() {
    var defaultPosition = {
        x: Utils.randomNumInRange(-4,4),
        y: Utils.randomNumInRange(-4,4),
        z: 0
    };
    return defaultPosition
};
