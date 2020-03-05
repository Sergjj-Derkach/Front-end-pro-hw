$(document).ready(function(){
    addNewTask();
});

function addNewTask(){
  $('#addTask').on('click', function(){
    let liAdd = '<li class="task">'+ $('#newTask').val() + '<button class="deleteTask">X</button>'+'</li>';
    $('#toDoList').append(liAdd);
    $('#newTask').val(' ');
    deleteTask();
    checktTask();
  });
}

function deleteTask() {
  $('.deleteTask').on('click', function(){
    $(this).parents('.task').remove();
  });
}

function checktTask() {
  $('.task').on('click', function(){
    $(this).toggleClass('green');
  });
}
