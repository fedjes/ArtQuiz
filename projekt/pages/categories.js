import { createCategories } from '../templates/categories.js';
// import createQuestionPage from './question.js';
import createHomePage from './home.js';
import Index from '../index.js';

function countAnswer(arrayQuestions, arrayCategories) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let Th = arrayCategories;
        for (let i = 0; i < arrayQuestions.length; i++) {
            if (arrayQuestions[i].answer == true) count++;
            if (((i + 1) % 10 == 0)) {
                Th[Math.floor(i / 10)].count = count;
                count = 0;
            }
        }
        resolve(Th);
    });
}

function createArrayTheme(category, categoriesArray,) {
    // var home = new Home();
    return new Promise((resolve, reject) => {
        if (category == "Artists")
            countAnswer(Index.QuestionsArtists, categoriesArray).then(res => {
                resolve(res);
            });
        else if (category == "Pictures")
            countAnswer(Index.QuestionsPictures, categoriesArray).then(res => {
                resolve(res);
            });
    });
}

export default function createCategoriesPage(category) {          //создаем категории и вставляем их на страницу
    // console.log(Index.CategoryArtists);
    let home = document.getElementById("main");
    let array = [];
    if (category == "Artists") array = Index.CategoryArtists.getCategory();
    else if (category == "Pictures") array = Index.CategoryPictures.getCategory();
    createArrayTheme(category, array).then(res => {
        home.innerHTML = createCategories(res);

        //Event Click
        let categorysCards = document.getElementsByClassName("category-col");
        for (let i = 0; i < categorysCards.length; i++) {
            categorysCards[i].addEventListener("click", function () {
                // createQuestionPage(category, categorysCards[i].getAttribute("id"));
            });
        }

        let btnHome = document.getElementById("button-home"); // возврат на главную страницу
        btnHome.addEventListener("click", function () {
            createHomePage();
        });
    });
}