import axios from 'axios';

const API_KEY = '19772171-226cd242ef8307a66747d7d05';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = ({ searchQuery, page }) => {
  return axios
    .get(
      `/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(responce => responce.data)
    .then(console.log);
};
