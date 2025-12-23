const images = [
    'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
    'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
];

const GalleryPreview = () => {
    return (
        <section className="bg-white dark:bg-darkSurface py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold dark:text-white">
                    Gallery Preview
                </h2>

                <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                    See our professional security team in action
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map(src => (
                        <img
                            key={src}
                            src={src}
                            alt="Security team"
                            loading="lazy"
                            className="rounded-lg object-cover w-full h-64"
                        />
                    ))}
                </div>

                <button className="mt-10 bg-secondary text-black px-6 py-3 rounded-lg">
                    View More Photos
                </button>
            </div>
        </section>
    );
};

export default GalleryPreview;
