function createQuestion(author, src1, src2, src3, src4){
    return(
       `
       <div class="head" style="display: flex; justify-content: space-around; padding-top: 2%;" >
            <button class="btn btn-primary btn-lg">Home</button>
            <p>Какую картину написал ` + author + `</p>
            <button class="btn btn-primary btn-lg">Category</button>
        </div>
        <div class="pictures row row-cols-2" style="padding-top: 2%;">
            <div class="col questionImg"><img src="` + src1 + `" style="width: 70%;" alt=""></div>
            <div class="col questionImg"><img src="` + src2 + `" style="width: 70%;" alt=""></div>
            <div class="col questionImg"><img src="` + src3 + `" style="width: 70%;" alt=""></div>
            <div class="col questionImg"><img src="` + src4 + `" style="width: 70%;" alt=""></div>
        </div>
       ` 
    )
}



export default createQuestion;