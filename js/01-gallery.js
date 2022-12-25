import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const cardsMarkup = CreateImgCardsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', cardsMarkup)


function CreateImgCardsMarkup(cards){
return cards.map(({preview, original, description}) => 

  `<div class="gallery__item">
  <a class="gallery__link"  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');

}

galleryEl.addEventListener('click', onLinkClick)
function onLinkClick(event){
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
      return
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
instance.show();

galleryEl.addEventListener('keydown', e => {
  if(e.code === 'Escape'){
    instance.close();
  }
} )

}
