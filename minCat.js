function minCat(a, b) {
  const minLength = Math.min(a.length, b.length);
  return a.slice(a.length - minLength) + b.slice(b.length - minLength);
}
