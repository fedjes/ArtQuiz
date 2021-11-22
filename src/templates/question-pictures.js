export function createQuestionPictures(author, src1, src2, src3, src4) {
    return (
        `<div class="row" style="padding-top: 2%;">
            <div class="col">
                <button id="button-home" class="btn btn-primary btn-lg">Home</button>
            </div>
            <div class="col">Какую картину написал `
                + author + `?
            </div>
            <div class="col">
                <button id="button-category" class="btn btn-primary btn-lg">Category</button>
            </div>
          </div>
        <div class="row row-cols-2">
          <div class="col question-pictures-answer" id="` + src1 + `"><img src="` + src1 + `" alt="" style="width: calc(100% - 60%); border-radius: 10%;"></div>
          <div class="col question-pictures-answer" id="` + src2 + `"><img src="` + src2 + `" alt="" style="width: calc(100% - 60%); border-radius: 10%;"></div>
          <div class="col question-pictures-answer" id="` + src3 + `"><img src="` + src3 + `" alt="" style="width: calc(100% - 60%); border-radius: 10%;"></div>
          <div class="col question-pictures-answer" id="` + src4 + `"><img src="` + src4 + `" alt="" style="width: calc(100% - 60%); border-radius: 10%;"></div>
        </div>`
    )
}