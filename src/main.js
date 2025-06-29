import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('.search-inp');
const loadMoreBtn = document.querySelector('.load-more-btn');

let currentQuery = '';
let page = 1;

form.addEventListener('submit', onSearchSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearchSubmit(evt) {
  evt.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({ message: 'Введіть щось для пошуку!', position: 'topRight' });
    return;
  }

  currentQuery = query;
  page = 1;
  clearGallery();
  hideLoadMoreButton();

  await fetchImages();
}

async function onLoadMore() {
  page += 1;
  await fetchImages();
}

async function fetchImages() {
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(currentQuery, page);

    if (hits.length === 0 && page === 1) {
      iziToast.info({
        message: 'На жаль, нічого не знайдено. Спробуйте інший запит!',
        position: 'topRight',
        color: 'red',
      });
      return;
    }

    createGallery(hits);

    const totalPages = Math.ceil(totalHits / PER_PAGE);
    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    if (page > 1) {
      const { height: cardHeight } =
        document.querySelector('.gallery').firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (err) {
    iziToast.error({ message: 'Error', position: 'topRight' });
    console.error(err);
  } finally {
    hideLoader();
  }
}
