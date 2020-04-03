import ContactList from '../model/ContatcList';
import List from '../view/List';
import {usersUrl} from '../src/config.js';

export default class Controller{
    constructor(){
        this.contacts = new ContactList(usersUrl);
        this.listView = new List({
            onDelete:(id) => {
                this.contacts.delete(id); 
            }
        });
        this.form = document.getElementById('contactsList');

        this.contacts.fetch()
            .then(() => this.listView.render(this.contacts.list));
        this.form.appendChild(this.listView.el);        
    }
}