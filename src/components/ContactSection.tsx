import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'absolutehack10@gmail.com',
    href: 'mailto:absolutehack10@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+60175422321',
    href: 'tel:+60175422321',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Malaysia',
    href: null,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@ftc.absolutehack.28028',
    href: 'https://www.instagram.com/ftc.absolutehack.28028/',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'absolutehack10',
    href: 'https://www.facebook.com/absolutehack10',
  },
  {
    icon: ExternalLink,
    label: 'All Matches Results And Achievements',
    value: '28028 Absolute Hack FTCScout',
    href: 'https://ftcscout.org/teams/28028',
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 section-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-8 text-gradient"
        >
          Contact Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h3 className="font-display font-semibold text-2xl mb-4">Get In Touch</h3>
          <p className="text-muted-foreground">
            Have questions about our team, want to sponsor us, or interested in FTC robotics? We'd love to hear from you! Reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-strong rounded-2xl p-6 card-hover flex items-start gap-4 h-full group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">{item.label}</h4>
                    <p className="text-primary group-hover:underline text-sm">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="glass-strong rounded-2xl p-6 flex items-start gap-4 h-full">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">{item.label}</h4>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
