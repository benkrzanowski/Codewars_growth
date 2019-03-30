function nbYear(p0, percent, aug, p) {
  const decPercent = percent / 100;
  let newPop = p0 + p0 * decPercent + aug;
  let counter = 1;
  while (newPop < p) {
    p0 = newPop;
    newPop = p0 + p0 * decPercent + aug;
    counter++;
  }
  return counter;
}

nbYear(1500, 5, 100, 5000); //15
nbYear(1500000, 2.5, 10000, 2000000); //10
nbYear(1500000, 0.25, 1000, 2000000); //94
