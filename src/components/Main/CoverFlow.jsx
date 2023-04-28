import React, { useState, useEffect, useRef } from 'react';

function CoverFlow() {
    const [enlargedImage, setEnlargedImage] = useState(null);
    const [images, setImages] = useState([
        {
            src: 'https://picsum.photos/300/200?random=1',
            alt: 'Image 1',
            largeSrc: 'https://picsum.photos/800/600?random=1'
        },
        {
            src: 'https://picsum.photos/300/200?random=2',
            alt: 'Image 2',
            largeSrc: 'https://picsum.photos/800/600?random=2'
        },
        {
            src: 'https://picsum.photos/300/200?random=3',
            alt: 'Image 3',
            largeSrc: 'https://picsum.photos/800/600?random=3'
        },
        {
            src: 'https://picsum.photos/300/200?random=4',
            alt: 'Image 4',
            largeSrc: 'https://picsum.photos/800/600?random=4'
        },
        {
            src: 'https://picsum.photos/300/200?random=5',
            alt: 'Image 5',
            largeSrc: 'https://picsum.photos/800/600?random=5'
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex === images.length) {
                nextIndex = 0;
            }
            setCurrentIndex(nextIndex);
            setAnimation(true);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex, images.length]);

    const handleImageClick = (imageUrl) => {
        setEnlargedImage(imageUrl);
    };

    const handleClose = () => {
        setEnlargedImage(null);
    };

    const handleNext = () => {
        let nextIndex = currentIndex + 1;
        if (nextIndex === images.length) {
            nextIndex = 0;
        }
        setCurrentIndex(nextIndex);
        setAnimation(true);
    };

    const handlePrev = () => {
        let nextIndex = currentIndex - 1;
        if (nextIndex < 0) {
            nextIndex = images.length - 1;
        }
        setCurrentIndex(nextIndex);
        setAnimation(true);
    };

    const modalStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        overflow: 'hidden',
    };

    const modalContentStyles = {
        position: 'relative',
        maxWidth: '90%',
        maxHeight: '90%',
        overflow: 'auto',
    };

    const modalImageStyles = {
        display: 'block',
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
    };

    const handleAnimationEnd = () => {
        setAnimation(false);
    };

    const handleFocus = (index) => {
        if (currentIndex === index) {
            return;
        }
        setCurrentIndex(index);
        setAnimation(true);
    };

    const shuffleImages = () => {
        const shuffledImages = images.sort(() => Math.random() - 0.5);
        setImages(shuffledImages);
    };

    const handleImageMove = (index) => {
        if (currentIndex === index) {
            return;
        }
        setCurrentIndex(index);
        setAnimation(true);
    };

    const handleImageGrow = (index) => {
        if (currentIndex === index) {
            return;
        }
        setCurrentIndex(index);
        setAnimation(true);
        containerRef.current.scrollTo({
            left: index * 300,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div className="containerm overflow: hidden" ref={containerRef}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`image-container ${currentIndex === index ? 'active' : ''
                            } ${animation ? 'animate' : ''}`}
                        onClick={() => handleImageClick(image.largeSrc)}
                        onMouseEnter={() => handleFocus(index)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="image"
                            onAnimationEnd={handleAnimationEnd}
                        />
                    </div>
                ))}
            </div>
            <div className="controls">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
                <button onClick={shuffleImages}>Shuffle</button>
            </div>
            {enlargedImage && (
                <div style={modalStyles} onClick={handleClose}>
                    <div style={modalContentStyles}>
                        <img
                            src={enlargedImage}
                            alt="Enlarged"
                            style={modalImageStyles}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default CoverFlow;  
