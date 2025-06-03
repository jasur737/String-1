function left2(str){
  if (str.length > 2) {
    return str.slice(2) + str.slice(0, 2 )
  } else {
    return str
  }
}