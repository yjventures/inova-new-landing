'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react'

interface TeamMember {
  photoSrc: string
  name: string
  title: string
  bio: string
  linkedInHref: string
}

const LeadershipSection = () => {
  const [expandedBios, setExpandedBios] = useState<{ [key: number]: boolean }>({})

  const teamMembers: TeamMember[] = [
    {
      photoSrc: "/images/team/member-1.jpg",
      name: "Alex Zara",
      title: "Founder & CEO",
      bio: "Visionary leader with 20+ years in enterprise software and AI. Previously led engineering teams at major tech companies and holds multiple patents in machine learning architectures. Passionate about democratizing AI for enterprises.",
      linkedInHref: "https://linkedin.com/in/alexzara"
    },
    {
      photoSrc: "/images/team/member-1.jpg", // Reusing for demo
      name: "Sarah Chen",
      title: "CTO & Co-Founder",
      bio: "Former Principal Engineer at Google AI with deep expertise in large language models and distributed systems. PhD in Computer Science from Stanford, published researcher in AI ethics and safety.",
      linkedInHref: "https://linkedin.com/in/sarahchen"
    },
    {
      photoSrc: "/images/team/member-1.jpg", // Reusing for demo
      name: "Michael Rodriguez",
      title: "Chief Product Officer",
      bio: "Product strategy expert with 15+ years building enterprise platforms. Former VP of Product at Salesforce, where he led the AI Platform team. Known for turning complex AI capabilities into intuitive user experiences.",
      linkedInHref: "https://linkedin.com/in/michaelrodriguez"
    },
    {
      photoSrc: "/images/team/member-1.jpg", // Reusing for demo
      name: "Dr. Priya Patel",
      title: "Head of AI Research",
      bio: "Leading AI researcher with expertise in natural language processing and conversational AI. Former Research Scientist at OpenAI, published 30+ papers in top-tier conferences. Drives innovation in AI agent architectures.",
      linkedInHref: "https://linkedin.com/in/priyapatel"
    },
    {
      photoSrc: "/images/team/member-1.jpg", // Reusing for demo
      name: "James Thompson",
      title: "VP of Engineering",
      bio: "Engineering leader with expertise in scalable cloud architectures and DevOps. Previously built infrastructure systems at AWS and Microsoft Azure. Ensures our platform can handle enterprise-scale workloads.",
      linkedInHref: "https://linkedin.com/in/jamesthompson"
    },
    {
      photoSrc: "/images/team/member-1.jpg", // Reusing for demo
      name: "Lisa Wang",
      title: "Head of Customer Success",
      bio: "Customer experience expert who ensures our clients achieve maximum value from AI implementations. Former Director at Zendesk, specialized in enterprise customer onboarding and success metrics.",
      linkedInHref: "https://linkedin.com/in/lisawang"
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
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
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
            <span className="text-transparent bg-clip-text bg-accentGradient">Leadership</span>
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Meet the visionary leaders driving innovation at Inova AI Solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="surface-card p-6 border border-borderSubtle hover:border-accentPurple/50 transition-all duration-300 relative overflow-hidden">
                {/* LinkedIn Icon - Initially Hidden */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute top-4 right-4 z-10"
                >
                  <Link
                    href={member.linkedInHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-surfaceCard border border-borderSubtle rounded-lg flex items-center justify-center text-textSecondary hover:text-accentPurple hover:border-accentPurple transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </motion.div>

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
                <div className="text-center space-y-3">
                  <h3 className="font-jakarta font-semibold text-xl text-textPrimary group-hover:text-accentPurple transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-textSecondary font-medium">
                    {member.title}
                  </p>
                  
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

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="surface-card p-8 max-w-2xl mx-auto border border-borderSubtle">
            <h3 className="font-jakarta font-bold text-2xl text-textPrimary mb-4">
              Join Our Team
            </h3>
            <p className="text-textSecondary mb-6">
              We're always looking for talented individuals who share our passion for AI innovation.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center text-accentPurple hover:text-white transition-colors duration-200 font-semibold"
            >
              View Open Positions
              <span className="ml-2">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LeadershipSection
