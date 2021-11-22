import images from '../data/images.js';
import Index from '../index.js';
import { createAnswer } from '../templates/answer.js';
import { createArtistsQuestion } from './question-artists.js';
import { createPicturesQuestion } from './question-pictures.js';
import { createFinishPage } from './finish.js';
import countAnswer from '../services/countAnswer.js';

function createAnswerPage(check, src, name, author, year, category, theme, question) {
    let home = document.getElementById("main");
    home.innerHTML = createAnswer(check, "../../img/" + src + ".jpg", name, author, year);

    let btnNext = document.getElementById("next-btn-question");
    let index = Index.indexQuestion.getIndex();

    btnNext.addEventListener("click", function () {
        if (index < 9) {
            index = index + 1;
            Index.indexQuestion.setIndex(index);
            if (category == "Artists") {
                createArtistsQuestion(category, theme, Index.QuestionsArtists.getQuestions()[question.id + 1]);
            } else if (category == "Pictures") {
                let questions = Index.QuestionsPictures.getQuestions();
                for(let i = 0; i < questions.length; i++)
                    if(questions[i].id == question.id) createPicturesQuestion(category, theme, Index.QuestionsPictures.getQuestions()[i + 1]);
            }
        } else {
            if(category == "Artists"){
                let categories = Index.CategoryArtists.getCategory();
                let questions = Index.QuestionsArtists.getQuestions();
                countAnswer(questions, categories).then(res => {
                    for (let i = 0; i < res.length; i++) 
                        if (res[i].name == theme) createFinishPage(category, res[i].count);    
                });
            } else if(category == "Pictures"){
                let categories = Index.CategoryPictures.getCategory();
                let questions = Index.QuestionsPictures.getQuestions();
                countAnswer(questions, categories).then(res => {
                    for (let i = 0; i < res.length; i++) 
                        if (res[i].name == theme) createFinishPage(category, res[i].count);
                });
            }
            
        }
    });
}

export default function createAnswerAPPage(selectAnswer, category, theme, question) {  //отдельная функция создание страницы с ответом
    let check = null;
    let imag;
    if (category == "Artists") {
        imag = question.imgNum;
        if (selectAnswer == question.artist) {
            Index.QuestionsArtists.setAnswer(question.id, true);
            check = true;
        } else {
            Index.QuestionsArtists.setAnswer(question.id, false);
            check = false;
        }
    } else if(category == "Pictures") {
        let answer = selectAnswer.split("/")[3].split(".")[0];
        imag = answer;
        if (answer == question.img) {
            Index.QuestionsPictures.setAnswer(question.id, true);
            check = true;
        } else {
            Index.QuestionsPictures.setAnswer(question.id, false);
            check = false;
        }
    }
    createAnswerPage(check, imag, images[imag].name, images[imag].author, images[imag].year, category, theme, question);
}