'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Code2, Rocket, Users, Target, ShieldCheck, Mail, Briefcase } from 'lucide-react';
import { getPath } from '@/lib/paths';

export default function CareersPage() {
  const whyWorkItems = [
    {
      icon: <Rocket className="w-6 h-6 text-[#183EEB]" />,
      title: "Innovate & Scale",
      desc: "Work on cutting-edge ecommerce solutions in a fast-paced startup environment."
    },
    {
      icon: <Users className="w-6 h-6 text-[#183EEB]" />,
      title: "Collaborative Culture",
      desc: "Join a supportive, diverse team that values creativity and collaboration."
    },
    {
      icon: <Target className="w-6 h-6 text-[#183EEB]" />,
      title: "Grow & Thrive",
      desc: "Enjoy opportunities for career growth, learning, and making an impact."
    }
  ];

  const responsibilities = [
    "Design, develop, and maintain web applications using Next.js",
    "Work on both frontend and backend components of the platform",
    "Build responsive, high-performance user interfaces",
    "Integrate REST APIs and third-party services",
    "Work with databases such as MongoDB or PostgreSQL",
    "Collaborate with product and design teams to implement features"
  ];

  const requirements = [
    "Hands-on experience with Next.js and React",
    "Basic to intermediate knowledge of Node.js",
    "Experience working on real-world projects (personal, freelance, or academic)",
    "Understanding of APIs, authentication systems, and database management",
    "Strong willingness to learn and adapt in a startup environment"
  ];

  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#183EEB]/30 font-sans">
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#183EEB]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Navigation */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Join a team that’s <span className="text-[#183EEB]">scaling brands</span>, not just building them.
            </h1>
            <p className="text-white/40 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
              We build proprietary performance systems and software to scale D2C brands profitably. Data-driven growth technology with zero guesswork.
            </p>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">About <span className="text-[#183EEB]">Evoc Labs</span></h2>
              <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  Evoc Labs is a B2B SaaS platform built for eCommerce sellers in India. Our goal is to create a unified ecosystem where merchants can manage their entire online business from a single dashboard — including store creation, ad tracking, logistics, and analytics.
                </p>
                <p>
                  We aim to eliminate fragmented tools and simplify how modern brands scale online. By merging aesthetics with high conversion, we empower the next generation of D2C giants.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-[32px] p-10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#183EEB]/10 blur-3xl group-hover:bg-[#183EEB]/20 transition-all" />
               <Briefcase className="w-12 h-12 text-[#183EEB] mb-6" />
               <h3 className="text-2xl font-bold mb-4 italic font-serif">The Mission</h3>
               <p className="text-white/40 text-sm leading-relaxed">
                  To build the operating system for the next $100B of Indian e-commerce.
               </p>
            </div>
          </div>
        </div>

        {/* Why EVOC Labs */}
        <div className="mb-32">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-16 tracking-tight">Why work at <span className="text-[#183EEB]">EVOC Labs?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyWorkItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-[#183EEB]/30 transition-all group"
              >
                <div className="mb-6 p-3 bg-[#183EEB]/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Positions Section */}
        <div id="open-positions" className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Open <span className="text-[#183EEB]">Positions</span></h2>
          
          <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 pb-12 border-b border-white/5">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500/10 text-[#183EEB] text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-500/20">
                    Hiring Now
                  </span>
                  <span className="text-white/30 text-xs font-medium">Remote • Full-time / Internship</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-2">Full Stack Developer</h3>
              </div>
              
              <a 
                href="mailto:careers@evoclabs.com?subject=Application - Full Stack Developer"
                className="inline-flex items-center gap-3 bg-[#183EEB] hover:bg-[#183EEB]/90 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-[0_10px_40px_rgba(24,62,235,0.2)] group"
              >
                Apply for this role
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h4 className="text-[#183EEB] font-bold uppercase tracking-widest text-xs mb-6">Key Responsibilities</h4>
                <ul className="space-y-4">
                  {responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-4 text-white/60 text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#183EEB] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#183EEB] font-bold uppercase tracking-widest text-xs mb-6">Requirements</h4>
                <ul className="space-y-4">
                  {requirements.map((item, i) => (
                    <li key={i} className="flex gap-4 text-white/60 text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#183EEB] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Contact CTA */}
        <div className="bg-gradient-to-br from-[#183EEB]/20 to-transparent border border-[#183EEB]/20 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(24,62,235,0.1),transparent_70%)]" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Don’t see your role?</h2>
          <p className="text-white/60 text-lg mb-10 relative z-10">We’re always looking for talent. If you have the drive, we have the space.</p>
          
          <a 
            href="mailto:careers@evoclabs.com?subject=General Application - Evoc Labs"
            className="inline-flex items-center gap-3 text-white font-bold px-10 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all relative z-10"
          >
            <Mail className="w-5 h-5" />
            Email careers@evoclabs.com
          </a>
        </div>
      </div>

      {/* Mini Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/20 text-xs font-medium uppercase tracking-[0.2em]">&copy; 2026 EVOC LABS. All rights reserved.</p>
        <div className="flex items-center gap-2 text-white/20 text-xs font-bold uppercase tracking-widest">
           <ShieldCheck className="w-4 h-4" />
           Secure & Confidential Recruitment
        </div>
      </div>
    </main>
  );
}
