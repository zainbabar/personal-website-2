import Nav from "@/components/Navigation/Nav";
import Terminal from "@/components/Terminal/Terminal";
import ProjectsGrid from "@/components/Projects/ProjectsGrid";
import HardwareGallery from "@/components/Hardware/HardwareGallery";
import Timeline from "@/components/Experience/Timeline";
import Contact from "@/components/Contact/Contact";
import LiveStatus from "@/components/Footer/LiveStatus";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Nav />

      <main>
        {/* 01 — Hero */}
        <Terminal />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-[#1f1f1f]" />
        </div>

        {/* 02 — Projects */}
        <ProjectsGrid />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-[#1f1f1f]" />
        </div>

        {/* 03 — Hardware */}
        <HardwareGallery />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-[#1f1f1f]" />
        </div>

        {/* 04 — Experience */}
        <Timeline />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-[#1f1f1f]" />
        </div>

        {/* 05 — Contact */}
        <Contact />
      </main>

      {/* Footer with Live Status */}
      <footer>
        <LiveStatus />
      </footer>
    </div>
  );
}
