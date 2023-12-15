import { fetchBreeds, fetchCatByBreed } from './cat-api';

document.addEventListener('DOMContentLoaded', () => {
  const breedSelect = document.querySelector('.breed-select');

  fetchBreeds()
    .then(breeds => {
      const options = breeds
        .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
        .join('');
      breedSelect.innerHTML = options;
    })
    .catch(error => {
      console.error(error);
    });

  breedSelect.addEventListener('change', event => {
    const selectedBreedId = event.target.value;
    if (selectedBreedId) {
      fetchCatByBreed(selectedBreedId)
        .then(cat => {
          const catInfo = document.querySelector('.cat-info');
          const loader = document.querySelector('.loader');
          const error = document.querySelector('.error');

          catInfo.style.display = 'none';
          loader.style.display = 'block';
          error.style.display = 'none';

          const { name, description, temperament } = cat.breeds[0];
          const image = `<img class="cat-image" src="${cat.url}" alt="${name}" width="800px" height="600px">`;
          const info = `<h2>${name}</h2><p><strong>Description:</strong> ${description}</p><p><strong>Temperament:</strong> ${temperament}</p>`;
          catInfo.innerHTML = image + info;

          catInfo.style.display = 'block';
          loader.style.display = 'none';
          error.style.display = 'none';
        })
        .catch(error => {
          const catInfo = document.querySelector('.cat-info');
          const loader = document.querySelector('.loader');
          const errorElement = document.querySelector('.error');

          catInfo.style.display = 'none';
          loader.style.display = 'none';
          errorElement.style.display = 'block';
          console.error(error);
        });
    }
  });
});
