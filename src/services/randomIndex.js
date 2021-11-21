 function randomIndex(indexAnswer, indexMax) {
    let check = true;
    let res;
    while (check) {
        res = Math.floor(Math.random() * indexMax);
        if (res != indexAnswer) {
            check = false;
        } else {
            continue;
        }
    }
    return res;
}

export default randomIndex;