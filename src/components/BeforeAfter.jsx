import React, { useState, useRef, useEffect } from 'react';

const BeforeAfter = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };

    const onMouseDown = (e) => {
        setIsDragging(true);
        handleMove(e.clientX);
    };
  
//   

    const onTouchMove = (e) => {
        if (e.touches.length > 0) {
            handleMove(e.touches[0].clientX);
        }
    };

    const onMouseMove = (e) => {
        if (isDragging) {
            handleMove(e.clientX);
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        } else {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [isDragging]);

    return (
        <section className="bg-[#EFEFEF] pb-16 md:pb-24">
            <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-[1600px]">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#1c1c1c]/60 mb-6 font-light">
                        Le Dalia
                    </p>
                    <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] font-light text-[#1c1c1c]">
                        Choose your colour
                    </h2>
                </div>

                {/* Slider Container */}
                <div
                    ref={containerRef}
                    className="relative w-full aspect-[2/1] bg-gray-100 overflow-hidden cursor-col-resize select-none "
                    onMouseDown={onMouseDown}
                    onTouchStart={() => setIsDragging(true)}
                    onTouchMove={onTouchMove}
                    onTouchEnd={() => setIsDragging(false)}
                >
                    {/* Before Image (Left Side) - Almond Green */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img
                            src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/Before_-_Desktop.jpg?v=1680771668&width=2400"
                            alt="Almond Green"
                            className="w-full h-full object-cover"
                            draggable="false"
                        />
                        <div className="absolute bottom-10 left-10 text-black pointer-events-none">
                            <p className="text-[13px] md:text-[15px] uppercase tracking-[0.15em] font-light mb-1">
                                Almond green Liégé
                            </p>
                            <a href="#" className="text-[11px] uppercase tracking-[0.1em] border-b border-black/30 hover:border-black transition-colors pointer-events-auto">
                                View product
                            </a>
                        </div>
                    </div>

                    {/* After Image (Right Side) - Blue Denim */}
                    <div
                        className="absolute inset-0 z-20"
                        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    >
                        <img
                            src="https://prestige-theme-allure.myshopify.com/cdn/shop/files/After_-_Desktop_a6b79a4e-dcad-4761-9811-c1386231ae01.jpg?v=1680772107&width=2400"
                            alt="Blue Denim"
                            className="w-full h-full object-cover"
                            draggable="false"
                        />
                        <div className="absolute bottom-10 right-10 text-right text-black pointer-events-none">
                            <p className="text-[13px] md:text-[15px] uppercase tracking-[0.15em] font-light mb-1">
                                Blue denim Liégé
                            </p>
                            <a href="#" className="text-[11px] uppercase tracking-[0.1em] border-b border-black/30 hover:border-black transition-colors pointer-events-auto">
                                View product
                            </a>
                        </div>
                    </div>

                    {/* Slider Cursor/Handle */}
                    <div
                        className="absolute top-0 bottom-0 z-40 flex items-center justify-center transition-transform duration-100 ease-out"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="w-[1px] h-full bg-white" />
                        <div className="absolute w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing">
                            <svg width="34" height="34" viewBox="0 0 50 50" fill="none">
                                <path d="m19.25 19-6 6 6 6m11.5 0 6-6-6-6" stroke="#000000" strokeWidth="1.5" strokeLinecap="square"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
