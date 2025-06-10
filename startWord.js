function startWord(str, word){
  if (str.length < word.length) {
    return ""
  } else if (str.substring(1, word.length) === word.substring(1)) {
    return str.substring(0, word.length)
  } else {
    return ""
  }
}