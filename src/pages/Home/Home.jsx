import EventCard from '../../components/Home/EventCard';
import { useGetEvents } from '../../hooks/event/useGetEvents';

const Home = () => {
  const { data: events, isLoading, isError } = useGetEvents();

  if (isLoading) return <p>Yükleniyor...</p>;
  if (isError) return <p>Bir hata oluştu.</p>;

  return (
    <>
      <h1 className='text-2xl mb-5'>Güncel Etkinlikler</h1>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3'>
        {events.map((event, index) => (
          <EventCard event={event} key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
