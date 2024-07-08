import axios from "axios";

axios.defaults.headers.common['x-api-key'] = 'live_387Mr5NSdTViGuSkWsWNpNhx7HXBFt6TTwyYgidC1P2hjqMqtkVYhdbmUqjWvBhp';


export async function fetchBreeds() {
    return await axios.get('https://api.thecatapi.com/v1/breeds').then(respose => respose.data);
  };


export async function fetchCatByBreed(breedId) {
    return await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`).then(respose => respose.data[0]);
  };