import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useMotionValueEvent 
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logoImg from "../../assets/logo.png"; 

// --- Animation Variants ---

const navContainerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const mobileMenuVariants = {
  closed: { 
    y: "-100%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
  },
  open: { 
    y: "0%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
  }
};

const linkVariants = {
  initial: { y: 30, opacity: 0 },
  open: (i) => ({ 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, delay: 0.1 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }
  }),
  closed: { 
    y: 30, 
    opacity: 0,
    transition: { duration: 0.4 } 
  }
};

const navLinks = [
  { title: "Studio", href: "/" },
  { title: "Work", href: "/work" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
  { title: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { scrollY } = useScroll();
  const location = useLocation();

  // Handle Scroll Logic (Hide on down, Show on up, Style on scroll)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.header
        variants={navContainerVariants}
        initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* --- Logo --- */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 overflow-hidden group-hover:border-purple-500/50 transition-colors duration-500">
               {/* Logo Image */}
               <img 
                 src={logoImg} 
                 alt="PixelKode" 
                 className="w-6 h-6 object-contain z-10 relative" 
               />
               {/* Hover Glow */}
               <div className="absolute inset-0 bg-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              PixelKode<span className="text-purple-500">.</span>
            </span>
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 bg-white/5 px-6 py-2.5 rounded-full border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link 
                  key={link.title} 
                  to={link.href} 
                  className="relative text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  {link.title}
                  {location.pathname === link.href && (
                    <motion.span 
                      layoutId="activeNav"
                      className="absolute -bottom-4 left-0 right-0 h-[2px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-2.5 bg-white text-black rounded-full font-semibold text-sm overflow-hidden flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-purple-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.22,1,0.36,1]" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  Let's Talk
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.button>
            </Link>
          </nav>

          {/* --- Mobile Menu Toggle --- */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white origin-left transition-all duration-300"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white transition-all duration-300"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white origin-left transition-all duration-300"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* --- Mobile Fullscreen Menu --- */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center px-6 md:px-20 pt-20"
          >
             {/* Background Decoration */}
             <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

             <div className="flex flex-col gap-4">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4">Navigation</span>
                {navLinks.map((link, i) => (
                  <div key={link.title} className="overflow-hidden">
                    <motion.div 
                      custom={i} 
                      variants={linkVariants}
                      className="relative"
                    >
                      <Link 
                        to={link.href} 
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-4 text-5xl md:text-7xl font-bold text-neutral-500 hover:text-white transition-colors duration-300"
                      >
                        <span className="group-hover:translate-x-4 transition-transform duration-500 ease-[0.22,1,0.36,1]">
                          {link.title}
                        </span>
                        <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-purple-500" />
                      </Link>
                    </motion.div>
                  </div>
                ))}
             </div>

             {/* Mobile Footer Info */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 0.5 } }}
               className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-8"
             >
                <div className="flex flex-col gap-2">
                   <h4 className="text-sm text-neutral-400">Socials</h4>
                   <div className="flex flex-col gap-1">
                      <a href="#" className="text-white hover:text-purple-400 transition-colors">LinkedIn</a>
                      <a href="https://www.instagram.com/pixelkode" className="text-white hover:text-purple-400 transition-colors">Instagram</a>
                      <a href="https://www.youtube.com/channel/UCnxP_mhXmhVA-fwxfb4jWMw" className="text-white hover:text-purple-400 transition-colors">YouTube</a>
                   </div>
                </div>
                <div className="flex flex-col gap-2">
                   <h4 className="text-sm text-neutral-400">Contact</h4>
                   
                   {/* Email - Direct Gmail Link */}
                   <a 
                     href="https://mail.google.com/mail/?view=cm&fs=1&to=pixelkode.kp@gmail.com" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-white hover:text-purple-400 transition-colors text-sm break-all"
                   >
                     pixelkode.kp@gmail.com
                   </a>

                   {/* Phone - Click to Call */}
                   <a 
                     href="tel:+918897925715" 
                     className="text-white hover:text-purple-400 transition-colors"
                   >
                     +91 889 792 5715
                   </a>

                   {/* WhatsApp - Direct Chat */}
                   <a 
                     href="https://wa.me/918897925715"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white hover:text-purple-400 transition-colors"
                   >
                     WhatsApp
                   </a>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}