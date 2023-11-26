import React, { useEffect, useState } from 'react';
import { images } from './UpcomingEvents';

export default function PosterandStats() {
    const [loading, setLoading] = useState(true);
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                console.log(images);
                // Simulate an asynchronous operation (e.g., fetching from an API)
                // Replace the following line with your actual image fetching logic
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Assuming images are now loaded, update the state
                const urls = Object.values(images).map(item => item);
                setImageUrls(urls);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching images:", error);
                setLoading(false);
            }
        };

        fetchImages();
    }, []); // No dependencies, it should run once on mount

    return (
        <div className='w-[50%] h-[100%]'>
            {loading ? "Loading..." : imageUrls.map((image, index) => (
                <img key={index} src={image} alt={`poster ${index + 1}`} />
            ))}
        </div>
    );
}
