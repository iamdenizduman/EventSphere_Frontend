import axios from 'axios';

const axiosInstanceEvent = axios.create({
  baseURL: 'https://localhost:7049/api/Events/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstanceEvent;
