import configAxios from '../utils/axios-order';

const axios = configAxios();

export const iniIngredientService = () => {
  return axios.get('/ingredientslinh.json');
};
