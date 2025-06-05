function atFirst(str){
  if (str.length > 2) {
    return str.slice(0, 2)
  } else if (str.length == 1) {
    return str + "@"
  } else if (str.length < 1) {
    return "@@"
  } else {
    return str
  }
}