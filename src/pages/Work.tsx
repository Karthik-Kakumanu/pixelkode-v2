import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Cuboid } from "lucide-react";
import { Link } from "react-router-dom";

// --- Asset Imports ---
import srestaImg from '../assets/sresta.jpg';
import logoImg from "../assets/logo.png";
import sharmaImg from "../assets/sharma.png";
import cakerovenImg from "../assets/cakeroven.png";
import brahminImg from "../assets/brahmin.png";

// Import local images for the carousel
import oneImg from "../assets/1.png";
import twoImg from "../assets/2.png";
import threeImg from "../assets/3.png";
import fourImg from "../assets/img4.png";
import fiveImg from "../assets/img5.png";

// --- Component Imports ---
import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button"; 

// --- Data ---

const CATEGORIES = ["All", "Development", "Design", "Mobile"];

const PROJECTS = [
  {
    id: 1,
    title: "SrestaMart",
    category: "Development",
    tags: ["E-Commerce", "React", "Node.js", "RazorPay"],
    image: srestaImg, 
    link: "https://www.srestamart.com",
    year: "2025",
    description: "A high-performance headless commerce platform serving daily users with sub-second load times."
  },
  {
    id: 2,
    title: "Brahmin Foods",
    category: "Development",
    tags: ["E-Commerce", "HTML CSS", "Node.js", "RazorPay"],
    image: brahminImg, 
    link: "https://brahminfoods.in", 
    year: "2025",
    description: "A modern web presence and online ordering system for a traditional food distributor."
  },
  {
    id: 3,
    title: "Cakeroven Loyalty",
    category: "Mobile",
    tags: ["React js", "CRM", "Rewards", "RazorPay"],
    image: cakerovenImg,
    link: "https://cakeroven-crm.onrender.com", 
    year: "2025",
    description: "A cross-platform customer retention web application featuring gamified rewards."
  },
  {
    id: 4,
    title: "PixelKode Identity",
    category: "Design",
    tags: ["Branding", "Motion", "3D"],
    image: logoImg,
    link: "https://pixelkode.netlify.app",
    year: "2024",
    description: "The comprehensive rebranding of a creative agency, focusing on futuristic typography."
  },
  // --- POSTER PROJECT 1 (Vertical A4) ---
  {
    id: 5,
    title: "Weekend Adventures",
    category: "Design",
    tags: ["Social Media", "Print", "Photoshop"],
    image: [
      oneImg,
      twoImg,
      threeImg
    ],
    link: null, 
    year: "2025",
    description: "A series of high-impact posters designed for a travel agency's summer campaign."
  },
  {
    id: 6,
    title: "Sharma Foods",
    category: "Development",
    tags: ["Full Stack", "PostgreSQL", "Node.js", "RazorPay"],
    image: sharmaImg,
    link: "https://sharmafoods.in",
    year: "2025",
    description: "A brand identity and web platform for a traditional food distributor expanding into retail markets."
  },
  // --- POSTER PROJECT 2 (Vertical A4) ---
  {
    id: 7,
    title: "Village Chicken Campaign",
    category: "Design",
    tags: ["Social Media", "Print", "Photoshop"],
    image: [
      fourImg,
      fiveImg
    ],
    link: null, 
    year: "2025",
    description: "Promotional pamphlet and social media kit designed for a local organic food brand."
  }
];

// --- Components ---

const FilterButton = ({ active, label, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
      active 
        ? "text-void-950 border-white bg-white" 
        : "text-slate-500 border-white/10 hover:border-white/30 hover:text-white bg-transparent"
    }`}
  >
    {label}
  </button>
);

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isSlideshow = Array.isArray(project.image);

  // --- LOGIC: Check if this is a "Poster" project (IDs 5 and 7) ---
  const isPortrait = project.id === 5 || project.id === 7;
  
  // Set Aspect Ratio: Vertical (3/4) for posters, Landscape (16/10) for others
  const aspectClass = isPortrait ? "aspect-[3/4]" : "aspect-[16/10]";

  useEffect(() => {
    if (isSlideshow) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.image.length);
      }, 3000); 
      return () => clearInterval(interval);
    }
  }, [isSlideshow, project.image]);

  const hasLink = project.link && project.link !== "#";
  const isExternal = hasLink && project.link.startsWith('http');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Wrapper = (hasLink ? (isExternal ? 'a' : Link) : 'div') as any;
  const props = hasLink 
    ? (isExternal ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : { to: project.link })
    : {};

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative flex flex-col ${index % 2 === 1 ? "md:mt-24" : ""}`}
    >
      <Wrapper {...props} className={`block w-full ${hasLink ? 'cursor-pointer' : 'cursor-default'}`}>
        
        {/* Dynamic Aspect Ratio Class Applied Here */}
        <div className={`relative ${aspectClass} overflow-hidden rounded-sm bg-void-900 border border-white/5 transition-all duration-500`}>
          
          <div className="absolute inset-0 bg-void-950/20 group-hover:bg-void-950/0 transition-colors duration-700 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-20" />
          
          <AnimatePresence mode="wait">
            {isSlideshow ? (
              <motion.img
                key={currentImageIndex}
                src={project.image[currentImageIndex]}
                alt={project.title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[0.22,1,0.36,1]"
              />
            )}
          </AnimatePresence>

          {hasLink && (
            <div className="absolute top-4 right-4 z-30 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-white text-void-950 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          )}

          {isSlideshow && (
            <div className="absolute bottom-4 right-4 z-30 flex gap-2">
              {project.image.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === currentImageIndex ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          )}
        </div>
      </Wrapper>

      <div className="mt-8 flex justify-between items-start border-t border-white/10 pt-6 group-hover:border-white/30 transition-colors duration-500">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lumina-500 text-[10px] font-bold uppercase tracking-widest border border-lumina-500/20 bg-lumina-500/5 px-2 py-1 rounded">
              {project.category}
            </span>
            <span className="text-slate-500 text-[10px] font-mono">
              / {project.year}
            </span>
          </div>
          
          <Wrapper {...props}>
            <h3 className={`text-3xl font-display font-medium text-white mb-3 transition-colors ${hasLink ? 'group-hover:text-slate-200 cursor-pointer' : 'cursor-default'}`}>
              {project.title}
            </h3>
          </Wrapper>

          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[10px] text-slate-500 uppercase tracking-wider">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Page ---

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="min-h-screen bg-void-950 pb-20">
        
        {/* 1. Header Section */}
        <section className="pt-05 pb-10 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 border-b border-white/10 pb-10"
          >
             {/* Title Block */}
             <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="h-[1px] w-12 bg-lumina-500" />
                  <span className="text-lumina-500 text-xs font-bold uppercase tracking-[0.3em]">
                    Case Studies
                  </span>
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white tracking-tight leading-[1] flex flex-col md:block">
                  Selected <br className="hidden md:block"/>
                  <span className="text-slate-500 italic font-serif flex items-center gap-4">
                    Creations.
                    {/* 3D ROTATING CUBE ICON */}
                    <motion.div
                      animate={{ 
                        rotateY: 360, 
                        rotateX: [0, 10, 0],
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className="text-lumina-500 hidden md:block"
                    >
                      <Cuboid size={60} strokeWidth={1} />
                    </motion.div>
                    {/* Mobile version smaller */}
                    <motion.div
                      animate={{ rotateY: 360 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="text-lumina-500 md:hidden block mt-2"
                    >
                      <Cuboid size={40} strokeWidth={1} />
                    </motion.div>
                  </span>
                </h1>
             </div>

             {/* Filters & Desc Row */}
             <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-2">
                <p className="text-slate-400 max-w-xl text-lg leading-relaxed font-light">
                  A curation of digital products that define our standard of quality. We build systems that scale and designs that resonate.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <FilterButton 
                      key={cat} 
                      label={cat} 
                      active={activeCategory === cat} 
                      onClick={() => setActiveCategory(cat)} 
                    />
                  ))}
                </div>
             </div>
          </motion.div>
        </section>

        {/* 2. Projects Grid */}
        <section className="px-6 md:px-20 max-w-[1400px] mx-auto mb-32">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
             <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
                <p className="text-slate-500">No projects found in this category.</p>
             </div>
          )}
        </section>

        {/* 3. Bottom CTA */}
        <section className="px-6 md:px-20 max-w-[1400px] mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-void-900 border border-white/5 py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 group">
             {/* Abstract Background */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lumina-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
             
             <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                  Have a vision?
                </h2>
                <p className="text-slate-400 max-w-md text-lg">
                  We are currently accepting new partnerships for the upcoming quarter. Let's build something iconic.
                </p>
             </div>

             <div className="relative z-10">
                <Link to="/contact">
                   <Button className="h-16 px-10 text-lg bg-white text-void-950 hover:bg-slate-200 border-0 shadow-[0_0_30px_rgba(255,255,255,0.15)] rounded-full">
                      Start a Project <ArrowRight className="ml-2 w-5 h-5" />
                   </Button>
                </Link>
             </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}