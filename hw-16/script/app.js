const USERS_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';
const DELETE_USER = 'deleteUser';

const formNewUser = document.querySelector('.newUser');
const contactsList = document.querySelector('.contactsList');
const inputName = document.getElementById('inputName');
const inputSurname = document.getElementById('inputSurname');
const inputEmail  =  document.getElementById('inputEmail');
const usersTemplate = document.getElementById('usersTemplate').innerHTML;



contactsList.addEventListener('click', onContactcsClick);
formNewUser.addEventListener('submit',onAddNewUser);
let users = [];


init();

function onContactcsClick(e){
  switch(true){
    case e.target.classList.contains(DELETE_USER):
        deleteUser(e.target.parentNode.parentNode.dataset.id);
        break;
  }
}
function onAddNewUser(e){
  e.preventDefault();
  submitForm();
}
function init(){
  getUsers();
}

function getUsers(){
  fetch(USERS_URL)
  .then(resp => resp.json())
  .then(setUsers)
  .then(renderUsers);
}

function setUsers(data){
  return users = data;
}

function renderUsers(data){
  contactsList.innerHTML = data.map(generateUserHtml).join('\n');
}

function generateUserHtml(user){
  return usersTemplate.replace('{{id}}', user.id)
            .replace('{{name}}', user.name)
            .replace('{{surname}}', user.surname)
            .replace('{{email}}', user.email);
}

function deleteUser(id){
  fetch(`${USERS_URL}/${id}`,{
    method:'DELETE'
  });

  users = users.filter((user) => user.id !== id);
  renderUsers(users);
}
function submitForm(){
  let newUser = {
    name:inputName.value,
    surname:inputSurname.value,
    email:inputEmail.value
  };
  fetch(USERS_URL,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newUser)    
  })
  .then(resp => resp.json())
  .then(addUser);
  
  resetForm();
}

function resetForm(){
  formNewUser.reset();
}
function addUser(user){
  users.push(user);
  
  renderUsers(users);
}