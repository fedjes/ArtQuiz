export function createAnswer(check, src, name, author, year) {
    return (
        `<div id="answer">
            <div>` + check + `</div>
            <img class="rounded mx-auto d-block" style="width:250px;" src="` + src + `" alt="">
            <div>` + name + `</div>
            <div>` + author + `</div>
            <div>` + year + `</div>
            <div id="next-btn-question">Next</div>
        </div>`
    );
}