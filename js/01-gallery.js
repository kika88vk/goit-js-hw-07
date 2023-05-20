import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector(".gallery");
const markup = galleryItems.map((galItem) => `<li class="gallery__item">
<a class="gallery__link" href="${galItem.original}">
    <img
        class="gallery__image"
        src="${galItem.preview}"
        data-source="${galItem.original}"
        alt="${galItem.description}"
    />
</a>
</li>`).join("");
gallery.insertAdjacentHTML("afterbegin", markup);


console.log(galleryItems);

gallery.addEventListener("click", popUpImage);

function popUpImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    let bigImg = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${bigImg}" width="800" height="600">`)

    instance.show()

    document.addEventListener("keydown", event => {
        if (event.code === "Escape") {
            instance.close();
        }
    });
}

