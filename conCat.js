function conCat(a, b) {
  if (a.length > 0 && b.length > 0 && a[a.length - 1] === b[0]) {
    return a + b.substring(1); 
  } else {
    return a + b; 
  }
}