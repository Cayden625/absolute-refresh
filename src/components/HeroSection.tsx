import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-hero-gradient overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern opacity-50" />
      
      {/* Floating circles decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4"
            >
              FTC Team 28028
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground/70 mb-6"
            >
              ABSOLUTE HACK
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-primary/80 font-medium mb-8"
            >
              Innovating, Competing, Winning
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8"
              >
                <a href="#team">Meet the Team</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 font-semibold rounded-full px-8"
              >
                <a href="#robots">Our Robots</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 font-semibold rounded-full px-8"
              >
                <a href="#gallery">Gallery</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
              <img
                src="https://page.gensparksite.com/v1/base64_upload/37f33f826ae0c7aa3fa8e396e53a1f3c"
                alt="Absolute Hack Logo"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Countdown Timer */}
        <div className="mt-16">
          <CountdownTimer />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.a>
    </section>
  );
};
