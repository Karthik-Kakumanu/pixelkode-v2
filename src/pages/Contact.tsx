import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, Mail, MapPin, Send, Instagram, Linkedin, Facebook, Youtube, 
  CheckCircle, Phone, MessageCircle 
} from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button";

// --- Form Components ---

const InputField = ({ label, type = "text", placeholder, name, required = false }) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-lumina-500 transition-colors duration-300">
      {label} {required && <span className="text-lumina-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-lumina-500/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-lumina-500/50 transition-all duration-300"
    />
  </div>
);

// FIXED: Added default value "rightElement = null" to prevent build errors
const SelectField = ({ label, options, name, rightElement = null }) => (
  <div className="flex flex-col gap-2 group">
    <div className="flex justify-between items-center">
      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-lumina-500 transition-colors duration-300">
        {label}
      </label>
      {rightElement}
    </div>
    <div className="relative">
      <select
        name={name}
        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-lumina-500/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-lumina-500/50 transition-all duration-300 appearance-none cursor-pointer"
      >
        {options.map((opt, i) => (
          <option key={i} value={opt} className="bg-void-950 text-slate-300">
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
);

const TextAreaField = ({ label, placeholder, name, rows = 4 }) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-lumina-500 transition-colors duration-300">
      {label}
    </label>
    <textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-lumina-500/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-lumina-500/50 transition-all duration-300 resize-none"
    />
  </div>
);

const SocialLink = ({ href, icon: Icon, title }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    title={title}
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);

// --- Main Page ---

export default function Contact() {
  const [formState, setFormState] = useState("idle"); // idle | submitting | success | error
  const [currency, setCurrency] = useState("INR"); // Default to INR

  // --- FORMSPREE INTEGRATION ---
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mandkrka";

  const budgetOptions = {
    USD: ["$500 - $1k", "$1k - $5k", "$5k - $10k", "$10k+", "Undisclosed"],
    INR: ["₹10k - ₹20k", "₹20k - ₹30k", "₹30k - ₹50k", "₹50k+", "Undisclosed"]
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("submitting");
    
    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState("success");
        e.target.reset();
      } else {
        setFormState("error");
      }
    } catch (error) {
      setFormState("error");
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-void-950 pt-05 pb-20 relative overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lumina-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
          
          {/* Header */}
          <div className="mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-lumina-500" />
              <span className="text-lumina-500 text-xs font-bold uppercase tracking-[0.3em]">
                Contact Us
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-8xl font-display font-medium text-white leading-[0.95] tracking-tight"
            >
              Let's build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic pr-4">
                extraordinary.
              </span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            
            {/* Left Column: Info */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                We are selective with our partnerships. We look for ambitious brands ready to disrupt their industry. If that sounds like you, tell us about your vision.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Mail size={16} className="text-lumina-500" /> Gmail
                  </h3>
                  <a href="mailto:pixelkode.kp@gmail.com" className="text-2xl md:text-3xl text-slate-300 hover:text-white transition-colors font-display">
                    pixelkode.kp@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <MapPin size={16} className="text-lumina-500" /> Location
                  </h3>
                  <p className="text-xl text-slate-400 font-light">
                    PixelKode<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Connect</h4>
                <div className="flex gap-4 flex-wrap">
                  {/* WHATSAPP: Click to chat */}
                  <SocialLink href="https://wa.me/918897925715" icon={MessageCircle} title="WhatsApp" />
                  
                  {/* PHONE CALL: Click to call */}
                  <SocialLink href="tel:+918897925715" icon={Phone} title="Call Us" />

                  {/* SOCIALS */}
                  <SocialLink href="https://www.instagram.com/pixelkode.co/" icon={Instagram} title="Instagram" />
                  <SocialLink href="https://www.facebook.com/people/pixelkodeco/61581103567444/" icon={Facebook} title="Facebook" />
                  <SocialLink href="https://www.youtube.com/channel/UCnxP_mhXmhVA-fwxfb4jWMw" icon={Youtube} title="YouTube" />
                  <SocialLink href="https://linkedin.com" icon={Linkedin} title="LinkedIn" />
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-void-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.2)] relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4"
                  >
                    <div className="w-20 h-20 bg-lumina-500/20 text-lumina-500 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Proposal Sent!</h3>
                    <p className="text-slate-400 max-w-xs">
                      Thanks for reaching out, Karthik. We will review your message and get back to you at pixelkode.kp@gmail.com shortly.
                    </p>
                    <Button onClick={() => setFormState("idle")} variant="outline" className="mt-6">
                      Send Another
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Name" name="name" placeholder="Your Name" required />
                      <InputField label="Email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Interest Dropdown */}
                      <SelectField 
                        label="Interest" 
                        name="interest" 
                        options={["Web Development", "App Development", "UI/UX Design", "Graphic Design", "Consultancy"]} 
                      />
                      
                      {/* Budget Dropdown with Currency Toggle */}
                      <SelectField 
                        label="Budget" 
                        name="budget" 
                        options={budgetOptions[currency]} 
                        rightElement={
                          <div className="flex bg-white/5 rounded-md p-0.5 mb-1 border border-white/10">
                            <button
                              type="button"
                              onClick={() => setCurrency("INR")}
                              className={`text-[10px] font-bold px-2 py-1 rounded-sm transition-all ${currency === 'INR' ? 'bg-lumina-500 text-void-950' : 'text-slate-500 hover:text-white'}`}
                            >
                              ₹ INR
                            </button>
                            <button
                              type="button"
                              onClick={() => setCurrency("USD")}
                              className={`text-[10px] font-bold px-2 py-1 rounded-sm transition-all ${currency === 'USD' ? 'bg-lumina-500 text-void-950' : 'text-slate-500 hover:text-white'}`}
                            >
                              $ USD
                            </button>
                          </div>
                        }
                      />
                    </div>

                    <TextAreaField label="Project Details" name="message" placeholder="Tell us about your goals, timeline, and current challenges..." />

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full h-14 text-base font-semibold shadow-[0_0_20px_rgba(14,165,233,0.15)] disabled:opacity-70 disabled:cursor-not-allowed"
                        disabled={formState === "submitting"}
                      >
                        {formState === "submitting" ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-void-950 border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Proposal <Send size={16} />
                          </span>
                        )}
                      </Button>
                      
                      {formState === "error" && (
                        <p className="text-red-500 text-xs mt-3 text-center">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}

                      <p className="text-center text-slate-500 text-xs mt-4">
                        We respect your privacy. Non-disclosure agreements available upon request.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}