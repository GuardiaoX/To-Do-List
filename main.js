import Task from './task.js'

let list = []
const container = document.getElementById('taskContainer');
const button = document.getElementById('button');
const enter = document.getElementById('input')

enter.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        e.preventDefault();
        button.click();
    }
})


button.addEventListener('click', e => {
        const input = document.getElementById('input');

        if(input.value != ''){
            createTask(input.value);    
            input.value = '';
        }
})


function createTask(name){
    const taskHolder = document.createElement('div');
    const task = document.createElement('p');
    const delButton = document.createElement('button');
    
    delButton.addEventListener('click', e=> {
        delButton.parentElement.remove();
    })

    delButton.textContent = 'deletar'


    task.textContent = name;
    taskHolder.appendChild(task);
    taskHolder.appendChild(delButton);
    container.appendChild(taskHolder);
}