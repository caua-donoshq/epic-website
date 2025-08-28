import { SmoothScroll } from "@/components/animations"
import { 
  Header,
  Hero, 
  CodingAssistants, 
  Testimonials, 
  FeaturesOne,
  FeaturesBlock,
  VibeCodeConfidence,
  FeaturesBar,
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
          <Testimonials />
          <FeaturesOne />
          <FeaturesBlock />
          <VibeCodeConfidence />
          <FeaturesBar />
          <FinalCTA />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
