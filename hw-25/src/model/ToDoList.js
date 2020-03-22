import { TODOLIST_URL } from "../config";
import Model from "./Model";

export default class ToDoList{
    fetch(){
        return fetch(TODOLIST_URL)
            .then(res => res.json())
            .then(data => this.setData(data));
    }

    setData(data){
        this.list = data.map(item => new Model(item));        
    }
}