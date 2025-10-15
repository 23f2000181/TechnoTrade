import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header />
                <main>
                    <Hero />
                    <ProductGrid />

                    {/* About Section */}
                    <section id="about" className="py-12 md:py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
                                    About TechnoTrade
                                </h2>
                                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
                                    TechnoTrade is your premier destination for the latest in technology and innovation.
                                    We are committed to bringing you high-quality products that enhance your digital lifestyle.
                                </p>
                                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Our mission is to make cutting-edge technology accessible to everyone, with a focus on
                                    quality, reliability, and exceptional customer service.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                        <div className="container mx-auto px-4">
                            <div className="max-w-2xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
                                    Get In Touch
                                </h2>
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                                            />
                                        </div>
                                        <textarea
                                            placeholder="Your Message"
                                            rows="4"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                                        ></textarea>
                                        <button type="submit" className="btn-primary w-full">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="container mx-auto px-4 text-center">
                        <p>&copy; 2024 TechnoTrade. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    );
}

export default App;