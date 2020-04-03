import './liststyle.css';

export default class List{
    constructor(config){
        this.config = config;
        this.el = document.createElement('tbody');
        this.table = document.getElementById('contactsList');

        this.table.addEventListener('click', this.onContactClick.bind(this));
    }

    onContactClick(e){
        e.preventDefault();
        // console.log(e, this);
        switch(true){
            case e.target.classList.contains('deleteBtn'):
                this.config.onDelete(e.target.parentNode.parentNode.dataset.id);
                break;
                
        }
        
    }

    render(list){
        this.el.innerHTML = list.map(this.createTemplate).join('\n');
    }

    createTemplate(item){
        return `<tr data-id="${item.id}">
                    <th>${item.name}</th>
                    <th>${item.surname}</th>
                    <th>${item.email}</th>
                    <th><button class="deleteBtn">Delete</button> <button class="editBtn">Edit</button></th>
                <tr>`;
    }
}