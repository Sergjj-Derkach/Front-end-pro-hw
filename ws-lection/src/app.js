import './styles.css';
const MOVE_STEP = 20;

const balls = {};

const ball = {
    id:Math.random(),
    name:'Sergij',
    color:'silver',
    top:50,
    left:50,
};

const ws = new WebSocket('wss://fep-app.herokuapp.com/');
document.addEventListener('keydown', onKeyDown);

ws.onopen = onSocketOpen;

ws.onmessage = onSocketMessage;
function onSocketMessage(message){
    const packetDate = JSON.parse(message.data);
    if(!balls[packetDate.payload.id]){
        balls[packetDate.payload.id] = createBallElement(packetDate.payload);
    }
    updateState(packetDate.payload);   
}

function updateState(ball){
    const ballEl = balls[ball.id];
    ballEl.style.top = ball.top +'px';
    ballEl.style.left = ball.left +'px';
    ballEl.style.backgroundColor = ball.color;
}
function createBallElement(){
    const el = document.createElement('div');
    el.className = 'ball';
    el.textContent = ball.name;
    document.body.append(el);
    return el;
}
function onSocketOpen(){
    notifyStateChage();
}

function onKeyDown (e){
    switch(e.code){
        case'ArrowUp':changeBallPositoin(-MOVE_STEP, 0);
        break;
        case'ArrowLeft':changeBallPositoin(0, -MOVE_STEP);
        break;
        case'ArrowDown':changeBallPositoin(MOVE_STEP, 0);
        break;
        case'ArrowRight':changeBallPositoin(0, MOVE_STEP);
        break;
    }
    notifyStateChage();
}

function changeBallPositoin(topDiff, leftDiff){
    ball.top += topDiff;
    ball.left += leftDiff; 
}

function notifyStateChage(){
    ws.send(JSON.stringify({
        action: 'setState',
        payload: ball
    }))
}

