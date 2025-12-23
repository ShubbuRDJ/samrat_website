const testimonials = [
    {
        name: 'Rajesh Sharma',
        role: 'Event Manager',
        quote:
            'Excellent security services for our corporate event. Professional and reliable team.',
    },
    {
        name: 'Priya Patel',
        role: 'Restaurant Owner',
        quote:
            'Their bouncers are well-trained and maintain perfect crowd control.',
    },
    {
        name: 'Amit Kumar',
        role: 'Residential Society',
        quote:
            'Trustworthy guards who ensure our society’s safety 24/7.',
    },
];

const Testimonials = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-950 py-20 transition-colors">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
                    Client Testimonials
                </h2>

                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    What our satisfied clients say about our security services
                </p>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map(t => (
                        <div
                            key={t.name}
                            className="
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                rounded-xl p-6
                shadow-sm
                transition
              "
                        >
                            {/* Stars */}
                            <div className="text-secondary mb-3">★★★★★</div>

                            {/* Quote */}
                            <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                                “{t.quote}”
                            </p>

                            {/* Name */}
                            <div className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
                                {t.name}
                            </div>

                            {/* Role */}
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                {t.role}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
