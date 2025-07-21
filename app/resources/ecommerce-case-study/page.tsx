'use client';

import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import Navigation from '@/components/global/Navigation';
import MegaFooter from '@/components/global/MegaFooter';
import ConsentPopup from '@/components/global/ConsentPopup';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const blueShades = {
  teal: '#2dd4bf',
  sky: '#38bdf8',
  indigo: '#818cf8',
  dark: '#374151',
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: 'rgba(255,255,255,0.1)' },
      ticks: { color: '#9ca3af' },
    },
    x: {
      grid: { display: false },
      ticks: { color: '#9ca3af' },
    },
  },
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: {
      display: true,
      position: 'bottom' as const,
      labels: { color: '#d1d5db' },
    },
  },
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: { color: '#38bdf8' },
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      grid: { color: 'rgba(255,255,255,0.1)' },
      ticks: { color: '#9ca3af' },
    },
    x: {
      grid: { display: false },
      ticks: { color: '#9ca3af' },
    },
  },
};

// DATA
const aovData = {
  labels: ['Before Inova AI', 'After Inova AI'],
  datasets: [
    {
      label: 'Average Order Value ($)',
      data: [100, 130],
      backgroundColor: [blueShades.dark, blueShades.sky],
      borderWidth: 1,
    },
  ],
};

const cartData = {
  labels: ['Abandoned Carts', 'Completed Purchases'],
  datasets: [
    {
      label: 'Cart Status',
      data: [45, 55], // 75% abandonment reduced by 40% -> 75 * 0.6 = 45%
      backgroundColor: [blueShades.dark, blueShades.indigo],
      borderColor: '#111827',
      borderWidth: 4,
    },
  ],
};

const conversionData = {
  labels: ['Before', 'After'],
  datasets: [
    {
      label: 'Conversion Rate',
      data: [2.5, 3.0], // 20% lift from a baseline of 2.5% -> 3.0%
      fill: true,
      backgroundColor: 'rgba(45,212,191,0.2)',
      borderColor: blueShades.teal,
      tension: 0.1,
      pointRadius: 5,
    },
  ],
};

const supportData = {
  labels: ['Resolved by AI', 'Resolved by Human'],
  datasets: [
    {
      label: 'Inquiry Resolution',
      data: [80, 20],
      backgroundColor: [blueShades.sky, blueShades.dark],
      borderColor: '#111827',
      borderWidth: 4,
    },
  ],
};

export default function EcommerceCaseStudy() {
  return (
    <main>
      <Navigation />
      <div className="max-w-6xl mx-auto p-4 sm:p-8 text-gray-300">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            From <span className="text-transparent bg-clip-text bg-accentGradient">Clicks</span> to <span className="text-transparent bg-clip-text bg-accentGradient">Conversions</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            How Inova AI personalized the customer journey and ignited growth for LuxeLane.
          </p>
        </header>

        {/* The Challenge */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            The Challenge: The High Cost of Anonymity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Challenge Cards */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <span className="text-4xl">🛒</span>
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">High Cart Abandonment</h3>
              <p className="text-gray-400">
                A staggering 75% of shopping carts were abandoned before customers made a purchase.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <span className="text-4xl">👤</span>
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Generic Experience</h3>
              <p className="text-gray-400">
                Every visitor saw the same page, leading to low engagement and missed opportunities.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <span className="text-4xl">💰</span>
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Low Average Order Value</h3>
              <p className="text-gray-400">
                The platform was ineffective at encouraging customers to add more items to their cart.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <span className="text-4xl">📞</span>
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Costly Support</h3>
              <p className="text-gray-400">
                Support agents were tied up answering repetitive "Where is my order?" questions.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-20 bg-gray-800/50 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            The Solution: Intelligent Commerce Agents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-sky-400 mb-3">Hyper-Personalized Recommendations</h3>
              <p className="text-gray-400">
                AI analyzes user behavior in real-time to show every customer the products they are most likely to buy.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-3">Intelligent Upselling</h3>
              <p className="text-gray-400">
                The AI suggests complementary items and "complete the look" bundles at the perfect moment to increase cart value.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-400 mb-3">Automated Customer Service</h3>
              <p className="text-gray-400">
                A 24/7 AI agent instantly answers all post-purchase questions about order status, shipping, and returns.
              </p>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            The Implementation: Value, Validated, and Live in 12 Weeks
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center -space-y-4 md:-space-y-0 md:space-x-8 text-center">
            <div className="flex-1 p-6 bg-gray-800 rounded-xl border border-gray-700 z-10 w-full md:w-auto">
              <p className="text-sky-400 font-bold">Phase 1 (Weeks 1-2)</p>
              <p className="text-gray-300">Foundation & Data Integration</p>
            </div>
            <div className="hidden md:block text-2xl font-bold text-gray-600">→</div>
            <div className="flex-1 p-6 bg-gray-800 rounded-xl border border-gray-700 z-10 w-full md:w-auto">
              <p className="text-indigo-400 font-bold">Phase 2 (Weeks 3-8)</p>
              <p className="text-gray-300">AI Model Training & Personalization Rollout</p>
            </div>
            <div className="hidden md:block text-2xl font-bold text-gray-600">→</div>
            <div className="flex-1 p-6 bg-gray-800 rounded-xl border border-gray-700 z-10 w-full md:w-auto">
              <p className="text-teal-400 font-bold">Phase 3 (Weeks 9-12)</p>
              <p className="text-gray-300">Upsell & Support Automation Launch</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            The Results: A Revolution in Retail Intelligence
          </h2>
          <p className="text-center text-gray-400 mb-10">
            The AI deployment created a dramatic and immediate uplift across LuxeLane's most critical business metrics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Chart Card 1 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-center text-white mb-4">
                Increase in Average Order Value
              </h3>
              <div
                className="chart-container mx-auto w-full max-w-[500px]"
                style={{ height: 300, maxHeight: 350 }}
              >
                <Bar data={aovData} options={barOptions} />
              </div>
              <p className="text-center text-gray-400 mt-4">
                Intelligent upselling drove a 30% increase in the average value of each purchase.
              </p>
            </div>
            {/* Chart Card 2 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-center text-white mb-4">
                Reduction in Cart Abandonment
              </h3>
              <div
                className="chart-container mx-auto w-full max-w-[500px]"
                style={{ height: 300, maxHeight: 350 }}
              >
                <Doughnut data={cartData} options={doughnutOptions} />
              </div>
              <p className="text-center text-gray-400 mt-4">
                A more relevant experience kept customers engaged, cutting cart abandonment by 40%.
              </p>
            </div>
            {/* Chart Card 3 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-center text-white mb-4">
                Lift in Conversion Rate
              </h3>
              <div
                className="chart-container mx-auto w-full max-w-[500px]"
                style={{ height: 300, maxHeight: 350 }}
              >
                <Line data={conversionData} options={lineOptions} />
              </div>
              <p className="text-center text-gray-400 mt-4">
                Personalized recommendations made it easier for customers to find what they love, boosting conversion by 20%.
              </p>
            </div>
            {/* Chart Card 4 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-center text-white mb-4">
                Post-Purchase Support Automation
              </h3>
              <div
                className="chart-container mx-auto w-full max-w-[500px]"
                style={{ height: 300, maxHeight: 350 }}
              >
                <Doughnut data={supportData} options={doughnutOptions} />
              </div>
              <p className="text-center text-gray-400 mt-4">
                80% of all WISMO inquiries were resolved instantly by the AI, freeing up the human team for complex tasks.
              </p>
            </div>
          </div>
          {/* KPI Blocks */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
              <p className="text-5xl font-extrabold gradient-text">50%</p>
              <p className="mt-2 text-lg font-semibold text-white">Increase in Customer Lifetime Value</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-teal-500">
              <p className="text-5xl font-extrabold gradient-text">90%</p>
              <p className="mt-2 text-lg font-semibold text-white">Faster Campaign Launch Time</p>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16 bg-gray-800/50 text-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <p className="text-5xl mr-8">💬</p>
            <div>
              <p className="text-xl md:text-2xl italic leading-relaxed">
                "Inova AI gave us the intelligence to treat every customer like they were our only customer... It's the most significant competitive advantage we have."
              </p>
              <p className="mt-4 font-bold text-gray-400">
                — Chief Marketing Officer, Luxury Lane
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-800">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Personalize Every Customer Journey
          </h3>
          <p className="mt-3 mb-6 text-gray-400 max-w-2xl mx-auto">
            Discover how Inova AI's intelligent commerce agents can revolutionize your e-commerce business. Schedule a demo today.
          </p>
          <a
            href="/book-a-consultation"
            className="inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-500 transition-colors shadow-lg"
          >
            Schedule Your Demo
          </a>
        </footer>
      </div>
      <MegaFooter />
      <ConsentPopup />
    </main>
  );
}
