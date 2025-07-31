'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface TeamMember {
  photoSrc: string
  name: string
  title: string
  bio: string
  linkedInHref: string
}

const LeadershipSection = () => {
  const [expandedBios, setExpandedBios] = useState<{ [key: number]: boolean }>({})

  // New order!
  const teamMembers: TeamMember[] = [
    {
      photoSrc: "/images/team/youssef_headshot.png",
      name: "Youssef Jalloul",
      title: "Founder & CEO",
      bio: "A renowned entrepreneur with over 18 years of experience in the tech industry, Youssef has successfully launched his own StartUps, Accelerator, and mentored over 400 entrepreneurs and 70+ startups.",
      linkedInHref: "https://www.linkedin.com/in/youssef-jalloul/"
    },
    {
      photoSrc: "/images/team/mazen_headshot.png",
      name: "Mazen Matar",
      title: "Co-Founder & CRO",
      bio: "Mazen brings 18+ years of leadership, having scaled cloud and enterprise tech at ZAINTECH, OMAN DATA PARK, and beyond with proven growth and sales strategy expertise.",
      linkedInHref: "https://www.linkedin.com/in/mazenmattar/"
    },
    {
      photoSrc: "/images/team/abrar_headshot.png",
      name: "Abrar Anwar",
      title: "CTO",
      bio: "Abrar is a fintech-focused Fullstack expert leading a team of developers, building scalable systems and digital solutions with over 10 years of hands-on tech leadership.",
      linkedInHref: "https://www.linkedin.com/in/abrar-anwar92/"
    },
    {
      photoSrc: "/images/team/emile_headshot.png",
      name: "Emile Sawaya",
      title: "Chief of Product and RND",
      bio: "Emile is a Techstars alum who’s built, scaled, and exited multiple tech products, combining global vision with deep expertise in innovation and product strategy.",
      linkedInHref: "https://www.linkedin.com/in/emile-sawaya/"
    }
  ]

  const toggleBio = (index: number) => {
    setExpandedBios(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const getTruncatedBio = (bio: string, maxLength: number = 120) => {
    if (bio.length <= maxLength) return bio
    return bio.substring(0, maxLength).trim() + '...'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="py-20 bg-backgroundDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-6">
            <span className="text-transparent bg-clip-text bg-accentGradient">The Brilliant Minds Behind Inova</span>
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Meet the people behind the mission at Inova AI Solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group h-full flex flex-col items-stretch"
            >
              <div className="surface-card p-6 border border-borderSubtle hover:border-accentPurple/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                {/* LinkedIn Icon - Always visible on card hover */}
                <div
                  className="
                    absolute top-4 right-4 z-10 
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                >
                  <Link
                    href={member.linkedInHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-surfaceCard border border-borderSubtle rounded-lg flex items-center justify-center text-textSecondary hover:text-accentPurple hover:border-accentPurple transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>

                {/* Photo */}
                <div className="mb-6 relative">
                  <div className="w-24 h-24 mx-auto relative overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-accentPurple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={member.photoSrc}
                      alt={`${member.name} - ${member.title}`}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    {/* Purple glow effect on hover */}
                    <div className="absolute inset-0 rounded-full shadow-lg shadow-accentPurple/0 group-hover:shadow-accentPurple/30 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-2 flex-1 flex flex-col justify-start">
                  <h3 className="font-jakarta font-semibold text-xl text-textPrimary group-hover:text-accentPurple transition-colors duration-300">
                    {member.name}
                  </h3>
                  {member.title && (
                    <p className="text-textSecondary font-medium">
                      {member.title}
                    </p>
                  )}
                  <div className="text-left">
                    <p className="text-textSecondary text-sm leading-relaxed">
                      {expandedBios[index] ? member.bio : getTruncatedBio(member.bio)}
                    </p>
                    {member.bio.length > 120 && (
                      <button
                        onClick={() => toggleBio(index)}
                        className="mt-2 flex items-center text-accentPurple hover:text-white text-sm font-medium transition-colors duration-200"
                      >
                        {expandedBios[index] ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="h-4 w-4 ml-1" />
                          </>
                        ) : (
                          <>
                            <span>Read More</span>
                            <ChevronDown className="h-4 w-4 ml-1" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accentPurple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LeadershipSection
