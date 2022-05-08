import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');



// Створення і рендер розмітки по масиву даних galleryItems і даного шаблону елемента галереї.

const newGalleryMarkup = galleryItems.map(({original, preview, description}) => 
`<div class="gallery__item">
<a class="gallery__link" href=${original}>
<img class="gallery__image"
src=${preview}
data-source=${original}
alt=${description}/>
</a>
</div>`
).join("");

galleryEl.insertAdjacentHTML('afterbegin', newGalleryMarkup);

// Реалізація делегування на div.gallery и отриманню url великого зображення.

const imageGalleryClick = (e) => {
e.preventDefault();
console.log(e);

if (e.target.nodeName !== "IMG") {
return;
}

const lightBoxModal = basicLightbox.create(`
    <div class="modal">
	 <img src="${`${e.target.dataset.source}`}" width="800" height="600">
    </div>`, 
	{
		onShow: (lightBoxModal) => {
			document.addEventListener('keydown', closeGalleryImage);
		},
	});
lightBoxModal.show();


function closeGalleryImage(e){
	if (e.key === 'Escape' && document.querySelector('.basicLightbox.basicLightbox--visible')) {
		lightBoxModal.close(() => {
			document.removeEventListener('keydown', closeGalleryImage);
		});
	}
}

}

galleryEl.addEventListener('click', imageGalleryClick);
