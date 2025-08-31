"use client";

// import Image from "next/image";
import {
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  ArrowPathIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  HeartIcon,
  AcademicCapIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Player from "lottie-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const WavyDivider = ({ flip = false }: { flip?: boolean }) => (
  <div aria-hidden className="w-full overflow-hidden leading-none">
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-12 sm:h-16 md:h-20 ${flip ? "rotate-180" : ""}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0 40 Q 360 80 720 40 T 1440 40 V80 H0 V40Z"
        fill="#F8FAFC"
        opacity="0.9"
      />
    </svg>
  </div>
);

// Simple animated particles background
const ParticlesBG = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <svg width="100%" height="100%" className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
      {[...Array(18)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 1440}
          cy={Math.random() * 320}
          r={Math.random() * 2 + 1}
          fill={i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#10B981' : '#F97316'}
          opacity={0.18 + Math.random() * 0.18}
        >
          <animate
            attributeName="cy"
            values={`0;${320 + Math.random() * 40}`}
            dur={`${4 + Math.random() * 4}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  </div>
);

// Simple confetti effect
const Confetti = ({ show }: { show: boolean }) => {
  const [dimensions, setDimensions] = useState({ width: 1400, height: 800 });
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden>
      <svg width="100vw" height="100vh" className="w-full h-full">
        {[...Array(32)].map((_, i) => (
          <rect
            key={i}
            x={Math.random() * dimensions.width}
            y={Math.random() * dimensions.height / 2}
            width={6 + Math.random() * 6}
            height={6 + Math.random() * 6}
            fill={i % 4 === 0 ? '#3B82F6' : i % 4 === 1 ? '#10B981' : i % 4 === 2 ? '#F97316' : '#EF4444'}
            opacity={0.7}
            rx={2}
          >
            <animate
              attributeName="y"
              values={`0;${dimensions.height}`}
              dur={`${1.5 + Math.random() * 1.5}s`}
              repeatCount="1"
              fill="freeze"
            />
          </rect>
        ))}
      </svg>
    </div>
  );
};

const CLIENT_LOGOS = [
  // Your actual client logos
  { src: "/logos/Emirates.png", alt: "Emirates Airlines" },
  { src: "/logos/Oxford.svg", alt: "Oxford University" },
  { src: "/logos/dubai-holding.jpg", alt: "Dubai Holding" },
  { src: "/logos/indigo.png", alt: "Indigo Airlines" },
  { src: "/logos/bits.jpg", alt: "BITS Pilani" },
];

// Animated SVG icon wrapper
const AnimatedIcon = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 180, damping: 12 }}
    viewport={{ once: true, amount: 0.6 }}
    className="inline-block"
  >
    {children}
  </motion.div>
);

// Sample Lottie animation public URL (fallback)
const lottieUrl = "https://assets2.lottiefiles.com/packages/lf20_2glqweqs.json";

// Animated Counter component
const AnimatedCounter = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
           const start = 0;
    const end = value;
    if (start === end) return;
           const incrementTime = 18;
    let current = start;
    const timer = setInterval(() => {
      current += Math.ceil(end / 60);
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <span className="text-3xl sm:text-4xl font-extrabold text-primary drop-shadow-lg">{count.toLocaleString()}</span>
      <span className="text-base text-textGray mt-1 font-medium">{label}</span>
        </div>
  );
};

// Testimonials carousel
const TESTIMONIALS = [
  {
    name: "Ayesha K.",
    company: "Dubai Realty",
    quote: "Insight Axis automated our lead follow-up and we saw a 30% increase in conversions in just 2 weeks!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Omar S.",
    company: "HealthFirst Clinic",
    quote: "The AI chatbot is a game changer for our patient queries. Fast, friendly, and always available!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya R.",
    company: "EduCoach UAE",
    quote: "We saved 15+ hours/week on admin tasks. The team at Insight Axis is super responsive and knowledgeable.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center gap-4 min-h-[220px]"
        >
          <img src={TESTIMONIALS[index].avatar} alt={TESTIMONIALS[index].name} className="w-16 h-16 rounded-full border-4 border-primary shadow" />
          <blockquote className="text-lg italic text-textGray font-medium">“{TESTIMONIALS[index].quote}”</blockquote>
          <div className="mt-2 text-primary font-bold">{TESTIMONIALS[index].name}</div>
          <div className="text-sm text-textGray">{TESTIMONIALS[index].company}</div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-4">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [confetti, setConfetti] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [lottieData, setLottieData] = useState<object | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetch(lottieUrl)
      .then((res) => res.json())
      .then(setLottieData);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        companySize: formData.get('companySize'),
        industry: formData.get('industry'),
        challenge: formData.get('challenge'),
        timestamp: new Date().toISOString(),
        source: 'Website Contact Form'
      };

      // Option 1: Send to Google Sheets (recommended)
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setConfetti(true);
        setTimeout(() => setConfetti(false), 1800);
        if (formRef.current) formRef.current.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center aurora-bg text-textGray">
      {/* Sticky Floating CTA */}
      <a
        href="#contact"
        className="fixed z-40 bottom-24 right-6 bg-ctaOrange hover:bg-ctaRed text-white font-bold px-6 py-3 rounded-full shadow-2xl border-2 border-white hover:scale-105 transition-all duration-300 animate-pulse"
        style={{ boxShadow: '0 8px 32px rgba(239, 68, 68, 0.6)', color: 'white' }}
      >
        Book Free Audit
      </a>
      {/* Hero Section with animated particles and Lottie animation */}
      <motion.section
        className="w-full max-w-5xl mx-auto flex flex-col items-center text-center py-16 px-4 gap-6 glass rounded-3xl shadow-glow relative overflow-hidden float"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
      >
        <ParticlesBG />
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 w-full">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-textBlue mb-2">Smart Business Automation That Actually Delivers.</h1>
            <p className="text-lg sm:text-xl text-textGray mb-6">We help you save time, reduce costs, and scale faster using intelligent systems.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-ctaOrange hover:bg-ctaRed text-white font-semibold px-8 py-3 rounded-full shadow-2xl transition-all duration-300 text-lg border-2 border-ctaOrange hover:border-ctaRed focus:ring-4 focus:ring-ctaOrange/40 focus:outline-none" style={{boxShadow: '0 4px 20px rgba(239, 68, 68, 0.4)', color: 'white'}}>Book Free Audit</a>
              <a href="#services" className="bg-primary hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-2xl transition-all duration-300 text-lg border-2 border-primary hover:border-blue-600 focus:ring-4 focus:ring-primary/40 focus:outline-none" style={{boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)', color: 'white'}}>Explore Services</a>
            </div>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] mx-auto">
            {lottieData && (
              <Player autoplay loop animationData={lottieData} style={{ height: 220, width: 220 }} />
            )}
          </div>
        </div>
      </motion.section>
      {/* Trusted By Logos Section */}
      <motion.section 
        className="w-full max-w-6xl mx-auto py-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-textBlue mb-2">Trusted by Leading UAE Organizations</h3>
          <p className="text-sm text-textGray opacity-80">Join industry leaders who&apos;ve transformed their operations with our AI solutions</p>
        </div>
        <div className="glass rounded-2xl shadow-glow p-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {CLIENT_LOGOS.map((logo, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-16 w-auto max-w-[180px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 filter contrast-110" 
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-textGray">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>500+ Businesses Automated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-ctaOrange rounded-full"></span>
              <span>Dubai Business Awards 2024</span>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Animated Counters */}
      <div className="w-full max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 py-6">
        <AnimatedCounter value={1200} label="Hours Saved" />
        <AnimatedCounter value={350} label="Clients Served" />
        <AnimatedCounter value={7800} label="Leads Generated" />
      </div>
      <WavyDivider />
      {/* Testimonials Carousel */}
      <section className="w-full max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-textBlue mb-4">What Our Clients Say</h2>
        <TestimonialsCarousel />
      </section>
      {/* Services Grid */}
      <motion.section
        id="services"
        className="w-full max-w-5xl mx-auto py-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-textBlue mb-8 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Service cards with animated icons */}
          {[{
            icon: <AnimatedIcon><ChatBubbleLeftRightIcon className="h-8 w-8 text-primary mb-1" /></AnimatedIcon>,
            label: "Smart WhatsApp & Website Chatbots",
          }, {
            icon: <AnimatedIcon><PhoneIcon className="h-8 w-8 text-primary mb-1" /></AnimatedIcon>,
            label: "AI Voice Agents",
          }, {
            icon: <AnimatedIcon><ArrowPathIcon className="h-8 w-8 text-primary mb-1" /></AnimatedIcon>,
            label: "Lead Follow-Up Automation",
          }, {
            icon: <AnimatedIcon><Cog6ToothIcon className="h-8 w-8 text-primary mb-1" /></AnimatedIcon>,
            label: "Business Process Automation",
          }, {
            icon: <AnimatedIcon><UserGroupIcon className="h-8 w-8 text-primary mb-1" /></AnimatedIcon>,
            label: "Internal AI Assistants",
          }, {
            icon: <AnimatedIcon><GlobeAltIcon className="h-8 w-8 text-primary mb-1" /></AnimatedIcon>,
            label: "AI-Enhanced Websites",
          }, {
            icon: <AnimatedIcon><LightBulbIcon className="h-8 w-8 text-primary mb-1" /></AnimatedIcon>,
            label: "Strategy & Consulting",
          }, {
            icon: <AnimatedIcon><SparklesIcon className="h-8 w-8 text-primary mb-1" /></AnimatedIcon>,
            label: "Custom AI Projects",
          }].map((service, i) => (
            <motion.div
              key={service.label}
              className="glass rounded-2xl p-6 flex flex-col items-center text-center font-medium text-textGray transition-all gap-2 cursor-pointer hover:shadow-glow hover:-translate-y-2 hover:ring-4 hover:ring-primary/20"
              whileHover={{ scale: 1.06, rotateY: 5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              {service.icon}
              {service.label}
            </motion.div>
          ))}
        </div>
      </motion.section>
      <WavyDivider flip />

      {/* Industries We Serve */}
      <motion.section
        id="industries"
        className="w-full max-w-5xl mx-auto py-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-textBlue mb-8 text-center">Industries We Serve</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[{
            icon: <BuildingOffice2Icon className="h-5 w-5 text-white" />,
            label: "Real Estate",
          }, {
            icon: <HeartIcon className="h-5 w-5 text-white" />,
            label: "Healthcare & Clinics",
          }, {
            icon: <AcademicCapIcon className="h-5 w-5 text-white" />,
            label: "Education & Coaches",
          }, {
            icon: <ShoppingBagIcon className="h-5 w-5 text-white" />,
            label: "Retail & E-commerce",
          }, {
            icon: <UsersIcon className="h-5 w-5 text-white" />,
            label: "Agencies & Startups",
          }].map((industry, i) => (
            <motion.span
              key={industry.label}
              className="flex items-center gap-2 bg-secondary text-white px-6 py-2 rounded-full text-base font-semibold shadow-glow-green transition-all cursor-pointer hover:-translate-y-1 hover:ring-4 hover:ring-secondary/30 border-2 border-secondary"
              whileHover={{ scale: 1.07, rotateZ: 2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              style={{ color: 'white', backgroundColor: '#10B981' }}
            >
              {industry.icon} {industry.label}
            </motion.span>
          ))}
        </div>
      </motion.section>
      <WavyDivider />

      {/* Why Choose Insight Axis */}
      <motion.section
        id="why"
        className="w-full max-w-4xl mx-auto py-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-textBlue mb-8 text-center">Why Choose Insight Axis</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
          <li className="flex items-center gap-3"><span className="text-primary text-2xl">•</span>Vedic-aligned decision-making</li>
          <li className="flex items-center gap-3"><span className="text-primary text-2xl">•</span>Fast turnaround (3–7 days)</li>
          <li className="flex items-center gap-3"><span className="text-primary text-2xl">•</span>Modern tools + human support</li>
          <li className="flex items-center gap-3"><span className="text-primary text-2xl">•</span>Local understanding of UAE market</li>
        </ul>
      </motion.section>
      <WavyDivider flip />

      {/* Enhanced Contact / Book a Free Consultation Form */}
      <motion.section
        id="contact"
        className="w-full max-w-5xl mx-auto py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="glass rounded-3xl shadow-glow p-8 md:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Header Section */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
              >
                <SparklesIcon className="h-4 w-4" />
                Free Strategy Session
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold text-textBlue mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-textGray mb-6 max-w-2xl mx-auto">
                Get a personalized AI automation strategy tailored to your business. 
                Our experts will analyze your processes and show you exactly how to save time and increase revenue.
              </p>
              
              {/* Value Props */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center gap-2 text-sm text-textGray">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>30-Min Free Consultation</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-textGray">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Custom AI Strategy Report</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-textGray">
                  <div className="w-2 h-2 bg-ctaOrange rounded-full"></div>
                  <span>No Obligation Required</span>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Benefits */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-textBlue mb-4">What You&apos;ll Get:</h3>
                <div className="space-y-4">
                  {[
                    { icon: <LightBulbIcon className="h-5 w-5" />, title: "Process Analysis", desc: "We'll identify automation opportunities in your current workflow" },
                    { icon: <Cog6ToothIcon className="h-5 w-5" />, title: "Custom Solution", desc: "Receive a tailored AI strategy designed for your specific industry" },
                    { icon: <ArrowPathIcon className="h-5 w-5" />, title: "ROI Projection", desc: "See exactly how much time and money you can save with automation" },
                    { icon: <SparklesIcon className="h-5 w-5" />, title: "Implementation Plan", desc: "Get a clear roadmap to deploy AI solutions in your business" }
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/30 backdrop-blur"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-textBlue text-sm">{benefit.title}</h4>
                        <p className="text-xs text-textGray mt-1">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="glass-dark rounded-2xl p-6 border border-white/20">
                <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-textBlue mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        placeholder="John Smith" 
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-textGray placeholder-textGray/60 transition-all" 
                        required 
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textBlue mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="john@company.com" 
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-textGray placeholder-textGray/60 transition-all" 
                        required 
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-textBlue mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="+971 50 123 4567" 
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-textGray placeholder-textGray/60 transition-all" 
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textBlue mb-2">Company Size</label>
                      <select 
                        name="companySize"
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-textGray transition-all"
                        disabled={isSubmitting}
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="200+">200+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-textBlue mb-2">Industry / Business Type *</label>
                    <input 
                      type="text" 
                      name="industry"
                      placeholder="e.g., Real Estate, Healthcare, E-commerce" 
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-textGray placeholder-textGray/60 transition-all" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-textBlue mb-2">Biggest Challenge *</label>
                    <textarea 
                      name="challenge"
                      placeholder="What&apos;s your biggest operational challenge? How much time do you spend on repetitive tasks?" 
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-textGray placeholder-textGray/60 transition-all min-h-[100px] resize-none" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>

                  <motion.button 
                    type="submit" 
                    className={`w-full mt-6 bg-gradient-to-r font-bold py-4 rounded-full shadow-glow-orange transition-all duration-300 text-lg border-2 focus:ring-4 focus:ring-ctaOrange/40 focus:outline-none group ${
                      isSubmitting 
                        ? 'from-gray-400 to-gray-500 border-gray-400 cursor-not-allowed' 
                        : submitStatus === 'success'
                        ? 'from-secondary to-green-600 border-secondary'
                        : submitStatus === 'error'
                        ? 'from-red-500 to-red-600 border-red-500'
                        : 'from-ctaOrange to-ctaRed hover:from-ctaRed hover:to-ctaOrange border-ctaOrange hover:border-ctaRed'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    style={{ color: 'white' }}
                    disabled={isSubmitting}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          ✅ Request Sent Successfully!
                        </>
                      ) : submitStatus === 'error' ? (
                        <>
                          ❌ Please Try Again
                        </>
                      ) : (
                        <>
                          Book My Free Strategy Session
                          <SparklesIcon className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>

                  <p className="text-xs text-textGray/70 text-center mt-3">
                    🔒 Your information is secure and will never be shared. 
                    <br />We typically respond within 2 hours during business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <Confetti show={confetti} />

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/971553927977" target="_blank" rel="noopener noreferrer" className="fixed z-50 bottom-6 right-6 bg-secondary hover:bg-primary text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all animate-bounce" style={{boxShadow: '0 0 16px #10B981, 0 0 32px #10B981'}} aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32" height="32">
          <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3 .14.19 2.03 3.1 5.02 4.23.7.24 1.25.38 1.68.49.71.18 1.36.15 1.87.09.57-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
        </svg>
      </a>
      {/* WhatsApp Chat Widget */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function () {
            var options = {
              whatsapp: "971553927977", // WhatsApp number
              call_to_action: "Chat with us!",
              position: "right",
            };
            var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
            var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
            s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
          })();
        `
      }} />
    </div>
  );
}
