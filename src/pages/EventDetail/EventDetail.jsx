import { useParams } from 'react-router-dom';
import { useGetEventById } from '../../hooks/event/useGetEventById';
import { useEffect } from 'react';

export const EventDetail = () => {
  const { id } = useParams();
  const getEventById = useGetEventById();

  useEffect(() => {
    if (id) {
      getEventById.mutate(
        { EventId: id },
        {
          onSuccess: (res) => {
            console.log(res);
          },
        }
      );
    }
  }, [id]);

  return (
    <div>
      <h1>Etkinlik Detayı</h1>
      <p>Etkinlik ID: {id}</p>
      {/* Bu ID ile backend'den detayları çekebilirsin */}
    </div>
  );
};

export default EventDetail;
