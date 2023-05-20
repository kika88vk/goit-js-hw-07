import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems.map((galItem) => `<li class="gallery__item">
<a class="gallery__link" href="${galItem.original}">
    <img
        class="gallery__image"
        src="${galItem.preview}"
        alt="${galItem.description}"
    />
</a>
</li>`).join("");
gallery.insertAdjacentHTML("afterbegin", markup);

console.log(galleryItems);

let gallerySLbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
