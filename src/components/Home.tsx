
import { useState } from 'react';


const Home = () => {
    const [images, setImages] = useState<string[]>([]);
    const [videos, setVideos] = useState<string[]>([]);

    const generateImage = () => {
        // Logic to generate image
        const newImage = `https://via.placeholder.com/150?text=Image+${images.length + 1}`;
        setImages([...images, newImage]);
    };

    const generateVideo = () => {
        // Logic to generate video
        const newVideo = `https://via.placeholder.com/150?text=Video+${videos.length + 1}`;
        setVideos([...videos, newVideo]);
    };

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-blue-800 text-2xl mb-4">Video & Images Generation</h3>
            <div className="flex justify-between mb-4">
                <button onClick={generateImage} className="bg-blue-500 text-white px-4 py-2 rounded">Generate Image</button>
                <button onClick={generateVideo} className="bg-green-500 text-white px-4 py-2 rounded">Generate Video</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="border p-2">
                        <img src={image} alt={`Generated ${index + 1}`} className="w-full" />
                    </div>
                ))}
                {videos.map((video, index) => (
                    <div key={index} className="border p-2">
                        <video controls className="w-full">
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;    