const Newsletter = () => {
    return (
        <section className="bg-gray-200 dark:bg-gray-800 py-20">
            <div className="max-w-xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold dark:text-white">
                    Secure Your Peace of Mind
                </h2>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                    Stay updated on our security services
                </p>

                <input
                    type="email"
                    placeholder="Enter your email address"
                    className="mt-6 w-full px-4 py-3 rounded-md border focus:outline-none"
                />

                <button className="mt-4 bg-secondary hover:bg-primary text-black hover:text-white px-6 py-3 rounded-lg">
                    Submit Your Inquiry
                </button>
            </div>
        </section>
    );
};

export default Newsletter;
