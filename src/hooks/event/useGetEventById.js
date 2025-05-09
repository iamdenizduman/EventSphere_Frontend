import { useMutation } from '@tanstack/react-query';
import { getEventByIdService } from '../../services/event/getEventsService';

export const useGetEventById = () => {
  return useMutation({
    mutationFn: getEventByIdService,
  });
};
