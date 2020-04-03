let list = [];
let ulList = document.getElementById('getList');

fetch('https://jsonplaceholder.typicode.com/todos')

.then((response) => {
    return response.json()
})
.then(data =>{
    list = data;
    console.log(list);
    list.forEach(function(item) {
        let li = document.createElement('li');
        let elText = document.createTextNode(item.title);
        li.appendChild(elText);
        li.classList.add(item.completed);
        ulList.appendChild(li);
    });
});
