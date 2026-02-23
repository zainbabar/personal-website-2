import Nav from "@/components/Navigation/Nav";
import Terminal from "@/components/Terminal/Terminal";
import AsciiHero from "@/components/AsciiHero/AsciiHero";
// import ProjectsGrid from "@/components/Projects/ProjectsGrid";
// import HardwareGallery from "@/components/Hardware/HardwareGallery";
import Timeline from "@/components/Experience/Timeline";
// import GitHubStats from "@/components/GitHubStats/GitHubStats";
import Contact from "@/components/Contact/Contact";
import LiveStatus from "@/components/Footer/LiveStatus";

export default function Home() {
  return (
    <div className="min-h-screen relative z-10">
      <Nav />

      <main>
        {/* 01 — Hero */}
        <Terminal />
        <AsciiHero />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* 02 — Projects */}
        {/* <ProjectsGrid /> */}

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* 03 — Hardware (disabled) */}
        {/* <HardwareGallery /> */}

        {/* 03 — Experience */}
        <Timeline />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* 05 — GitHub */}
        { /* <GitHubStats /> */}

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* 06 — Contact */}
        <Contact />
      </main>

      {/* Footer with Live Status */}
      <footer>
        <LiveStatus />
      </footer>
    </div>
  );
}
