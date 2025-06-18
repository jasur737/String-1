function deFront(str) {
  let result = "";

  if (str.length > 0 && str.charAt(0) === 'a') {
    result += str.charAt(0);
  }

  if (str.length > 1 && str.charAt(1) === 'b') {
    result += str.charAt(1);
  }

  if (str.length > 2) {
    result += str.substring(2);
  }

  return result;
}
