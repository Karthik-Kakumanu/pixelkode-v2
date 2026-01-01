import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/layout/PageTransition";

export default function Terms() {
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
              Terms of Service
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and PixelKode ("we," "us," or "our"), concerning your access to and use of the PixelKode website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
              <p>
                PixelKode provides digital services including but not limited to Web Development, App Development, UI/UX Design, and Digital Marketing. The specific deliverables for any project will be outlined in a separate proposal or contract agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
              <p className="mb-4">
                Unless otherwise indicated, the Site and our Services are our proprietary property. 
              </p>
              <p>
                <strong>Client Deliverables:</strong> Upon full payment, the Client is granted full ownership of the final designs, code, and assets created specifically for their project. PixelKode retains the right to use the work for portfolio and marketing purposes unless a Non-Disclosure Agreement (NDA) is signed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-400">
                <li>Project fees are detailed in individual proposals.</li>
                <li>A standard deposit (typically 50%) is required to commence work.</li>
                <li>Final files and live deployment occur only after the remaining balance is settled.</li>
                <li>All payments are non-refundable once work has commenced, except as otherwise provided in a specific service agreement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p>
                In no event will we be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
              <p>
                These Terms shall be governed by and defined following the laws of India. PixelKode and yourself irrevocably consent that the courts of Andhra Pradesh, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact</h2>
              <p>
                To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <a href="mailto:pixelkode.kp@gmail.com" className="text-lumina-500 hover:text-white transition-colors mt-2 inline-block font-medium">
                pixelkode.kp@gmail.com
              </a>
            </section>

          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}