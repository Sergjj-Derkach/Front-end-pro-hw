let list = [];
let ulList = document.getElementById('getList');

fetch('https://jsonplaceholder.typicode.com/photos?_limit=50')

.then((response) => {
    return response.json()
})
.then(data =>{
    list = data;
    list.forEach(function(item) {
        let li = document.createElement('li');
        let elText = document.createTextNode(item);
        li.appendChild(elText);
        ulList.appendChild(li);
    });

});
