"use strict";

var SixFlagsPark = require("./index");

/**
 * Six Flags México
 * @class
 * @extends SixFlagsPark
 */
class SixFlagsMxico extends SixFlagsPark {
    /**
     * Create a new SixFlagsMxico object
     */
    constructor(options = {}) {
        options.name = options.name || "Six Flags México";
        options.timezone = options.timezone || "America/Mexico_City";

        // set park's location as it's entrance
        options.latitude = options.latitude || 19.295389;
        options.longitude = options.longitude || -99.211442;

        options.park_id = options.park_id || "28";

        // inherit from base class
        super(options);
    }
}

module.exports = SixFlagsMxico;
