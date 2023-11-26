import React, { useEffect, useState } from 'react';
import { images } from './UpcomingEvents';
import ImageCarousel from './ImageCarousel';
export default function PosterandStats() {
    const [loading, setLoading] = useState(true);
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const urls = Object.values(images).map(item => item);
                setImageUrls(urls);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching images:", error);
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className='w-[50%] h-[100%] flex flex-col items-center justify-center'>
             {loading ? "Loading..." : <ImageCarousel imageUrls={imageUrls} />}
             <div className='my-5 w-full'>

                <div className='flex items-center justify-between '>
                    <img className='w-[100px]' src="KH.png" alt="" />
                    <img className='w-[60px]' src="EC.png" alt="" />
                    <img className='w-[150px]' src="KK.png" alt="" />
                </div>
                
             </div>
        </div>
    );
}
