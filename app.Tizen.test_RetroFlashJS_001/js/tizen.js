/* Samsung Tizen TV integration: remote keys, the Return button and app suspend/resume.
   main.js (shared with the webOS app) forwards the keys to the SWF; this file only adds what Tizen needs. */
(function () {
    'use strict';

    var MOVIE_ID = 'retroflashMovie';
    var KEY_RETURN = 10009;

    // Arrows, Enter and Return reach the page without registration. Other remote keys must be registered,
    // which needs the http://tizen.org/privilege/tv.inputdevice privilege in config.xml.
    var EXTRA_KEYS = [
        'ColorF0Red', 'ColorF1Green', 'ColorF2Yellow', 'ColorF3Blue',
        'MediaPlay', 'MediaPause', 'MediaPlayPause', 'MediaStop',
        'MediaFastForward', 'MediaRewind',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    var hasTizen = typeof window.tizen !== 'undefined';
    var pausedByVisibility = false;

    function getPlayer() {
        return window.RetroFlash ? window.RetroFlash.getInstance(MOVIE_ID) : null;
    }

    function registerKeys() {
        if (!hasTizen || !tizen.tvinputdevice) return;

        var supported = {};
        try {
            tizen.tvinputdevice.getSupportedKeys().forEach(function (k) { supported[k.name] = k.code; });
        } catch (error) {
            console.warn('[tizen] Could not list the supported keys:', error);
        }

        EXTRA_KEYS.forEach(function (name) {
            if (!(name in supported)) return;
            try {
                tizen.tvinputdevice.registerKey(name);
            } catch (error) {
                console.warn('[tizen] Could not register key ' + name + ':', error);
            }
        });
    }

    function exitApp() {
        try {
            if (hasTizen) tizen.application.getCurrentApplication().exit();
        } catch (error) {
            console.error('[tizen] Could not exit the app:', error);
        }
    }

    // Bubble phase: main.js listens in the capture phase and stops the event when the SWF handles it,
    // so Return only closes the app when the movie did not use it.
    document.addEventListener('keydown', function (event) {
        if (event.keyCode === KEY_RETURN) {
            event.preventDefault();
            exitApp();
        }
    }, false);

    // Pause the movie (and its sound) while the app is in the background, as Samsung's guidelines require.
    document.addEventListener('visibilitychange', function () {
        var player = getPlayer();
        if (!player) return;

        try {
            if (document.hidden) {
                if (player.getInfo().state === 'playing') {
                    player.pause();
                    pausedByVisibility = true;
                }
            } else if (pausedByVisibility) {
                pausedByVisibility = false;
                player.play();
            }
        } catch (error) {
            console.error('[tizen] Could not pause or resume the movie:', error);
        }
    }, false);

    registerKeys();

    if (hasTizen && tizen.time) {
        try {
            console.log('[tizen] Local time:', tizen.time.getCurrentDateTime().toString());
        } catch (error) {
            console.log('[tizen] Failed to get the time');
        }
    }
}());
