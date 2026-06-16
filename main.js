import Task from './task.js'

let list = []
const task = new Task("Ler")
saveTask(task)

console.log(list[0].name)

function saveTask(task){
    list[list.length] = task
}