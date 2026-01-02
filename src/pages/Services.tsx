import { motion } from "framer-motion";
import { 
  Smartphone, Palette, Globe, Database, 
  ArrowRight, CheckCircle2, PenTool, TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button";

// --- Data & Config ---

const SERVICES = [
  {
    id: "web",
    icon: Globe,
    title: "Web Engineering",
    description: "Architecting high-performance web applications using modern React ecosystems. We prioritize accessibility, SEO, and sub-second load times.",
    capabilities: ["Next.js & React", "Headless CMS", "Progressive Web Apps", "WebGL / 3D Experiences"]
  },
  {
    id: "app",
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native-grade cross-platform applications. We bridge the gap between web and mobile to deliver fluid, intuitive experiences on iOS and Android.",
    capabilities: ["React Native", "Expo Ecosystem", "Native Modules", "App Store Optimization"]
  },
  {
    id: "design",
    icon: Palette,
    title: "Product Design",
    description: "User-centric interface design that marries aesthetic beauty with functional clarity. We build comprehensive design systems, not just pages.",
    capabilities: ["UI/UX Architecture", "Design Systems", "Prototyping", "Motion Design"]
  },
  {
    id: "backend",
    icon: Database,
    title: "System Architecture",
    description: "Robust, scalable backend infrastructure designed to handle growth. We ensure your data is secure, consistent, and instantly available.",
    capabilities: ["Node.js & Express", "PostgreSQL / SQL", "Microservices", "API Development"]
  },
  {
    id: "graphics",
    icon: PenTool,
    title: "Graphic Design",
    description: "Compelling visual narratives designed to stop the scroll. We blend high-end Adobe artistry with efficient Canva workflows for speed and scale.",
    capabilities: ["Adobe Creative Suite", "Canva Pro Workflows", "Brand Collateral", "Social Media Kits"]
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Amplify your brand voice and dominate search rankings. We fuse creative storytelling with data-driven performance marketing to drive real ROI.",
    capabilities: ["SEO & Search Dominance", "Content Strategy", "Social Media Management", "Performance Analytics"]
  }
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery", desc: "Deep dive into business goals and user needs." },
  { num: "02", title: "Architecture", desc: "System design and technology selection." },
  { num: "03", title: "Development", desc: "Agile sprints with bi-weekly deliverables." },
  { num: "04", title: "Launch", desc: "QA, deployment, and post-launch monitoring." }
];

// --- Components ---

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-lumina-500/5 rounded-bl-[100px] -mr-10 -mt-10 blur-2xl group-hover:bg-lumina-500/10 transition-colors duration-500 pointer-events-none" />
    
    <div className="w-12 h-12 rounded-lg bg-void-900 border border-white/10 flex items-center justify-center mb-8 text-slate-400 group-hover:text-lumina-500 group-hover:scale-110 group-hover:border-lumina-500/30 transition-all duration-300">
      <service.icon size={24} strokeWidth={1.5} />
    </div>

    <h3 className="text-2xl font-display font-medium text-white mb-4 group-hover:text-lumina-100 transition-colors">
      {service.title}
    </h3>
    
    <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[80px]">
      {service.description}
    </p>

    <div className="space-y-3 pt-6 border-t border-white/5">
      {service.capabilities.map((cap, i) => (
        <div key={i} className="flex items-center gap-3 text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
          <CheckCircle2 size={14} className="text-lumina-500/50" />
          <span>{cap}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const SectionHeader = ({ title, subtitle, align = "left" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
  >
    <span className="text-lumina-500 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
      {subtitle}
    </span>
    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.1]">
      {title}
    </h2>
  </motion.div>
);

// --- Main Page ---

export default function Services() {
  return (
    <PageTransition>
      {/* FIXED: Added overflow-x-hidden to prevent horizontal scroll */}
      <div className="bg-void-950 min-h-screen overflow-x-hidden w-full">
        
        {/* 1. Hero Section */}
        <section className="pt-05 pb-20 px-6 md:px-20 max-w-[1400px] mx-auto relative">
          {/* This element was causing the scroll, now contained by overflow-x-hidden on parent */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lumina-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-lumina-500 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              Our Expertise
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-white mb-8 leading-[0.9] tracking-tighter">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600 font-serif italic">
                Excellence.
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
              We deliver more than just code. We provide technical certainty in an uncertain world. 
              Precision-engineered digital products built to scale.
            </p>
          </motion.div>
        </section>

        {/* 2. Main Services Grid */}
        <section className="px-6 md:px-20 pb-32 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* 3. Tech Stack / Capabilities Marquee Strip */}
        <div className="border-y border-white/5 bg-white/[0.01] py-12 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-void-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-void-950 to-transparent z-10" />
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 shrink-0">
               <h3 className="text-2xl font-display font-medium text-white">The Toolkit</h3>
               <p className="text-slate-400 text-sm mt-2">Best-in-class technologies we use daily.</p>
            </div>
            
            <div className="md:w-2/3 flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start opacity-70">
               {[ "React",  "TypeScript", "Node.js", "PostgreSQL", 
    "Tailwind", "Figma", "AWS", "HTML CSS", "MYSQL", "Vercel", "Canva", "Adobe Photoshop", "CRM", "SEO", "GitHub", "VS Code", "Railway", "Render"].map((tech) => (
                  <span key={tech} className="text-lg font-mono text-slate-500 hover:text-white transition-colors cursor-default">
                     {tech}
                  </span>
               ))}
            </div>
          </div>
        </div>

        {/* 4. Process Section */}
        <section className="py-32 px-6 md:px-20 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <SectionHeader title="How We Work" subtitle="The Process" />
            <p className="text-slate-400 max-w-md text-right pb-4 hidden md:block">
              A transparent, agile workflow designed to eliminate ambiguity and ensure rapid delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group pt-8 border-t border-white/10 hover:border-lumina-500/50 transition-colors duration-500"
              >
                <span className="absolute top-0 left-0 -translate-y-1/2 bg-void-950 pr-4 text-4xl font-display font-bold text-white/10 group-hover:text-lumina-500/20 transition-colors duration-500">
                  {step.num}
                </span>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. CTA Section */}
        <section className="pb-24 px-6 md:px-20 max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-void-900 to-black border border-white/10 p-12 md:p-24 text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.15),transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Ready to upgrade your infrastructure?
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Whether you need a complete digital overhaul or a specific technical intervention, we are ready to deploy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button className="h-14 px-8 text-base shadow-[0_0_25px_rgba(255,255,255,0.1)]">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link to="/work">
                  <Button variant="outline" className="h-14 px-8 text-base border-white/10 hover:bg-white/5">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}