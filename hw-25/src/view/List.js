import './listStyles.css';

export default class List{
    constructor(){
        this.el = document.createElement('ul');
    }

    renderUl(list){
        this.el.innerHTML = list.map(this.createLi).join('\n');
    }

    createLi(item){
        return `<li class="${item.completed}">${item.title}</li>`;
    }
}