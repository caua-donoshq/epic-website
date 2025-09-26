import { SmoothScroll } from "@/components/animations"
import { Header, Footer } from "@/components"
import {
  Hero,
  PRDSection,
  TaskAnatomy,
  Testimonials,
  FeaturesOne,
  ProjectManagement,
  FinalCTA
} from "@/app/home-en"

export default function HomeEn() {
  return (
    <>
      <Header />
      <div className="min-h-screen" style={{ backgroundColor: '#F6F4F1' }}>
        <SmoothScroll>
          <main>
            <Hero />
            <PRDSection />
            <TaskAnatomy />
            <Testimonials />
            <FeaturesOne />
            <ProjectManagement />
            <FinalCTA />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}