import { useQuery } from '@tanstack/react-query';
import { getEventsService } from '../../services/event/getEventsService';

export const useGetEvents = () => {
  return useQuery({
    queryKey: ['getEvents'],
    queryFn: getEventsService,
    staleTime: 1000 * 60 * 5,
  });
};
