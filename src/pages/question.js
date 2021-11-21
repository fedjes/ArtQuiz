import { createArtistsQuestion } from './question-artists.js';
import { createPicturesQuestion } from './question-pictures.js';
// import Home from './home.js';
import ArtistsCategory from '../data/category-artists.js';
import PicturesCategory from '../data/category-pictures.js';
import ArtistsQuestions from '../data/questions-artists.js';
import PicturesQuestions from '../data/questions-pictures.js';

import Index from '../index.js';

var CategoryArtists = new ArtistsCategory();// массив категорий (тем) для выбора карточки
var CategoryPictures = new PicturesCategory();// массив категорий (тем) для выбора карточки
var QuestionsArtists = new ArtistsQuestions();
var QuestionsPictures = new PicturesQuestions();

export default function createQuestionPage(category, theme) {  //генерация вопроса и проверка на какая тема выбрана берем первые 10 вопросов 
    // console.log(category);
    // console.log(theme);
    // var home = new Home();
    // console.log(home.getIndexQuestion());
    // console.log(data.getIndex());
    if (category == "Artists") {
        let ar = CategoryArtists.getCategory();
        // console.log(ar);
        for (let i = 0; i < ar.length; i++) {
            if (ar[i].name == theme) {
                let result = [];
                let indexQuestionStart = parseInt(ar[i].id + "0"); //берем нужный индекс вопросов c которого стартуем
                // console.log(Index.QuestionsArtists.getQuestions());
                for (let i = indexQuestionStart; i < (indexQuestionStart + 10); i++) {
                    result.push(Index.QuestionsArtists.getQuestions()[i]);
                }
                // console.log(result);
                createArtistsQuestion(Index.indexQuestion.getIndex(), result, category);// 10 вопросов для темы
                // console.log(result);
            }
        }

    } else if (category == "Pictures") {
        console.log("Pictures");
        let ar = CategoryPictures.getCategory();
        // console.log(ar);
        for (let i = 0; i < ar.length; i++) {
            if (ar[i].name == theme) {
                let result = [];
                let indexQuestionStart = parseInt(ar[i].id + "0"); //берем нужный индекс вопросов c которого стартуем
                for (let i = indexQuestionStart; i < (indexQuestionStart + 10); i++) {
                    // console.log(QuestionsArtists.getQuestions());
                    result.push(Index.QuestionsPictures.getQuestions()[i]);
                }
                createPicturesQuestion(Index.indexQuestion.getIndex(), result, category);// 10 вопросов для темы
                // console.log(result);
            }
        }
    }
    // if (category == "Artists") {
    //     let ar = CategoryArtists;
    //     for (let i = 0; i < ar.length; i++) {
    //         if (ar[i].name == theme) {
    //             let arrayQuestions = QuestionsArtists;
    //             let result = [];
    //             let indexQuestionStart = parseInt(ar[i].id + "0"); //берем нужный индекс вопросов c которого стартуем
    //             for (let i = indexQuestionStart; i < (indexQuestionStart + 10); i++) {
    //                 result.push(arrayQuestions[i]);
    //             }
    //             createArtistsQuestion(main, category, indexQuestion, result);// 10 вопросов для темы
    //         }
    //     }
    // } else if (category == "Pictures") {
    //     let ar = CategoryPictures;
    //     for (let i = 0; i < ar.length; i++) {
    //         if (ar[i].name == theme) {
    //             let arrayQuestions = QuestionsPictures;
    //             let result = [];
    //             let indexQuestionStart = parseInt(ar[i].id + "0"); //берем нужный индекс вопросов c которого стартуем
    //             for (let i = indexQuestionStart; i < (indexQuestionStart + 10); i++) {
    //                 result.push(arrayQuestions[i]);
    //             }
    //             createPicturesQuestion(main, category, indexQuestion, result);// 10 вопросов для темы
    //         }
    //     }
    // }
}