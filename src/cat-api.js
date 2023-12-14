import axios from 'axios';

const apiKey =
  'live_7hY9w5eW43BjqrZkQTGbrJ68y9IwDskE3GZX44EBM3YRhteBBiTrXsX1p6RWRatO';

axios.defaults.headers.common['x-api-key'] = apiKey;

export function fetchCatByBreed(breedId) {
  return new Promise((resolve, reject) => {
    const catInfo = document.querySelector('.cat-info');
    const loader = document.querySelector('.loader');
    const error = document.querySelector('.error');

    catInfo.style.display = 'none';
    loader.style.display = 'block';
    error.style.display = 'none';

    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then(response => {
        const cat = response.data[0];
        const { name, description, temperament } = cat.breeds[0];
        const image = `<img class="cat-image" src="${cat.url}" alt="${name}" width="800px" height="600px">`;
        const info = `<h2>${name}</h2><p><strong>Description:</strong> ${description}</p><p><strong>Temperament:</strong> ${temperament}</p>`;
        catInfo.innerHTML = image + info;

        catInfo.style.display = 'block';
        loader.style.display = 'none';
        error.style.display = 'none';
        resolve(cat);
      })
      .catch(err => {
        catInfo.style.display = 'none';
        loader.style.display = 'none';
        error.style.display = 'block';
        reject(err);
      });
  });
}
