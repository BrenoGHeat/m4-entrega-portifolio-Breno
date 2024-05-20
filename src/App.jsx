import { AboutMeSection } from "./components/AboutMeSection";
import { BannerSection } from "./components/BannerSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TechSection } from "./components/TechSection";
import { HomePage } from "./page/HomePage";

import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <HomePage>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </HomePage>
    </div>
  );
}

export default App;
