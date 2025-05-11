import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function CustomHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { user } = useAuth();

  const menuItems = [
    { name: 'Etkinlikler', href: '#' },
    { name: 'Biletlerim', href: '#' },
    { name: 'İletişim', href: '#' },
  ];

  if (user != null) {
    menuItems.push({
      name: user.name,
    });
    menuItems.push({
      name: 'Sepetim',
    });
  } else {
    menuItems.push(
      { name: 'Üye Ol', href: '#' },
      { name: 'Giriş Yap', href: '#' }
    );
  }

  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate('/');
  };

  return (
    <nav className='bg-white shadow-md w-full py-3 mb-5'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div
            onClick={handleClickNavigate}
            className='text-2xl font-bold cursor-pointer'
          >
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABtd3_m34c-WfPpNLzeFwuldtAahqRk1gwA&s'
              alt=''
              className='max-w-[128px]'
            />
          </div>

          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-500 focus:outline-none'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                {isOpen ? (
                  <path d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-6'>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-xl transition-colors duration-300 !text-gray-800 hover:!text-gray-400'
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='text-center md:hidden bg-white px-4 pb-4 pt-2 space-y-2'>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='block !text-gray-800 hover:!text-gray-400 transition-colors duration-200 text-xl'
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
