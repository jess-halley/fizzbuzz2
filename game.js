function game(arr){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      arr[i] = fizzbuzz()
    }
    else if (arr[i] % 3 == 0) {
      arr[i] = fizz()
    }
    return arr
  }
}


function fizz(){
  console.log('fizz')
}


function fizzbuzz(){
  console.log('fizzbuzz')
}


function buzz(){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 5 == 0) return 'buzz'
  }
}


module.exports={
  fizz,
  buzz,
  fizzbuzz,
  game
}
