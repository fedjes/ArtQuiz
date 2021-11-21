import randomIndex from '../services/randomIndex.js';

export function  artistsFill(img, start, end) {
    let array = [];
    for (let i = start; i < end; i++) {
        let question = {
            id: i,
            imgNum: img[i].imageNum,
            artist: img[i].author,
            artist_err1: img[randomIndex(i, img.length)].author,
            artist_err2: img[randomIndex(i, img.length)].author,
            artist_err3: img[randomIndex(i, img.length)].author,
            answer: null
        }
        array.push(question);
    }
    return array;

}