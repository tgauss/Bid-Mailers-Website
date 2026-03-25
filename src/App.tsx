/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { TargetAudience } from './components/TargetAudience';
import { GlobeSection } from './components/GlobeSection';
import { Calculator } from './components/Calculator';
import { Pricing } from './components/Pricing';
import { PartnerReels } from './components/PartnerReels';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TargetAudience />
        <GlobeSection />
        <Calculator />
        <Pricing />
        <PartnerReels />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
