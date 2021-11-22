import { createArtistsQuestion } from './question-artists.js';
import { createPicturesQuestion } from './question-pictures.js';
import Index from '../index.js';

export default function createQuestionPage(category, theme) {  //генерация вопроса и проверка на какая тема выбрана берем первые 10 вопросов 
    if (category == "Artists") {
        let ar = Index.CategoryArtists.getCategory();
        for(let i = 0; i < ar.length; i++){
            if(ar[i].name == theme) {
                if(ar[i].id == 0) createArtistsQuestion(category, theme, Index.QuestionsArtists.getQuestions()[Index.indexQuestion.getIndex()]);
                else createArtistsQuestion(category, theme, Index.QuestionsArtists.getQuestions()[parseInt(ar[i].id + "" + Index.indexQuestion.getIndex())]);
            } 
        }
    } else if (category == "Pictures") {
        let ar = Index.CategoryPictures.getCategory();
        for(let i = 0; i < ar.length; i++){
            if(ar[i].name == theme) {
                if(ar[i].id == 0) createPicturesQuestion(category, theme, Index.QuestionsPictures.getQuestions()[Index.indexQuestion.getIndex()]);
                else createPicturesQuestion(category, theme, Index.QuestionsPictures.getQuestions()[parseInt(ar[i].id + "" + Index.indexQuestion.getIndex())]);
            } 
        }
    }
}