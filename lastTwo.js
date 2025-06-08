function lastTwo(str){
  if (str.length < 2) {
    return str
  } else if (str.length > 2) {
    return str.slice(0, -2) + str.slice(-1) + str.slice(-2, -1)
  } else {
    return str.slice(-1) + str.slice(0, 1)
  }
}