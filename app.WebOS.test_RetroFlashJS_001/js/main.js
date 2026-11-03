/* Page-to-SWF keyboard bridge and SWF-to-page click reporting.
   The SWF should register ExternalInterface.addCallback("receiveHostKey", ...),
   and call ExternalInterface.call("onSwfClick", x, y) for a click. */
(function () {
    'use strict';

    var MOVIE_ID = 'retroflashMovie';
    var KEY_CALLBACK = 'receiveHostKey';
    var moviePlayer = null;

    // Called by ActionScript 2 through ExternalInterface.call("onSwfClick", x, y).
    window.onSwfClick = function (x, y) {
        console.log('[html] SWF click at stage coordinates:', x, y);
    };

    function isEditableTarget(target) {
        if (!target) return false;
        var tag = String(target.tagName || '').toLowerCase();
        return target.isContentEditable || tag === 'input' || tag === 'textarea' || tag === 'select';
    }

    function isPlayerLoaded(player) {
        var state = player.getInfo().state;
        return state === 'ready' || state === 'playing' || state === 'paused';
    }

    function bindPlayer(player) {
        if (!player || moviePlayer === player) return;
        moviePlayer = player;

        if (isPlayerLoaded(player)) {
            logPlayerReady(player);
        } else {
            player.on('load', function () { logPlayerReady(player); });
        }

        player.on('error', function (error) {
            console.error('[html] SWF error:', error && error.message ? error.message : error);
        });
    }

    function logPlayerReady(player) {
        var registered = player.getCallbacks().indexOf(KEY_CALLBACK) >= 0;
        console.log('[html] SWF ready; ' + KEY_CALLBACK + (registered ? ' is registered.' : ' is not registered yet.'));
    }

    // The legacy bootstrap dispatches this after creating the Player for the <object>.
    document.addEventListener('retroflash:player', function (event) {
        var detail = event.detail;
        if (!detail || !detail.element || detail.element.id !== MOVIE_ID) return;
        bindPlayer(detail.player);
    }, false);

    function forwardKey(event) {
        console.log('[html] Key event:', event.type, event.key, event.keyCode);

        if (!moviePlayer || isEditableTarget(event.target)) return;
        if (!isPlayerLoaded(moviePlayer)) return;

        // Send primitive arguments, not a nested array, so this also works with the current AS3 marshaller.
        if (moviePlayer.getCallbacks().indexOf(KEY_CALLBACK) < 0) return;

        var handled = false;
        try {
            var key = event.key || '';
            var keyCode = typeof event.keyCode === 'number' ? event.keyCode : 0;
            handled = moviePlayer.callback(KEY_CALLBACK, [event.type, key, keyCode]) === true;
        } catch (error) {
            console.error('[html] Could not forward the key to the SWF:', error);
        }

        // Capture phase lets a handled key stop before RetroFlash also sends it as a native canvas key event.
        if (handled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    // These page-level events also cover TV remote keys delivered outside the canvas.
    document.addEventListener('keydown', forwardKey, true);
    document.addEventListener('keyup', forwardKey, true);

    // Covers cases where this script is loaded after the legacy bootstrap event.
    if (window.RetroFlash) bindPlayer(window.RetroFlash.getInstance(MOVIE_ID));
}());
