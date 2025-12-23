import Container from '../common/Container';

const services = [
    { title: 'Bodyguards', description: 'Personal protection services' },
    { title: 'Bouncers', description: 'Event & club security' },
    { title: 'Armed Security', description: 'Licensed armed guards' },
    { title: 'Corporate Security', description: 'Office & facility protection' },
    { title: 'Residential Security', description: 'Home & apartment security' },
    { title: 'Event Security', description: 'Large event management' },
];

const Services = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-950 py-20 transition-colors">
            <Container>
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
                    Our Security Services
                </h2>

                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    Comprehensive security solutions for all your protection needs
                </p>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div
                            key={service.title}
                            className="
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                rounded-xl p-8 text-center
                shadow-sm hover:shadow-md
                transition
              "
                        >
                            {/* Icon */}
                            <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl">
                                🛡️
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                {service.description}
                            </p>

                            {/* Button */}
                            <button
                                className="
                  mt-6 px-5 py-2 rounded-md text-sm
                  border border-gray-300 dark:border-gray-700
                  text-gray-700 dark:text-gray-300
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  transition
                "
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;
