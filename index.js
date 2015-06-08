module.exports = function (time) {
  if (isNaN(parseFloat(time)) || !isFinite(time)) throw new Error('Not a number')

  time = Math.floor(time)
  var hours = Math.floor(time / 3600)
  var minutes = Math.floor((time - (hours * 3600)) / 60)
  var seconds = time - (hours * 3600) - (minutes * 60)

  if (time < 3600) {
    return minutes + ':' + ('0' + seconds).slice(-2)
  } else {
    return hours + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
  }
}
