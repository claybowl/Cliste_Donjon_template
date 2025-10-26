"use client"

import { Wrench, CheckCircle2 } from "lucide-react"
import { useEffect, useRef } from "react"

export function InstagramServiceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const benefits = [
    {
      title: "Service Bookings",
      description:
        "Clutch By Cliste automatically schedules service appointments and sends confirmations across all channels - website, phone, and social media, customized to your workflow",
    },
    {
      title: "Parts Inquiries",
      description:
        "Answers questions about parts availability, pricing, and delivery times based on your inventory in real-time, whether customers reach out via phone, website, or social media",
    },
    {
      title: "Order Management",
      description:
        "Processes parts orders and provides tracking updates without human intervention across every customer touchpoint, tailored to your systems",
    },
    {
      title: "Customer Updates",
      description:
        "Keeps customers informed about service progress and parts arrival status 24/7 in your dealership's voice - no matter how they contact you",
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
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="space-y-4 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 text-purple-700 text-sm font-medium">
                  <Wrench className="w-4 h-4 mr-2" />
                  Service & Parts
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Automate Service{" "}
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Bookings & Parts
                  </span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Handle service appointments and parts inquiries automatically across all your sales channels - website
                  widget, phone calls, and social media. Clutch By Cliste manages bookings, answers parts questions, and
                  processes orders seamlessly, all customized to your dealership's operations.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid gap-6 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
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

            {/* Right side - Instagram Mockup with slant */}
            <div className="order-2 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="relative">
                {/* Slanted container - less slant on mobile, opposite direction */}
                <div className="transform lg:rotate-2 transition-transform hover:rotate-0 duration-500">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Instagram Header - authentic Instagram gradient */}
                    <div className="bg-gradient-to-r from-[#405DE6] via-[#D300C5] to-[#FF0069] px-4 py-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#405DE6] via-[#D300C5] to-[#FF0069] flex items-center justify-center">
                          <span className="text-white text-xs font-bold">PM</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">premium_motors</div>
                        <div className="text-white/90 text-xs flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          Active now
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages - authentic Instagram styling */}
                    <div className="p-4 space-y-2 bg-white min-h-[420px] max-h-[500px] overflow-hidden">
                      {/* Customer message - grey bubble on left */}
                      <div className="flex justify-start">
                        <div className="bg-[#EFEFEF] rounded-[22px] px-4 py-2.5 max-w-[75%]">
                          <p className="text-[15px] text-[#262626]">Hi, I need to book a service for my car</p>
                        </div>
                      </div>
                      <div className="flex justify-start mb-3">
                        <span className="text-[11px] text-slate-400 ml-3">10:15 AM</span>
                      </div>

                      {/* AI Response - gradient bubble on right */}
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-[#405DE6] to-[#D300C5] rounded-[22px] px-4 py-2.5 max-w-[75%]">
                          <p className="text-[15px] text-white">
                            I'd be happy to help! What type of service do you need? We have slots available this week.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end mb-3">
                        <span className="text-[11px] text-slate-400 mr-3">10:15 AM</span>
                      </div>

                      {/* Customer message */}
                      <div className="flex justify-start">
                        <div className="bg-[#EFEFEF] rounded-[22px] px-4 py-2.5 max-w-[75%]">
                          <p className="text-[15px] text-[#262626]">
                            Full service. Also, do you have brake pads in stock?
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start mb-3">
                        <span className="text-[11px] text-slate-400 ml-3">10:16 AM</span>
                      </div>

                      {/* AI Response */}
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-[#405DE6] to-[#D300C5] rounded-[22px] px-4 py-2.5 max-w-[75%]">
                          <p className="text-[15px] text-white">
                            Yes! We have brake pads in stock. I can book you in for Thursday at 2 PM and include the
                            brake pad replacement. Total: €180
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end mb-3">
                        <span className="text-[11px] text-slate-400 mr-3">10:16 AM</span>
                      </div>

                      {/* Customer message */}
                      <div className="flex justify-start">
                        <div className="bg-[#EFEFEF] rounded-[22px] px-4 py-2.5 max-w-[75%]">
                          <p className="text-[15px] text-[#262626]">Perfect! Can I order an oil filter too?</p>
                        </div>
                      </div>
                      <div className="flex justify-start mb-3">
                        <span className="text-[11px] text-slate-400 ml-3">10:17 AM</span>
                      </div>

                      {/* AI Response */}
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-[#405DE6] to-[#D300C5] rounded-[22px] px-4 py-2.5 max-w-[75%]">
                          <p className="text-[15px] text-white">
                            I've added an oil filter (€25) to your order. Your appointment is confirmed for Thursday at
                            2 PM. See you then! 🚗
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end mb-3">
                        <span className="text-[11px] text-slate-400 mr-3">10:17 AM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient blur */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full blur-3xl opacity-20 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
