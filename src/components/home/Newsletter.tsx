import Reveal from "../common/Reveal";

const Newsletter = () => {
    return (
        <section className="bg-gray-200 dark:bg-gray-800 py-20">
            <div className="max-w-xl mx-auto text-center px-4">

                {/* Heading */}
                <Reveal>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Secure Your Peace of Mind
                    </h2>
                </Reveal>

                {/* Subtitle */}
                <Reveal delay={120}>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        Stay updated on our security services
                    </p>
                </Reveal>

                {/* Input */}
                <Reveal delay={240}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="mt-6 w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                </Reveal>

                {/* Button */}
                <Reveal delay={360}>
                    <button className="mt-4 bg-secondary hover:bg-primary text-black hover:text-white px-6 py-3 rounded-lg transition">
                        Submit Your Inquiry
                    </button>
                </Reveal>
            </div>
        </section>
    );
};

export default Newsletter;
