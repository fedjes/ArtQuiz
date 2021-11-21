import images from '../data/images.js';
import Index from '../index.js';
import {createAnswer} from '../templates/answer.js';
import {createArtistsQuestion} from './question-artists.js';
import {createPicturesQuestion} from './question-pictures.js';
import {createFinishPage} from './finish.js';

function createAnswerPage(check, src, name, author, year, category, questions) { 
    // console.log("src: " + src);   
    let home = document.getElementById("main");
    home.innerHTML = createAnswer(check, "../../img/" + src + ".jpg", name, author, year);

    let btnNext = document.getElementById("next-btn-question");
    // console.log(Index.indexQuestion.getIndex());
    let index = Index.indexQuestion.getIndex();

    btnNext.addEventListener("click", function () {
        if (index < 9) {
            index = index + 1;
            Index.indexQuestion.setIndex(index);
            // console.log(index);
            if (category == "Artists")
                createArtistsQuestion(index, questions, category); 
            else if (category == "Pictures") {}
                createPicturesQuestion(index, questions, category);
        } else {
            // console.log("Fertig");
            let c = 0;
            for (let o = 0; o < questions.length; o++)
                if (questions[o].answer) c++;
            createFinishPage(category, c);
        }
    });
}

export default function createAnswerArtistsPage(selectAnswer, answer, category, questions) {  //отдельная функция создание страницы с ответом
    // console.log(selectAnswer);
    // console.log(answer);
    // console.log(Index.QuestionsArtists);
    let check = null;
    if(selectAnswer == answer.artist){
        Index.QuestionsArtists.setAnswer(answer.id, true);
        check = true;
    } else{
        Index.QuestionsArtists.setAnswer(answer.id, false);
        check = false;
    }
    // console.log(images[answer.imgNum]);
    createAnswerPage(check, answer.imgNum, images[answer.imgNum].name, images[answer.imgNum].author, images[answer.imgNum].year, category, questions);

}