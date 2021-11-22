import images from '../data/images.js';
import { createQuestionArtist } from '../templates/question-artists.js';
import createHomePage from './home.js';
import createCategoriesPage from './categories.js';
import createAnswerPage from './answer.js';
import Index from '../index.js';

export function createArtistsQuestion(category, theme, result) {
    let art = [result.artist, result.artist_err1, result.artist_err2, result.artist_err3];
    let ans = ["", "", "", ""];
    for (let i = 0; i < art.length; i++) {
        let check = true;
        while (check) {
            let a = Math.floor(Math.random() * 4);
            if (ans[a] == "") {
                ans[a] = art[i];
                check = false;
            } else continue;
        }
    }
    let home = document.getElementById("main");
    home.innerHTML = createQuestionArtist(images[result.imgNum].name, "./../img/" + result.imgNum + ".jpg", ans[0], ans[1], ans[2], ans[3]);

    let btnHome = document.getElementById("button-home"); // возврат на главную страницу
    btnHome.addEventListener("click", function () {
        Index.indexQuestion.setIndex(0);
        createHomePage();
    });

    let btnCategory = document.getElementById("button-category"); // возврат на  страницу категорий
    btnCategory.addEventListener("click", function () {
        Index.indexQuestion.setIndex(0);
        createCategoriesPage(category);
    });

    let btnQuestionArtistAnswer = document.getElementsByClassName("question-artist-answer");
    for (let i = 0; i < btnQuestionArtistAnswer.length; i++) {
        btnQuestionArtistAnswer[i].addEventListener("click", function () {
            createAnswerPage(btnQuestionArtistAnswer[i].id, category, theme, result);
        });
    }
}