import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface GalleryItem {
  image: string;
  title: string;
  subtitle: string;
  category: 'competitions' | 'team' | 'robots';
}

const galleryData: GalleryItem[] = [
  { image: 'https://page.gensparksite.com/v1/base64_upload/c43c40a81807d9f96a621acc6e46259d', title: 'Regional Competition', subtitle: 'Inspire Award Winners', category: 'competitions' },
  { image: 'https://page.gensparksite.com/v1/base64_upload/91e1b6e2a3525a9f2997f0562f4e2a3d', title: 'Innovation Award Ceremony', subtitle: 'Innovate Award Winners', category: 'team' },
  { image: 'https://page.gensparksite.com/v1/base64_upload/48ebc29da1507ea46c49f8bce8581df1', title: 'Award-Winning Robot', subtitle: '2023-2024 CENTERSTAGE', category: 'robots' },
  { image: 'https://page.gensparksite.com/v1/base64_upload/c43c40a81807d9f96a621acc6e46259d', title: 'Award Ceremony', subtitle: 'Multiple Awards Won', category: 'competitions' },
  { image: 'https://page.gensparksite.com/v1/base64_upload/54ba733b8610ef76cbcb8596e7e1a712', title: 'Team Structure', subtitle: 'Organized Excellence', category: 'team' },
  { image: 'https://page.gensparksite.com/v1/base64_upload/6b00041cd93a827397a8cc2afd854e97', title: 'Competition Action', subtitle: '2022-2023 POWERPLAY', category: 'robots' },
  { image: 'https://page.gensparksite.com/v1/base64_upload/6abb0deadb671b71b51ca0aac629ab77', title: 'Foundation Robot', subtitle: '2021-2022 FREIGHT FRENZY', category: 'robots' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'competitions', label: 'Competitions' },
  { id: 'team', label: 'Team' },
  { id: 'robots', label: 'Robots' },
];

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredItems = activeCategory === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 section-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
        >
          Gallery
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="relative group aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h4 className="text-white font-display font-semibold text-sm">{item.title}</h4>
                <p className="text-white/80 text-xs">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
