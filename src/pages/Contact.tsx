import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";

const faqs = [
    {
        q: 'What security services do you offer?',
        a: 'We offer bodyguards, bouncers, armed and unarmed security for various settings including offices and events.',
    },
    {
        q: 'How do I contact you?',
        a: 'You can reach us via our website’s contact form, phone, or email to inquire about our services.',
    },
    {
        q: 'Why choose Rishiraj Security?',
        a: 'We have 18 years of experience, PSARA licensed, and a strong commitment to reliability and professionalism.',
    },
    {
        q: 'Are your services licensed?',
        a: 'Yes, we are PSARA licensed and adhere to industry regulations to ensure trust and professionalism.',
    },
    {
        q: 'Do you provide event security?',
        a: 'Yes, we specialize in providing security services for events with trained professionals.',
    },
    {
        q: 'Where are you located?',
        a: 'We are based in Boisar–Tarapur, Palghar, Maharashtra, serving clients across various sectors.',
    },
];

const Contact = () => {
    return (
        <>
            {/* HERO + FORM */}
            <section className="relative bg-gray-900">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1581090700227-1e37b190418e')",
                    }}
                />

                <div className="relative py-24">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-start">

                            {/* Left Text */}
                            <Reveal>
                                <div className="text-white">
                                    <h1 className="text-4xl font-bold">Contact Us</h1>
                                    <p className="mt-4 text-gray-200 max-w-md">
                                        Get in touch for professional security services in Boisar.
                                    </p>
                                </div>
                            </Reveal>

                            {/* Form Card */}
                            <Reveal delay={150}>
                                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800">
                                    <form className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Your First Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your first name"
                                                className="mt-2 w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Your Email Address*
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email address"
                                                className="mt-2 w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Your Message*
                                            </label>
                                            <textarea
                                                rows={4}
                                                placeholder="Type your message here"
                                                className="mt-2 w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition"
                                        >
                                            Submit Your Inquiry
                                        </button>
                                    </form>
                                </div>
                            </Reveal>
                        </div>
                    </Container>
                </div>
            </section>

            {/* MAP + INFO */}
            <section className="bg-gray-50 dark:bg-gray-950 py-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Info */}
                        <Reveal>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    Hours
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    9 AM – 6 PM
                                </p>

                                <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    Contact
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    +91-8550909909
                                </p>
                            </div>
                        </Reveal>

                        {/* Map */}
                        <Reveal delay={150}>
                            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                                <iframe
                                    title="Rishiraj Security Force Location"
                                    src="https://www.google.com/maps?q=Rishiraj%20Security%20Force%20Boisar&output=embed"
                                    className="w-full h-80"
                                    loading="lazy"
                                />
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section className="bg-white dark:bg-darkSurface py-20">
                <Container>
                    <Reveal>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12">
                            Frequently Asked Questions
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-12">
                        {faqs.map((item, index) => (
                            <Reveal key={item.q} delay={index * 120}>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                                        {item.q}
                                    </h4>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                        {item.a}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Contact;
