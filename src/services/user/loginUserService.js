import axios from './axiosInstanceUser';

export const loginUserService = async (req) => {
  const response = await axios.post('/LoginUser', req);
  return response;
};
