import { createHome } from '../templates/home.js';
import createCategoriesPage from './categories.js';

function createHomePage() {
    let home = document.getElementById("main");
    home.innerHTML = createHome();
    
    const btnArtists = document.getElementById('CategoryArtists'); /// проверка на десять вопросов , навешивание клика для артистов
    btnArtists.addEventListener("click", () => {
        createCategoriesPage("Artists");
    });

    const btnPictures = document.getElementById('CategoryPictures'); /// проверка на десять вопросов , навешивание клика для картин
    btnPictures.addEventListener("click", () => {
        createCategoriesPage("Pictures");
    });
}

export default createHomePage;