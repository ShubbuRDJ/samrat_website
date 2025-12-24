import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";

const serviceCards = [
    {
        title: 'Event Security Services',
        desc:
            'Professional security for parties, weddings, concerts, and special events. Our trained personnel ensure smooth crowd management and safety.',
        points: [
            'Crowd Control',
            'Access Management',
            'Emergency Response',
            'VIP Protection',
        ],
        icon: '🎉',
    },
    {
        title: 'Corporate Security Solutions',
        desc:
            'Comprehensive security services for corporate events, conferences, meetings, and business functions with professional discretion.',
        points: [
            'Executive Protection',
            'Facility Security',
            'Event Coordination',
            'Risk Assessment',
        ],
        icon: '🏢',
    },
    {
        title: 'Professional Bouncers for Hire',
        desc:
            'Experienced bouncers for clubs, bars, private parties, and venues requiring specialized crowd control and safety management.',
        points: [
            'Door Control',
            'Conflict Resolution',
            'Safety Monitoring',
            'Venue Protection',
        ],
        icon: '🧍',
    },
    {
        title: 'Personal Security Guards',
        desc:
            'Dedicated security personnel for personal protection, residential security, and individual safety requirements.',
        points: [
            'Personal Protection',
            'Residential Security',
            'Escort Services',
        ],
        icon: '🛡️',
    },
    {
        title: 'Emergency Response Team',
        desc:
            'Rapid response security team for urgent situations, emergency events, and immediate security deployment needs.',
        points: [
            'Rapid Deployment',
            'Crisis Management',
            'Emergency Protocols',
        ],
        icon: '🚨',
    },
    {
        title: '24/7 Security Coverage',
        desc:
            'Round-the-clock security services for continuous protection, ongoing events, and extended security requirements.',
        points: [
            'Continuous Coverage',
            'Shift Management',
            'Night Security',
        ],
        icon: '⏰',
    },
];

const Services = () => {
    return (
        <>
            {/* INTRO */}
            <section className="bg-gray-50 dark:bg-gray-950 py-20">
                <Container>
                    <Reveal>
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                                Professional Security Services
                            </h1>

                            <p className="mt-6 text-gray-600 dark:text-gray-400">
                                Comprehensive security solutions tailored to meet your specific
                                needs. From event security to corporate protection, we deliver
                                excellence in every assignment.
                            </p>
                        </div>
                    </Reveal>
                </Container>
            </section>

            {/* FEATURED SERVICE */}
            <section className="bg-white dark:bg-darkSurface py-20">
                <Container>
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center">

                        <Reveal>
                            <img
                                src="https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU"
                                alt="Event Security"
                                className="rounded-xl w-full object-cover"
                            />
                        </Reveal>

                        <Reveal delay={150}>
                            <div>
                                <span className="inline-block bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full mb-4">
                                    Most Popular
                                </span>

                                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                                    Event Security Specialists
                                </h2>

                                <p className="mt-4 text-gray-600 dark:text-gray-400">
                                    Our most requested service – professional event security that
                                    ensures your guests feel safe while maintaining the perfect
                                    atmosphere for your special occasion.
                                </p>

                                <div className="mt-6 flex gap-4">
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl px-6 py-4 text-center">
                                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                            500+
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Events Secured
                                        </div>
                                    </div>

                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl px-6 py-4 text-center">
                                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                            100%
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Client Satisfaction
                                        </div>
                                    </div>
                                </div>

                                <button className="mt-8 w-full bg-primary dark:bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
                                    Get Event Security Quote
                                </button>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* SERVICE CARDS */}
            <section className="bg-gray-100 dark:bg-gray-950 py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceCards.map((service, index) => (
                            <Reveal key={service.title} delay={index * 120}>
                                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 h-full">
                                    <div className="w-12 h-12 mb-4 rounded-lg bg-primary text-white flex items-center justify-center text-xl">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                                        {service.desc}
                                    </p>

                                    <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        {service.points.map(p => (
                                            <li key={p}>• {p}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="bg-gray-700 py-20">
                <Container>
                    <Reveal>
                        <div className="rounded-3xl bg-primaryDark px-8 py-16 text-center text-white">
                            <h2 className="text-3xl font-bold">
                                Need Custom Security Solutions?
                            </h2>

                            <p className="mt-4 max-w-2xl mx-auto text-gray-200">
                                Every security requirement is unique. Contact us to discuss your
                                specific needs and get a customized security plan that fits your
                                event or business perfectly.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-medium">
                                    Get Custom Quote
                                </button>

                                <button className="bg-white/20 px-8 py-3 rounded-lg">
                                    Call Now: +91-8550909909
                                </button>
                            </div>
                        </div>
                    </Reveal>
                </Container>
            </section>
        </>
    );
};

export default Services;
