function nTwice(str, n) {
  let firstPart = str.substring(0, n);
  let lastPart = str.substring(str.length - n);
  return firstPart + lastPart;
}