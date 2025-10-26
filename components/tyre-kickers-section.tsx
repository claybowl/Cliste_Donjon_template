"use client"

import { MessageCircle, CheckCircle2 } from "lucide-react"
import { useEffect, useRef } from "react"

export function TyreKickersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const benefits = [
    {
      title: "Instant Answers",
      description:
        "Clutch By Cliste responds to 50+ common questions about NCT, mileage, trade-ins, and pricing instantly across your website, phone, and social channels",
    },
    {
      title: "Qualify Leads",
      description:
        "Automatically filters serious buyers from browsers by asking the right questions tailored to your dealership",
    },
    {
      title: "Save Time",
      description: "Stop answering the same questions repeatedly - let Clutch By Cliste handle the tire kickers",
    },
    {
      title: "24/7 Availability",
      description: "Never miss a serious inquiry while filtering out time-wasters around the clock - on every channel",
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
    <section ref={sectionRef} className="pt-8 pb-20 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Messenger Mockup with slant */}
            <div className="order-2 lg:order-1 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="relative">
                {/* Slanted container - less slant on mobile */}
                <div className="transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Messenger Header - authentic Facebook Messenger blue */}
                    <div className="bg-[#006AFF] px-4 py-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00B2FF] to-[#006AFF] flex items-center justify-center">
                          <span className="text-white text-xs font-bold">PM</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">Premium Motors</div>
                        <div className="text-white/90 text-xs flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          Active now
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages - authentic Messenger styling */}
                    <div className="p-4 space-y-2 bg-white min-h-[420px] max-h-[500px] overflow-hidden">
                      {/* Customer message - grey bubble on left */}
                      <div className="flex justify-start">
                        <div className="bg-[#E4E6EB] rounded-[18px] px-3 py-2 max-w-[75%]">
                          <p className="text-[15px] text-[#050505]">What's the NCT status on the BMW?</p>
                        </div>
                      </div>
                      <div className="flex justify-start mb-3">
                        <span className="text-[11px] text-slate-500 ml-3">14:23</span>
                      </div>

                      {/* CLUTCH Response - blue bubble on right */}
                      <div className="flex justify-end">
                        <div className="bg-[#0084FF] rounded-[18px] px-3 py-2 max-w-[75%]">
                          <p className="text-[15px] text-white">
                            The BMW has a fresh NCT valid until March 2026. Full service history available!
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end mb-3">
                        <span className="text-[11px] text-slate-500 mr-3">14:23</span>
                      </div>

                      {/* Customer message */}
                      <div className="flex justify-start">
                        <div className="bg-[#E4E6EB] rounded-[18px] px-3 py-2 max-w-[75%]">
                          <p className="text-[15px] text-[#050505]">How many miles?</p>
                        </div>
                      </div>
                      <div className="flex justify-start mb-3">
                        <span className="text-[11px] text-slate-500 ml-3">14:24</span>
                      </div>

                      {/* CLUTCH Response */}
                      <div className="flex justify-end">
                        <div className="bg-[#0084FF] rounded-[18px] px-3 py-2 max-w-[75%]">
                          <p className="text-[15px] text-white">
                            45,000 miles with full dealer service history. Would you like to schedule a test drive?
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end mb-3">
                        <span className="text-[11px] text-slate-500 mr-3">14:24</span>
                      </div>

                      {/* Customer message */}
                      <div className="flex justify-start">
                        <div className="bg-[#E4E6EB] rounded-[18px] px-3 py-2 max-w-[75%]">
                          <p className="text-[15px] text-[#050505]">Do you take trade-ins?</p>
                        </div>
                      </div>
                      <div className="flex justify-start mb-3">
                        <span className="text-[11px] text-slate-500 ml-3">14:25</span>
                      </div>

                      {/* CLUTCH Response */}
                      <div className="flex justify-end">
                        <div className="bg-[#0084FF] rounded-[18px] px-3 py-2 max-w-[75%]">
                          <p className="text-[15px] text-white">
                            Yes! We offer competitive trade-in values. What vehicle are you looking to trade?
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end mb-3">
                        <span className="text-[11px] text-slate-500 mr-3">14:25</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient blur */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-3xl opacity-20 -z-10" />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Smart Filtering
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Handle Tyre Kickers{" "}
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Automatically
                  </span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Stop wasting time on repetitive questions. Clutch By Cliste instantly answers common inquiries about
                  NCT, mileage, trade-ins, and pricing while qualifying serious buyers - across your website widget,
                  phone calls, and social media channels, all tailored to your dealership's specific needs.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid gap-6 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
