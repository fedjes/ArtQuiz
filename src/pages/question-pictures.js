import { createQuestionPictures } from '../templates/question-pictures.js';
import createHomePage from './home.js';
import createCategoriesPage from './categories.js';
import Index from '../index.js';
import createAnswerPage from './answer.js';

export function createPicturesQuestion(category, theme, result) {
    console.log(category, theme, result);
    let pic = [result.img, result.img_err1, result.img_err2, result.img_err3];
    let ans = ["", "", "", ""];
    for (let i = 0; i < pic.length; i++) {
        let check = true;
        while (check) {
            let a = Math.floor(Math.random() * 4);
            if (ans[a] == "") {
                ans[a] = pic[i];
                check = false;
            } else continue;
        }
    }
    let home = document.getElementById("main");
    home.innerHTML = createQuestionPictures(result.artist, "./../img/" + ans[0] + ".jpg", "./../img/" + ans[1] + ".jpg", "./../img/" + ans[2] + ".jpg", "./../img/" + ans[3] + ".jpg");

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

    let btnQuestionPictureAnswer = document.getElementsByClassName("question-pictures-answer");
    for (let i = 0; i < btnQuestionPictureAnswer.length; i++) {
        btnQuestionPictureAnswer[i].addEventListener("click", function () {
            createAnswerPage(btnQuestionPictureAnswer[i].id, category, theme, result);
        });
    }
}