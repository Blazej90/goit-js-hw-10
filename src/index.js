import { fetchBreeds, fetchCatByBreed } from './cat-api';

document.addEventListener('DOMContentLoaded', () => {
  let breedsData;

  const breedSelect = document.querySelector('.breed-select');
  breedSelect.addEventListener('change', event => {
    const selectedBreedId = event.target.value;
    if (selectedBreedId) {
      fetchCatByBreed(selectedBreedId);
    }
  });

  fetchBreeds()
    .then(breeds => {
      breedsData = breeds;
      const options = breeds
        .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
        .join('');
      breedSelect.innerHTML = options;
      breedSelect.style.display = 'block';
      document.querySelector('.loader').style.display = 'none';
    })
    .catch(error => {
      console.error(error);
      document.querySelector('.error').style.display = 'block';
    });
});
