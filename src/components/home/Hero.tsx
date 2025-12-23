const Hero = () => {
    return (
        <section className="relative">
            <img
                src="https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc"
                alt="Security"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative max-w-7xl mx-auto px-4 py-32 text-white">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Professional Security <br />
                    <span className="text-secondary">Forces You Trust</span>
                </h1>

                <p className="mt-6 max-w-xl text-gray-200">
                    Highly trained security personnel for events, corporate
                    functions, and total protection.
                </p>

                <div className="mt-8 flex gap-4">
                    <button className="bg-secondary text-black px-6 py-3 rounded-lg">
                        Hire Security Now
                    </button>
                    <button className="border px-6 py-3 rounded-lg">
                        View Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
