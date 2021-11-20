import createList from '../../category.js';

const thema = [
    {
        name: "Portrait",
        cont: 0,
        img: "../../../img/138.jpg"
    },
    {
        name: "Landscape",
        cont: 0,
        img: "../../../img/167.jpg"
    },
    {
        name: "Still Life",
        cont: 0,
        img: "../../../img/231.jpg"
    },
    {
        name: "Graphic",
        cont: 0,
        img: "../../../img/202.jpg"
    },
    {
        name: "Antique",
        cont: 0,
        img: "../../../img/153.jpg"
    },
    {
        name: "Avant-Garde",
        cont: 0,
        img: "../../../img/178.jpg"
    },
    {
        name: "Renaissance",
        cont: 0,
        img: "../../../img/189.jpg"
    },
    {
        name: "Surrealism",
        cont: 0,
        img: "../../../img/172.jpg"
    },
    {
        name: "Kitsch",
        cont: 0,
        img: "../../../img/147.jpg"
    },
    {
        name: "Minimalism",
        cont: 0,
        img: "../../../img/184.jpg"
    },
    {
        name: "Avangard",
        cont: 0,
        img: "../../../img/114.jpg"
    },
    {
        name: "Industrial",
        cont: 0,
        img: "../../../img/176.jpg"
    }
];

let res = createList(thema);

const categories =
    `<div id="categories">
        <div class="head_logo" style=" padding-top: 2%; padding-bottom: 2%;">
            <img class="rounded mx-auto d-block" style="width:250px;" src="../../../full/ArtQuiz.svg" alt="logo">
        </div>
        <div class="button_and_text row row-cols-1 row-cols-md-3">
            <div class="col">
                <button class="button_home btn btn-primary btn-lg">Home</button>
            </div>
            <div class="col">
                <h2 class="text-center text_categories">CATEGORIES</h2>
            </div>
            <div class="categories_spacer col-4"></div>
        </div>`+
        res
        +`</div>`
        
// export default categories;
console.log(res);
console.log(categories);

let divTest = document.getElementById('container');

divTest.innerHTML = categories;