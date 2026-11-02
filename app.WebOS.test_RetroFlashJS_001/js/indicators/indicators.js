var Indicators = {
    base: null,
    init: function() {

        // If previously initialized, exit.
        if (this.base) {
            return;
        }

        this.base = document.getElementById("game-screen");
        this.createSideLimits();
        this.createDamageIndicator();
        this.createAchievementIndicator();
        this.hideAll();
    },
    createSideLimits: function() {

        // Check if the indicators already exist

        // Create four limit indicators. Top and bottom are horizontal, left and right are vertical.
        htmlString = '<div id="topLimitIndicator" class="limitIndicator topLimitIndicator"></div>';
        htmlString += '<div id="bottomLimitIndicator" class="limitIndicator bottomLimitIndicator"></div>';
        htmlString += '<div id="leftLimitIndicator" class="limitIndicator leftLimitIndicator"></div>';
        htmlString += '<div id="rightLimitIndicator" class="limitIndicator rightLimitIndicator"></div>';
        // append to body, pure js
        var div = document.createElement('div');
        div.className = 'sideLimits';
        div.innerHTML = htmlString;

        this.base.appendChild(div);
    },
    createDamageIndicator: function() {
        var div = document.createElement('div');
        div.id = 'damageIndicator';
        div.className = 'damageIndicator';
        this.base.appendChild(div);
    },
    createAchievementIndicator: function() {
        var div = document.createElement('div');
        div.id = 'achievementIndicator';
        div.className = 'achievementIndicator';
        this.base.appendChild(div);
    },
    showAll: function() {
        document.getElementById('topLimitIndicator').style.display = 'block';
        document.getElementById('bottomLimitIndicator').style.display = 'block';
        document.getElementById('leftLimitIndicator').style.display = 'block';
        document.getElementById('rightLimitIndicator').style.display = 'block';
        document.getElementById('damageIndicator').style.display = 'block';
        document.getElementById('achievementIndicator').style.display = 'block';
    },
    hideAll: function() { 
        document.getElementById('topLimitIndicator').style.display = 'none';
        document.getElementById('bottomLimitIndicator').style.display = 'none';
        document.getElementById('leftLimitIndicator').style.display = 'none';
        document.getElementById('rightLimitIndicator').style.display = 'none';
        document.getElementById('damageIndicator').style.display = 'none';
        document.getElementById('achievementIndicator').style.display = 'none';
    },
    hide:{
        damage: function() {
            document.getElementById('damageIndicator').style.display = 'none';
        },
        achievement: function() {
            document.getElementById('achievementIndicator').style.display = 'none';
        },
        topLimit: function() {
            document.getElementById('topLimitIndicator').style.display = 'none';
        },
        bottomLimit: function() {
            document.getElementById('bottomLimitIndicator').style.display = 'none';
        },
        leftLimit: function() {
            document.getElementById('leftLimitIndicator').style.display = 'none';
        },
        rightLimit: function() {
            document.getElementById('rightLimitIndicator').style.display = 'none';
        }
    },
    show:{
        damage: function() {
            document.getElementById('damageIndicator').style.display = 'block';
        },
        achievement: function() {
            document.getElementById('achievementIndicator').style.display = 'block';            
        },
        topLimit: function() {
            document.getElementById('topLimitIndicator').style.display = 'block';            
        },
        bottomLimit: function() {
            document.getElementById('bottomLimitIndicator').style.display = 'block';            
        },
        leftLimit: function() {
            document.getElementById('leftLimitIndicator').style.display = 'block';            
        },
        rightLimit: function() {
            document.getElementById('rightLimitIndicator').style.display = 'block';  
        }
    },
    showAndHide:{
        damage: function() {
            document.getElementById('damageIndicator').style.display = 'block';
            window.Indicators.hideByIdAfter('damageIndicator', 200);
        },
        achievement: function() {
            document.getElementById('achievementIndicator').style.display = 'block';
            window.Indicators.hideByIdAfter('achievementIndicator', 200);
        },
        topLimit: function() {
            document.getElementById('topLimitIndicator').style.display = 'block';
            window.Indicators.hideByIdAfter('topLimitIndicator', 500);
        },
        bottomLimit: function() {
            document.getElementById('bottomLimitIndicator').style.display = 'block';
            window.Indicators.hideByIdAfter('bottomLimitIndicator', 500);
        },
        leftLimit: function() {
            document.getElementById('leftLimitIndicator').style.display = 'block';
            window.Indicators.hideByIdAfter('leftLimitIndicator', 500);
        },
        rightLimit: function() {
            document.getElementById('rightLimitIndicator').style.display = 'block';
            window.Indicators.hideByIdAfter('rightLimitIndicator', 500);
        }
    },
    setOpacityById: function(id, number) {
        document.getElementById(id).style.opacity = number;
    },
    hideByIdAfter: function(id, time) {
        setTimeout(function() {
            document.getElementById(id).style.display = 'none';
        }, time);
    },   
}

/*
Indicators.init();
Indicators.showAll();
*/