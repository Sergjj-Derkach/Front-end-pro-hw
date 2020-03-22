import './formStyles.css';

export default class Form{
    constructor(){
        this.form = document.createElement('form');
    }

    renderForm(){
        this.form.classList.add('formAdd');
        this.form.innerHTML = `<input type="text"><button>add</button>`;
    }
    
}