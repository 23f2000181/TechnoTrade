import { products } from '../data/products';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    return (
        <section id="products" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Products
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Explore our carefully curated selection of cutting-edge technology products
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="btn-primary">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;