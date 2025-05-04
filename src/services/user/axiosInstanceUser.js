import axios from 'axios';

const axiosInstanceUser = axios.create({
  baseURL: 'https://localhost:7271/api/User/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstanceUser;
