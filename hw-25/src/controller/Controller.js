import ToDoList from '../model/ToDoList';
import List from '../view/List';
import Form from '../view/Form';
import Head from '../view/Head';


export default class Controller{
    constructor(){
        this.toDoList = new ToDoList();
        this.listView = new List();
        this.formView = new Form();
        this.heading = new Head();

        this.container = document.getElementById('root');

        this.head = this.heading.renderHead();
        this.container.append(this.heading.head);
        
        
        this.toDoList.fetch()
            .then(()=>this.listView.renderUl(this.toDoList.list));
        this.container.append(this.listView.el);

        this.form = this.formView.renderForm();
        this.container.append(this.formView.form);        
    }
}