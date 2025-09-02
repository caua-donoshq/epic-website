import { SmoothScroll } from "@/components/animations"
import { 
  Header,
  Hero, 
  CodingAssistants,
  TaskAnatomy,
  Testimonials,
  CreateBeautifulApps,
  FeaturesOne,
  FeaturesTwo,
  FAQ,
  FinalCTA,
  Footer 
} from "@/components/sections"

export default function Home() {
  return (
    <>
      <Header />
      <SmoothScroll className="min-h-screen" style={{ backgroundColor: '#F6F4F1' }}>
        <main>
          <Hero />
          <CodingAssistants />
          <TaskAnatomy />
          <Testimonials />
          <CreateBeautifulApps />
          <FeaturesOne />
          <FeaturesTwo />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
