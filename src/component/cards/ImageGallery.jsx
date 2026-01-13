import React, { useRef, useCallback, useState, useEffect } from 'react';

// Helper function to convert image filename to display label
const getImageLabel = (imageName) => {
    if (!imageName || imageName.startsWith('placeholder')) {
        return 'HOME PAGE';
    }

    // Remove file extension and path
    const name = imageName.replace(/\.[^/.]+$/, '');

    // Convert common patterns to readable labels
    const labelMap = {
        'note_home': 'HOME PAGE',
        'note_login': 'LOGIN PAGE',
        'note_register': 'REGISTER PAGE',
        'note_profile': 'PROFILE PAGE',
        'note_addm': 'ADD NOTE',
        'note_updatem': 'UPDATE NOTE',
        'note_pinned': 'PINNED NOTES',
        'tweet_home': 'HOME PAGE',
        'tweet_profile': 'PROFILE PAGE',
        'tweet_login_page': 'LOGIN PAGE',
        'tweet_register_page': 'REGISTER PAGE',
        'tweet_notification': 'NOTIFICATIONS',
        'jshome': 'HOME PAGE',
        'newswebapp': 'NEWS WEB APP',
        'weather': 'WEATHER FINDER',
        'todo': 'TO-DO LIST',
        'crausal1': 'IMAGE CAROUSEL',
        'fetchAPi': 'FETCH API',
        'colorchanger': 'COLOR CHANGER',
        'datecolor': 'DATE COLOR',
        'guess': 'GUESSING GAME',
        'count': 'COUNTER',
        'rcenter': 'HOME PAGE',
        'chatPage': 'CHAT PAGE',
        'login': 'LOGIN PAGE',
        'register': 'REGISTER PAGE'
    };

    return labelMap[name] || name.replace(/[_-]/g, ' ').toUpperCase();
};

const ImageGallery = ({ images, title, basePath = '/images/' }) => {
    const scrollContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Generate placeholder if no images provided
    const displayImages = images && images.length > 0
        ? images
        : ['placeholder-1', 'placeholder-2'];

    // Handle scroll to detect current visible image
    const handleScroll = useCallback(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const slideWidth = container.firstElementChild?.offsetWidth || 1;
        const gap = 16; // 1rem gap
        const newIndex = Math.round(scrollLeft / (slideWidth + gap));

        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < displayImages.length) {
            setCurrentIndex(newIndex);
        }
    }, [currentIndex, displayImages.length]);

    // Add scroll listener
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const handleKeyDown = useCallback((e) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = container.clientWidth * 0.8;
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }, []);

    // Get current image label
    const currentLabel = getImageLabel(displayImages[currentIndex]);

    return (
        <div className="gallery-container">
            {/* Dynamic Header Label */}
            <div className="gallery-header">
                <span className="gallery-label">{currentLabel}</span>
            </div>

            {/* Scrollable Image Container */}
            <div
                ref={scrollContainerRef}
                className="gallery-scroll"
                role="region"
                aria-label={`Image gallery for ${title}`}
                tabIndex={0}
                onKeyDown={handleKeyDown}
            >
                {displayImages.map((image, index) => {
                    const isPlaceholder = image.startsWith('placeholder');
                    const imageSrc = isPlaceholder
                        ? `https://placehold.co/600x400/1f2937/ffffff?text=${encodeURIComponent(title || 'Project')}+${index + 1}`
                        : `${basePath}${image}`;

                    return (
                        <div key={index} className="gallery-slide">
                            <img
                                src={imageSrc}
                                alt={`${title} screenshot ${index + 1}`}
                                loading="lazy"
                                className="gallery-image"
                                onError={(e) => {
                                    e.target.src = `https://placehold.co/600x400/1f2937/ffffff?text=${encodeURIComponent(title || 'Project')}`;
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageGallery;
