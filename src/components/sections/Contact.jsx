import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import SectionHeader from '../common/SectionHeader';
import { profile } from '../../data/profile';

const contactLinks = [
    {
        href: `mailto:${profile.email}`,
        icon: Mail,
        label: profile.email,
        ariaLabel: 'Send email',
        external: false,
    },
    {
        href: profile.social.linkedin,
        icon: Linkedin,
        label: 'LinkedIn',
        ariaLabel: 'Visit LinkedIn profile',
        external: true,
    },
    {
        href: profile.social.github,
        icon: Github,
        label: 'GitHub',
        ariaLabel: 'Visit GitHub profile',
        external: true,
    },
    {
        href: profile.social.whatsapp,
        icon: FaWhatsapp,
        label: 'WhatsApp',
        ariaLabel: 'Send WhatsApp message',
        external: true,
    },
];

const Contact = () => (
    <section id="contact" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
            <SectionHeader subtitle="Get in Touch" title="Contact Me" />

            <motion.div
                className="rounded-[20px] p-8 md:p-10"
                style={{
                    background: 'var(--palette-card-background)',
                    boxShadow: 'var(--palette-card-shadow)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                    {contactLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            aria-label={link.ariaLabel}
                            className="w-full max-w-sm inline-flex items-center gap-3 px-6 py-5 rounded-2xl border transition-all hover:-translate-y-0.5"
                            style={{
                                background: 'var(--palette-background-elevated)',
                                borderColor: 'var(--palette-card-border)',
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ boxShadow: 'var(--palette-card-hoverShadow)' }}
                        >
                            <span
                                className="w-9 h-9 rounded-full flex items-center justify-center"
                                style={{
                                    background: 'var(--palette-action-hover)',
                                    color: 'var(--palette-text-primary)',
                                }}
                            >
                                <link.icon className="w-5 h-5" />
                            </span>
                            <span
                                className="font-medium"
                                style={{ color: 'var(--palette-text-secondary)' }}
                            >
                                {link.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default Contact;
