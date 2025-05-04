import React from 'react';

const CustomContent = ({ children }) => {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-8'>{children}</div>
    </div>
  );
};

export default CustomContent;
