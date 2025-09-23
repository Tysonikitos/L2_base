function findMissing(list) {  
    const n1 = list[1] - list[0];
    const n2 = list[2] - list[1]
    const shag = Math.min(n1,n2)
    for (let i = 0; i < (list.length - 1); i++){
        if (list[i+1] - list[i] != shag){
            return list[i] + shag;
        }
    }
}