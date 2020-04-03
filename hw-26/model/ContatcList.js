import {usersUrl} from '../src/config';
import Model from './Model';


export default class ContactList{
    constructor(){
        this.list = [];
    }
    fetch(){
        return fetch(usersUrl)
            .then(res => res.json())
            .then(data => this.setData(data));
    }

    setData(data){
        this.list = data.map(item => new Model(item));
        console.log(this.list);       
    }
    delete(id){
        
        const model = this.list.find((item)=> item.id = id);
        model.delete().then(() => console.log('was delete server'));
        // console.log('contactlist delete',id ,model);
    }
}