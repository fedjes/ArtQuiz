import { createCategories } from '../templates/categories.js';
import createQuestionPage from './question.js';
import createHomePage from './home.js';
import Index from '../index.js';
import countAnswer from '../services/countAnswer.js';

function createArrayTheme(category, categoriesArray,) {
    return new Promise((resolve, reject) => {
        if (category == "Artists")
            countAnswer(Index.QuestionsArtists.getQuestions(), categoriesArray).then(res => {
                resolve(res);
            });
        else if (category == "Pictures")
            countAnswer(Index.QuestionsPictures.getQuestions(), categoriesArray).then(res => {
                resolve(res);
            });
    });
}

export default function createCategoriesPage(category) {          //создаем категории и вставляем их на страницу
    let home = document.getElementById("main");
    let array = [];
    if (category == "Artists") array = Index.CategoryArtists.getCategory();
    else if (category == "Pictures") array = Index.CategoryPictures.getCategory();
    createArrayTheme(category, array).then(res => {
        home.innerHTML = createCategories(res);

        let categorysCards = document.getElementsByClassName("category-col");
        for (let i = 0; i < categorysCards.length; i++) {
            categorysCards[i].addEventListener("click", function () {
                createQuestionPage(category, categorysCards[i].getAttribute("id"));
            });
        }

        let btnHome = document.getElementById("button-home"); // возврат на главную страницу
        btnHome.addEventListener("click", function () {
            createHomePage();
        });
    });
}