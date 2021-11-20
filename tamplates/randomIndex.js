 function randomIndex(indexAnswer) {
    let check = true;
    let res;
    while (check) {
        res = Math.floor(Math.random() * img.length);
        if (res != indexAnswer) {
            check = false;
        } else {
            continue;
        }
    }
    return res;
}

export default randomIndex;