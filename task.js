export default class Task {
    static #idCounter = 0

    constructor(name = "", description = "", deadline = "", subtask = [], finished = false){
        this.id = Task.#idCounter;
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.subtask = subtask;
        this.finished = finished;
        Task.#idCounter++;
    }

    getId() {
        return this.id;
    }
}