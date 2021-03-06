"use strict";

var cacheManager = require("cache-manager");

module.exports = {
    // cache system (see https://github.com/BryanDonovan/node-cache-manager)
    Cache: cacheManager.caching({
        store: "memory",
        max: 5000,
        ttl: 60 * 60
    }),
    // default Park Settings
    DefaultParkName: "Default Park",
    DefaultParkTimezone: "Europe/London",
    DefaultParkTimeFormat: null,
    // cache settings (in seconds)
    DefaultCacheWaitTimesLength: 60 * 5, // 5 minutes
    DefaultCacheOpeningTimesLength: 60 * 60, // 1 hour
    // default time return format
    DefaultTimeFormat: "YYYY-MM-DDTHH:mm:ssZ",
    // default date return format
    DefaultDateFormat: "YYYY-MM-DD",
};