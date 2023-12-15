import axios from 'axios';

const apiKey =
  'live_7hY9w5eW43BjqrZkQTGbrJ68y9IwDskE3GZX44EBM3YRhteBBiTrXsX1p6RWRatO';

axios.defaults.headers.common['x-api-key'] = apiKey;

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then(response => {
        const cat = response.data[0];
        resolve(cat);
      })
      .catch(err => {
        reject(err);
      });
  });
}
