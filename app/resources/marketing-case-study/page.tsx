"use client";

import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'

import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Color palette (Nexsus)
const nexsusColors = {
  cyan: "#00f6ff",
  sky: "#38bdf8",
  violet: "#a78bfa",
  dark: "rgba(30, 41, 59, 0.8)",
};

// --- Chart Data & Options ---
const engagementData: ChartData<"bar"> = {
  labels: ["Before Chatsite", "After Chatsite"],
  datasets: [
    {
      label: "Client Engagement (Chats per week)",
      data: [15, 95],
      backgroundColor: [nexsusColors.dark, nexsusColors.sky],
      borderWidth: 1,
    },
  ],
};
const engagementOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: { beginAtZero: true, grid: { color: "rgba(56, 189, 248, 0.1)" }, ticks: { color: "#9ca3af" } },
    x: { grid: { display: false }, ticks: { color: "#9ca3af" } },
  },
};

const meetingsData: ChartData<"bar"> = {
  labels: ["Before", "After"],
  datasets: [
    { label: "Booked Meetings (per month)", data: [3, 18], backgroundColor: [nexsusColors.dark, nexsusColors.cyan], borderWidth: 1 },
  ],
};
const meetingsOptions: ChartOptions<"bar"> = engagementOptions;

const bounceData: ChartData<"doughnut"> = {
  labels: ["Before", "After"],
  datasets: [
    { label: "Bounce Rate (%)", data: [61, 21], backgroundColor: [nexsusColors.violet, nexsusColors.sky], borderColor: "#0c1427", borderWidth: 4 },
  ],
};
const bounceOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%",
  plugins: { legend: { display: true, position: "bottom", labels: { color: "#d1d5db" } }, tooltip: {} },
};

const leadsData: ChartData<"doughnut"> = {
  labels: ["Before", "After"],
  datasets: [
    { label: "Qualified Leads (per month)", data: [5, 32], backgroundColor: [nexsusColors.dark, nexsusColors.cyan], borderColor: "#0c1427", borderWidth: 4 },
  ],
};
const leadsOptions: ChartOptions<"doughnut"> = bounceOptions;

// --- Main Page Component ---
const MarketingCaseStudy = () => (
  <main>
    <Navigation />
    <div className="max-w-6xl mx-auto p-4 sm:p-8 text-gray-300">
      {/* Header */}
      <motion.header {...fadeInUp} className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Converting <span className="gradient-text">Curiousity</span> to <span className="gradient-text">Revenue</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          How Inova's <b>Chatsite</b> turned a lifeless brochure site into a lead-generating, brand-building AI engine for modern marketing teams.
        </p>
      </motion.header>

      {/* The Challenge */}
      <motion.section {...fadeInUp} className="mb-20">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          The Challenge: The Broken Website Dilemma
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
              icon: "💤",
              title: "Dead End Pages",
              desc: "Outdated, static websites that leave clients guessing and brands collecting dust.",
            },
            {
              icon: "🛠️",
              title: "Plugin Nightmares",
              desc: "Endless patching, slow load times, and \"Update Failed\" screens killing marketing momentum.",
            },
            {
              icon: "💔",
              title: "No Engagement",
              desc: "Most visitors leave in under 10 seconds. Brands miss the chance to connect, convert, and grow.",
            },
            {
              icon: "🚧",
              title: "\"Parked\" Potential",
              desc: "Valuable offers trapped behind clunky forms and broken CTAs. Lost leads, lost revenue.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeCard} className="bg-[#181A21] border border-[#272B36] rounded-2xl shadow-lg p-8 flex flex-col items-center min-h-[220px]">
              <span className="text-4xl mb-3">{item.icon}</span>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* The Solution */}
      <motion.section {...fadeInUp} className="mb-20">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          The Solution: A Conversational ChatSite Powered by Generative AI
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              color: "text-cyan-400",
              title: "24/7 Real-Time Engagement",
              desc: "Turn every visit into a conversation. Clients can chat, ask questions, and book meetings - anytime, anywhere.",
            },
            {
              color: "text-sky-400",
              title: "Branded, Intelligent Storytelling",
              desc: "AI-powered site that showcases your brand, answers product questions, and shares demos, brochures, and videos - all in your voice.",
            },
            {
              color: "text-violet-400",
              title: "Appointment & Lead Conversion",
              desc: "Guide visitors from interest to action. Automated booking, content sharing, and contact collection, all seamless.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeCard} className="bg-[#191b26] border border-[#23263a] rounded-2xl shadow-lg p-8 min-h-[180px] flex flex-col items-center">
              <h3 className={`text-2xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Implementation */}
      <motion.section {...fadeInUp} className="mb-20">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          The Implementation: Transforming Static Pages Into Living Conversations
        </h2>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center -space-y-4 md:-space-y-0 md:space-x-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              color: "text-cyan-400 font-bold",
              phase: "Phase 1 (Week 1)",
              subtitle: "Instantly deploy ChatSite on custom domain, connected to your brand data."
            },
            {
              color: "text-sky-400 font-bold",
              phase: "Phase 2 (Week 2-3)",
              subtitle: "Brand customization, integration with calendars, assets, and product menus."
            },
            {
              color: "text-violet-400 font-bold",
              phase: "Phase 3 (Week 4+)",
              subtitle: "Live: site generates leads, books meetings, and answers every visitor’s question - 24/7."
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeCard} className="flex-1 p-6 bg-[#191b26] border border-[#23263a] rounded-xl shadow-lg z-10 w-full md:w-auto">
              <p className={item.color}>{item.phase}</p>
              <p className="text-gray-300">{item.subtitle}</p>
            </motion.div>
          ))}
          <div className="hidden md:block text-2xl font-bold text-slate-600">→</div>
          <div className="hidden md:block text-2xl font-bold text-slate-600">→</div>
        </motion.div>
      </motion.section>

      {/* The Results */}
      <motion.section {...fadeInUp} className="mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          The Results: Marketing Metrics, Reimagined
        </h2>
        <p className="text-center text-gray-400 mb-10">
          The upgrade to ChatSite delivered tangible results - more engagement, more qualified leads, and a pipeline that grows itself.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Engagement */}
          <motion.div variants={fadeCard} className="bg-[#181A21] border border-[#272B36] rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-center text-white mb-4">Engagement: 6x More Chats</h3>
            <div className="chart-container" style={{ height: "210px" }}>
              <Bar data={engagementData as ChartData<"bar">} options={engagementOptions as ChartOptions<"bar">} />
            </div>
            <p className="text-center text-gray-400 mt-4">
              Live chat and instant answers increased weekly client conversations from 15 to 95.
            </p>
          </motion.div>
          {/* Meetings */}
          <motion.div variants={fadeCard} className="bg-[#181A21] border border-[#272B36] rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-center text-white mb-4">Booked Meetings: 6x Increase</h3>
            <div className="chart-container" style={{ height: "210px" }}>
              <Bar data={meetingsData as ChartData<"bar">} options={meetingsOptions as ChartOptions<"bar">} />
            </div>
            <p className="text-center text-gray-400 mt-4">
              Automated scheduling drove a spike in meetings and demos - no more lost leads.
            </p>
          </motion.div>
          {/* Bounce Rate */}
          <motion.div variants={fadeCard} className="bg-[#181A21] border border-[#272B36] rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-center text-white mb-4">Bounce Rate: -65%</h3>
            <div className="chart-container" style={{ height: "210px" }}>
              <Doughnut data={bounceData as ChartData<"doughnut">} options={bounceOptions as ChartOptions<"doughnut">} />
            </div>
            <p className="text-center text-gray-400 mt-4">
              Visitors stayed longer and interacted more, as bounce rate plummeted from 61% to 21%.
            </p>
          </motion.div>
          {/* Leads */}
          <motion.div variants={fadeCard} className="bg-[#181A21] border border-[#272B36] rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-center text-white mb-4">Qualified Leads: 6x Uplift</h3>
            <div className="chart-container" style={{ height: "210px" }}>
              <Doughnut data={leadsData as ChartData<"doughnut">} options={leadsOptions as ChartOptions<"doughnut">} />
            </div>
            <p className="text-center text-gray-400 mt-4">
              ChatSite's lead capture generated 6x more qualified leads each month.
            </p>
          </motion.div>
        </motion.div>

        {/* KPI Highlight */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeCard} className="bg-[#191b26] border border-cyan-400 p-6 rounded-xl shadow-lg">
            <p className="text-5xl font-extrabold gradient-text">+575%</p>
            <p className="mt-2 text-lg font-semibold text-white">Increase in Booked Sales Calls</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Testimonial */}
      <motion.section {...fadeInUp} className="bg-[#181A21] border border-[#272B36] text-white rounded-2xl p-8 md:p-12 shadow-2xl mb-8">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <span className="text-5xl mr-8">🚀</span>
          <div>
            <p className="text-xl md:text-2xl italic leading-relaxed">
              "Our old website was a digital graveyard. With ChatSite, every visitor talks to us, gets what they need, and books a call. It’s our best marketer and sales rep - working 24/7."
            </p>
            <p className="mt-4 font-bold text-gray-400">
              VP of Growth, Fastlane Digital Agency
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer {...fadeInUp} className="text-center py-8 mt-16 border-t border-slate-800">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Transform Your Website into a Lead-Generating Magnet</h3>
        <p className="mt-3 mb-6 text-gray-400 max-w-2xl mx-auto">
          Experience the difference: engage more visitors, capture more leads, and scale conversations with AI.
        </p>
        <a href="https://chatsite.inovasolutions.ai" target="_blank" rel="noopener noreferrer" className="inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-500 transition-colors shadow-lg">
          Try ChatSite Now
        </a>
      </motion.footer>
    </div>
    <MegaFooter />
    <ConsentPopup />
  </main>
);

export default MarketingCaseStudy;
