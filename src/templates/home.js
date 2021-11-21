export function createHome() {
    return (
    `<div id="home" style="background-color: #dddddd; padding: 0px; margin: 0px; width: 100%; height: 100%;">
        <div class="header " style="display: block; width: 100%; padding-top: 2%;">
            <img class="rounded mx-auto d-block" style="width:250px;" src="../../../full/ArtQuiz.svg" alt="logo">
        </div>
        <div class="main row row-cols-auto" style="display: flex;align-content: baseline;">
            <div id="CategoryArtists" class="category col-6" >
                <img style="width:100%;" src="../../../img/240.jpg" alt="">
                <div style="width: 100%; background-color: #b6b6b6;">Artists Quiz</div>
            </div>
            <div id="CategoryPictures" class="category col-6" >
                <img style="width:100%;" src="../../../img/1.jpg" alt="">
                <div style="width: 100%; background-color: #b6b6b6;">Pictures Quiz</div>
            </div>
        </div>
        <div class="setting" style="display: block;">
            <button type="button" class="btn btn-primary btn-lg" >Settings</button>
        </div>
    </div>`
    )
}