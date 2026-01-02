import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Mail, MapPin } from "lucide-react";
import logoImg from "../../assets/logo.png"; // Ensure this path is correct

// --- Animation Variants ---
const footerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linkHoverVariants = {
  initial: { x: 0, color: "#9ca3af" }, // neutral-400
  hover: {
    x: 6,
    color: "#c084fc", // purple-400
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const socialHoverVariants = {
  initial: { scale: 1, color: "#9ca3af" },
  hover: {
    scale: 1.05,
    color: "#ffffff",
    transition: { duration: 0.2 },
  },
};

// --- Data ---
const sitemapLinks = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "About Studio", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://www.instagram.com/pixelkode.co/" },
  { name: "Facebook", url: "https://www.facebook.com/people/pixelkodeco/61581103567444/?rdid=BG5LNRkbHkJ7czPn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GqG8tb49u%2F" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCnxP_mhXmhVA-fwxfb4jWMw" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={footerContainerVariants}
      className="relative w-full bg-[#050505] pt-24 pb-10 overflow-hidden"
    >
      {/* --- Ambient Background Glow --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent blur-[2px]" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* --- Top Section: CTA & Branding --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20 border-b border-white/5 pb-16">
          
          {/* Brand Column (Left) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-8">
            <Link to="/" className="group flex items-center gap-4 w-fit">
              <div className="relative w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-500">
                <img
                  src={logoImg}
                  alt="PixelKode Logo"
                  className="w-8 h-8 object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                  PixelKode.
                </span>
                <span className="text-xs text-neutral-500 font-medium tracking-wide uppercase">
                  Digital Creative Agency
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-md font-light">
              We craft high-performance digital experiences. Merging strategy, 
              design, and technology to help brands lead the future.
            </p>

            <div className="flex items-center gap-4 mt-2">
                <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=pixelkode.kp@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
>
  <Mail className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
  {/* I also corrected the text below to match the actual email address */}
  <span className="text-sm font-medium text-white">pixelkode.kp@gmail.com</span>
</a>
            </div>
          </motion.div>

          {/* Spacer (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Links Grid (Right) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-10 sm:gap-16">
            
            {/* Sitemap */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">Explore</h4>
              <nav className="flex flex-col gap-3">
                {sitemapLinks.map((link) => (
                  <Link key={link.name} to={link.path} className="block w-fit">
                    <motion.span
                      variants={linkHoverVariants}
                      initial="initial"
                      whileHover="hover"
                      className="inline-block text-base font-medium"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">Connect</h4>
              <nav className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialHoverVariants}
                    initial="initial"
                    whileHover="hover"
                    className="flex items-center gap-2 w-fit group"
                  >
                    <span className="text-base font-medium">{social.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright & Legal --- */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-sm text-neutral-500"
        >
          {/* Left: Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span className="font-medium">© {currentYear} PixelKode Agency.</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span>All Rights Reserved.</span>
          </div>

          {/* Center: Made With Love (Mobile: Stacked, Desktop: Absolute Center or Flex) */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-neutral-400">
             <span>Made with</span>
             <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-[pulse_1.5s_ease-in-out_infinite]" />
             <span>in India</span>
          </div>

          {/* Right: Legal */}
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}