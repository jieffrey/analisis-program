// src/components/landingpage/features/index.tsx
import { Download, Zap, Shield, Sparkles } from "lucide-react"
import { AiFillTikTok } from "react-icons/ai"
import { FaYoutube, FaInstagram, FaFacebook, FaReddit } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import FeatureCard from "./features-card"
import PlatformBadge from "./platform-badges"
import PricingCard from "../pricing/pricing-cards"

export default function Features() {
  const platforms = [
    { name: "TikTok", icon: <AiFillTikTok />, color: "hover:text-black" },
    { name: "YouTube", icon: <FaYoutube />, color: "hover:text-red-600" },
    { name: "Instagram", icon: <FaInstagram />, color: "hover:text-pink-600" },
    { name: "Facebook", icon: <FaFacebook />, color: "hover:text-blue-600" },
    { name: "Twitter", icon: <FaSquareXTwitter />, color: "hover:text-black" },
    { name: "Reddit", icon: <FaReddit />, color: "hover:text-orange-600" },
  ]

  const mainFeatures = [
    {
      icon: Download,
      title: "Multi-Platform Support",
      description: "Download from TikTok, YouTube, Instagram, Facebook, and more platforms"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Just paste the URL and download instantly, no complicated steps required"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your downloads are private and secure, we don't store your personal data"
    },
    {
      icon: Sparkles,
      title: "High Quality",
      description: "Get the best available quality for your downloaded videos, up to 4K"
    }
  ]

  const freeFeatures = [
    { text: "20 tokens per day", included: true },
    { text: "Standard download speed", included: true },
    { text: "All platforms supported", included: true },
    { text: "HD quality downloads", included: true },
    { text: "No watermark removal", included: false },
    { text: "No batch download", included: false },
    { text: "7 days history", included: true },
  ]

  const premiumFeatures = [
    { text: "Unlimited tokens", included: true },
    { text: "Priority download speed", included: true },
    { text: "All platforms supported", included: true },
    { text: "4K quality downloads", included: true },
    { text: "Watermark removal", included: true },
    { text: "Batch download", included: true },
    { text: "Forever history", included: true },
  ]

  return (
    <div className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download videos from multiple platforms with ease. Fast, secure, and simple.
          </p>
        </div>

        {/* Supported Platforms */}
        <div className="mb-20">
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Supported Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <PlatformBadge
                key={platform.name}
                name={platform.name}
                icon={platform.icon}
                colorClass={platform.color}
              />
            ))}
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </div>
  )
}