'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'

export default function FinanceCaseStudy() {
  // Animation configs
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const fadeCard = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <main>
      <Navigation/>
      <div className="max-w-6xl mx-auto p-4 sm:p-8">

        {/* Header */}
        <motion.header {...fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            From{' '}
            <span className="gradient-text">
              Risk
            </span>{' '}
            to{' '}
            <span className="gradient-text">
              Return
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            How Inova AI transformed compliance, security, and advisory for Apex Wealth Management.
          </p>
        </motion.header>

        {/* Challenge */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            The Challenge: A Legacy System Under Siege
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: '⚖️',
                title: 'Regulatory Overload',
                desc: 'Manual compliance checks for KYC/AML were slow, costly, and created significant error risk.'
              },
              {
                icon: '🛡️',
                title: 'Escalating Fraud',
                desc: 'Static, rule-based systems were failing to stop sophisticated phishing and account takeover schemes.'
              },
              {
                icon: '⚙️',
                title: 'Advisor Inefficiency',
                desc: 'Top advisors spent over 50% of their time on administrative tasks, not client strategy.'
              },
              {
                icon: '📉',
                title: 'Personalization Gap',
                desc: 'Inability to deliver consistent, hyper-personalized financial insights at scale.'
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Solution */}
        <motion.section {...fadeInUp} className="mb-20 bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            The Solution: Intelligent Finance Agents
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeCard}>
              <h3 className="text-2xl font-bold text-sky-400 mb-3">Automated Compliance</h3>
              <p className="text-slate-400">
                AI agents continuously monitor transactions, flag suspicious activity, and auto-generate SARs, turning manual checklists into an always-on guarantee.
              </p>
            </motion.div>
            <motion.div variants={fadeCard}>
              <h3 className="text-2xl font-bold text-teal-400 mb-3">Proactive Fraud Prevention</h3>
              <p className="text-slate-400">
                Machine learning models analyze thousands of data points to identify and block fraud in real-time, adapting defenses as new threats emerge.
              </p>
            </motion.div>
            <motion.div variants={fadeCard}>
              <h3 className="text-2xl font-bold text-purple-400 mb-3">AI-Powered Advisory</h3>
              <p className="text-slate-400">
                An AI assistant synthesizes market data and client info to provide actionable insights, freeing advisors to build relationships and focus on strategy.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Transformation Timeline */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            The Transformation: Secure Value in 12 Weeks
          </h2>
          <div className="relative">
            <div className="border-l-4 border-slate-700 absolute h-full top-0 left-4 md:left-1/2 md:ml-[-2px]"></div>
            {[
              {
                phase: '1',
                color: 'bg-purple-500',
                title: 'Phase 1 (Weeks 1-4)',
                subtitle: 'Secure Foundation & Core Integration',
                labelColor: 'text-purple-400'
              },
              {
                phase: '2',
                color: 'bg-sky-500',
                title: 'Phase 2 (Weeks 5-10)',
                subtitle: 'Co-Creation of Compliance & Fraud Models',
                labelColor: 'text-sky-400'
              },
              {
                phase: '3',
                color: 'bg-teal-500',
                title: 'Phase 3 (Weeks 11-12)',
                subtitle: 'Pilot & Advisor Onboarding',
                labelColor: 'text-teal-400'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`mb-8 flex justify-center items-center w-full ${i === 2 ? 'mb-0' : ''}`}
              >
                <div className="w-full md:w-1/2 md:pr-8 md:text-right">
                  <div className="p-4 bg-slate-800 rounded-lg shadow-lg border border-slate-700">
                    <p className={`font-bold ${item.labelColor}`}>{item.title}</p>
                    <p className="text-slate-300">{item.subtitle}</p>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full ${item.color} absolute left-4 -ml-4 md:left-1/2 md:-ml-4 flex items-center justify-center text-white font-bold`}>{item.phase}</div>
                <div className="w-full md:w-1/2 md:pl-8"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            The Results: A New Standard in Financial Services
          </h2>
          <p className="text-center text-slate-400 mb-10">
            The transformation delivered decisive, measurable returns across the firm.
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'AML/KYC Reporting Automation',
                percent: '90%',
                desc: 'Apex automated 90% of its manual compliance reporting, freeing the team to focus on strategic risk management.'
              },
              {
                title: 'Fraudulent Transaction Reduction',
                percent: '75%',
                desc: 'The adaptive AI blocked 75% more fraudulent transactions than the previous system, securing client assets and trust.'
              },
              {
                title: 'Advisor Time Saved Per Day',
                percent: '37.5%',
                desc: 'Each advisor gained back 3 hours per day, a 37.5% efficiency boost, allowing for more strategic client engagement.'
              },
              {
                title: 'Net Promoter Score (NPS) Growth',
                percent: '20pt',
                desc: 'Faster, personalized service led to a 20-point increase in NPS, a key indicator of client loyalty and satisfaction.'
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-center text-white mb-4">{item.title}</h3>
                <p className="text-5xl font-extrabold gradient-text text-center mb-4">{item.percent}</p>
                <p className="text-center text-slate-400 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border-t-4 border-sky-500">
              <p className="text-5xl font-extrabold gradient-text">
                50%
              </p>
              <p className="mt-2 text-lg font-semibold text-white">Faster Compliance Processing</p>
            </motion.div>
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border-t-4 border-teal-500">
              <p className="text-5xl font-extrabold gradient-text">
                40%
              </p>
              <p className="mt-2 text-lg font-semibold text-white">Decrease in Operational Costs</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Testimonial */}
        <motion.section {...fadeInUp} className="mb-16 bg-slate-800/50 text-white rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <p className="text-5xl mr-8">💬</p>
            <div>
              <p className="text-xl md:text-2xl italic leading-relaxed">
                "Inova AI didn't just sell us a solution; they gave us a strategic capability... This isn't just an efficiency gain; it's a fundamental competitive advantage."
              </p>
              <p className="mt-4 font-bold text-slate-400">
                 -  Chief Compliance Officer, Wealth Management
              </p>
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
      <MegaFooter/>
      <ConsentPopup/>
    </main>
  );
}
