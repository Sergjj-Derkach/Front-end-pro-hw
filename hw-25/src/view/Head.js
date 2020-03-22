import './stylesHead.css';

export default class Head{
    constructor(){
        this.head = document.createElement('h2');
    }

    renderHead(){
        this.head.textContent = 'To do list';
    }
}