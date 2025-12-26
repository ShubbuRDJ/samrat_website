import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "../common/Reveal";
import { routeConstants } from "../../constants/routeConstants";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Newsletter = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        // ---- Validation ----
        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        // ---- Navigate to Contact with prefilled email ----
        navigate(routeConstants.CONTACT_URL, {
            state: { email },
        });

        // reset local state
        setEmail("");
        setError("");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);

        // clear error dynamically
        if (error) {
            setError("");
        }
    };

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
                        value={email}
                        onChange={handleChange}
                        className={`mt-6 w-full px-4 py-3 rounded-md border bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-secondary
              ${error
                                ? "border-red-500 focus:ring-red-400"
                                : "border-gray-300 dark:border-gray-700"
                            }
            `}
                    />
                </Reveal>

                {/* Error */}
                {error && (
                    <Reveal delay={300}>
                        <p className="mt-2 text-sm text-red-500">{error}</p>
                    </Reveal>
                )}

                {/* Button */}
                <Reveal delay={360}>
                    <button
                        onClick={handleSubmit}
                        className="mt-4 bg-secondary hover:bg-primary text-black hover:text-white px-6 py-3 rounded-lg transition"
                    >
                        Submit Your Inquiry
                    </button>
                </Reveal>
            </div>
        </section>
    );
};

export default Newsletter;