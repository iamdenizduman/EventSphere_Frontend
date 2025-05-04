import axios from './axiosInstanceEvent';

export const getEventsService = async () => {
  const response = await axios.post('/GetEvents', {});
  return response.data.data.eventDtos;
};
