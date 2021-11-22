export function createFinish(count) {
    return (
        `<div id="finish">
            <div id="congtatulations">Congtatulations!</div>
            <div id="score">` + count + ` / 10</div>
              <div id="btn-div">
            <div id="home-btn-finish">Home</div>
            <div id="next-btn-finish">Next Quiz</div>
              </div>
        </div>`
    );
}