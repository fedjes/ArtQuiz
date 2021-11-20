import images from "./images.js";

// let div1 = document.createElement('div');
// div1.className = 'test';
// document.body.prepend(div1)
const img = images;

// // console.log(img[0].author,img[0].name, img[0].year, img[0].imageNum);
// function searchInfo(img){
//     for(let i = 0; i < img.length; i++){
//         let div = document.createElement('div');
//         document.body.append(div)
//         div.className = 'infoIMG';
//         div.innerText = img[i].author + ' ' + ' ' + img[i].name + ' '+' ' + img[i].year + ' ' + ' '+  img[i].imageNum;

//     }
// }


//  searchInfo(img)



import randomIndex from './tamplates/randomIndex.js';
import header from './Header.js';
import footer from './Footer.js';
//import btn from './mainContent.js';

let headerMain = document.createElement('div');

let footerMain = document.createElement('div');

//let mainContent = document.createElement('div');

document.body.prepend(footerMain)
footerMain.innerHTML = footer;

//  document.body.prepend(mainContent);
//  mainContent.className = "mainC";
//  mainContent.innerHTML = btn;


document.body.prepend(headerMain)
headerMain.innerHTML = header;


let ArtistsArray = artistsFill(0, 120);
console.log(ArtistsArray);
let PicturesArray = picturesFill(121, 241);
console.log(PicturesArray);


function artistsFill(start, end) {
    let array = [];
    for (let i = start; i < end; i++) {
        let question = {
            id: i,
            imgNum: img[i].imageNum,
            artist: img[i].author,
            artist_err1: img[randomIndex(i)].author,
            artist_err2: img[randomIndex(i)].author,
            artist_err3: img[randomIndex(i)].author
        }
        array.push(question);
    }
    return array;

}

function picturesFill(start, end) {
    let array = [];
    for (let i = start; i < end; i++) {
        let question = {
            id: i,
            artist: img[i].author,
            img: img[i].imageNum,
            img_err1: img[randomIndex(i)].imageNum,
            img_err2: img[randomIndex(i)].imageNum,
            img_err3: img[randomIndex(i)].imageNum
        }
        array.push(question);
    }
    return array;
}