import images from '../data/images.js';
import { createQuestionArtist } from '../templates/question-artists.js';
import Home from './home.js';
import createHomePage from './home.js';
import createCategoriesPage from './categories.js';
import createAnswerPage from './answer.js';

export function createArtistsQuestion(index, result, category) {
    // console.log(index);  
    console.log(result[index].imgNum);
    // console.log("category: " + category);
    let art = [result[index].artist, result[index].artist_err1, result[index].artist_err2, result[index].artist_err3];
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
    home.innerHTML = createQuestionArtist(images[result[index].imgNum].name, "./../img/" + result[index].imgNum + ".jpg", ans[0], ans[1], ans[2], ans[3]);

    let btnHome = document.getElementById("button-home"); // возврат на главную страницу
    btnHome.addEventListener("click", function () {
        createHomePage();
    });

    let btnCategory = document.getElementById("button-category"); // возврат на  страницу категорий
    btnCategory.addEventListener("click", function () {
        createCategoriesPage(category);
    });

    let btnQuestionArtistAnswer = document.getElementsByClassName("question-artist-answer");

    
    // btnQuestionArtistAnswer.forEach(element=>{
    //     element.addEventLustener("click", ()=> {  //Listener
    //         createAnswerPage(btnQuestionArtistAnswer[i].id, result[index], category, result);
    //     });
    // });

    for (let i = 0; i < btnQuestionArtistAnswer.length; i++) {
        btnQuestionArtistAnswer[i].addEventListener("click", function () {
            createAnswerPage(btnQuestionArtistAnswer[i].id, result[index], category, result);
        });
    }
}