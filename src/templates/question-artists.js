export function createQuestionArtist(pictureName, pictureSrc, answer1, answer2, answer3, answer4) {
    // console.log(pictureSrc);
    return (
        `<div class="row" style="padding-top: 2%;">
            <div class="col">
                <button id="button-home" class="btn btn-primary btn-lg">Home</button>
            </div>
            <div class="col">`
        + pictureName +
        `</div>
            <div class="col">
                <button id="button-category" class="btn btn-primary btn-lg">Category</button>
            </div>
          </div>
          <div class="img-question" style="width:100%;">
            <img src="` + pictureSrc + `" alt="" style="width: calc(100% - 40%); border-radius: 10%;">
          </div>
        <div class="row row-cols-2">
          <div class="col question-artist-answer" id="` + answer1 + `">` + answer1 + `</div>
          <div class="col question-artist-answer" id="` + answer2 + `">` + answer2 + `</div>
          <div class="col question-artist-answer" id="` + answer3 + `">` + answer3 + `</div>
          <div class="col question-artist-answer" id="` + answer4 + `">` + answer4 + `</div>
        </div>`
    )
}