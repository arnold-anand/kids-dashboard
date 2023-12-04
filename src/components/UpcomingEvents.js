import React, { useEffect, useState } from "react";
import { supabase } from "../lib/helper/supabaseClient";
let images = [];
export default function UpcomingEvents() {
  const [events, setevents] = useState([]);
 
  useEffect(() => {
    getEvents();
  }, []);
  useEffect(() => {
    getImagesFromDB();
  }, [events]);

  async function getEvents() {
    let { data } = await supabase.from("events").select();
    setevents(data);
  }
  function getImagesFromDB(){
    for (let index = 0; index < events.length; index++) {
        images.push("https://rkiclrbeqyhahulzrznr.supabase.co/storage/v1/object/public/posters/"+events[index]["posterName"]);
    }
    
    
  }

  return (
    <div className="min-w-[25%] h-[100%]">
      <div className="text-xl">UPCOMING</div>

      {Object.entries(
        events.reduce((acc, event) => {
          const date = event.event_date;
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(event);
          return acc;
        }, {})
      ).map(([date, events]) => (
        <div key={date} className="my-4 border p-2 w-[250px] rounded-xl">
          <div className="">
            <div className="">
              {new Date(date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
              })}
            </div>
            {events
              .sort((a, b) => a.from_time.localeCompare(b.from_time))
              .map((event) => (
                <div key={event.id} className="text-xs my-2">
                  <div>
                    {" "}
                    <span className="fromTime">
                      {event.from_time.slice(0, 5)}
                    </span>{" "}
                    -{" "}
                    <span className="toTime">{event.to_time.slice(0, 5)}</span>
                  </div>
                  <div className="ml-8">{event.event_title}</div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export { images };