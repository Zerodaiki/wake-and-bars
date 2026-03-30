"use client";

import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ExampleTracks } from "@/components/ExampleTracks";
import { Features } from "@/components/Features";
import { SocialProof } from "@/components/SocialProof";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <HowItWorks />
      <ExampleTracks />
      <Features />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
