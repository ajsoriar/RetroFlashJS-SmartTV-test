window.Router = {
    currentPath: 'MAIN_MENU',
    goTo: function(path){
        this.currentPath = path;
        console.log('[Router] goTo:', path);
        if (path == 'MAIN_MENU') {
            this.goToMainMenu();
        } else if (path == 'GAME') {
            this.goToGame();
        } else if (path == 'GAME_OVER') {
            this.goToGameOver();
        } else if (path == 'SETTINGS') {
            this.goToSettings();
        } else if (path == 'CREDITS') {
            this.goToCredits();
        }
    },
    getCurrentPath: function(){
        return this.currentPath;
    },
    hideAll: function(){
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('game-screen').style.display = 'none';
        document.getElementById('game-over').style.display = 'none';
        document.getElementById('settings').style.display = 'none';
        document.getElementById('credits').style.display = 'none';
    },
    goToMainMenu: function(){
        console.log('[Router] goToMainMenu');
        GameLoop.stopGame();
        this.hideAll();
        document.getElementById('main-menu').style.display = 'block';  
        //nav.reset();
        nav.focusById("main-menu-play");
    },
    goToGame: function(){
        console.log('[Router] goToGame');
        this.hideAll();
        document.getElementById('game-screen').style.display = 'block'; 
        GameLoop.init();
        Indicators.init();
        Indicators.showAll();
        Indicators.hide.damage();
        Indicators.hide.achievement();
        Indicators.hideAll();
    },
    goToGameOver: function(){
        console.log('[Router] goToGameOver');
        this.hideAll();
        document.getElementById('game-over').style.display = 'block';
    },
    goToSettings: function(){
        console.log('[Router] goToSettings');
        this.hideAll();
        document.getElementById('settings').style.display = 'block';  
        nav.focusById("settings-back"); 
    },
    goToCredits: function(){
        console.log('[Router] goToCredits');
        this.hideAll();
        document.getElementById('credits').style.display = 'block';  
        nav.focusById("credits-back");
    }
}