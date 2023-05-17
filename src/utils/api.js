import axios from 'axios';

export const getFilters = async (base_url) => {
  return new Promise((resolve, reject) => {
    axios.get(`${base_url}/filters`).then((response) => {
      resolve(response.data);
    });
  });
};
export const getFilteredCards = async (base_url, filters) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${base_url}/filter`, filters)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e.message);
      });
  });
};

export const getTraitTypes = async() =>{
  return new Promise((resolve, reject) => {
    axios.get(`${GALAXIS_BASE_URL}/trait_types`).then((response) => {
      resolve(response.data);
    });
  });
}

export const getMetadata = async(metadataUrl) =>{
  return new Promise((resolve, reject) => {
    axios.get(`${metadataUrl}`).then((response) => {
      resolve(response.data);
    });
  });
}