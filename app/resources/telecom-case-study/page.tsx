'use client';

import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { motion } from 'framer-motion';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend);

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

export default function TelecomCaseStudy() {
  // 1. DOWNTIME CHART
  const downtimeData: ChartData<'bar'> = {
    labels: ['Before Inova AI', 'After Inova AI'],
    datasets: [{
      label: 'Relative Network Downtime',
      data: [100, 60],
      backgroundColor: ['#334155', '#2dd4bf'],
      borderWidth: 1,
    }],
  };
  const downtimeOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#cbd5e1' } },
      x: { grid: { display: false }, ticks: { color: '#cbd5e1' } },
    }
  };

  // 2. CHURN CHART
  const churnData: ChartData<'line'> = {
    labels: ['Before', 'After'],
    datasets: [{
      label: 'Annual Churn Rate',
      data: [18, 13.5],
      fill: true,
      backgroundColor: 'rgba(56, 189, 248, 0.2)',
      borderColor: '#38bdf8',
      tension: 0.1,
      pointRadius: 5,
    }]
  };
  const churnOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: false, grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#cbd5e1' } },
      x: { grid: { display: false }, ticks: { color: '#cbd5e1' } },
    }
  };

  // 3. MAINTENANCE DOUGHNUT
  const maintenanceData: ChartData<'doughnut'> = {
    labels: ['Proactive', 'Reactive'],
    datasets: [{
      label: 'Maintenance Type',
      data: [60, 40],
      backgroundColor: ['#2dd4bf', '#334155'],
      borderColor: '#0F172A',
      borderWidth: 4,
    }]
  };
  const maintenanceOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: { display: true, position: 'bottom', labels: { color: '#cbd5e1' } },
      tooltip: { enabled: true }
    }
  };

  // 4. SUPPORT DOUGHNUT
  const supportData: ChartData<'doughnut'> = {
    labels: ['Resolved by AI', 'Resolved by Human'],
    datasets: [{
      label: 'Inquiry Resolution',
      data: [70, 30],
      backgroundColor: ['#818cf8', '#334155'],
      borderColor: '#0F172A',
      borderWidth: 4,
    }]
  };
  const supportOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: { display: true, position: 'bottom', labels: { color: '#cbd5e1' } },
      tooltip: { enabled: true }
    }
  };

  return (
    <main>
      <Navigation />
      <div className="max-w-6xl mx-auto p-4 sm:p-8 text-slate-300">
        {/* HEADER */}
        <motion.header {...fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            From <span className="text-transparent bg-clip-text bg-accentGradient">Reactive</span> to <span className="text-transparent bg-clip-text bg-accentGradient">Proactive</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            How Inova AI transformed network reliability and customer experience for AuraConnect.
          </p>
        </motion.header>

        {/* CHALLENGE */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-10">The Challenge: The High Cost of Reactivity</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "📡",
                title: "Network Downtime",
                desc: "Frequent outages and service degradation damaged the brand's reputation for reliability."
              },
              {
                icon: "📉",
                title: "High Customer Churn",
                desc: "An 18% annual churn rate was driven by poor service and inconsistent support."
              },
              {
                icon: "🛠️",
                title: "Reactive Maintenance",
                desc: "Engineers were dispatched only after failures occurred, leading to prolonged, costly repairs."
              },
              {
                icon: "🗣️",
                title: "Overwhelmed Support",
                desc: "Support centers were inundated with repetitive queries and lacked multilingual capabilities."
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

        {/* SOLUTION */}
        <motion.section {...fadeInUp} className="mb-20 bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
          <h2 className="text-3xl font-bold text-center text-white mb-10">The Solution: Intelligent Telecom Agents</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeCard}>
              <h3 className="text-2xl font-bold text-teal-400 mb-3">Intelligent Network Optimization</h3>
              <p className="text-slate-400">AI agents predict congestion and dynamically re-route traffic, ensuring seamless quality of service.</p>
            </motion.div>
            <motion.div variants={fadeCard}>
              <h3 className="text-2xl font-bold text-sky-400 mb-3">Predictive Maintenance</h3>
              <p className="text-slate-400">AI analyzes hardware data to predict failures before they happen, automating maintenance schedules.</p>
            </motion.div>
            <motion.div variants={fadeCard}>
              <h3 className="text-2xl font-bold text-indigo-400 mb-3">Multilingual AI Support</h3>
              <p className="text-slate-400">A 24/7 support agent, fluent in 20+ languages, resolves common issues instantly across all channels.</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* IMPLEMENTATION */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-10">The Implementation: Reliability Deployed Rapidly</h2>
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center -space-x-4 md:-space-x-0 md:space-x-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                phase: "Phase 1 (Weeks 1-4)",
                color: "text-teal-400 font-bold",
                subtitle: "Secure Data & Platform Integration"
              },
              {
                phase: "Phase 2 (Weeks 5-10)",
                color: "text-sky-400 font-bold",
                subtitle: "Model Training & Workflow Co-Creation"
              },
              {
                phase: "Phase 3 (Weeks 11-12)",
                color: "text-indigo-400 font-bold",
                subtitle: "Phased Rollout & Performance Tuning"
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeCard} className="flex-1 p-6 bg-slate-800 rounded-xl border border-slate-700 z-10 w-full md:w-auto mb-4 md:mb-0">
                <p className={item.color}>{item.phase}</p>
                <p className="text-slate-300">{item.subtitle}</p>
              </motion.div>
            ))}
            <div className="hidden md:block text-2xl font-bold text-slate-600">→</div>
            <div className="hidden md:block text-2xl font-bold text-slate-600">→</div>
          </motion.div>
        </motion.section>

        {/* RESULTS */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-2">The Results: A New Era of Proactive Connectivity</h2>
          <p className="text-center text-slate-400 mb-10">The deployment yielded substantial improvements in reliability, customer loyalty, and financial performance.</p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Chart 1: Downtime */}
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 flex flex-col">
              <h3 className="text-xl font-semibold text-center text-white mb-4">Network Downtime Reduction</h3>
              <div
                className="chart-container mx-auto w-full max-w-[500px]"
                style={{ height: 300, maxHeight: 350 }}
              >
                <Bar data={downtimeData} options={downtimeOptions} />
              </div>
              <p className="text-center text-slate-400 mt-4">
                A 40% decrease in network downtime led to a more stable and reliable service for millions of customers.
              </p>
            </motion.div>
            {/* Chart 2: Churn */}
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 flex flex-col">
              <h3 className="text-xl font-semibold text-center text-white mb-4">Customer Churn Rate</h3>
              <div
                className="chart-container mx-auto w-full max-w-[500px]"
                style={{ height: 300, maxHeight: 350 }}
              >
                <Line data={churnData} options={churnOptions} />
              </div>
              <p className="text-center text-slate-400 mt-4">
                Proactive support and improved reliability cut customer churn by 25%, securing the revenue base.
              </p>
            </motion.div>
            {/* Chart 3: Maintenance */}
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 flex flex-col">
              <h3 className="text-xl font-semibold text-center text-white mb-4">Maintenance Task Allocation</h3>
              <div
                className="chart-container mx-auto w-full max-w-[500px]"
                style={{ height: 300, maxHeight: 350 }}
              >
                <Doughnut data={maintenanceData} options={maintenanceOptions} />
              </div>
              <p className="text-center text-slate-400 mt-4">
                The maintenance model was transformed, with 60% of issues now being identified proactively by the AI.
              </p>
            </motion.div>
            {/* Chart 4: Support */}
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 flex flex-col">
              <h3 className="text-xl font-semibold text-center text-white mb-4">Customer Inquiry Resolution</h3>
              <div
                className="chart-container mx-auto w-full max-w-[500px]"
                style={{ height: 300, maxHeight: 350 }}
              >
                <Doughnut data={supportData} options={supportOptions} />
              </div>
              <p className="text-center text-slate-400 mt-4">
                The AI Support Agent successfully automated 70% of all incoming customer queries, freeing up human agents.
              </p>
            </motion.div>
          </motion.div>
          {/* KPIs */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border-t-4 border-sky-500">
              <p className="text-5xl font-extrabold gradient-text">30%</p>
              <p className="mt-2 text-lg font-semibold text-white">Improvement in First Call Resolution</p>
            </motion.div>
            <motion.div variants={fadeCard} className="bg-slate-800 p-6 rounded-xl shadow-lg border-t-4 border-teal-500">
              <p className="text-5xl font-extrabold gradient-text">20%</p>
              <p className="mt-2 text-lg font-semibold text-white">Reduction in Call Center Costs</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* TESTIMONIAL */}
        <motion.section {...fadeInUp} className="mb-16 bg-slate-800/50 text-white rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <p className="text-5xl mr-8">💡</p>
            <div>
              <p className="text-xl md:text-2xl italic leading-relaxed">
                "With Inova AI, we stopped fighting fires and started preventing them... We're not just providing a connection; we're guaranteeing a reliable experience."
              </p>
              <p className="mt-4 font-bold text-slate-400">
                 -  Karim, Chief Network Officer, Telecom Company
              </p>
            </div>
          </div>
        </motion.section>

        {/* FOOTER CTA */}
        <motion.footer {...fadeInUp} className="text-center py-8 border-t border-slate-800">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Connect Your Customers to AI Excellence
          </h3>
          <p className="mt-3 mb-6 text-slate-400 max-w-2xl mx-auto">
            Discover how Inova AI can revolutionize your telecom operations. Schedule your demo today.
          </p>
          <a href="/book-a-consultation" className="inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-500 transition-colors shadow-lg">
            Schedule a Demo
          </a>
        </motion.footer>
      </div>
      <MegaFooter />
      <ConsentPopup />
    </main>
  );
}
