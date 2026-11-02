window.Target = {
    targetObject: null,
    checkTarget: function(){

        // all the targetable objects are in the same position of the camera
        var targetobjects = Laser.getAllColisionableObjects();

        for (var i = 0; i < targetobjects.length; i++) {
            var asteroid = targetobjects[i];
            if (asteroid.position.x == PlayerCamera.position.x && asteroid.position.y == PlayerCamera.position.y) {
                this.targetObject = targetobjects[i];
                break;
            } else {
                this.targetObject = null;
            }
        }

        this.paint();
    },
    paint: function(obj){
        el = document.getElementById("target"); 
        if (this.targetObject) {
            el.style.outline = "4px solid red";
        }else{
            el.style.outline = "4px solid green";
        }
    }
};