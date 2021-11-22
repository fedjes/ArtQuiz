function countAnswer(arrayQuestions, arrayCategories) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let Th = arrayCategories;
        for (let i = 0; i < arrayQuestions.length; i++) {
            if (arrayQuestions[i].answer == true) count++;
            if (((i + 1) % 10 == 0)) {
                Th[Math.floor(i / 10)].count = count;
                count = 0;
            }
        }
        resolve(Th);
    });
}

export default countAnswer;