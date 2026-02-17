import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Section from "../components/Section";

import { CONTACT_INFO } from "../data";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_id",
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_id",
                formRef.current!,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key"
            );
            alert("Message sent successfully!");
            formRef.current?.reset();
        } catch (error) {
            console.error(error);
            alert("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

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
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm mb-2 text-gray-400">Name</label>
                        <input name="user_name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-cyan outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-sm mb-2 text-gray-400">Email</label>
                        <input name="user_email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-cyan outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-sm mb-2 text-gray-400">Message</label>
                        <textarea name="message" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white h-32 focus:border-accent-cyan outline-none transition-colors"></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-accent-cyan text-black font-bold py-3 rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Sending..." : "Send Message"}
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
