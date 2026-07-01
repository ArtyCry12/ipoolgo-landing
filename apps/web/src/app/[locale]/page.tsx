"use client";

import { useState, useCallback } from "react";
import { useAudio } from "@/components/providers/AudioProvider";
import { IntroLoader } from "@/components/motion/IntroLoader";
import { HeroSection } from "@/components/home/HeroSection";
import {
  OriginalitySection,
  BenefitsSection,
  MaterialsTechSection,
} from "@/components/home/ContentSections";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { ReviewsSection, CtaSection } from "@/components/home/ReviewsSection";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const { onIntroComplete } = useAudio();
  const onComplete = useCallback(() => {
    setLoaded(true);
    onIntroComplete();
  }, [onIntroComplete]);

  return (
    <>
      {!loaded && <IntroLoader onComplete={onComplete} />}
      <HeroSection />
      <OriginalitySection />
      <BenefitsSection />
      <MaterialsTechSection />
      <ProductCarousel />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}
