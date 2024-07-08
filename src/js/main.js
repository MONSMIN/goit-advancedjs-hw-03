import SlimSelect from 'slim-select';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorElement = document.querySelector('.error');


function displayError(message) {
  iziToast.show({
    title: 'Error',
    message: `❌ ${message}`,
    position: 'topCenter',
    color: 'red',
  });
  errorElement.textContent = message;
  errorElement.classList.remove('hidden');
}


function toggleHidden(element, isVisible) {
  element.classList.toggle('hidden', !isVisible);
}


async function handleBreedSelection(breedId) {
  if (!breedId) {
    return;
  }

  toggleHidden(catInfo, false);
  toggleHidden(loader, true);
  toggleHidden(errorElement, false);

  fetchCatByBreed(breedId)
    .then(displayCatInfo)
    .catch(displayError)
    .finally(() => {
      toggleHidden(loader, false);
    });
}

function displayCatInfo(catData) {
    if (catData.breeds && catData.breeds.length > 0) {
      const { name, description, temperament } = catData.breeds[0];
      const catImg = catData.url;
  
      catInfo.innerHTML = `
        <img class="cat-img" src="${catImg}" alt="${name}"/>
        <div class="cat-info-text">
          <h2>${name}</h2>
          <p>${description}</p>
          <p><b>Temperament:</b> ${temperament}</p>
        </div>
      `;
  
      toggleHidden(catInfo, true);
    } else {
      displayError("No breed information found.");
    }
  }


function initializeSelect(data) {
  toggleHidden(select, true);
  new SlimSelect({
    select: select,
    settings: {
      placeholderText: 'Search breed',
    },
    data: [{ placeholder: true, text: 'Select breed' }, ...data],
    events: {
      afterChange: newVal => handleBreedSelection(newVal[0]?.value),
    },
  });
}


async function initializeApp() {
  toggleHidden(loader, true);
  try {
    const breeds = await fetchBreeds();
    initializeSelect(breeds.map(({ id, name }) => ({ text: name, value: id })));
  } catch (error) {
    displayError(error.message);
  } finally {
    toggleHidden(loader, false);
  }
}

document.addEventListener('DOMContentLoaded', initializeApp);
