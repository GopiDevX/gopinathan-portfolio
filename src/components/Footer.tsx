import { CONTACT_INFO, NAV_LINKS } from "../data";

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-white/5 bg-black/40 backdrop-blur-xl">
            <div className="max-w-screen-2xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <a href="#" className="text-2xl font-bold tracking-tighter text-white block">
                            Gopinathan M<span className="text-accent-cyan">.</span>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building scalable, secure, and intelligent web applications.
                            Focused on creating impactful digital experiences with modern technologies.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="text-gray-400">Full Stack Development</li>
                            <li className="text-gray-400">UI/UX Design</li>
                            <li className="text-gray-400">API Integration</li>
                            <li className="text-gray-400">Performance Optimization</li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Navigation</h4>
                        <ul className="space-y-3 text-sm">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent-cyan transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Connect</h4>
                        <div className="space-y-4">
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                className="block text-gray-400 hover:text-accent-cyan transition-colors text-sm"
                            >
                                {CONTACT_INFO.email}
                            </a>
                            <div className="flex gap-4">
                                {CONTACT_INFO.socials.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-lg hover:bg-white/10"
                                            aria-label={social.platform}
                                        >
                                            <Icon size={18} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8">
                    <p className="text-gray-600 text-sm text-center">
                        &copy; {new Date().getFullYear()} Gopinathan M. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
