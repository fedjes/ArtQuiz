import { createQuestionPictures } from '../templates/question-pictures.js';

export function createPicturesQuestion(index, result, category) {
    // let pic = [result[indexQuestion].img, result[indexQuestion].img_err1, result[indexQuestion].img_err2, result[indexQuestion].img_err3];
    // let ans = ["", "", "", ""];
    // for(let i = 0; i < pic.length; i++){
    //     let check = true;
    //     while(check) {
    //         let a = Math.floor(Math.random() * 4);
    //         if(ans[a] == ""){
    //             ans[a] = pic[i];
    //             check = false;
    //         } else continue;
    //     }
    // }
    // MAIN.innerHTML = createQuestionPictures(result[indexQuestion].artist, ans[0], ans[1], ans[2], ans[3]);

    // let btnHome = document.getElementById("button-home"); // возврат на главную страницу
    // btnHome.addEventListener("click", function () {
    //     createHomePage();
    // });

    // let btnCategory = document.getElementById("button-category"); // возврат на  страницу категорий
    // btnCategory.addEventListener("click", function () {
    //     createCategoriesPage(themeTitle);
    // });

    // let btnQuestionPicturesAnswer = document.getElementsByClassName("question-pictures-answer");
    // for (let i = 0; i < btnQuestionPicturesAnswer.length; i++) {
    //     btnQuestionPicturesAnswer[i].addEventListener("click", function () {
    //         createAnswerPicturesPage(main, theme, btnQuestionPicturesAnswer[i], result, indexQuestion); 
    //     });
    // }



    let pic = [result[index].img, result[index].img_err1, result[index].img_err2, result[index].img_err3];
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
    
    home.innerHTML = createQuestionPictures(result[index].artist, ans[0], ans[1], ans[2], ans[3]);

    let btnHome = document.getElementById("button-home"); // возврат на главную страницу
    btnHome.addEventListener("click", function () {
        createHomePage();
    });

    let btnCategory = document.getElementById("button-category"); // возврат на  страницу категорий
    btnCategory.addEventListener("click", function () {
        createCategoriesPage(category);
    });

    let btnQuestionPicturesAnswer = document.getElementsByClassName("question-pictures-answer");
    for (let i = 0; i < btnQuestionPicturesAnswer.length; i++) {
        btnQuestionPicturesAnswer[i].addEventListener("click", function () {
            // createAnswerPicturesPage(main, theme, btnQuestionPicturesAnswer[i], result, index); 
            console.log(btnQuestionPicturesAnswer[i]);
        });
    }

}