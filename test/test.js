var test = require ('tape')
var game = require ('../game.js')


test('fizz test', function(t){
  var arr = [1,2,3,4,5]
  var expected = 'fizz'
  var actual = game.fizz(arr)
  t.equals(actual, expected)
  t.end()
})


test('buzz test', function(t){
  var arr = [1,2,3,4,5]
  var expected = 'buzz'
  var actual = game.buzz(arr)
  t.equals(actual, expected)
  t.end()
})


test('fizz&buzz test', function(t){
  var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  var expected = 'fizzbuzz'
  var actual = game.fizzbuzz(arr)
  t.equals(actual, expected)
  t.end()
})

test('game test', function(t){
  var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  var expected = [1,2,'fizz',4,5,'fizz',7,8,'fizz',10,11,'fizz',13,14,'fizzbuzz']
  var actual = game.game(arr)
  t.equals(actual, expected)
  t.end()
})
