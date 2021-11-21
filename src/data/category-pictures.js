import randomIndex from '../services/randomIndex.js';

export default class PicturesCategory {   //отвечает за массив вопросов и записывает отвечено или не отвечено на вопрос
    category = [
        {
            id: 0,
            name: "Portrait",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        },
        {
            id: 1,
            name: "Landscape",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        },
        {
            id: 2,
            name: "Still Life",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        },
        {
            id: 3,
            name: "Graphic",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        },
        {
            id: 4,
            name: "Antique",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        },
        {
            id: 5,
            name: "Avant-Garde",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        },
        {
            id: 6,
            name: "Renaissance",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        },
        {
            id: 7,
            name: "Surrealism",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        },
        {
            id: 8,
            name: "Kitsch",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        },
        {
            id: 9,
            name: "Minimalism",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        },
        {
            id: 10,
            name: "Avangard",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        },
        {
            id: 11,
            name: "Industrial",
            count: 0,
            img: "../../../img/" + randomIndex(-1, 240) + ".jpg"
        }
    ];
    getCategory() {
        return this.category;
    }
    setCount(idCotegory, count) {
        for (let i = 0; i < this.category.length; i++) {
            if (this.category[i].id == idCotegory) this.category[i].count = count;
        }
    }
}