import { SmoothScroll } from "@/components/animations"
import { Header, Footer } from "@/components/sections"
import {
  Hero,
  CodingAssistants,
  TaskAnatomy,
  Testimonials,
  CreateBeautifulApps,
  FeaturesOne,
  FinalCTA
} from "@/app/home-pt"

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen" style={{ backgroundColor: '#F6F4F1' }}>
        <SmoothScroll>
          <main>
            <Hero />
            <CodingAssistants />
            <TaskAnatomy />
            <Testimonials />
            <CreateBeautifulApps />
            <FeaturesOne />
            <FinalCTA />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}
