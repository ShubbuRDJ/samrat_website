import { useNavigate } from "react-router-dom";
import Reveal from "../common/Reveal";
import { routeConstants } from "../../constants/routeConstants";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <img
                src="https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc"
                alt="Security"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 py-32 text-white">

                {/* Heading */}
                <Reveal>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Professional Security <br />
                        <span className="text-secondary">Forces You Trust</span>
                    </h1>
                </Reveal>

                {/* Description */}
                <Reveal delay={150}>
                    <p className="mt-6 max-w-xl text-gray-200">
                        Highly trained security personnel for events, corporate
                        functions, and total protection.
                    </p>
                </Reveal>

                {/* CTA Buttons */}
                <Reveal delay={300}>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="bg-secondary text-black px-6 py-3 rounded-lg hover:opacity-90 transition" onClick={() => navigate(routeConstants?.CONTACT_URL)}>
                            Hire Security Now
                        </button>

                        <button className="border border-white/70 px-6 py-3 rounded-lg hover:bg-white/10 transition" onClick={() => navigate(routeConstants?.SERVICES_URL)}>
                            View Services
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Hero;
