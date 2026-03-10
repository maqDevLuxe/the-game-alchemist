import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedIn from "@/components/FeaturedIn";
import MechanicsSection from "@/components/MechanicsSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import MetricsSection from "@/components/MetricsSection";
import StorylineSection from "@/components/StorylineSection";
import GallerySection from "@/components/GallerySection";
import CinematicImage from "@/components/CinematicImage";
import CountersSection from "@/components/CountersSection";
import BlogSection from "@/components/BlogSection";
import EditionsSection from "@/components/EditionsSection";
import ReviewsSection from "@/components/ReviewsSection";
import PreorderFooter from "@/components/PreorderFooter";

const Index = () => {
  return (
    <SmoothScroll>
      <Navbar />
      <HeroSection />
      <FeaturedIn />
      <MechanicsSection />
      <CraftsmanshipSection />
      <MetricsSection />
      <StorylineSection />
      <GallerySection />
      <CinematicImage />
      <CountersSection />
      <BlogSection />
      <EditionsSection />
      <ReviewsSection />
      <PreorderFooter />
    </SmoothScroll>
  );
};

export default Index;
