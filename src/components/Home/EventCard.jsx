import React from 'react';

const EventCard = ({ event }) => {
  const startDate = new Date(event.startDate)?.toLocaleDateString('tr-TR');
  const endDate = new Date(event.endDate)?.toLocaleDateString('tr-TR');

  return (
    <div className='text-center bg-white shadow-md rounded-2xl overflow-hidden p-4 space-y-4 border border-gray-100 transition-all duration-400 hover:shadow-md hover:scale-105 cursor-pointer'>
      <div className='flex justify-center'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABtd3_m34c-WfPpNLzeFwuldtAahqRk1gwA&s'
          alt=''
          className='max-w-[128px]'
        />
      </div>
      <h2 className='text-xl font-bold text-gray-800'>{event.name}</h2>
      <p className='text-sm text-gray-600'>{event.description}</p>

      <div className='text-sm text-gray-700'>
        📍 <span className='font-medium'>{event.location}</span>
      </div>

      <div className='flex justify-between text-sm text-gray-600'>
        <span>
          🗓️ {startDate} - {endDate}
        </span>
        <span>👥 {event.capacity} kişi</span>
      </div>

      <div className='text-lg font-semibold text-blue-600'>
        🎟️ {event.price.toFixed(2)} €
      </div>
    </div>
  );
};

export default EventCard;
