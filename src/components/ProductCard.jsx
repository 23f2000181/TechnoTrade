const ProductCard = ({ product }) => {
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                    <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.category}
                    </span>
                </div>
            </div>

            <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white truncate">
                        {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                        {renderStars(product.rating)}
                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 ml-1">
                            ({product.rating})
                        </span>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-4 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400">
                        ${product.price}
                    </span>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-3 md:px-4 py-2 rounded-lg transition-colors duration-300 font-medium text-sm md:text-base">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;