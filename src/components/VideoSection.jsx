import React, { useRef, useState } from 'react';

const VideoSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="relative w-full h-[40vh] md:h-[70vh] bg-black overflow-hidden group">
            {/* Video Element */}
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Video_poster_image_-_home.jpg?v=1680767658&width=3000"
                loop
                muted
                playsInline
                controls
                onClick={togglePlay}
            >
                <source
                    src="//prestige-theme-allure.myshopify.com/cdn/shop/videos/c/vp/686fc38c1584488793cb47f95193f422/686fc38c1584488793cb47f95193f422.HD-1080p-4.8Mbps-12729205.mp4?v=0"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Grid/Texture (Optional, to mimic the texture in screenshot if needed, but keeping clean for now) */}
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 pointer-events-none" />

            {/* Content Overlay */}
            <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 p-4 transition-all duration-700 ease-in-out ${isPlaying
                    ? 'opacity-0 pointer-events-none translate-y-4'
                    : 'opacity-100 pointer-events-auto translate-y-0'
                    }`}
            >
                {/* Subheader */}
                <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-light mb-3 md:mb-5">
                    Made in Italy
                </p>

                {/* Main Title */}
                <h2 className="text-xl md:text-2xl lg:text-[30px] uppercase tracking-[0.2em] font-light mb-8 md:mb-12">
                    Finest Handmade
                </h2>

                {/* Play Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                    }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                    {/* Solid Triangle Play Icon */}
                    <svg className="w-6 h-6 md:w-7 md:h-7 ml-1" viewBox="0 0 24 24" fill="#C4B5A0">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default VideoSection;
