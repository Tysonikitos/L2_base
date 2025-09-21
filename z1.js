function hasTwoCubeSums(n) {
    const ways = [];
    const limit = Math.floor(Math.cbrt(n));

    for (let a = 1; a <= limit; a++) {
        const a3 = a ** 3;
        for (let b = a + 1; b <= limit; b++) {
            const sum = a3 + b ** 3;
            if (sum > n) break; 
            if (sum === n) {
                ways.push([a, b]);
                if (ways.length === 2) {
                    const allNums = [...ways[0], ...ways[1]];
                    return new Set(allNums).size === 4;
                }
            }
        }
    }
    return false;
}
