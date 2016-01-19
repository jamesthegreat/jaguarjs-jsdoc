"use strict";

(function (w) {
    /**
     * quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
     */
    namespace.Car = class {
        constructor() {
            this._colour='#000';
        }

        /**
        The current colour (HEX) state
        @type {string}
        **/
        set colour(val) {
            this._colour = val;
        }
        get colour() {
            return this._colour;
        }

        /**
        Set the current colour (HEX) state
        @param {string} - The current HTML colour code (HEX)
        **/
        test(input) {

        }
    }

})(window);
