function withoutX(str){
  if (str.slice(0, 1) === "x" && str.slice(-1) === "x") {
    return str.slice(1, -1)
  } else if (str.slice(0, 1) === "x") {
    return str.slice(1)
  } else if (str.slice(-1) === "x") {
    return str.slice(0, -1)
  } else {
    return str
  }
}