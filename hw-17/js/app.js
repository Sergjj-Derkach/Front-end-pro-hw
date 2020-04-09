const noteBoard = document.querySelector('.noteBoard');
const form = document.querySelector('.formAddNote');
const text = document.querySelector('.textNote');
const buttonAdd = document.querySelector('.addBtn');
const noteTemplate = document.querySelector('#noteTemplate').innerHTML;

let notes =[];

form.addEventListener('click', onClickForm);
noteBoard.addEventListener('click', onClickBoard);

init();

function init(){
    getLocalStorage();   
    renderNotes();
}


function onClickBoard(e){
    switch(true){
        case e.target.classList.contains('deleteNote'):
            deleteNote(e.target.parentNode.id);
            break;
    }
}

function deleteNote(elId){
    notes = notes.filter(note => note.id != elId);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes()
}

function onClickForm(e){
    e.preventDefault();
    if(e.target.classList.contains('addBtn')){
        submitForm();
    }
    resetForm();
}

function submitForm(){
    let id = Date.now();
    let el = {
        id:id,
        title:text.value
    }
    notes.push(el);
    localStorage.setItem('notes',JSON.stringify(notes));    
    const noteEl = noteTemplateHtml(el);
    addNote(noteEl);
    
}
function addNote(noteEl){
    noteBoard.innerHTML += noteEl;
}

function resetForm(){
    form.reset();
}

function noteTemplateHtml(el){
    return noteTemplate.replace('{{noteId}}', el.id)
                        .replace('{{text}}',el.title);
}

function renderNotes(){
    let data = getLocalStorage();
    noteBoard.innerHTML = data.map(noteTemplateHtml).join('\n');
}

function getLocalStorage(){
    let data = localStorage.getItem('notes');
    return data ? JSON.parse(data) : [];
}
