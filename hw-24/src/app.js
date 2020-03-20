import API from './api';
import $ from 'jquery';

global.jQuery = $;
global.$ = $;

import lightgallery from 'lightgallery';


$(() => {

    const imageTemplate = $('#imageTemplate').html();
    const $gallery = $('#aniimated-thumbnials');

    API.getPhotos().then(setGallery);

    function setGallery(imagesArray) {
        renderImages(imagesArray);

        initGallery();
    }

    function renderImages(images) {
        $gallery.html(images.map(getImageHtml).join('\n'));
    }

    function getImageHtml(image) {
        return imageTemplate
            .replace('{{url}}', image.url)
            .replace('{{thumbnailUrl}}', image.thumbnailUrl)
    }

    function initGallery() {
      ("#lightgallery").lightGallery();
    }
});
