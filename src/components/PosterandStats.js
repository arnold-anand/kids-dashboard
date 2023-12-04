import React, { useEffect, useState } from "react";
import { images } from "./UpcomingEvents";
import ImageCarousel from "./ImageCarousel";
import { supabase } from "../lib/helper/supabaseClient";

export default function PosterandStats() {
  const [loading, setLoading] = useState(true);
  const [imageUrls, setImageUrls] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const urls = Object.values(images).map((item) => item);
        setImageUrls(urls);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    orgStats();
  }, []); // Add an empty dependency array

  async function orgStats() {
    try {
      let { data, error } = await supabase.from("statsTable").select();
      if (error) {
        throw error;
      }

      // Ensure that data is an array before setting it in state
      if (Array.isArray(data)) {
        setStats(data);
      } else {
        console.error("Invalid data format for stats:", data);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  }

  return (
    <div className="w-[50%] h-[100%] flex flex-col items-center justify-center border p-5 rounded-xl">
      {loading ? <div className="h-72 w-full text-center">Loading...</div> : <ImageCarousel imageUrls={imageUrls} />}
      <div>
        
      </div>
      <div className="flex items-center justify-between w-full my-5">
        <img className="w-[100px]" src="KH.png" alt="" />
        <img className="w-[60px]" src="EC.png" alt="" />
        <img className="w-[150px] -ml-10" src="KK.png" alt="" />
      </div>
      <div className="my-5 w-full flex items-center justify-between text-center">
        {stats.map((orgStat, index) => (
          <div
            key={index}
            className=""
          >
            <div>
              {orgStat.organisation === "Karunya Hacks" && (
                <div className="karunyahacks space-y-10 ml-5">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl">{orgStat.stats1}</span>
                    <span>Participants</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl">{orgStat.stats2}</span>
                    <span>Participants</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl">{orgStat.stats3}</span>
                    <span>Participants</span>
                  </div>
                </div>
              )}
            </div>
            <div>
            {orgStat.organisation === "E-Cell Karunya" && (
              <div className="ecellkarunya space-y-10">
                <div className="flex flex-col items-center">
                  <span className="text-2xl">{orgStat.stats1}</span>
                  <span>Participants</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl">{orgStat.stats2}</span>
                  <span>Participants</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl">{orgStat.stats3}</span>
                  <span>Participants</span>
                </div>
              </div>
            )}
            </div>
            <div>
            {orgStat.organisation === "Karunya Kreatives" && (
              <div className="karunyakreatives space-y-10 mr-5">
                <div className="flex flex-col items-center">
                  <span className="text-2xl">{orgStat.stats1}</span>
                  <span>Participants</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl">{orgStat.stats2}</span>
                  <span>Participants</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl">{orgStat.stats3}</span>
                  <span>Participants</span>
                </div>
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
