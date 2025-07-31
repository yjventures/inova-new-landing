"use client";

import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'

import React from "react";
import { motion } from "framer-motion";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

// Color palette for Education (Nexsus)
const nexsusColors = {
  cyan: "#00f6ff",
  sky: "#38bdf8",
  violet: "#a78bfa",
  dark: "rgba(30, 41, 59, 0.8)",
};

// --- Chart Data & Options ---

// 1. Test Scores Bar
const testScoresData = {
  labels: ["Before Inova AI", "After Inova AI"],
  datasets: [
    {
      label: "Average Test Score",
      data: [65, 87.75],
      backgroundColor: [nexsusColors.dark, nexsusColors.cyan],
      borderWidth: 1,
    },
  ],
};
const testScoresOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: {
      beginAtZero: false,
      grid: { color: "rgba(56, 189, 248, 0.1)" },
      ticks: { color: "#9ca3af" },
    },
    x: {
      grid: { display: false },
      ticks: { color: "#9ca3af" },
    },
  },
};

// 2. Engagement Doughnut
const engagementData = {
  labels: ["Before", "After"],
  datasets: [
    {
      label: "Relative Student Engagement",
      data: [100, 150],
      backgroundColor: [nexsusColors.dark, nexsusColors.sky],
      borderColor: "#0c1427",
      borderWidth: 4,
    },
  ],
};
const engagementOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%",
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: { color: "#d1d5db" },
    },
    tooltip: {},
  },
};

// 3. Grading Time Bar
const gradingData = {
  labels: ["Before Inova AI (Hours)", "After Inova AI (Hours)"],
  datasets: [
    {
      label: "Weekly Grading Time Per Teacher",
      data: [10, 6],
      backgroundColor: [nexsusColors.dark, nexsusColors.violet],
      borderWidth: 1,
    },
  ],
};
const gradingOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: "rgba(56, 189, 248, 0.1)" },
      ticks: { color: "#9ca3af" },
    },
    x: {
      grid: { display: false },
      ticks: { color: "#9ca3af" },
    },
  },
};

// 4. Gaps Doughnut
const gapsData = {
  labels: ["Identified Early", "Identified Late"],
  datasets: [
    {
      label: "Knowledge Gap Identification",
      data: [90, 10],
      backgroundColor: [nexsusColors.cyan, nexsusColors.dark],
      borderColor: "#0c1427",
      borderWidth: 4,
    },
  ],
};
const gapsOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%",
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: { color: "#d1d5db" },
    },
    tooltip: {},
  },
};

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
};

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// --- Main Page Component ---
const EducationCaseStudy = () => (
  <main>
    <Navigation/>
    <div className="max-w-6xl mx-auto p-4 sm:p-8 text-gray-300">
      {/* Header */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          From <span className="gradient-text">Potential</span> to <span className="gradient-text">Performance</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          How Inova AI unlocked personalized learning at scale for Educational Institutions.
        </p>
      </motion.header>

      {/* The Challenge */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          The Challenge: The Limits of the Traditional Classroom
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: "🏃‍♂️💨",
              title: "Diverse Learning Paces",
              desc: "Gifted students grew bored while others struggled to keep up, making whole-class instruction ineffective.",
            },
            {
              icon: "😴",
              title: "Student Disengagement",
              desc: "Without personalized support, students became frustrated with homework, leading to incomplete assignments.",
            },
            {
              icon: "👩‍🏫",
              title: "Teacher Burnout",
              desc: "Countless hours were spent on grading and admin, taking time away from high-impact student mentorship.",
            },
            {
              icon: "❓",
              title: "Invisible Knowledge Gaps",
              desc: "Foundational misunderstandings often went unnoticed until it was too late to easily correct them.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-6 flex flex-col items-center min-h-[220px]"
            >
              <span className="text-4xl mb-3">{card.icon}</span>
              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* The Solution */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade}
        className="mb-20 bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          The Solution: Personal Tutoring AI Agents for Every Student
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Personalized AI Tutors",
              color: "text-cyan-400",
              desc: "A 24/7 AI tutor for every student provides interactive lessons and step-by-step guidance whenever they're stuck.",
            },
            {
              title: "Adaptive Learning Paths",
              color: "text-sky-400",
              desc: "The AI assesses student performance in real-time, providing extra support or advanced challenges as needed.",
            },
            {
              title: "Actionable Educator Dashboards",
              color: "text-violet-400",
              desc: "Teachers get a real-time overview of student progress, with the AI automatically highlighting knowledge gaps.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className={`text-2xl font-bold ${card.color} mb-3`}>{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* The Implementation */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          The Implementation: Adopt, Adapt, Achieve in One Term
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center -space-y-4 md:-space-y-0 md:space-x-8 text-center">
          {[
            {
              color: "text-cyan-400",
              phase: "Phase 1 (Weeks 1-3)",
              desc: "LMS Integration & Content Mapping",
            },
            {
              color: "text-sky-400",
              phase: "Phase 2 (Weeks 4-9)",
              desc: "Teacher Training & Pilot Program Initiation",
            },
            {
              color: "text-violet-400",
              phase: "Phase 3 (Weeks 10-12)",
              desc: "Academy-Wide Rollout & Feedback Loop",
            },
          ].map((item, i) => (
            <React.Fragment key={i}>
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex-1 bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-lg z-10 w-full md:w-auto mb-4 md:mb-0"
              >
                <p className={`${item.color} font-bold`}>{item.phase}</p>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
              {i < 2 && (
                <div className="hidden md:block text-2xl font-bold text-slate-600">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.section>

      {/* The Results */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          The Results: Unlocking Academic Potential at Scale
        </h2>
        <p className="text-center text-gray-400 mb-10">
          The partnership produced a significant and measurable impact on every academy's educational ecosystem.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Test Scores */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-center text-white mb-4">Improvement in Test Scores</h3>
            <div className="chart-container">
              <Bar data={testScoresData} options={testScoresOptions} />
            </div>
            <p className="text-center text-gray-400 mt-4">
              Personalized practice and gap remediation led to a 35% improvement in standardized test scores.
            </p>
          </motion.div>
          {/* Engagement */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-center text-white mb-4">Increase in Student Engagement</h3>
            <div className="chart-container">
              <Doughnut data={engagementData} options={engagementOptions} />
            </div>
            <p className="text-center text-gray-400 mt-4">
              With 24/7 support available, homework completion rates soared as student engagement increased by 50%.
            </p>
          </motion.div>
          {/* Grading Time */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-center text-white mb-4">Reduction in Teacher Grading Time</h3>
            <div className="chart-container">
              <Bar data={gradingData} options={gradingOptions} />
            </div>
            <p className="text-center text-gray-400 mt-4">
              Automation freed educators from 40% of their grading time, allowing for more high-impact instruction.
            </p>
          </motion.div>
          {/* Knowledge Gaps */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-center text-white mb-4">Early Identification of Knowledge Gaps</h3>
            <div className="chart-container">
              <Doughnut data={gapsData} options={gapsOptions} />
            </div>
            <p className="text-center text-gray-400 mt-4">
              The AI dashboard alerted teachers to 90% of foundational gaps in real-time, enabling immediate intervention.
            </p>
          </motion.div>
        </div>

        {/* KPI Highlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-6 text-center"
        >
          <div className="bg-slate-800 border border-cyan-400 p-6 rounded-xl shadow-lg">
            <p className="text-5xl font-extrabold gradient-text">70%</p>
            <p className="mt-2 text-lg font-semibold text-white">Increase in Student Confidence</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Testimonial */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade}
        className="bg-slate-800 border border-slate-700 text-white rounded-2xl p-8 md:p-12 shadow-2xl mb-8"
      >
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <p className="text-5xl mr-8">💡</p>
          <div>
            <p className="text-xl md:text-2xl italic leading-relaxed">
              "Inova AI did not replace our teachers; it supercharged them... Our teachers are more effective, and our students are more engaged and confident than ever before. This is the future of learning."
            </p>
            <p className="mt-4 font-bold text-gray-400">
              Director of Curriculum, Academic Excellence
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-8 mt-16 border-t border-slate-800">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Personalize the Future of Education</h3>
        <p className="mt-3 mb-6 text-gray-400 max-w-2xl mx-auto">
          Discover how Inova AI's personal tutoring agents can unlock the full potential of your students. Schedule a demo.
        </p>
        <a href="/book-a-consultation" className="inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-500 transition-colors shadow-lg">
          Schedule Your Demo
        </a>
      </footer>
    </div>
    <MegaFooter/>
    <ConsentPopup/>
  </main>
);

export default EducationCaseStudy;
