import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  funFact: string;
  image: string;
}

interface TeamSeason {
  title: string;
  members: TeamMember[];
}

const teamData: TeamSeason[] = [
  {
    title: '2nd Season Members',
    members: [
      { name: 'Xing Ern', role: 'Team Lead', specialty: 'Mechanical & Finance', funFact: 'Passionate about innovative design solutions', image: 'https://page.gensparksite.com/v1/base64_upload/3f135af68ebd329db3b9346f034b6bcf' },
      { name: 'Kai Xin', role: 'Mechanical Engineer', specialty: 'Electrical Design', funFact: 'Expert in electrical systems and circuit design', image: 'https://page.gensparksite.com/v1/base64_upload/fe7ef9876f361e1bb7e4ee1b233563f2' },
      { name: 'Xin Bing', role: 'Programmer', specialty: 'Programming & Mechanical Design', funFact: 'Loves combining code with mechanical innovation', image: 'https://page.gensparksite.com/v1/base64_upload/23efdf44f8fde7a792424f013436cf78' },
      { name: 'Phee Jun', role: 'CAD Designer', specialty: 'Mechanical CAD & Outreach', funFact: 'Creates precise 3D models and loves community engagement', image: 'https://page.gensparksite.com/v1/base64_upload/f3ee09d52bd47749d095e0da93b12eb7' },
      { name: 'Caryn', role: 'Finance Manager', specialty: 'Mechanical Finance Portfolio', funFact: 'Balances budgets with engineering excellence', image: 'https://page.gensparksite.com/v1/base64_upload/e0b316375636b2f4a6cd6530a2ce177c' },
    ],
  },
  {
    title: '1st Season Members',
    members: [
      { name: 'Brian', role: 'Programmer', specialty: 'Mechanical Programming & CAD', funFact: 'Pioneer member with exceptional programming skills', image: 'https://page.gensparksite.com/v1/base64_upload/13f97fa8b28787113cb6255257331790' },
      { name: 'Wei Sheng', role: 'Programmer', specialty: 'Mechanical Programming', funFact: 'Core programming team member since day one', image: 'https://page.gensparksite.com/v1/base64_upload/586a78f47567e036555cb20e2c21c62b' },
      { name: 'Yee Keat', role: 'Outreach Coordinator', specialty: 'Mechanical Outreach', funFact: 'Passionate about community engagement and robotics education', image: 'https://page.gensparksite.com/v1/base64_upload/b9a225af88493f1003c9cff8b01cc8fd' },
      { name: 'Boon Hee', role: 'Finance Officer', specialty: 'Mechanical Finance', funFact: 'Manages team resources with precision and care', image: 'https://page.gensparksite.com/v1/base64_upload/a8a23d97c781992b78b403da67022aa1' },
      { name: 'Yu Zhe', role: 'Volunteer', specialty: 'Mechanical', funFact: 'Helps out the team', image: 'https://page.gensparksite.com/v1/base64_upload/cc41c1a50b21ae17980fc88c376225a4' },
      { name: 'Wei Zen', role: 'Volunteer', specialty: 'Mechanical, Research', funFact: 'Helps out the team & has a passion for dancing', image: 'https://page.gensparksite.com/v1/base64_upload/942acda5e1f79e7b4f8c24ca44f80614' },
    ],
  },
  {
    title: 'Past Season Members',
    members: [
      { name: 'Calvin', role: '2024/2025 Team Leader', specialty: 'Mechanical Programming & CAD', funFact: 'A great team leader that brought his team to the Worlds Championship', image: 'https://page.gensparksite.com/v1/base64_upload/bbecda67958229bb17802169faade488' },
      { name: 'Kai Chuen', role: '2022/2023 Team Leader', specialty: 'Mechanical Programming', funFact: 'Core programming team member since day one', image: 'https://page.gensparksite.com/v1/base64_upload/acc9fd7e23ad2bdd973b7ac3cfc3cc21' },
      { name: 'Xin Ru', role: 'Programming', specialty: 'Programming CAD', funFact: 'The main programmer for the championship.', image: 'https://page.gensparksite.com/v1/base64_upload/7d5a522156c66c209c442b34cd4b1b53' },
      { name: 'Kai Jie', role: 'Electrical', specialty: 'Mechanical Electrical', funFact: 'Research on electrical to make sure the parts can work at its peak', image: 'https://page.gensparksite.com/v1/base64_upload/86648524772b4dfd4345e025e034def5' },
      { name: 'Yee Sheng', role: 'Electrical', specialty: 'Mechanical Coach', funFact: 'Teach new members', image: 'https://page.gensparksite.com/v1/base64_upload/1fc00fc28f274bd5cdf7687b585f94a4' },
      { name: 'Zi Zheng', role: '2023/2024 Team Leader', specialty: 'Mechanical', funFact: 'Lead the team to many awards', image: 'https://page.gensparksite.com/v1/base64_upload/f28885b365ab9075868c3471e9291a24' },
      { name: 'Selina', role: 'Mechanical', specialty: 'Mechanical Coach', funFact: 'Coach New Members', image: 'https://page.gensparksite.com/v1/base64_upload/4aa40ec235d65cc3314dc4c49e96f04b' },
      { name: 'Jun Sheng', role: '2021/2022 Team Leader', specialty: 'Mechanical', funFact: 'Brought the team through a new adventure', image: 'https://page.gensparksite.com/v1/base64_upload/8531b18bce60c7298cd70e4879b37aba' },
      { name: 'Jing Song', role: 'Mechanical', specialty: 'Mechanical Coach', funFact: 'Coach New Members', image: 'https://page.gensparksite.com/v1/base64_upload/a4ebedeaf91ee14c2daf672c44e3b1c4' },
    ],
  },
  {
    title: 'Coaches',
    members: [
      { name: 'Andrew Yap', role: 'Professional Coach', specialty: 'Technical Leadership & Strategy', funFact: 'Expert in competitive robotics with years of FTC experience', image: 'https://page.gensparksite.com/v1/base64_upload/a0f5b5aef52bc4830c11c4b3ae7deaa5' },
      { name: 'Cikgu Syazwan', role: 'Teacher in Charge', specialty: 'Engineering', funFact: 'Inspiring the next generation of engineers and innovators', image: 'https://page.gensparksite.com/v1/base64_upload/079a4ab2a41597c3f670fdeb0b73abad' },
      { name: 'HP Mentors', role: 'Sponsored Mentors', specialty: 'Mentorship & Guidance', funFact: 'Mentors: Dallas, Calvin, Akhmal, Weng Hoon, Alex, Hannah, Jaden.', image: 'https://page.gensparksite.com/v1/base64_upload/4274f234d8f42df5c962d18d6ddf30ab' },
    ],
  },
];

const MemberCard = ({ member, index }: { member: TeamMember; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    className="glass-strong rounded-2xl overflow-hidden card-hover"
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h4 className="font-display font-semibold text-lg">{member.name}</h4>
      <p className="text-primary font-medium text-sm">{member.role}</p>
      <p className="text-muted-foreground text-xs mt-1">{member.specialty}</p>
      <p className="text-xs text-foreground/70 mt-2 italic">{member.funFact}</p>
    </div>
  </motion.div>
);

export const TeamSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="py-24 section-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-8 text-gradient"
        >
          Meet the Team
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full gap-2"
          >
            {isExpanded ? (
              <>
                Hide Members & Coaches <ChevronUp size={20} />
              </>
            ) : (
              <>
                Show Members & Coaches <ChevronDown size={20} />
              </>
            )}
          </Button>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              {teamData.map((season, seasonIndex) => (
                <div key={season.title} className="mb-12">
                  <h3 className="font-display font-semibold text-2xl text-center mb-8 text-primary">
                    {season.title}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {season.members.map((member, memberIndex) => (
                      <MemberCard
                        key={member.name}
                        member={member}
                        index={seasonIndex * 5 + memberIndex}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
