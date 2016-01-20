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
        Sets the current car make
        @type {string}
        **/
        set make(val) {
            this._make = val;
        }

        /**
        Set the current colour (HEX) state
        @param {string} - The current HTML colour code (HEX)
        **/
        test(input) {

        }
    }

    /**
    Honda class
    @extends namespace.Car
    **/
    namespace.Honda = class extends namespace.Car {
        
        /**
        Overrides base make
        @type {string}
        **/
        set make(val) {
            super.make = val;
        }

        /**
        Honda input then calls base.
        **/
        test (input) {
            super.test(input);
        }
    }

})(window);
