import { useParams } from 'react-router-dom';
import { useGetEventById } from '../../hooks/event/useGetEventById';
import { useEffect, useState } from 'react';

export const EventDetail = () => {
  const { id } = useParams();
  const getEventById = useGetEventById();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      getEventById.mutate(
        { EventId: id },
        {
          onSuccess: (res) => {
            setEvent(res);
          },
        }
      );
    }
  }, [id]);

  if (!event) {
    return <div className='text-center text-gray-600'>Yükleniyor...</div>;
  }
  return (
    <div className='max-w-4xl mx-auto p-4 space-y-6'>
      {/* Etkinlik Başlığı */}
      <div className='bg-white shadow-lg rounded-2xl p-6'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>
          {event.name}
        </h1>
        <p className='text-sm text-gray-600 italic mb-4'>
          {new Date(event.startDate).toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}{' '}
          -{' '}
          {new Date(event.endDate).toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <p className='text-gray-700'>{event.description}</p>

        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700'>
          <div>
            <strong>Yer:</strong> {event.location}
          </div>
          <div>
            <strong>Kapsite:</strong> {event.capacity} kişi
          </div>
          <div>
            <strong>Fiyat:</strong> ${event.price}
          </div>
          <div>
            {event.isStockCreated ? (
              <button className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200 cursor-pointer'>
                Bilet Al
              </button>
            ) : (
              <h1 className='text-xl text-red-500 font-bold'>Çok Yakında</h1>
            )}
          </div>
        </div>
      </div>

      {/* Oturumlar */}
      <div className='space-y-4'>
        {event.eventSessionDtos.map((session, idx) => (
          <div
            key={idx}
            className='bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-6'
          >
            {/* Konuşmacı */}
            <div className='flex-shrink-0'>
              <img
                src={session.speakerDto.profilePictureUrl}
                alt={`${session.speakerDto.firstName} ${session.speakerDto.lastName}`}
                className='w-24 h-24 rounded-full object-cover'
              />
              <p className='mt-2 font-semibold text-center text-gray-800'>
                {session.speakerDto.firstName} {session.speakerDto.lastName}
              </p>
              <p className='text-xs text-gray-500 text-center'>Konuşmacı</p>
            </div>

            {/* Oturum Detayları */}
            <div>
              <h3 className='text-xl font-bold text-gray-800'>
                {session.title}
              </h3>
              <p className='text-gray-600 mt-1 mb-3'>
                {new Date(session.startTime).toLocaleTimeString('tr-TR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}{' '}
                -{' '}
                {new Date(session.endTime).toLocaleTimeString('tr-TR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <p className='text-gray-700'>{session.description}</p>
              <div className='mt-3 text-sm text-gray-600'>
                <strong>Hakkında:</strong> {session.speakerDto.bio}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetail;
