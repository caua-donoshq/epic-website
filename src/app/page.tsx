import { SmoothScroll } from "@/components/animations"
import { Header, Footer } from "@/components"
import {
  Hero,
  PRDSection,
  TaskAnatomy,
  Testimonials,
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
            <PRDSection />
            <TaskAnatomy />
            <Testimonials />
            <FeaturesOne />
            <FinalCTA />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}
