// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="" title="${description}" />
      </a>
          `;
    })
    .join('');
}

const galleryList = document.querySelector('.gallery');
const galleryListItems = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryListItems);

const lightbox = new SimpleLightbox('.gallery__item', { captionDelay: 250 });
