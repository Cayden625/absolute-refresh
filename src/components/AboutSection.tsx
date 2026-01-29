import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, BookOpen, ExternalLink, Trophy, Medal, Star, Rocket } from 'lucide-react';

const aboutCards = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To inspire innovation, foster collaboration, and develop the next generation of STEM leaders through competitive robotics excellence.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be a leading FTC team that consistently pushes the boundaries of engineering design, programming innovation, and team collaboration while maintaining the highest standards of gracious professionalism.',
  },
  {
    icon: BookOpen,
    title: 'Origin Story',
    description: 'Founded with a passion for robotics and a commitment to excellence, Team 28028 Absolute Hack was born from the belief that through dedication, innovation, and teamwork, we can achieve the absolute best in everything we do.',
  },
];

const achievements = [
  { icon: Trophy, title: 'Inspire Award Winner', subtitle: 'Regional Competition' },
  { icon: Medal, title: 'Innovate Award Winner', subtitle: 'Multiple Competitions' },
  { icon: Star, title: 'Alliance Captains', subtitle: 'Consistent Performance' },
  { icon: Rocket, title: 'Technical Excellence', subtitle: 'Advanced Programming & CAD' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          About Us
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Cards */}
          <div className="space-y-6">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className="glass-strong rounded-2xl p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* FTC Scout Link */}
            <motion.a
              href="https://ftcscout.org/teams/28028"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="glass-strong rounded-2xl p-6 card-hover flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-primary/10">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-xl mb-1">All Matches Performance And Awards</h3>
                <p className="text-primary group-hover:underline">28028 Absolute Hack FTCScout →</p>
              </div>
            </motion.a>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-strong rounded-2xl p-8"
          >
            <h3 className="font-display font-semibold text-2xl mb-8 text-center">Our Achievements</h3>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-sm mb-1">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
