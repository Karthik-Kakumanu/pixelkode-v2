import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Target, Cpu, Users, Zap, Award, 
  Lightbulb, ArrowRight, Layers, Code2, 
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button";

// --- Local Image Imports ---
// Adjust the path '../assets/' if your folder structure is different
import founder1Img from "../assets/img1.png"; 
import founder2Img from "../assets/img2.png";

// --- Variants ---

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

// --- Sub-Components ---

const ValueCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    variants={fadeInUp}
    className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
  >
    <div className="w-12 h-12 rounded-lg bg-void-900 border border-white/10 flex items-center justify-center mb-6 text-slate-400 group-hover:text-lumina-500 group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
      <Icon strokeWidth={1.5} size={24} />
    </div>
    <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-slate-200 transition-colors">
      {title}
    </h3>
    <p className="text-slate-400 leading-relaxed text-sm">
      {desc}
    </p>
  </motion.div>
);

const FounderProfile = ({ img, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="relative group"
  >
    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-white/10">
      {/* Clean Image - No Overlays/Masks */}
      <img 
        src={img} 
        alt="Founder" 
        className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
      />
    </div>
    
    {/* Minimal Label Only */}
    <div className="flex items-center gap-3 pl-1">
        <div className="h-[1px] w-8 bg-lumina-500" />
        <span className="text-lumina-500 text-[10px] font-bold uppercase tracking-[0.25em]">
          Founded By
        </span>
    </div>
  </motion.div>
);

// --- Main Page ---

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <PageTransition>
      <div ref={containerRef} className="bg-void-950 min-h-screen relative overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-void-900 to-transparent pointer-events-none" />
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-lumina-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

        {/* 1. Hero Section */}
        <section className="pt-05 pb-24 px-6 md:px-20 max-w-[1400px] mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-lumina-500" />
              <span className="text-lumina-500 text-xs font-bold uppercase tracking-[0.3em]">
                The Firm
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-display font-medium text-white mb-10 leading-[0.95] tracking-tight">
              We are artisans of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600 font-serif italic pr-4">
                digital reality.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light max-w-3xl">
              PixelKode was founded on a rebellion against mediocrity. In an era of templates and shortcuts, we stand for <span className="text-white font-normal border-b border-lumina-500/30 pb-0.5">bespoke engineering</span> and <span className="text-white font-normal border-b border-lumina-500/30 pb-0.5">intentional design</span>.
            </motion.p>
          </motion.div>
        </section>

        {/* 2. The Founders Story */}
        <section className="py-24 px-6 md:px-20 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Text Column */}
              <div className="lg:col-span-5 space-y-8 sticky top-32">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lumina-500/20 bg-lumina-500/5 text-lumina-500 text-[10px] uppercase tracking-widest font-bold mb-4">
                    <Star className="w-3 h-3 fill-current" /> Founded By
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight">
                    Visionaries,<br />
                    Engineers,<br />
                    <span className="text-slate-500">Partners.</span>
                 </h2>

                 <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
                    <p>
                      We met with a singular obsession: to bridge the gap between heavy backend engineering and fluid, cinematic frontend experiences.
                    </p>
                    <p>
                      We believe that a website is not just a utility—it's the most powerful asset a brand possesses. We don't just build sites; we craft digital legacies that outperform, outlast, and outshine the competition.
                    </p>
                    <p className="text-white font-medium">
                      "Good enough is never enough. We build for the best."
                    </p>
                 </div>
              </div>

              {/* Founders Images Column */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8 lg:pt-0">
                 
                 {/* Founder 1 */}
                 <FounderProfile 
                   img={founder2Img}
                   delay={0.2}
                 />

                 {/* Founder 2 */}
                 <FounderProfile 
                   img={founder1Img}
                   delay={0.4}
                 />

              </div>

            </div>
          </div>
        </section>

        {/* 3. Core Values */}
        <section className="py-32 px-6 md:px-20 max-w-[1400px] mx-auto">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <span className="text-lumina-500 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
              Our Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              The Code We Live By
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <ValueCard 
              icon={Target} 
              title="Obsessive Precision" 
              desc="We sweat the small stuff. The 1px alignment, the 10ms latency, the semantic structure. Excellence is in the details."
            />
            <ValueCard 
              icon={Cpu} 
              title="Radical Performance" 
              desc="Speed is a feature. We engineer systems that load instantly and respond immediately, respecting your user's time."
            />
            <ValueCard 
              icon={Users} 
              title="True Partnership" 
              desc="We are not a transactional vendor. We function as your internal product team, invested in your long-term growth."
            />
            <ValueCard 
              icon={Code2} 
              title="Clean Architecture" 
              desc="We write code that humans can read and machines can scale. Future-proof foundations for evolving businesses."
            />
            <ValueCard 
              icon={Layers} 
              title="Aesthetic Intelligence" 
              desc="Design is not just decoration. It is how something works. We merge form and function into a seamless experience."
            />
            <ValueCard 
              icon={Lightbulb} 
              title="Proactive Strategy" 
              desc="We don't just take orders. We challenge assumptions and provide strategic guidance to maximize ROI."
            />
          </motion.div>
        </section>

        {/* 4. Philosophy Quote */}
        <section className="py-24 px-6 md:px-20 bg-void-900 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
            <Award className="w-12 h-12 text-lumina-500 mx-auto mb-8 opacity-80" />
            <blockquote className="text-2xl md:text-4xl font-display font-medium text-white leading-tight mb-10">
              "Technology without purpose is just noise. We build digital instruments that amplify human potential and business clarity."
            </blockquote>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-1 bg-lumina-500 rounded-full mb-2" />
              <h4 className="text-white font-bold tracking-widest uppercase">PixelKode Creative</h4>
              <p className="text-slate-500 text-sm">Est. 2025 • Guntur, India</p>
            </div>
          </div>
        </section>

        {/* 5. CTA */}
        <section className="py-40 px-6 md:px-20 flex items-center justify-center relative">
          <div className="text-center max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
            >
              Ready to define <br />
              <span className="text-lumina-500">your era?</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/contact">
                <Button className="h-16 px-12 text-lg rounded-full shadow-[0_0_40px_rgba(14,165,233,0.2)] hover:shadow-[0_0_60px_rgba(14,165,233,0.4)] transition-all duration-500 bg-white text-void-950 hover:bg-slate-200 border-none">
                  Start the Conversation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}