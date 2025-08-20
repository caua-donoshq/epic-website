import { SmoothScroll } from "@/components/animations"
import { 
  Header,
  Hero, 
  CodingAssistants, 
  Testimonials, 
  FeaturesOne,
  FeaturesBlock,
  FeaturesBar,
  FinalCTA,
  Footer 
} from "@/components/sections"

export default function Home() {
  return (
    <>
      <Header />
      <SmoothScroll className="min-h-screen bg-background">
        <main>
          <Hero />
          <CodingAssistants />
          <Testimonials />
          {/* <FeaturesOne /> */}
          {/* <FeaturesBlock /> */}
          {/* <FeaturesBar /> */}
          <FinalCTA />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
