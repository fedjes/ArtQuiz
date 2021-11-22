import createHomePage from './pages/home.js';
import ArtistsCategory from './data/category-artists.js';
import PicturesCategory from './data/category-pictures.js';
import ArtistsQuestions from './data/questions-artists.js';
import PicturesQuestions from './data/questions-pictures.js';
import {artistsFill} from './questions/artists.js';
import {picturesFill} from './questions/pictures.js';
import images from './data/images.js';
import {createFooter} from './templates/footer.js';

var CategoryArtists = new ArtistsCategory();// массив категорий (тем) для выбора карточки
var CategoryPictures = new PicturesCategory();// массив категорий (тем) для выбора карточки
var QuestionsArtists = new ArtistsQuestions(artistsFill(images, 0, 120));
var QuestionsPictures = new PicturesQuestions(picturesFill(images, 121, 241));

var MAIN = document.createElement('div');
MAIN.id = "main";
document.body.prepend(MAIN);
createHomePage();

var FOOTER = document.createElement('div');
FOOTER.id = "footer";
FOOTER.innerHTML = createFooter();
document.body.append(FOOTER);
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
}