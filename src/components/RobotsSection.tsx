import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Robot {
  image: string;
  year: string;
  name: string;
  description: string;
  achievements: string[];
}

const robotsData: Robot[] = [
  {
    image: 'https://i.ibb.co/cSTHz86Q/Whats-App-Image-2026-01-24-at-9-11-11-AM.jpg',
    year: '2025-2026 Season Robot',
    name: 'DECODE',
    description: 'Introducing Limitless - this robot features excellence in autonomous programming with PedroPathing and PIDF Tuned Shooter.',
    achievements: ['Malaysia Champion', 'Qualified To Worlds Championship', 'Winning Alliance GOLD'],
  },
  {
    image: 'https://page.gensparksite.com/v1/base64_upload/f59eebaf035501a8977e07887fb87f9a',
    year: '2024-2025 Season Robot',
    name: 'INTO THE DEEP',
    description: 'Our most advanced robot yet, featuring cutting-edge autonomous programming and precision engineering designed for maximum performance in the current season.',
    achievements: ['Malaysia Champion', 'Qualified To World Championship', 'Ready For Worlds Championship'],
  },
  {
    image: 'https://page.gensparksite.com/v1/base64_upload/3fa80f1511e6b8c73f708b3e4e98f6b9',
    year: '2023-2024 Season Robot',
    name: 'CENTERSTAGE',
    description: 'Championship-winning design featuring innovative mechanisms and strategic gameplay that secured many awards.',
    achievements: ['Malaysia Champion', 'Inspire Award', 'Innovate Award'],
  },
  {
    image: 'https://page.gensparksite.com/v1/base64_upload/5693e0ce219c00f3f3324885382e88e1',
    year: '2022-2023 Season Robot',
    name: 'POWERPLAY',
    description: 'Evolution in design showcasing improved mechanical systems and enhanced autonomous capabilities, building on our foundational success.',
    achievements: ['Malaysia Champion', 'Enhanced Design', 'Team Growth'],
  },
  {
    image: 'https://page.gensparksite.com/v1/base64_upload/5fc5493c250bbb13458b5fbbc257654b',
    year: '2021-2022 Season Robot',
    name: 'FREIGHT FRENZY',
    description: 'Our founding robot that marked the beginning of Team Absolute Hack. A breakthrough design that established our competitive foundation and championship aspirations.',
    achievements: ['Malaysia Champion', 'Foundation Robot', 'Team Origins'],
  },
];

export const RobotsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="robots" className="py-24 section-alt">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Our Robots
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {robotsData.map((robot, index) => (
            <motion.div
              key={robot.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-strong rounded-2xl overflow-hidden card-hover group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={robot.image}
                  alt={robot.year}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white font-semibold">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-1">{robot.year}</h3>
                <p className="text-primary font-bold text-xl mb-3">{robot.name}</p>
                <p className="text-muted-foreground text-sm mb-4">{robot.description}</p>
                <div className="flex flex-wrap gap-2">
                  {robot.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
