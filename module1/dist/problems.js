"use strict";
{
    function formatString(input, toUpper) {
        if (toUpper || typeof toUpper === 'undefined') {
            return input.toUpperCase();
        }
        else {
            return input.toLowerCase();
        }
    }
    formatString('hello');
}
