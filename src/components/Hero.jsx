import { useState, useEffect } from 'react';

const Hero = () => {
    const images = [
        'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&h=800&fit=crop'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Images */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={image}
                        alt={`Background ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Welcome to{' '}
                        <span className="text-primary-400">
                            TechnoTrade
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                        Discover the latest in technology and innovation with TechnoTrade
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn-primary">
                            Discover
                        </button>
                        <button className="btn-secondary">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;