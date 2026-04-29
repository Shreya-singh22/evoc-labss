'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, LayoutGrid } from 'lucide-react';
import { getPath } from '@/lib/paths';

const brandLogos = Array.from({ length: 17 }, (_, i) => getPath(`/images/brands/brand-${i + 1}.png`));

export default function BrandsPage() {
  return (
    <main className="bg-black min-h-screen text-white/90 selection:bg-[#183EEB]/30 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <Link 
            href={getPath('/')} 
            className="inline-flex items-center gap-2 text-[#183EEB] hover:text-white transition-colors text-sm font-medium mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <header className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#183EEB]/10 rounded-2xl flex items-center justify-center">
                <LayoutGrid className="w-6 h-6 text-[#183EEB]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Partner <span className="text-[#183EEB]">Brands</span></h1>
            </div>
            <p className="text-white/40 text-lg md:text-xl max-w-2xl font-medium">
              We empower over 100+ brands with AI-driven operations and high-converting storefronts.
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {brandLogos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 aspect-square flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:border-[#183EEB]/30 hover:bg-[#183EEB]/5 group"
              >
                <img 
                  src={logo} 
                  alt="Brand logo" 
                  className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-opacity" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
