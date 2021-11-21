export default class ArtistsQuestions {   //отвечает за массив вопросов и записывает отвечено или не отвечено на вопрос
    questions = [];
    constructor(questions) {
        this.questions = questions;
    }
    getQuestions() {
        return this.questions;
    }
    setAnswer(idQuestion, answer) {
        for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id == idQuestion) this.questions[i].answer = answer;
        }
    }
}