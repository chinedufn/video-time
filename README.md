video-time [![Build Status](https://travis-ci.org/chinedufn/video-time.svg?branch=master)](https://travis-ci.org/chinedufn/video-time)
==========

> Convert from seconds to video seek time

## Install

```
$ npm install video-time
```

## Usage

```js
var vTime = require('video-time')

vTime(0)        // '0:00'
vTime(0.9)      // '0:00'
vTime(61.5)     // '1:01'
vTime(3599)     // '59:59'
vTime(9001)     // '2:30:01'
vTime(9001.999) // '2:30:01'
vTime(9002)     // '2:30:02'
```

## API

#### `vTime(time)` -> `string`

#### time

*Required* Type: `Number`

Number of seconds to convert to video seek time.

## License

MIT
