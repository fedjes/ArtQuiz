export function createFinish(count) {
    return (
        `<div id="finish">
            <div>Congtatulations!</div>
            <div>` + count + ` / 10</div>
            <div id="home-btn-finish">Home</div>
            <div id="next-btn-finish">Next Quiz</div>
        </div>`
    );
}