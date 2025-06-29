import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images.map(img => `
    <li class="gallery-item">
      <a href="${img.largeImageURL}">
        <img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}" />
      </a>
      <ul class="info">
      <li class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-p">${img.likes}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Views</p>
        <p class="info-p">${img.views}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-p">${img.comments}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-p">${img.downloads}</p>
      </li>
    </ul>
    </li>
  `).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.add("visible");
}

export function hideLoader() {
  loader.classList.remove("visible");
}

const loadMoreBtn = document.querySelector('.load-more-btn');

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('visible');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('visible');
}
