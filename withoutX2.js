function withoutX2(str) {
  let result = "";

  if (str.length >= 1 && str[0] !== 'x') {
    result += str[0];
  }

  if (str.length >= 2 && str[1] !== 'x') {
    result += str[1];
  }

  if (str.length > 2) {
    result += str.slice(2);
  }

  return result;
}
