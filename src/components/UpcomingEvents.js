import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/helper/supabaseClient'

export default function UpcomingEvents() {
    const [events, setevents] = useState([]);

    useEffect(() => {
      getEvents()
    }, [])
    

    async function getEvents(){
        let { data } = await supabase.from("events").select();
        setevents(data);
        console.log(data);
    }

  return (
    <div className='w-[25%]'>
        <div className='text-xl'>UPCOMING</div>

        {Object.entries(events.reduce((acc, event) => {
          const date = event.event_date;
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(event);
          return acc;
        }, {})).map(([date, events]) => (
          <div key={date} className='my-4 border p-2 w-[250px] rounded-xl'>
            <div className=''>
                <div className=''>{new Date(date).toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}</div>
                {events.sort((a, b) => a.from_time.localeCompare(b.from_time)).map((event) => (
                  <div key={event.id} className='text-xs my-2'>
                    <div> <span className='fromTime'>{event.from_time.slice(0, 5)}</span> - <span className='toTime'>{event.to_time.slice(0, 5)}</span></div>
                    <div className='ml-8'>{event.event_title}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}
