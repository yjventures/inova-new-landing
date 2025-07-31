'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const clientLogos = [
  { name: 'TechsDen', logo: 'TechsDen' },
  { name: 'Ideal Solutions', logo: 'Ideal Solutions' },
  { name: 'Globmobi', logo: 'Globmobi' },
  { name: 'Colab Cloud', logo: 'Colab Cloud' },
  { name: 'SB Infowave', logo: 'SB Infowave' },
  { name: 'Canadian University Dubai', logo: 'Canadian University Dubai' },
  { name: 'Maveric', logo: 'Maveric' },
  { name: 'Passageway Consultancy', logo: 'Passageway Consultancy' },
  { name: 'Code', logo: 'Code' },
  { name: 'Data Serve', logo: 'Data Serve' },
  { name: 'MultiMedia Group', logo: 'MultiMedia Group' },
  { name: 'Smart Age', logo: 'Smart Age' },
  { name: 'Green Circle', logo: 'Green Circle' },
  { name: 'SITI', logo: 'SITI' },
  { name: 'Cloned Reality', logo: 'Cloned Reality' },
  { name: 'Proximo', logo: 'Proximo' },
  { name: 'Seed Technologies', logo: 'Seed Technologies' },
  { name: 'IKTIS', logo: 'IKTIS' },
  { name: 'Innoarea', logo: 'Innoarea' },
];

const PartnersCarouselSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Duplicate the array for smooth infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  useEffect(() => {
    if (containerRef.current) {
      // Total width of the unique logo list (not duplicated)
      const container = containerRef.current;
      let total = 0;
      Array.from(container.children).slice(0, clientLogos.length).forEach(child => {
        total += (child as HTMLElement).offsetWidth + 32; // 32px for gap-8 (8*4)
      });
      setScrollWidth(total);
    }
  }, []);

  return (
    <section className="py-20 bg-backgroundDark">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ width: '80%' }}>
        <div className="text-center mb-5">
          <span className="text-transparent bg-clip-text bg-accentGradient text-3xl font-bold font-jakarta">
            Our Existing Partners
          </span>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-textSecondary text-lg text-center max-w-2xl mx-auto mb-10"
        >
          Trusted by forward-thinking organizations across industries. Here are the partners powering the Inova ecosystem.
        </motion.p>

        {/* Logo Carousel with fade gradients */}
        <div className="relative overflow-x-hidden overflow-y-visible">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-backgroundDark to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-backgroundDark to-transparent pointer-events-none z-10" />

          <motion.div
            ref={containerRef}
            animate={{ x: [0, -scrollWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
            className="flex gap-8 md:gap-12 py-2"
            style={{ willChange: 'transform' }}
          >
            {duplicatedLogos.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="px-6 h-16 surface-card rounded-lg inline-flex items-center justify-center border border-borderSubtle hover:border-accentPurple/30 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  <div className="font-jakarta font-bold text-2xl text-textSecondary group-hover:text-accentPurple transition-colors duration-300">
                    {client.logo}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarouselSection;
