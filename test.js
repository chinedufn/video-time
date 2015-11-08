var test = require('tape')
var vTime = require('./')

test('video time', function (t) {
  t.equal(vTime(55), '0:55', '[< 60 seconds] -> m:ss')

  t.equal(vTime(60), '1:00', '[60 - 599 seconds] -> m:ss')
  t.equal(vTime(599), '9:59', '[60 - 599 seconds] -> m:ss')

  t.equal(vTime(600), '10:00', '[600 - 3599 seconds] -> mm:ss')
  t.equal(vTime(3599), '59:59', '[600 - 3599 seconds] -> mm:ss')

  t.equal(vTime(3600), '1:00:00', '[3600+ seconds] ->  h:mm:ss')

  t.equal(vTime(10.05), '0:10', 'Accept floats')

  t.equal(vTime('0'), '0:00', 'Accepts strings')

  t.equal(vTime('hello-world'), '0:00', '0 if not number')
  t.end()
})
