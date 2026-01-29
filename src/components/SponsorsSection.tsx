import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

interface Sponsor {
  logo: string;
  name: string;
  description: string;
}

const sponsorsData: Sponsor[] = [
  {
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/HP-Logo.png',
    name: 'HP Manufacturing',
    description: 'Manufactures PCs, printers, and 3D printing solutions.',
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/SMJK_Heng_Ee_Logo.jpg',
    name: 'Heng Ee PIBG',
    description: 'Parent-Teacher Association supporting excellence in education and student development.',
  },
  {
    logo: 'https://www.psdc.org.my/storage/src/training/D3biyqNlgZmx6NkNnk5TaGWTX5FhLtEjjxaNU7mP.jpg',
    name: 'PSDC',
    description: 'The Penang Skills Development Centre (PSDC) is Malaysia\'s first industry-led, non-profit skills training institution. Focusing on upskilling the workforce for the manufacturing and services sectors.',
  },
];

export const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sponsors" className="py-24 section-alt">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-8 text-gradient"
        >
          Our Sponsors
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h3 className="font-display font-semibold text-2xl mb-4">Thank You to Our Amazing Sponsors</h3>
          <p className="text-muted-foreground">
            We are grateful for the support of our sponsors who make our robotics journey possible. Their partnership enables us to compete at the highest level and continue inspiring the next generation of STEM leaders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sponsorsData.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-strong rounded-2xl p-6 text-center card-hover"
            >
              <div className="h-24 flex items-center justify-center mb-4">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">{sponsor.name}</h4>
              <p className="text-muted-foreground text-sm">{sponsor.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="glass-strong rounded-2xl p-8 text-center max-w-2xl mx-auto"
        >
          <h3 className="font-display font-semibold text-2xl mb-4">Interested in Sponsoring Us?</h3>
          <p className="text-muted-foreground mb-6">
            Contact us to learn about our sponsorship packages and how we can work together to inspire young minds in STEM.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
