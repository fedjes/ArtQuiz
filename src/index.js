import createHomePage from './pages/home.js';
import ArtistsCategory from './data/category-artists.js';
import PicturesCategory from './data/category-pictures.js';
import ArtistsQuestions from './data/questions-artists.js';
import PicturesQuestions from './data/questions-pictures.js';

import {artistsFill} from './questions/artists.js';
import {picturesFill} from './questions/pictures.js';
import images from './data/images.js';

var CategoryArtists = new ArtistsCategory();// массив категорий (тем) для выбора карточки
var CategoryPictures = new PicturesCategory();// массив категорий (тем) для выбора карточки
var QuestionsArtists = new ArtistsQuestions(artistsFill(images, 0, 120));
var QuestionsPictures = new PicturesQuestions(picturesFill(images, 121, 241));

var MAIN = document.createElement('div');
MAIN.id = "main";
document.body.prepend(MAIN);
// console.log(MAIN);
createHomePage();

// let indexQuestion = 0;

class IndexQuestion{
    index = 0;
    // constructor(){}
    getIndex() {
        return this.index;
    }
    setIndex(index){
        this.index = index;
    }
}
var indexQuestion = new IndexQuestion();


export default {
    "indexQuestion": indexQuestion,
    "CategoryArtists": CategoryArtists,
    "CategoryPictures": CategoryPictures,
    "QuestionsArtists": QuestionsArtists,
    "QuestionsPictures": QuestionsPictures
};

// import { createAnswer } from './templates/answer.js';

// import { artistsFill } from './questions/artists.js';
// import { picturesFill } from './questions/pictures.js';



// function createAnswerPicturesPage(btnQuestionPicturesAnswer, result, indexQuestion){
//     console.log(result);
//     console.log(indexQuestion);

//     let check  = null;
//     if(btnQuestionPicturesAnswer.getAttribute("id") == result[indexQuestion].img){
//         // console.log("Правильный ответ");
//         QuestionsPictures.setAnswer(result[indexQuestion].id, true);
//         check = true;
//     } else {
//         // console.log("Неправильный ответ");
//         QuestionsPictures.setAnswer(result[indexQuestion].id, false);
//         check = false;
//     }
//     createAnswerPage(check, result[indexQuestion].img, images[result[indexQuestion].img].name, images[result[indexQuestion].img].author, images[result[indexQuestion].img].year, result);
// }




// function createPicturesQuestion(indexQuestion, result) {
//     let pic = [result[indexQuestion].img, result[indexQuestion].img_err1, result[indexQuestion].img_err2, result[indexQuestion].img_err3];
//     let ans = ["", "", "", ""];
//     for(let i = 0; i < pic.length; i++){
//         let check = true;
//         while(check) {
//             let a = Math.floor(Math.random() * 4);
//             if(ans[a] == ""){
//                 ans[a] = pic[i];
//                 check = false;
//             } else continue;
//         }
//     }
//     MAIN.innerHTML = createQuestionPictures(result[indexQuestion].artist, ans[0], ans[1], ans[2], ans[3]);

//     let btnHome = document.getElementById("button-home"); // возврат на главную страницу
//     btnHome.addEventListener("click", function () {
//         createHomePage();
//     });

//     let btnCategory = document.getElementById("button-category"); // возврат на  страницу категорий
//     btnCategory.addEventListener("click", function () {
//         createCategoriesPage(themeTitle);
//     });

//     let btnQuestionPicturesAnswer = document.getElementsByClassName("question-pictures-answer");
//     for (let i = 0; i < btnQuestionPicturesAnswer.length; i++) {
//         btnQuestionPicturesAnswer[i].addEventListener("click", function () {
//             createAnswerPicturesPage(btnQuestionPicturesAnswer[i], result, indexQuestion); 
//         });
//     }

// }