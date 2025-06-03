function withoutEnd2(str){
  if (str.length > 2) {
    return str.slice(1, -1)
  } else {
    return ""
  }
}