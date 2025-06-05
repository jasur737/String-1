function lastChars(a, b){
  if (a.length > 1 && b.length > 1) {
    return a.slice(0, 1) + b.slice(-1)
  } else if (a.length > 1 && b.length < 1) {
    return a.slice(0, 1) + "@"
  } else if (a.length < 1 && b.length > 1) {
    return "@" + b.slice(-1)
  } else if (a.length == 1 && b.length > 1) {
    return a + b.slice(-1)
  } else {
    return "@@"
  }
}