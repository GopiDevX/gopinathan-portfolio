import Section from "../components/Section";

import { CONTACT_INFO } from "../data";

const Contact = () => {
    return (
        <Section id="contact" className="bg-secondary/30">
            <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="max-w-xl mx-auto glass p-8 rounded-2xl">
                <div className="flex justify-center space-x-6 mb-8">
                    {CONTACT_INFO.socials.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-accent-cyan transition-colors"
                                aria-label={social.platform}
                            >
                                <Icon size={32} />
                            </a>
                        );
                    })}
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm mb-2 text-gray-400">Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-cyan outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-sm mb-2 text-gray-400">Email</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-cyan outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-sm mb-2 text-gray-400">Message</label>
                        <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white h-32 focus:border-accent-cyan outline-none transition-colors"></textarea>
                    </div>
                    <button className="w-full bg-accent-cyan text-black font-bold py-3 rounded-lg hover:bg-cyan-400 transition-colors">
                        Send Message
                    </button>
                    <div className="text-center mt-4">
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-gray-400 hover:text-accent-cyan transition-colors">
                            Or email me directly at {CONTACT_INFO.email}
                        </a>
                    </div>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
