function hasBad(str){
  if (str.startsWith("bad")) {
    return true
  } else if (str.startsWith("xbad")) {
    return true
  } else {
    return false
  }
}