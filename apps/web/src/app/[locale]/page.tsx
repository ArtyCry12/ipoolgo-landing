"use client";

import { useState, useCallback } from "react";
import { IntroLoader } from "@/components/motion/IntroLoader";
import { HeroSection } from "@/components/home/HeroSection";
import { TextMarquee } from "@/components/motion/TextMarquee";
import {
  OriginalitySection,
  BenefitsSection,
  MaterialsTechSection,
  AccessoriesSection,
} from "@/components/home/ContentSections";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { ReviewsSection, CtaSection } from "@/components/home/ReviewsSection";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const onComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <IntroLoader onComplete={onComplete} />}
      <HeroSection />
      <TextMarquee />
      <OriginalitySection />
      <BenefitsSection />
      <MaterialsTechSection />
      <AccessoriesSection />
      <ProductCarousel />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}
