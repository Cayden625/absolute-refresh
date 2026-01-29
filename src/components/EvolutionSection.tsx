import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineData = [
  {
    season: '1st Season - The Beginning',
    year: '2021-2022',
    description: 'Our journey began with nine dedicated founding members: Calvin, Xin Ru, Kai Chuen, Kai Jie, Yee Sheng, Zi Zheng, Jing Song, Jun Sheng. Starting from scratch, we learned the fundamentals of FTC robotics, built our first robot, and established the foundation of Team Absolute Hack.',
    achievements: ['Team Formation', 'First Robot Build', 'Competition Debut', '2021/2022 Robot Malaysia Championship'],
    isActive: false,
  },
  {
    season: '2nd Season - Growth & Excellence',
    year: '2022-2023',
    description: 'This Season they started to understand the Game of FTC.',
    achievements: ['Inspire Award', 'Innovate Award', 'Alliance Captains', 'Team Expansion', '2022/2023 Robot Malaysia Championship'],
    isActive: false,
  },
  {
    season: '3rd Season - Championship Excellence',
    year: '2023-2024',
    description: 'We achieved new heights with championship victories and continued innovation.',
    achievements: ['2023/2024 Robot Malaysia Championship', 'Advanced Programming', 'Enhanced CAD Design', 'Community Impact'],
    isActive: false,
  },
  {
    season: '4th Season 2024/2025',
    year: '2024-2025',
    description: 'This season marks a new achievement for Absolute Hack winning Inspire Award 1st and have qualified to World Championship in Houston, Texas',
    achievements: ['2024/2025 Robot Malaysia Championship', 'New Achievements', 'International Preparation'],
    isActive: true,
  },
  {
    season: 'Current Season 2025/2026',
    year: '2025-2026',
    description: 'Once again Team Absolute Hack has qualified to World Championship with the Highest Ranking Score, Inspire Award 2nd and Winning alliance partner.',
    achievements: ['2025/2026 Robot Malaysia Championship', 'Successfully continue the legacy of Team Absolute Hack', 'International Preparation'],
    isActive: true,
  },
];

export const EvolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="evolution" className="py-24 section-alt">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Our Evolution
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.season}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline marker */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10">
                <div className={`w-full h-full rounded-full ${
                  item.isActive 
                    ? 'bg-primary timeline-marker-active' 
                    : 'bg-primary/50 border-4 border-background'
                }`} />
              </div>

              {/* Content */}
              <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-strong rounded-2xl p-6 card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge-achievement">{item.year}</span>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">{item.season}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
