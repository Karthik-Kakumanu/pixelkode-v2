import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  ArrowRight, Code2, Rocket, Globe, ShieldCheck, 
  Cpu, Search, PenTool, Layout, Smartphone, 
  Zap, Layers, ExternalLink, ArrowUpRight, Wand2, TrendingUp 
} from "lucide-react";
import { Link } from "react-router-dom";
import srestaImg from '../assets/sresta.jpg';
import logoImg from "../assets/logo.png";
import sharmaImg from "../assets/sharma.png";
import cakerovenImg from "../assets/cakeroven.png";

// Assume these exist based on context
import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button";
// import HolographicCard from "../components/ui/HolographicCard";
import vidFile from "../assets/vid.mp4"; 

// --- Motion Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

// --- Sub-Components ---

const ProcessStep = ({ number, title, desc, icon: Icon }) => (
  <motion.div 
    variants={fadeInUp}
    className="flex flex-col md:flex-row gap-6 md:gap-10 border-l border-white/10 pl-8 md:pl-0 md:border-l-0 relative group"
  >
    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-lumina-500 to-transparent md:hidden" />
    
    <div className="md:w-1/3 md:text-right flex flex-col md:items-end">
      <span className="text-6xl font-display text-white/5 font-bold absolute -top-4 -left-4 md:static md:text-white/10 group-hover:text-lumina-500/20 transition-colors duration-500 select-none">
        {number}
      </span>
      <h3 className="text-2xl font-bold mt-2 text-slate-100 group-hover:text-lumina-400 transition-colors">
        {title}
      </h3>
    </div>

    <div className="md:w-1/12 flex justify-center hidden md:flex relative">
       <div className="w-[1px] h-full bg-white/10 absolute top-0" />
       <div className="w-12 h-12 rounded-full bg-void-950 border border-white/20 flex items-center justify-center z-10 group-hover:border-lumina-500 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <Icon className="w-5 h-5 text-slate-400 group-hover:text-lumina-500" />
       </div>
    </div>

    <div className="md:w-1/2 pb-12 md:pb-0">
      <p className="text-slate-400 leading-relaxed max-w-md text-sm md:text-base">
        {desc}
      </p>
    </div>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, desc, tags }) => (
  <motion.div 
    variants={fadeInUp}
    className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-lumina-500/10 rounded-bl-full -mr-16 -mt-16 blur-2xl group-hover:bg-lumina-500/20 transition-colors duration-500" />
    
    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-lumina-500/50 transition-all duration-300">
      <Icon className="w-6 h-6 text-slate-300 group-hover:text-lumina-400" />
    </div>
    
    <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">{desc}</p>
    
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-slate-500 border border-white/5">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, category, img, link }) => {
  // Check if the link is external (starts with http)
  const isExternal = link.startsWith('http');
  
  // If external, use <a> tag. If internal, use <Link>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Wrapper = (isExternal ? 'a' : Link) as any;
  
  // Set attributes based on link type (open external in new tab)
  const props = isExternal 
    ? { href: link, target: "_blank", rel: "noopener noreferrer" } 
    : { to: link };

  return (
    // Wrap the card in the clickable Wrapper
    <Wrapper {...props} className="block w-full">
      <motion.div 
        variants={fadeInUp}
        className="group relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-void-900 cursor-pointer"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${img}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-lumina-400 text-xs font-bold uppercase tracking-widest mb-2">{category}</span>
          <div className="flex items-end justify-between w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{title}</h3>
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-white/10 transition-colors duration-500 rounded-xl" />
      </motion.div>
    </Wrapper>
  );
};

const TechTicker = () => {
  const tech = [
    "React",  "TypeScript", "Node.js", "PostgreSQL", 
    "Tailwind", "Figma", "AWS", "HTML CSS", "MYSQL", "Vercel", "Canva", "Adobe Photoshop", "CRM", "SEO", "GitHub", "VS Code", "Railway", "Render"
  ];
  
  return (
    <div className="overflow-hidden py-6 border-y border-white/5 bg-void-950 flex relative z-20">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-void-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-void-950 to-transparent z-10" />
      
      <motion.div 
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...tech, ...tech, ...tech, ...tech].map((t, i) => (
          <div key={i} className="flex items-center gap-4">
             <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
             <span className="text-sm md:text-base font-display text-slate-500 font-medium uppercase tracking-widest">
               {t}
             </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- Main Page Component ---

export default function Home() {
  const containerRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Parallax logic for Hero
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <PageTransition>
      {/* 1. CINEMATIC HERO */}
      <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-0">
        
        {/* Background Engine */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0 select-none bg-void-950 w-full h-full">
            <div 
              className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`} 
            />
            <video 
                autoPlay loop muted playsInline 
                onLoadedData={() => setVideoLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-50' : 'opacity-0'}`} 
            >
                <source src={vidFile} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-void-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-transparent to-void-950/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center w-full max-w-7xl mx-auto mt-0 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="px-5 py-2 rounded-full border border-lumina-500/20 bg-void-900/30 backdrop-blur-xl flex items-center gap-3 text-[11px] font-semibold text-lumina-400 uppercase tracking-widest shadow-[0_0_30px_rgba(14,165,233,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lumina-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lumina-500"></span>
              </span>
              PixelKode Agency • 2026
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "-0.02em" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl md:text-9xl font-display font-semibold leading-[0.9] pb-6 text-white drop-shadow-2xl mix-blend-overlay"
          >
            PixelKode
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 italic font-light font-sans">
              Agency.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-light"
          >
            We don't just build websites. We engineer <span className="text-white font-medium">market dominance</span> through precision code and cinematic design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <Button className="shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-white/20 bg-white text-void-950 hover:bg-slate-200">
                Start Project <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="outline" className="backdrop-blur-md hover:bg-white/5 border-white/10">
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600 animate-pulse"></span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </section>

      <TechTicker />

      {/* 2. SERVICES GRID (Expanded from 'Pillars') */}
      <section className="py-32 px-6 bg-void-950 relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-2xl">
                <span className="text-lumina-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-display font-medium text-white leading-[1.1]">
                   Comprehensive digital solutions for the <span className="text-slate-500 italic">modern era</span>.
                </h2>
             </div>
             <Link to="/services" className="hidden md:block">
                <div className="group flex items-center gap-2 text-sm uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                   View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
             </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
             <ServiceCard 
                icon={Layout} 
                title="Web Development" 
                desc="Custom React & Node.js architectures built for speed, SEO, and massive scalability."
                tags={["React", "Node.js", "HTML", "CSS"]}
             />
             <ServiceCard 
                icon={Smartphone} 
                title="App Development" 
                desc="Native-grade cross-platform mobile applications that feel fluid and intuitive."
                tags={["React Native", "iOS", "Android"]}
             />
             <ServiceCard 
                icon={PenTool} 
                title="Brand & UI/UX" 
                desc="Visual identity systems and user interfaces designed to convert visitors into loyalists."
                tags={["Figma", "Motion", "Identity"]}
             />
              <ServiceCard
                icon={Wand2} 
                title="Design & Editing" 
                desc="Stunning graphics, videos, and animations that captivate and engage your audience."
                tags={["Photoshop", "After Effects", "Premiere Pro", "Canva"]}
              />
              <ServiceCard
                icon={TrendingUp}
                title="CRM & Sales Funnels"
                desc="Custom CRM integrations and sales funnel automation to streamline your customer journey."
                tags={["Clients Management", "Automation", "Sales"]}
              />
             <ServiceCard 
                icon={Zap} 
                title="Digital Marketing" 
                desc="Data-driven strategies to amplify your voice and dominate search rankings."
                tags={["SEO", "Content", "Analytics"]}
             />
              
          </motion.div>
        </div>
      </section>

      {/* 3. SELECTED WORKS (New Section) */}
      <section className="py-32 px-6 bg-void-900 border-b border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="mb-20">
               <span className="text-lumina-500 text-xs font-bold uppercase tracking-[0.2em]">Selected Works</span>
               <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-white">Engineered for Impact</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
               {/* Project 1 */}
               <ProjectCard 
                  title="Sresta Mart" 
                  category="E-Commerce Platform"
                  img={srestaImg}
                  link="https://www.srestamart.com"
               />
               
               {/* Project 2 - Offset visually on desktop */}
               <div className="md:mt-24">
                  <ProjectCard 
                     title="PixelKode Studio" 
                     category="Agency Portfolio"
                     img={logoImg}
                     link="https://pixelkode.netlify.app"
                  />
               </div>

               {/* Project 3 */}
               <ProjectCard 
                  title="Sharma Foods" 
                  category="Brand Identity & Web"
                  img={sharmaImg}
                  link="https://sharmafoods.in"
               />

               {/* Project 4 */}
               <div className="md:mt-24">
                  <ProjectCard 
                     title="Cakeroven" 
                     category="Loyalty System"
                     img={cakerovenImg}
                     link="https://cakeroven-crm.onrender.com"
                  />
               </div>
            </div>

            <div className="mt-20 text-center">
               <Link to="/work">
                  <Button variant="outline" className="border-white/10 text-slate-300 hover:text-white hover:border-white/30 px-10">
                     View All Projects
                  </Button>
               </Link>
            </div>
         </div>
      </section>

      {/* 5. THE METHOD (Process) */}
      <section className="py-32 bg-void-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
             <div>
                <span className="text-lumina-500 text-xs font-bold uppercase tracking-[0.2em]">The Methodology</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white tracking-tight">From Concept to <br/>Market Leader</h2>
             </div>
             <p className="text-slate-400 max-w-sm mt-6 md:mt-0 text-sm md:text-base">
                Our proven workflow ensures transparency, velocity, and world-class results for every partnership.
             </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4 relative"
          >
             <ProcessStep number="01" title="Discovery & Strategy" desc="We strip your problem down to its core. No assumptions, just data-driven insights and architectural planning." icon={Search} />
             <ProcessStep number="02" title="Design & Prototype" desc="Visualizing the solution with high-fidelity mockups, motion studies, and interactive prototypes." icon={PenTool} />
             <ProcessStep number="03" title="Development" desc="Clean, scalable code. React, Node.js, and cloud-native systems that handle scale without breaking a sweat." icon={Code2} />
             <ProcessStep number="04" title="Launch & Scale" desc="Deploying to the edge. 99.9% uptime. Continuous optimization based on real user analytics." icon={Rocket} />
          </motion.div>
        </div>
      </section>

      {/* 6. CTA / FOOTER PREVIEW */}
      <section className="py-40 px-6 relative overflow-hidden bg-void-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-5xl md:text-8xl font-bold mb-8 text-white tracking-tighter leading-none">
               Let's build the<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-400 to-white">impossible.</span>
             </h2>
             <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl mx-auto font-light">
               Accepting new ambitious partnerships for Q1 2026.
             </p>
             <Link to="/contact">
               <Button className="bg-white text-void-950 hover:bg-lumina-400 hover:text-white border-0 shadow-[0_0_50px_rgba(255,255,255,0.2)] px-10 py-5 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                 Schedule Consultation
               </Button>
             </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}