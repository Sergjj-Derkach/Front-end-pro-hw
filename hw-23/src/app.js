
const photo = 'https://jsonplaceholder.typicode.com/photos';
const list = document.getElementById('listPhoto');
let galleryPhoto = [];

fetch(photo)

.then((response) => {
    return response.json()
})

.then(data =>{
    galleryPhoto = data.filter(data => data.albumId == '1');
    // console.log(galleryPhoto);

    galleryPhoto.forEach(item => {
      let li = document.createElement('li');
      li.innerHTML = '<img src="' + item.url + '">';
      list.appendChild(li);
    });
});
