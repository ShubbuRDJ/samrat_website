const items = [
    {
        title: '18+ Years Experience',
        desc: 'Serving since 2007',
    },
    {
        title: 'PSARA Licensed',
        desc: 'Fully licensed & certified',
    },
    {
        title: 'Trained Staff',
        desc: 'Professional security personnel',
    },
    {
        title: 'Nationwide Presence',
        desc: 'Services across India',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-white dark:bg-darkSurface py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                    Why Choose Rishiraj Security?
                </h2>

                <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                    Trusted by hundreds of clients across India
                </p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map(item => (
                        <div key={item.title} className="text-center">
                            <div className="mx-auto w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl">
                                ✔
                            </div>
                            <h3 className="mt-4 font-semibold text-lg dark:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
