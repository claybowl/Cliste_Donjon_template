"use client"

import { MessageSquare, Globe, Mail, Phone, Share2 } from "lucide-react"
import { useEffect, useRef } from "react"

export function OmnichannelSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const channels = [
    {
      icon: MessageSquare,
      name: "WhatsApp",
      color: "from-green-500 to-green-600",
      description: "Direct messaging",
    },
    {
      icon: Globe,
      name: "Website Chatbot",
      color: "from-blue-500 to-blue-600",
      description: "Custom widget",
    },
    {
      icon: MessageSquare,
      name: "Messenger",
      color: "from-blue-600 to-blue-700",
      description: "Facebook integration",
    },
    {
      icon: Share2,
      name: "Instagram",
      color: "from-purple-500 via-pink-500 to-orange-500",
      description: "DM automation",
    },
    {
      icon: Mail,
      name: "Email",
      color: "from-slate-500 to-slate-600",
      description: "Automated responses",
    },
    {
      icon: Phone,
      name: "Phone",
      color: "from-orange-500 to-red-500",
      description: "Voice receptionist",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 mb-4">
            <Share2 className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-white">Omnichannel Integration</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            All Your Sales Channels,{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              One System
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Clutch By Cliste connects to every customer touchpoint. Whether they reach out via WhatsApp, your website,
            social media, email, or phone - one intelligent system handles it all, customized to your dealership's voice
            and workflow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          {channels.map((channel, index) => {
            const Icon = channel.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                {/* Gradient glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative z-10 space-y-4">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text content */}
                  <div>
                    <h3 className="font-bold text-white text-xl mb-2 group-hover:text-red-400 transition-colors duration-300">
                      {channel.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{channel.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <p className="text-slate-300 text-lg">
            <span className="font-semibold text-white">One conversation history.</span> No matter where customers reach
            you, Clutch By Cliste maintains context across all channels for seamless interactions.
          </p>
        </div>
      </div>
    </section>
  )
}
