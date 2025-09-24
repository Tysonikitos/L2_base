function toWeirdCase(string) {
  const arr = string
    .toLowerCase()
    .split(" ")
    .map((it) => it.split(""));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) arr[i][j] = arr[i][j].toUpperCase();
    }
  }
  return arr.map((it) => it.join("")).join(" ");
}