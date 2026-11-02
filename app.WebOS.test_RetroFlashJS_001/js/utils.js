window.Utils = {};

// change the opacity to number param of element by class name
Utils.setOpacityByClassName = function(className, number) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = number;
    }
}

// Function that detects the upper odd number of a number
Utils.getUpperOddNumber = function(number) {
    if (number % 2 == 0) {
        return number + 1;
    } else {
        return number;
    }
}

// Function that detects if a number is odd
Utils.isOdd = function(number) {
    if (number % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

// generate random position from position pos1 to pos2
Utils.randomNumInRange = function(pos1, pos2 ) {
    var min = pos1 || -10;
    var max = pos2 || 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};