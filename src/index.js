import { fetchCatByBreed } from './cat-api';
import axios from 'axios';

function fetchBreeds() {
  return new Promise((resolve, reject) => {
    const breedSelect = document.querySelector('.breed-select');
    const loader = document.querySelector('.loader');
    const error = document.querySelector('.error');

    breedSelect.style.display = 'none';
    loader.style.display = 'block';
    error.style.display = 'none';

    axios
      .get('https://api.thecatapi.com/v1/breeds')
      .then(response => {
        const breeds = response.data;
        const options = breeds
          .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
          .join('');
        breedSelect.innerHTML = options;

        breedSelect.style.display = 'block';
        loader.style.display = 'none';
        error.style.display = 'none';
        resolve(breeds);
      })
      .catch(err => {
        breedSelect.style.display = 'none';
        loader.style.display = 'none';
        error.style.display = 'block';
        reject(err);
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBreeds()
    .then(breeds => {
      const breedSelect = document.querySelector('.breed-select');
      breedSelect.addEventListener('change', event => {
        const selectedBreedId = event.target.value;
        if (selectedBreedId) {
          fetchCatByBreed(selectedBreedId);
        }
      });
    })
    .catch(error => {
      console.error(error);
    });
});
