import createListCategories from '../../category.js';
import { createCategories } from '../categories/categories.js';
import images from "../../../images.js";
import { picturesFill } from '../../arrays/pictures.js';
import { artistsFill } from '../../arrays/artists.js';

const theme = [
    {
        id: 0,
        name: "Portrait",
        count: 0,
        img: "../../../img/138.jpg"
    },
    {
        id: 1,
        name: "Landscape",
        count: 0,
        img: "../../../img/167.jpg"
    },
    {
        id: 2,
        name: "Still Life",
        count: 0,
        img: "../../../img/231.jpg"
    },
    {
        id: 3,
        name: "Graphic",
        count: 0,
        img: "../../../img/202.jpg"
    },
    {
        id: 4,
        name: "Antique",
        count: 0,
        img: "../../../img/153.jpg"
    },
    {
        id: 5,
        name: "Avant-Garde",
        count: 0,
        img: "../../../img/178.jpg"
    },
    {
        id: 6,
        name: "Renaissance",
        count: 0,
        img: "../../../img/189.jpg"
    },
    {
        id: 7,
        name: "Surrealism",
        count: 0,
        img: "../../../img/172.jpg"
    },
    {
        id: 8,
        name: "Kitsch",
        count: 0,
        img: "../../../img/147.jpg"
    },
    {
        id: 9,
        name: "Minimalism",
        count: 0,
        img: "../../../img/184.jpg"
    },
    {
        id: 10,
        name: "Avangard",
        count: 0,
        img: "../../../img/114.jpg"
    },
    {
        id: 11,
        name: "Industrial",
        count: 0,
        img: "../../../img/176.jpg"
    }
];

const QuestionArtist = artistsFill(images, 0, 120);
console.log(QuestionArtist);

const btnArtists = document.getElementById('CategoryArtists');
const btnPictures = document.getElementById('CategoryPictures');

btnArtists.addEventListener("click", ()=>{
    const home = document.getElementById("home");
    home.className = 'blockHome';

    let count = 0;
    for(let i = 0; i < QuestionArtist.length; i++){
        if(QuestionArtist[i].true_answer) {
            count = count + 1;
            if((i+1)%10 == 0){
                theme[Math.floor(i/10)].count = count;
                count = 0;
            }
        }
    }

    let mainCategories = createListCategories(theme);
    let Categories = createCategories(mainCategories);
    let div = document.createElement('div');
    div.innerHTML = Categories;
    document.body.prepend(div);


});

btnPictures.addEventListener("click", ()=>{
    const home = document.getElementById("home");
    home.className = 'blockHome';
    // let div = document.createElement('div');
    // div.innerHTML = CATEGORIES;
    // document.body.prepend(div);
});