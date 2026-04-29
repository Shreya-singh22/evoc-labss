'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shield, Zap, TrendingUp, Globe, Users, Heart } from 'lucide-react';
import { getPath } from '@/lib/paths';

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-[#183EEB]" />,
      title: "Data Integrity",
      desc: "Clean, unified data is the foundation of every decision we help our brands make."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#183EEB]" />,
      title: "Speed to Scale",
      desc: "We build for velocity. Moving from domain to dashboard in record time."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#183EEB]" />,
      title: "Profit First",
      desc: "Growth is useless without profitability. Our systems are tuned for the bottom line."
    }
  ];

  const stats = [
    { label: "Brands Scaling", value: "100+" },
    { label: "Data Points Processed", value: "100M+" },
    { label: "Ad Spend Managed", value: "₹50Cr+" },
    { label: "Team Members", value: "15+" }
  ];

  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#183EEB]/30 font-sans">
      {/* Background Glow */}
      <div className="fixed top-0 right-0 w-full h-[600px] bg-[#183EEB]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

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
              The OS for the next <span className="text-[#183EEB]">D2C Giants.</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
              Evoc Labs is building the unified ecosystem for Indian eCommerce—eliminating fragmented tools and simplifying how modern brands scale online.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
          <div className="lg:col-span-6 space-y-6 text-white/60 text-lg leading-relaxed">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Our <span className="text-[#183EEB]">Story</span></h2>
            <p>
              Evoc Labs was born out of a simple observation: modern eCommerce sellers are overwhelmed by fragmented tools. One for the store, another for ads, a third for logistics, and a dozen more for analytics.
            </p>
            <p>
              We decided to fix that. We built Evoc Labs as a B2B SaaS platform specifically for the Indian market, creating a unified dashboard where merchants can manage their entire online business with zero guesswork.
            </p>
            <p>
              Today, we empower over 100 brands to launch, run, and scale their operations with data-driven technology that prioritizes growth and profitability.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
             {stats.map((stat, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                   <div className="text-3xl md:text-5xl font-bold text-[#183EEB] mb-2">{stat.value}</div>
                   <div className="text-white/30 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
             ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-32">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-16 tracking-tight">Our <span className="text-[#183EEB]">Core Values</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-[#183EEB]/30 transition-all group text-center"
              >
                <div className="mb-6 p-4 bg-[#183EEB]/10 rounded-2xl w-fit mx-auto group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Ready to join the <span className="text-[#183EEB]">revolution?</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
            <Link href="/demo">
              <button className="bg-[#183EEB] hover:bg-[#183EEB]/90 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-[0_10px_40px_rgba(24,62,235,0.2)] group flex items-center gap-3">
                Experience Evoc Labs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/careers">
              <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold px-10 py-5 rounded-2xl transition-all flex items-center gap-3">
                See Open Roles
                <Users className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
