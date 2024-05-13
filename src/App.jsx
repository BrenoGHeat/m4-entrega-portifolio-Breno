import { AboutMeSection } from "./components/AboutMeSection"
import { BannerSection } from "./components/BannerSection"
import { Header } from "./components/Header"
import { TechSection } from "./components/TechSection"
import { Footer } from "./components/Footer"
import { ProjectSection } from "./components/components/ProjectSection"
import './styles/index.css';


function App() {

  return (
    <>
      <Header />
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default App
