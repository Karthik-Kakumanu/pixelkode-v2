import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button";

export default function Privacy() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-void-950 pt-05 pb-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-16 border-b border-white/10 pb-8">
            <Link to="/">
              <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-400">
              Last Updated: January 1, 2026
            </p>
          </div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12 text-slate-300 leading-relaxed font-light"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to PixelKode ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and project details provided via our contact forms.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system collected automatically for analytics purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect or receive:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-400">
                <li>To send you administrative information, such as project proposals, invoices, and updates.</li>
                <li>To respond to user inquiries and offer support.</li>
                <li>To improve our website structure and user experience.</li>
                <li>To enforce our terms, conditions, and policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
              <p>
                We may use third-party services (such as Formspree for email handling or Google Analytics) to help us operate our business. These third parties may have access to your data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at:
              </p>
              <a href="mailto:pixelkode.kp@gmail.com" className="text-lumina-500 hover:text-white transition-colors mt-2 inline-block font-medium">
                pixelkode.kp@gmail.com
              </a>
              <p className="mt-2 text-slate-500 text-sm">
                PixelKode HQ<br/>
                Andhra Pradesh, India
              </p>
            </section>

          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}