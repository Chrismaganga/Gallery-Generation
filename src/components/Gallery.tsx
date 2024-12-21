import React, { useState } from 'react';

interface MediaItem {
    id: number;
    type: 'image' | 'video';
    src: string;
    title: string;
}

const mediaItems: MediaItem[] = [
    { id: 1, type: 'image', src: 'path/to/image1.jpg', title: 'Image 1' },
    { id: 2, type: 'video', src: 'path/to/video1.mp4', title: 'Video 1' },
    { id: 3, type: 'image', src: 'path/to/image2.jpg', title: 'Image 2' },
    { id: 4, type: 'video', src: 'path/to/video2.mp4', title: 'Video 2' },
];

const Gallery: React.FC = () => {
    const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

    const handleMediaClick = (media: MediaItem) => {
        setSelectedMedia(media);
    };

    const handleClose = () => {
        setSelectedMedia(null);
    };

    return (
        <div className="gallery">
            <div className="media-grid">
                {mediaItems.map((media) => (
                    <div key={media.id} className="media-item" onClick={() => handleMediaClick(media)}>
                        {media.type === 'image' ? (
                            <img src={media.src} alt={media.title} />
                        ) : (
                            <video src={media.src} controls />
                        )}
                        <p>{media.title}</p>
                    </div>
                ))}
            </div>

            {selectedMedia && (
                <div className="media-modal" onClick={handleClose}>
                    <div className="media-content" onClick={(e) => e.stopPropagation()}>
                        {selectedMedia.type === 'image' ? (
                            <img src={selectedMedia.src} alt={selectedMedia.title} />
                        ) : (
                            <video src={selectedMedia.src} controls autoPlay />
                        )}
                        <p>{selectedMedia.title}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;