function hexStringToRGB(hexString) {
    let s = hexString.slice(1,hexString.length);
    let cut1 = parseInt(s.slice(0,2), 16);
    let cut2 = parseInt(s.slice(2,4), 16);
    let cut3 = parseInt(s.slice(4,6), 16);


    return {r:cut1, g:cut2, b:cut3};
}
console.log(hexStringToRGB("#ff11aa"))