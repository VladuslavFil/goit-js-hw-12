import axios from 'axios';

const API_KEY  = '50850315-f0f392daf437796dee68f08e0';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page,
  };

  const { data } = await axios.get(BASE_URL, { params });
  return data;
}