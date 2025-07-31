'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

import Navigation from '@/components/global/Navigation';
import MegaFooter from '@/components/global/MegaFooter';
import ConsentPopup from '@/components/global/ConsentPopup';

export default function HealthcareCaseStudy() {
  // Fade in up animation settings
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Stagger for grid cards
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeCard = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const resultsData = [
    { percent: '40%', text1: 'Reduction', text2: 'In Patient Intake Time', border: 'border-teal-400' },
    { percent: '30%', text1: 'Decrease', text2: 'In Staff Administrative Workload', border: 'border-teal-400' },
    { percent: '60%', text1: 'Reduction', text2: 'In Patient No-Show Rate', border: 'border-teal-400' },
    { percent: '15-Point', text1: 'Increase', text2: 'In Patient Satisfaction Scores', border: 'border-blue-400' },
    { percent: '85%', text1: 'Automation', text2: 'Of Scheduling, Freeing Call Centers', border: 'border-blue-400' },
    { percent: '12', text1: 'Weeks', text2: 'To Full System Deployment', border: 'border-blue-400' },
  ];

  return (
    <main>
      <Navigation />
      <div className="max-w-5xl mx-auto p-4 sm:p-8">

        {/* Hero Title */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            From{' '}
            <span className="bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
              Burnout
            </span>{' '}
            to{' '}
            <span className="bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
              Breakthrough
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            How Inova AI Helps Health System Humanize Patient Care.
          </p>
        </motion.div>

        {/* Challenge Section */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            The Challenge: The High Cost of Inefficiency
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Card 1 */}
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-900/50 mb-4">
                <svg className="h-6 w-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Clinician Burnout</h3>
              <p className="text-sm text-slate-400">Staff spent nearly 50% of their day on administrative tasks, pulling them away from patient care.</p>
            </motion.div>
            {/* Card 2 */}
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-900/50 mb-4">
                <svg className="h-6 w-6 text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.5 4.5 0 0012.001 15a4.5 4.5 0 00-3.182 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75zm-.75 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.75 0h.008v.015h-.008V9.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Poor Patient Experience</h3>
              <p className="text-sm text-slate-400">A 22% appointment no-show rate was driven by confusing processes and long wait times.</p>
            </motion.div>
            {/* Card 3 */}
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-900/50 mb-4">
                <svg className="h-6 w-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Compliance Risks</h3>
              <p className="text-sm text-slate-400">Manual data handling created constant exposure to HIPAA & GDPR violations.</p>
            </motion.div>
            {/* Card 4 */}
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-slate-700 mb-4">
                <svg className="h-6 w-6 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation Gridlock</h3>
              <p className="text-sm text-slate-400">Clinicians had ideas to improve workflows but no tools to build them, creating a major IT bottleneck.</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Solution Section */}
        <motion.section {...fadeInUp} className="mb-16 bg-slate-800/50 rounded-2xl p-8 shadow-2xl border border-slate-700">
          <h2 className="text-3xl font-bold text-center text-white mb-8">The Solution: Inova AI's Intelligent Health Agents</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Feature 1 */}
            <motion.div variants={fadeCard}>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-900/50 mb-4 mx-auto">
                <svg className="h-8 w-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 3.75h.008v.008H12V3.75zm-.75 4.5h1.5v1.5h-1.5v-1.5zm0 3.75h1.5v1.5h-1.5v-1.5zm0 3.75h1.5v1.5h-1.5v-1.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Patient Concierge</h3>
              <p className="text-slate-400">A 24/7, multilingual AI agent providing instant, empathetic support via Web Agent, Call Agent, and WhatsApp Agent.</p>
            </motion.div>
            {/* Feature 2 */}
            <motion.div variants={fadeCard}>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-900/50 mb-4 mx-auto">
                <svg className="h-8 w-8 text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25-2.25 0 012.25-2.25h13.5A2.25-2.25 0 0121 7.5v11.25m-18 0A2.25-2.25 0 005.25 21h13.5A2.25-2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Automated Scheduling</h3>
              <p className="text-slate-400">Patients self-serve to book, reschedule, and complete intake forms digitally, synced directly to the EHR.</p>
            </motion.div>
            {/* Feature 3 */}
            <motion.div variants={fadeCard}>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-900/50 mb-4 mx-auto">
                <svg className="h-8 w-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Compliance as a Service</h3>
              <p className="text-slate-400">End-to-end encryption and a verifiable audit trail ensures you are always "audit-ready."</p>
            </motion.div>
          </motion.div>
          <motion.div {...fadeInUp} className="mt-10 bg-slate-700/50 p-6 rounded-lg text-center border border-slate-600">
            <h4 className="font-bold text-lg text-white">Empowering Your Experts: The Best of Both Worlds</h4>
            <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-6">
              <p className="text-slate-300">
                <span className="text-blue-400 font-bold">No-Code Interface:</span> For clinicians to build workflows they need, fast.
              </p>
              <div className="h-6 w-px bg-slate-600 hidden md:block" />
              <p className="text-slate-300">
                <span className="text-teal-400 font-bold">Full Developer Access:</span> For IT to customize and integrate with deep control.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Results Section */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-2">The Results: A Paradigm Shift in 6 Months</h2>
          <p className="text-center text-slate-400 mb-10">The impact was immediate, measurable, and profound.</p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {resultsData.map((kpi, idx) => (
              <motion.div
                key={idx}
                variants={fadeCard}
                className={`bg-slate-800 p-6 rounded-xl shadow-lg border-t-4 ${kpi.border} text-center`}
              >
                <p className="text-5xl font-extrabold gradient-text">{kpi.percent}</p>
                <p className="mt-2 text-lg font-semibold text-white">{kpi.text1}</p>
                <p className="text-slate-400">{kpi.text2}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Testimonial */}
        <motion.section {...fadeInUp} className="mb-16 bg-slate-800/50 text-white rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <p className="text-5xl mr-8">💬</p>
            <div>
              <p className="text-xl md:text-2xl italic leading-relaxed">
                "Inova AI transformed our relationship with technology... For the first time, our technology is truly humanizing the care we provide."
              </p>
              <p className="mt-4 font-bold text-slate-400"> -  Dr. Finch, Chief Medical Officer</p>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer {...fadeInUp} className="text-center py-8 border-t border-slate-800">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Secure Your Future with Intelligent AI
          </h3>
          <p className="mt-3 mb-6 text-slate-400 max-w-2xl mx-auto">
            See how Inova AI can transform your financial services firm. Schedule a demo today.
          </p>
          <a
            href="/book-a-consultation"
            className="inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-500 transition-colors shadow-lg"
          >
            Schedule a Demo
          </a>
        </motion.footer>
      </div>
      <MegaFooter />
      <ConsentPopup />
    </main>
  );
}