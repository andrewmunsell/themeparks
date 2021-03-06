# Change Log
Key changes to themeparks NPM module.

## v4.0.0

* 4.0.3 Attempt fix for #42 for Disney parks not injected ride schedule data when opening times requested before ride data
* 4.0.2 Added Hershey Park and fixed parks returning all dates as "Closed" in 4.0.1
* 4.0.1 Added Universal Studios Hollywood

### Core Changes

* Project refactor - now written in ES6
* Renamed to themeparks
  * Compiled down to "vanilla normal" JavaScript for compatibility with older NodeJS versions (will be removed when official NodeJS support for older NodeJS versions is dropped)
* New caching built into the framework to reduce network requests
  * Supports multiple caching systems, including memory, file or various caching servers
* Common park logic grouped into single object to keep park-specific implementations as clean as possible
* Use of Promises throughout Project
  * Old callback-style will still work when using the module if desired, but Promises are used throughout internals
* Split unit tests into functional and network testing
* API documented significantly with JSDoc, see [themeparks Documentation](https://cubehouse.github.io/themeparks/)
* Now using needle HTTP request module, for it's significantly less dependancies compared to request
  * HTTP wrapper available that attempts network requests on failure to aid network issues we've seen before

## v3.0.0

* Refactored codebase significantly
* Added SeaWorld parks (including Busch Gardens and Sesame Place)
* Added Universal Studios and Island Of Adventure parks to API
* Setting environment variable "DEBUG=true" will supply better debugging information that we've had in previous versions
* Disney World Florida, Disneyland California, Disneyland Paris, Disneyland Shanghai and Disneyland Hong Kong now share a common codebase.
* (breaking change) GetSchedule is now GetOpeningTimes
* (breaking change) Schedules now return a maximum of one element per day, with "special" opening hours as a sub-object called "special" (eg. Extra Magic Hours)
* (breaking change) Park object names have been renamed
* (breaking change) No longer need to create a new wdwjs() object to start the API, make separate new objects for each park you wish to access
* 3.0.3 added BETA Six Flags support. Some parks do not yet return proper wait time data, see [#12](https://github.com/cubehouse/themeparks/issues/12)
* 3.0.6 added ride schedules (only for Disney parks) and new status string for each ride wait time entry
* 3.0.7 fixed Tokyo Disneyland ride active status and added updateTime to Tokyo ride outputs (see #17)
* 3.0.10 added Alton Towers to the supported parks
* 3.0.11 added Chessington to the supported parks
* 3.0.12 added Shanghai Disney Resort to the supported parks
* 3.0.14 added Europa-Park to the supported parks
* 3.1.0 fixed Disney API calls with a new client ID

## v2.0.0

* (breaking change) You must now specify "WDWRequests: true" in your setup options if you wish direct access to WDW API function helpers
* Disneyland Paris is now part of the same API service as Disney World Resort and Disneyland California.
* Added Tokyo Disneyland to supported parks
* Added (non-Disney) Universal Orlando parks to supported parks (added: 2.0.4)

## v1.0.0

* (breaking change) Response formats simplified so all parks return same data structure
* Added Disneyland Paris
