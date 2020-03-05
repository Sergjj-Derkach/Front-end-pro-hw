const form = document.querySelector('.contacts');
const contactsList = document.querySelector('.contactsList');
const inputName = document.getElementById('inputName');
const inputSurname = document.getElementById('inputSurname');
const inputPhone  =  document.getElementById('inputPhone');
const contactsTemplate = document.getElementById('contactsTemplate');

form.addEventListener('submit', onFormClick);
form.addEventListener('click', onDeleteContact);

function onFormClick(e){

  e.preventDefault();
  addNewContact();
  resetForm();
}


function addNewContact(){
  const newContsct = document.createElement('tr');
  newContsct.className = 'contactRow';
  newContsct.innerHTML = '<td>'+ inputName.value + '</td><td>'+ inputSurname.value + '</td><td>'+ inputPhone.value +'</td><td class="deleteContacts"> X</td>';
  contactsList.appendChild(newContsct);
}

function resetForm(){
  form.reset();
}


function onDeleteContact(e){
  if (e.target.classList.contains('deleteContacts')){
      remove(e.target.closest('.contactRow'));
  }
}

function remove(el) {
  el.remove();
}
