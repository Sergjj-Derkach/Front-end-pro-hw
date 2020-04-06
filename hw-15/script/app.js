let albumsList = document.getElementById('albumsList');
let albumsPhoto = document.getElementById('photoList');
let albumsUrl = 'https://jsonplaceholder.typicode.com/albums'
albums = [];
photo = [];

albumsList.addEventListener('click', onCliskAlbums);

initAlbumsList();

function initAlbumsList(){
    fetch(albumsUrl)
    .then(response =>{
        return response.json();
    })
    .then(data => {
        albums = data;
        albums.forEach(item => {
            let span = document.createElement('span');
            let spanTitle = document.createTextNode(item.title);
            span.appendChild(spanTitle);
            span.id = item.id;
            span.classList.add('albumsPhoto');
            albumsList.appendChild(span);
        });
    });
}

function onCliskAlbums(e){
    if (e.target.classList.contains('albumsPhoto')) {
      clearAlbumsPhoto();
      renderPhoto(e);
    }
}
function renderPhoto(e){
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${e.target.id}`)
    .then(response =>{
        return response.json();
    })
    .then(data => {
        photo = data;
        photo.forEach(item =>{
            let div = document.createElement('div');
            div.innerHTML = `<a href="${item.url}"> <img src="${item.thumbnailUrl}" alt ="${item.title}"></a>`;
            div.classList.add('photoUser');
            albumsPhoto.append(div);
        });
    });
};

function clearAlbumsPhoto(){
  while(albumsPhoto.firstChild){
    albumsPhoto.removeChild(albumsPhoto.firstChild);
  }
}
