const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-6 py-14">
                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* LEFT */}
                    <div>
                        <img
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/A3Q7v1xZJOIXpkq9/chatgpt-image-aug-12-2025-06_41_13-pm-AMq8eORNgJsgxL3l.png"
                            alt="Rishiraj Security Force"
                            className="h-20 mb-6"
                        />

                        <p className="text-gray-300 text-sm max-w-xs">
                            Your reliable source for security services.
                        </p>

                        {/* Social icon */}
                        <div className="mt-6">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm8.5 1.5h-8.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a1.13 1.13 0 110 2.26 1.13 1.13 0 010-2.26z" />
                                </svg>
                            </span>
                        </div>

                    </div>

                    {/* MIDDLE */}
                    <div>
                        <h4 className="font-semibold tracking-wide mb-4">
                            CONTACT
                        </h4>

                        <p className="text-gray-300 mb-2">
                            +91-8550909909
                        </p>

                        <p className="text-gray-300">
                            info@rishirajsecurityforce.in
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <h4 className="font-semibold tracking-wide mb-4">
                            TO KNOW MORE
                        </h4>

                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="w-full px-4 py-3 rounded-md text-black mb-4"
                        />

                        <button className="bg-secondary hover:bg-blue-700 transition px-6 py-3 rounded-full hover:text-white text-black">
                            Submit Your Inquiry
                        </button>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 text-sm text-gray-400">
                    © 2025. All rights reserved. Designed & Developed by Hexamad Digital.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
