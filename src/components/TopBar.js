import React, { useState, useEffect } from 'react';

export default function TopBar() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDateTime = (date) => {
    const options = { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedParts = new Intl.DateTimeFormat('en-IN', options).formatToParts(date);
    return formattedParts.map(({ value }) => value.toUpperCase()).join(' ').replace(/,/g, '');
  };

  return (
    <div className='my-5'>
      <div className='flex justify-between items-center'>
        <img src="innovation.svg" className='w-20'/>
        <div className='font-poppins text-xl'>KARUNYA INNOVATION AND DESIGN STUDIO</div>
        <div className='timer' style={{ width: '230px' }}>
        {formatDateTime(date)}
        </div>
      </div>
    </div>
  );
}
