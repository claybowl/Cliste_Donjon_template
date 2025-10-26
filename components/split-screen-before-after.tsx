"use client"

import { MessageCircle, Phone, PhoneOff, Mic, Sparkles, Building2, MessageSquare, Zap } from "lucide-react"
import { PhoneMockup } from "./phone-mockup"
import { ChatMessage } from "./chat-message"
import { StatsColumn } from "./stats-column"
import { useEffect, useRef, useState } from "react"

export function SplitScreenBeforeAfter() {
  const [whatsappInView, setWhatsappInView] = useState(false)
  const [voiceInView, setVoiceInView] = useState(false)
  const whatsappRef = useRef<HTMLDivElement>(null)
  const voiceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const whatsappObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setWhatsappInView(true)
        }
      })
    }, observerOptions)

    const voiceObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVoiceInView(true)
        }
      })
    }, observerOptions)

    if (whatsappRef.current) {
      whatsappObserver.observe(whatsappRef.current)
    }

    if (voiceRef.current) {
      voiceObserver.observe(voiceRef.current)
    }

    return () => {
      whatsappObserver.disconnect()
      voiceObserver.disconnect()
    }
  }, [])

  const whatsappStats = [
    { value: "€200K+", label: "recovered annually", gradient: true },
    { value: "95%", label: "of inquiries happen after hours" },
    { value: "2min", label: "from inquiry to booking" },
    { value: "3x", label: "better conversion rate" },
  ]

  const voiceStats = [
    { value: "87%", label: "of calls after hours", gradient: true },
    { value: "3min", label: "average call handling" },
    { value: "100%", label: "call answer rate" },
    { value: "€150K+", label: "recovered annually", gradient: true },
  ]

  return (
    <section className="py-12 sm:py-16 relative z-10">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="text-center px-6 sm:px-12 pt-8 sm:pt-12 pb-6 sm:pb-8">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            The Cost of Missed Opportunities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Stop Losing{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">€200K+</span>{" "}
            Annually
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            See what happens when a customer messages your dealership after hours
          </p>
        </div>

        {/* Main Content */}
        <div className="px-4 sm:px-8 md:px-12 pb-8">
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200">
            {/* WhatsApp Demo Header */}
            <div
              ref={whatsappRef}
              className={`text-center mb-8 sm:mb-8 transition-all duration-1000 ${
                whatsappInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 mb-4">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="text-sm font-semibold text-[#25D366]">WhatsApp Demo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-2">
                See How Cliste Responds Instantly
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-0">
                Watch the difference between traditional auto-replies and intelligent engagement
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-start">
                {/* Column 1: The Problem */}
                <div className="flex flex-col h-full space-y-4">
                  <div className="text-center mt-6 lg:mt-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">
                      <span className="text-slate-900">The </span>
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        Problem
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">Traditional auto-replies</p>
                  </div>
                  <PhoneMockup headerTitle="John Doe" headerSubtitle="Customer">
                    <ChatMessage
                      text="Hello, I'm interested in the BMW X5 you have listed"
                      time="19:00"
                      isUser
                      hasCheck
                    />
                    <ChatMessage
                      text="We're currently closed. Business hours: 9 AM - 6 PM. We'll respond tomorrow!"
                      time="19:00"
                    />
                    <ChatMessage text="Hello?" time="19:10" isUser hasDoubleCheck />
                    <ChatMessage
                      text="We're currently closed. Business hours: 9 AM - 6 PM. We'll respond tomorrow!"
                      time="19:10"
                    />
                    <ChatMessage
                      text="Is anyone there?? I'll take my business elsewhere..."
                      time="19:15"
                      isUser
                      hasDoubleCheck
                    />
                  </PhoneMockup>
                </div>

                {/* Column 2: Stats (Desktop Only) */}
                <div className="hidden lg:flex flex-col h-full justify-center space-y-6 py-8">
                  <StatsColumn stats={whatsappStats} />
                </div>

                {/* Column 3: The Solution */}
                <div className="flex flex-col h-full space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">
                      <span className="text-slate-900">The </span>
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        Solution
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">Cliste conversations</p>
                  </div>
                  <PhoneMockup headerTitle="John Doe" headerSubtitle="Customer">
                    <ChatMessage
                      text="Hello, I'm interested in the BMW X5 you have listed"
                      time="19:00"
                      isUser
                      hasCheck
                    />
                    <ChatMessage
                      text="Hi John! Thanks for your interest in the BMW X5. I'd be happy to schedule a test drive. 🚗"
                      time="19:00"
                      isAI
                      highlight
                    />
                    <ChatMessage
                      text="That would be great! When are you available?"
                      time="19:01"
                      isUser
                      hasDoubleCheck
                    />
                    <ChatMessage
                      text="I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better?"
                      time="19:01"
                      isAI
                      highlight
                    />
                    <ChatMessage text="Tomorrow at 2 PM works!" time="19:02" isUser hasDoubleCheck />
                    <ChatMessage
                      text="Perfect! You're booked for 2 PM tomorrow with Michael. Confirmation email sent! 🎉"
                      time="19:02"
                      isAI
                      highlight
                    />
                  </PhoneMockup>
                </div>
              </div>

              {/* Mobile Stats - shown below on mobile */}
              <div className="lg:hidden mt-8 pt-8 border-t border-slate-200">
                <StatsColumn stats={whatsappStats} isMobile={true} />
              </div>
            </div>

            {/* Intelligent Voice Receptionist Section */}
            <div
              ref={voiceRef}
              className={`mt-16 pt-12 lg:border-t-2 border-slate-200 transition-all duration-1000 ${
                voiceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Voice Receptionist Header */}
              <div className="text-center mb-8 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">Cliste Voice Receptionist</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-2">Never Miss Another Call</h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-0">
                  See how our software handles after-hours calls vs traditional voicemail
                </p>
              </div>

              {/* Voice Receptionist Comparison Grid */}
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-start">
                  {/* Column 1: The Problem - Missed Call */}
                  <div className="flex flex-col h-full space-y-4">
                    <div className="text-center mt-6 lg:mt-0">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">
                        <span className="text-slate-900">The </span>
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                          Problem
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">Missed calls & voicemail</p>
                    </div>
                    <div className="relative mx-auto w-[280px] sm:w-[320px] lg:w-[360px]">
                      <div className="relative bg-slate-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border-4 sm:border-8 border-slate-900">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-6 sm:h-7 bg-slate-900 rounded-b-2xl z-10"></div>
                        <div className="bg-gradient-to-b from-red-50 to-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                          <div className="bg-white px-4 py-2 flex items-center justify-between border-b border-slate-200">
                            <span className="text-xs text-slate-600">11:47 PM</span>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-3 border border-slate-400 rounded-sm"></div>
                              <div className="text-xs text-slate-600">100%</div>
                            </div>
                          </div>
                          <div className="p-6 space-y-6 h-[420px] sm:h-[500px] flex flex-col items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                              <PhoneOff className="w-10 h-10 text-red-600" />
                            </div>
                            <div className="text-center space-y-2">
                              <h4 className="text-xl font-bold text-slate-900">Missed Call</h4>
                              <p className="text-lg text-slate-700">John Smith</p>
                              <p className="text-sm text-slate-500">(555) 123-4567</p>
                              <p className="text-xs text-red-600 font-medium">After Hours - 11:47 PM</p>
                            </div>
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 w-full">
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                                  <Mic className="w-4 h-4 text-red-700" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-xs font-semibold text-red-900 mb-1">Voicemail</p>
                                  <p className="text-xs text-slate-600 italic">
                                    "Hi, I'm interested in the BMW X5... I'll try calling another dealership..."
                                  </p>
                                </div>
                              </div>
                            </div>
                            <p className="text-xs text-center text-slate-500 italic">Customer never called back</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Stats (Desktop Only) */}
                  <div className="hidden lg:flex flex-col h-full justify-center py-8">
                    <StatsColumn stats={voiceStats} />
                  </div>

                  {/* Column 3: The Solution - Cliste Answered */}
                  <div className="flex flex-col h-full space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">
                        <span className="text-slate-900">The </span>
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                          Solution
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">Cliste answers every call</p>
                    </div>
                    <div className="relative mx-auto w-[280px] sm:w-[320px] lg:w-[360px]">
                      <div className="relative bg-slate-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border-4 sm:border-8 border-slate-900">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-6 sm:h-7 bg-slate-900 rounded-b-2xl z-10"></div>
                        <div className="bg-gradient-to-b from-green-50 to-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                          <div className="bg-white px-4 py-2 flex items-center justify-between border-b border-slate-200">
                            <span className="text-xs text-slate-600">11:47 PM</span>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-3 border border-slate-400 rounded-sm"></div>
                              <div className="text-xs text-slate-600">100%</div>
                            </div>
                          </div>
                          <div className="p-6 space-y-6 h-[420px] sm:h-[500px] flex flex-col items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-pulse">
                              <Phone className="w-10 h-10 text-green-600" />
                            </div>
                            <div className="text-center space-y-2">
                              <h4 className="text-xl font-bold text-green-600">Call in Progress</h4>
                              <p className="text-lg text-slate-700">John Smith</p>
                              <p className="text-sm text-slate-500">(555) 123-4567</p>
                              <p className="text-xs text-green-600 font-medium">Cliste • 2:34</p>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 w-full space-y-3">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <p className="text-xs font-semibold text-green-900">Live Notes</p>
                              </div>
                              <div className="space-y-2 text-xs text-slate-700">
                                <p>
                                  <span className="font-semibold">Customer:</span> John Smith
                                </p>
                                <p>
                                  <span className="font-semibold">Interest:</span> BMW X5
                                </p>
                                <p>
                                  <span className="font-semibold">Appointment:</span> Tomorrow 2:00 PM
                                </p>
                                <p>
                                  <span className="font-semibold">Status:</span>{" "}
                                  <span className="text-green-600">✓ Booked</span>
                                </p>
                              </div>
                            </div>
                            <p className="text-xs text-center text-green-600 font-medium">
                              Test drive scheduled successfully
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Stats - shown below on mobile */}
              <div className="lg:hidden mt-8 pt-8 border-t border-slate-200">
                <StatsColumn stats={voiceStats} isMobile={true} />
              </div>

              {/* Customization Features Section */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 mb-4">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">Fully Customized for You</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    Your Brand, Your Voice, Your Way
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                    Cliste adapts to your dealership's unique identity and communication style
                  </p>
                </div>

                <div className="overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0">
                  <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 snap-x snap-mandatory md:snap-none min-w-max md:min-w-0 scrollbar-hide">
                    {/* Feature 1: Fully Branded */}
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 snap-center flex-shrink-0 w-[280px] md:w-auto">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">Fully Branded</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Every interaction reflects your dealership's identity, from greetings to sign-offs
                      </p>
                    </div>

                    {/* Feature 2: Trained on Your Brand */}
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 snap-center flex-shrink-0 w-[280px] md:w-auto">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">Your Tone & Voice</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Trained on your brand guidelines to match your communication style perfectly
                      </p>
                    </div>

                    {/* Feature 3: Custom Knowledge */}
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 snap-center flex-shrink-0 w-[280px] md:w-auto">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">Your Inventory</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Knows your current stock, pricing, and promotions to provide accurate information
                      </p>
                    </div>

                    {/* Feature 4: Custom Tailored Solutions */}
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 snap-center flex-shrink-0 w-[280px] md:w-auto">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">Custom Tailored</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Connects seamlessly to your existing CRM, DMS, and dealership systems for a unified workflow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
