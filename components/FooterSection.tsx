'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getPath } from '@/lib/paths';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const SocialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/evoclabs.officials?igsh=Y2g2aGltbTY0MDNk',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/evoc-labs/?viewAsMember=true',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )
  },
  {
    name: 'X',
    url: 'https://x.com/evoclabz?s=21',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    )
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@evoclabs.official',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    )
  }
];

export default function FooterSection() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#030303]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[#183EEB]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl rounded-3xl p-10 md:p-12 border border-[#183EEB]/20 flex flex-col relative z-30 overflow-hidden"
            style={{
              background: 'radial-gradient(circle at top right, rgba(24,62,235,0.15), rgba(15,23,42,1))'
            }}
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[250px] h-[150px] bg-[#183EEB]/30 blur-[60px] pointer-events-none" />
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight relative z-10">
              Ready to Scale?
            </h3>
            <p className="text-white/60 text-lg md:text-xl mb-10 max-w-sm mx-auto leading-relaxed relative z-10">
              Experience the AI-powered commerce operating system in action.
            </p>
            
            <Link href={getPath('/demo')} className="w-full relative z-10">
              <motion.div 
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(24,62,235,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#183EEB] text-white font-bold h-[72px] rounded-2xl flex items-center justify-center gap-3 transition-all cursor-pointer group"
              >
                <span className="uppercase tracking-widest text-sm">Book a Free Demo Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>

            <div className="mt-8 flex items-center justify-center gap-2 text-white/20 text-[10px] uppercase tracking-widest font-bold relative z-10">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secure & Confidential
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-10 md:px-20 mt-16 mb-16 relative z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto px-10 md:px-20 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-32">
          
          <div className="space-y-6 max-w-[400px]">
            <div className="flex items-center">
              <img
                src={getPath('/logo.png')}
                alt="Logo"
                width={48}
                height={48}
                className="object-contain brightness-[3] grayscale"
                style={{ width: '48px', height: '48px' }}
              />
            </div>
            <p className="text-[14px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Evoc Labs is an AI-powered platform that runs your entire e-commerce business—from store to ads to orders in one place.
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.85)' }}>+91 9548833953</p>
              <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.85)' }}>contact@evoclabs.com</p>
            </div>
            <div className="flex gap-[10px] pt-4">
              {SocialLinks.map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md flex items-center justify-center transition-all bg-white/[0.06] text-white/70 hover:bg-white/[0.12] hover:text-white">
                  <social.icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] mb-[22px]" style={{ color: 'rgba(255,255,255,0.55)' }}>EVOC LABS</h4>
              <ul className="space-y-[14px]">
                <li><Link href={getPath('/brands')} className="text-[15px] text-white hover:text-[#183EEB] transition-colors">Brands</Link></li>
                <li><a href="#testimonials" className="text-[15px] text-white hover:text-[#183EEB] transition-colors">Testimonials</a></li>
                <li><a href="#pricing" className="text-[15px] text-white hover:text-[#183EEB] transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] mb-[22px]" style={{ color: 'rgba(255,255,255,0.55)' }}>COMPANY</h4>
              <ul className="space-y-[14px]">
                <li><a href="#" className="text-[15px] text-white hover:text-[#183EEB] transition-colors">Home</a></li>
                <li><a href="#" className="text-[15px] text-white hover:text-[#183EEB] transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] mb-[22px]" style={{ color: 'rgba(255,255,255,0.55)' }}>LEGALITIES</h4>
              <ul className="space-y-[14px]">
                <li><Link href={getPath('/privacy')} className="text-[15px] text-white hover:text-[#183EEB] transition-colors">Privacy Policy</Link></li>
                <li><Link href={getPath('/terms')} className="text-[15px] text-white hover:text-[#183EEB] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-white/30 font-medium">
            &copy; 2026 All rights reserved. Evoc Technologies Pvt. Ltd.
          </p>
          <div className="flex gap-6 text-[13px] text-white/30">
            <Link href={getPath('/privacy')} className="hover:text-white transition-colors">Privacy</Link>
            <Link href={getPath('/terms')} className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
