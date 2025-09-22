function century(year) {
  const yearStr = parseInt(year, 10);
  const cent = Math.ceil(year / 100);


  let s = "th";
  if (cent % 100 !== 11 && cent % 10 === 1) {
    s = "st";
  } else if (cent % 100 !== 12 && cent % 10 === 2) {
    s = "nd";
  } else if (cent % 100 !== 13 && cent % 10 === 3) {
    s = "rd";
  }

  return cent + s;
}