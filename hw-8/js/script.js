'use strict'
const addTaskForm = document.getElementById('addTaskForm');
const list = document.getElementById('toDoList');
const input = document.getElementById('newTask');
const taskTemplate = document.getElementById('taskTemplate').innerHTML;

addTaskForm.addEventListener('submit', onAddTaskForm);
list.addEventListener('click',onListClick);

function onAddTaskForm(e){
  e.preventDefault();

  submitForm();
  resetForm();
}

function submitForm(){
  const task = {title: input.value };

  addTask(task);

}

function addTask(task){
  const html = taskTemplate.replace('{{title}}', task.title);
  list.innerHTML+=html;

}

function resetForm(){
  addTaskForm.reset();
}

function onListClick(e){
  if(e.target.classList.contains('taskItem')){
    toggleClass(e.target);
  }
}

function toggleClass(el){
  el.classList.toggle('green');
}
