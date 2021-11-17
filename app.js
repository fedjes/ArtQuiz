//  import images from "./images.js";

// let div1 = document.createElement('div');
// div1.className = 'test';
// document.body.prepend(div1)
// const img = images;

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




import header from './Header.js';
import footer from './Footer.js';
import btn from './mainContent.js';

 let headerMain = document.createElement('div');
 
 let footerMain = document.createElement('div');

 let mainContent = document.createElement('div');
 
 document.body.prepend(footerMain)
 footerMain.innerHTML = footer;

//  document.body.prepend(mainContent);
//  mainContent.className = "mainC";
//  mainContent.innerHTML = btn;


 document.body.prepend(headerMain)
 headerMain.innerHTML = header;


