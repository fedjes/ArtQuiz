import randomIndex from '../services/randomIndex.js';

export function  picturesFill(img, start, end) {
    let array = [];
    for (let i = start; i < end; i++) {
        let question = {
            id: i,
            artist: img[i].author,
            img: img[i].imageNum,
            img_err1: img[randomIndex(i, img.length)].imageNum,
            img_err2: img[randomIndex(i, img.length)].imageNum,
            img_err3: img[randomIndex(i, img.length)].imageNum,
            answer: null
        }
        array.push(question);
    }
    return array;
}