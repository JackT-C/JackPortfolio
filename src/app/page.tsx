import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';
import GitHubStats from '@/components/GitHubStats';
import FeaturedProjects from '@/components/FeaturedProjects';
import Technologies from '@/components/Technologies';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />

      {/* Dashboard Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-8">

        {/* ── Two-column dashboard grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-start">

          {/* Left column */}
          <div className="space-y-6 min-w-0">
            <ProfileCard />
            <div id="projects" className="scroll-mt-24">
              <FeaturedProjects />
            </div>
          </div>

          {/* Right column – sticky on desktop */}
          <div className="space-y-6 lg:sticky lg:top-20">
            <GitHubStats />
            <Technologies />
          </div>
        </div>

        {/* ── Full-width sections ── */}
        <Experience />
        <Certifications />
        <Contact />
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
