export default class Model{
    constructor(modelData){
      Object.assign(this, modelData);
        
    }
    delete(){
      return fetch(`${this.url}/${this.id}`,{
        method:'DELETE'
      });
    }
}