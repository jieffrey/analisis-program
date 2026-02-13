// src/app/page.tsx (UPDATE)
import { InputInputGroup } from "@/components/landingpage/input"
import { NavbarDemo } from "@/components/landingpage/navbar"
import { AiFillTikTok } from "react-icons/ai"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import Features from "@/components/landingpage/features"
import HowItWorks from "@/components/landingpage/how-it-works"
import Platforms from "@/components/landingpage/platforms"
import Pricing from "@/components/landingpage/pricing" // 👈 IMPORT INI
import Testimonials from "@/components/landingpage/testimonials"
import FAQ from "@/components/landingpage/faq"
import CTAFinal from "@/components/landingpage/cta"
import Footer from "@/components/landingpage/footer"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
            radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.3), transparent),
            radial-gradient(circle 500px at 80% 80%, rgba(59,130,246,0.3), transparent)
          `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />

      <NavbarDemo />

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center flex-col gap-6 z-10 relative px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black max-w-3xl">
          Download Videos From Any Social Media Instantly
        </h1>
        <p className="text-black font-light text-lg">No watermark • HD • Free • Fast</p>

        <div className="w-full max-w-xl">
          <InputInputGroup />
        </div>

        {/* Platform icons */}
        <div className="flex gap-6 mt-6 text-3xl text-gray-700">
          <AiFillTikTok className="hover:text-black transition-colors cursor-pointer" />
          <FaYoutube className="hover:text-red-600 transition-colors cursor-pointer" />
          <FaInstagram className="hover:text-pink-600 transition-colors cursor-pointer" />
          <FaSquareXTwitter className="hover:text-black transition-colors cursor-pointer" />
        </div>

        {/* Format chips */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <span>Supports:</span>
          <span className="font-medium text-gray-700">TikTok</span>
          <span>•</span>
          <span className="font-medium text-gray-700">YouTube</span>
          <span>•</span>
          <span className="font-medium text-gray-700">Instagram</span>
          <span>•</span>
          <span className="font-medium text-gray-700">Facebook</span>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="min-h-screen z-10 relative ">
        <HowItWorks />
      </section>

      {/* Features Section */}
      <section id="features" className="min-h-screen z-10 relative">
        <Features />
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="min-h-screen z-10 relative">
        <Platforms />
      </section>

      {/* Pricing Section - BARU */}
      <section id="pricing" className="mmin-h-screen flex items-center justify-center z-10 relative ">
        <Pricing />
      </section>

      <section id="testimonials" className="min-h-screen z-10 relative bg-linear-to-b ">
        <Testimonials />
      </section>

      <section id="faq" className="min-h-screen flex items-center z-10 relative py-20">
        <FAQ />
      </section>

      {/* <section id="cta" className="min-h-screen flex items-center z-10 relative ">
  <CTAFinal />
</section> */}
        <Footer/>
      
    </div>
  )
}