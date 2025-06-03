function theEnd(str, front){
  if (str.length > 1 && front == true) {
    return str[0]
  } else if (str.length > 1 && front == false) {
    return str.slice(-1)
  } else {
    return str
  }
}