import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-primary dark:bg-darkSurface text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
                {/* Logo */}
                <img
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/A3Q7v1xZJOIXpkq9/chatgpt-image-aug-12-2025-06_41_13-pm-AMq8eORNgJsgxL3l.png"
                    alt="Logo"
                    className="h-16"
                />

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-10 text-sm font-medium">
                    {navItems.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `relative pb-1 transition ${isActive ? 'text-secondary' : 'hover:text-secondary'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {item.label}
                                    {isActive && (
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-secondary rounded-full" />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Desktop Dark Mode */}
                <div className="hidden md:block">
                    <DarkModeToggle />
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(prev => !prev)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary dark:bg-darkSurface border-t border-white/10">
                    <nav className="flex flex-col px-6 py-6 gap-6">
                        {navItems.map(item => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-base font-medium ${isActive
                                        ? 'text-secondary'
                                        : 'text-white hover:text-secondary'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        {/* Mobile Dark Mode */}
                        <div className="pt-4 border-t border-white/10">
                            <DarkModeToggle />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
