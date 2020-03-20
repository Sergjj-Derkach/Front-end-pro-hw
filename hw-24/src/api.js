const API = {};

const photo = 'https://jsonplaceholder.typicode.com/photos';

export default {
    getPhotos: () => {
        return fetch(photo).then(res => res.json());
    }
};
