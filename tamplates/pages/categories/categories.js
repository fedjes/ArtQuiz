export function createCategories(main) {
    return (
        `<div id="categories">
            <div class="head_logo" style=" padding-top: 2%; padding-bottom: 2%;">
                <img class="rounded mx-auto d-block" style="width:250px;" src="../../../full/ArtQuiz.svg" alt="logo">
            </div>
            <div class="button_and_text row row-cols-1 row-cols-md-3">
                <div class="col">
                    <button class="button_home btn btn-primary btn-lg">Home</button>
                </div>
                <div class="col">
                    <h2 class="text-center text_categories">CATEGORIES</h2>
                </div>
            <div class="categories_spacer col-4"></div>
        </div>`+
        main
        +`</div>`
    );
}