import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HERO_CONTENT, NAV_LINKS } from "../data";
import RecruiterToggle from "./RecruiterToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-md border-b border-white/5" : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center h-16">
                <a href="#" className="text-xl font-bold tracking-tighter">
                    {HERO_CONTENT.name}<span className="text-accent-cyan">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                        Resume
                    </a>
                    <RecruiterToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <RecruiterToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-accent-cyan transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-primary/95 backdrop-blur-lg border-b border-white/10 p-4 animate-in slide-in-from-top-5">
                    <div className="flex flex-col space-y-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white block py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-cyan hover:text-cyan-300 block py-2 font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
