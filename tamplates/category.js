function createRow(divList){
    return (
    `<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">`+
        divList
    +`</div>`
    )
}

function createCategory(thema, count, img_src) {
    return (
    `<div class="col" style="display: grid;">
        <div class="title-card">
            <div class="title-name">
                <div class="card-name">` + thema + `<div class="text-score">` + count +  `</div>
                </div>

            </div>
        </div>
        <img src="` + img_src + `" style="width: 100%; " alt="">
        <button style="width: 100%;">SCORE</button>Column
    </div>`
    )
}

function createList(array){
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

export default createList;