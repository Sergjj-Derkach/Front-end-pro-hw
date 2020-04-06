import './styles.css';

const ws = new WebSocket('wss://fep-app.herokuapp.com/');
let nameUser = document.getElementById('nameUser');
let messageUser = document.getElementById('messageUser');
const onlineChat = document.getElementById('onlineChat');
const listMessages = document.getElementById('listMessages');


onlineChat.addEventListener('click', onAddMessage);
ws.onmessage = onMessage;

function onMessage(message){
    let messageEvent = JSON.parse(message.data);
    renderMessage(messageEvent);  
    
}

function renderMessage(messageEvent){
    let span = document.createElement('span');
    span.innerHTML = `<b>${messageEvent.payload.author}</b>: <em>${messageEvent.payload.message}</em>`;
    listMessages.prepend(span);
}
function onAddMessage(e){
    e.preventDefault();
    if(e.target.classList.contains('addBtn')){
        ws.send(JSON.stringify({
            action:'message',
            payload: {
                author: nameUser.value,
                message: messageUser.value
            }
        })); 
    }
    clearMessage();
}

function clearMessage(){
    messageUser.value = '';
}
