import axios from './axiosInstanceEvent';

export const getEventsService = async () => {
  const response = await axios.post('/GetEvents', {});
  return response.data.data.eventDtos;
};

export const getEventByIdService = async (eventId) => {
  const response = await axios.post('/GetEventById', eventId);
  return response.data.data.eventDto;
};
