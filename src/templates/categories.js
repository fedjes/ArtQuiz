function myFunction(){
    // console.log("test");
}

function createCategory(theme, count, img_src) {
    return (
    `<div class="col category-col" id="` + theme + `" style="display: grid;">
        <div class="title-card">
            <div class="title-name">
                <div class="card-name">` + theme + `<div class="text-score">` + count +  `</div>
                </div>

            </div>
        </div>
        <img src="` + img_src + `" style="width: 100%; " alt="">
        <button style="width: 100%;">SCORE</button>
    </div>`
    )
}

function createRow(divList){
    return (
    `<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">`+
        divList
    +`</div>`
    )
}

function createListCategories(array){
    let result = ``;
    let row = ``;
     for(let i = 0; i < array.length; i++){
         let category = createCategory(array[i].name, array[i].count, array[i].img);
         row = row + category;
         if((i+1)%4 == 0){
            let r = createRow(row);
            result = result + r;
            row = ``;
         }
     }

    return result;
}

export function createCategories(array) {
    return (
        `<div id="categories">
            <div class="head_logo" style=" padding-top: 2%; padding-bottom: 2%;">
                <img class="rounded mx-auto d-block" style="width:250px;" src="../../../full/ArtQuiz.svg" alt="logo">
            </div>
            <div class="button_and_text row row-cols-1 row-cols-md-3">
                <div class="col">
                    <button id="button-home" class="button_home btn btn-primary btn-lg">Home</button>
                </div>
                <div class="col">
                    <h2 class="text-center text_categories">CATEGORIES</h2>
                </div>
            <div class="categories_spacer col-4"></div>
        </div>`+
        createListCategories(array)
        +`</div>`
    );
}