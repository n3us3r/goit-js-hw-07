import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');



// Створення і рендер розмітки по масиву даних galleryItems і даного шаблону елемента галереї.

const newGalleryMarkup = galleryItems.map(item => 
`<div class="gallery__item">
<a class="gallery__link" href=${item.original}>
<img
class="gallery__image"
src=${item.preview}
data-source=${item.original}
alt=${item.description}/>
</a>
</div>`
).join("");


galleryEl.insertAdjacentHTML('afterbegin', newGalleryMarkup);

const lightBoxModal = basicLightbox.create(`
    <div class="modal">
	 <img src="" width="800" height="600">
    </div>
`);

// Реалізація делегування на div.gallery и отриманню url великого зображення.

const imageGalleryClick = (e) => {
e.preventDefault();

if (e.target.nodeName !== "IMG") {
return;
}

let showModalImage = lightBoxModal.element().querySelector('img');
showModalImage.src = `${e.target.dataset.source}`;

lightBoxModal.show();
}

// Закриття модального вікна по натисканню кнопки Escape

const closeGalleryImage = (e) => {
	if (e.key === 'Escape' && document.querySelector('.basicLightbox.basicLightbox--visible')) {
		lightBoxModal.close();
	}
}

galleryEl.addEventListener('click', imageGalleryClick);

document.addEventListener('keydown', closeGalleryImage);