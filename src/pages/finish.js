import { createFinish } from '../templates/finish.js';
import createHomePage from './home.js';
import createCategoriesPage from './categories.js';
import Index from '../index.js';

export function createFinishPage(catigory, count) {
    let home = document.getElementById("main");
    home.innerHTML = createFinish(count);

    let btnNext = document.getElementById("next-btn-finish");
    btnNext.addEventListener("click", function () {
        Index.indexQuestion.setIndex(0);
        createCategoriesPage(catigory)
    });

    let btnHome = document.getElementById("home-btn-finish");
    btnHome.addEventListener("click", function () {
        Index.indexQuestion.setIndex(0);
        createHomePage();
    });
}