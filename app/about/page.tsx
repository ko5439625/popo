"use client"

import { useState, useEffect } from "react"

export default function AboutPage() {
  const [language, setLanguage] = useState<"ko" | "en">("ko")

  // 언어 설정 로드 및 저장
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "ko" | "en"
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageChange = (newLanguage: "ko" | "en") => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const content = {
    ko: {
      title: "About", // "정보" → "About"로 고정
      backButton: "검색으로 돌아가기",
      name: "고아현",
      position: "Senior QA Engineer",
      experience: "5년차 QA 전문가",
      quote: "품질은 행동이 아니라 습관이다 - 아리스토텔레스",
      stats: [
        { label: "성공률", value: "99.7%" },
        { label: "프로젝트", value: "15+" },
        { label: "플랫폼", value: "8개" },
      ],
      contacts: [
        { label: "이메일", value: "sophia.ko@email.com" },
        { label: "전화", value: "+82 10-1234-5678" },
        { label: "GitHub", value: "github.com/sophia-ko" },
        { label: "LinkedIn", value: "linkedin.com/in/sophia-ko" },
      ],
      infoData: [
        {
          question: "QA 업무를 시작하게 된 계기는?",
          answer:
            "대학교에서 컴퓨터공학을 전공하며 개발 프로젝트를 진행할 때, 완벽하다고 생각했던 코드에서 예상치 못한 버그들을 발견하는 경험을 했습니다. 그때 '사용자 관점에서 제품을 바라보는 것'의 중요성을 깨달았고, 품질 보증이라는 분야에 매력을 느꼈습니다.",
        },
        {
          question: "5년간 가장 중요하게 생각하는 QA 가치는?",
          answer:
            "예방적 접근법입니다. 버그를 찾아내는 것도 중요하지만, 애초에 버그가 발생하지 않도록 하는 것이 더 중요하다고 생각합니다. 요구사항 분석 단계부터 참여하여 모호한 부분을 명확히 하고, 개발 초기부터 테스트 케이스를 설계하여 품질을 내재화하는 것이 진정한 QA의 가치라고 믿습니다.",
        },
        {
          question: "다른 QA와 차별화되는 강점은?",
          answer:
            "개발팀과의 원활한 소통 능력입니다. 단순히 버그를 보고하는 것이 아니라, 재현 단계를 명확히 정리하고 근본 원인을 함께 분석합니다. 또한 자동화 도구를 활용하여 반복적인 테스트를 효율화하고, 데이터 기반으로 우선순위를 결정하는 체계적인 접근 방식을 가지고 있습니다.",
        },
        {
          question: "가장 기억에 남는 프로젝트는?",
          answer:
            "결제 시스템 품질 검증 프로젝트입니다. 금융 서비스의 특성상 단 하나의 오류도 용납할 수 없는 상황에서, 다양한 결제 시나리오와 예외 상황을 체계적으로 테스트했습니다. 특히 동시 결제, 네트워크 오류, 부분 결제 등의 엣지 케이스를 발견하고 해결하여 99.7%의 성공률을 달성했습니다.",
        },
      ],
      funFact: "재미있는 사실: 예방적 QA 프로세스를 구현해서 찾은 버그보다 예방한 버그가 더 많아요!",
    },
    en: {
      title: "About", // 동일하게 "About"
      backButton: "Back to Search",
      name: "Goahyun Ko",
      position: "Senior QA Engineer",
      experience: "5 years of experience • User-first mindset",
      quote: '"Quality is not an act, it is a habit" - Aristotle',
      stats: [
        { label: "Success Rate", value: "99.7%" },
        { label: "Projects", value: "15+" },
        { label: "Platforms", value: "8" },
      ],
      contacts: [
        { label: "Email", value: "sophia.ko@email.com" },
        { label: "Phone", value: "+82 10-1234-5678" },
        { label: "GitHub", value: "github.com/sophia-ko" },
        { label: "LinkedIn", value: "linkedin.com/in/sophia-ko" },
      ],
      infoData: [
        {
          question: "What got you into QA?",
          answer:
            "During my computer science studies, I discovered bugs in what I thought was perfect code. That moment taught me the importance of seeing products from a user's perspective. Quality assurance became my passion because it bridges the gap between developers and users.",
        },
        {
          question: "Core QA philosophy?",
          answer:
            "Prevention over detection. While finding bugs is important, preventing them is crucial. I participate from requirements analysis, clarify ambiguities, and design test cases early to build quality into the product from day one.",
        },
        {
          question: "What makes you different?",
          answer:
            "Seamless communication with dev teams. I don't just report bugs—I provide clear reproduction steps and collaborate on root cause analysis. Plus, I leverage automation tools and make data-driven priority decisions.",
        },
        {
          question: "Most memorable project?",
          answer:
            "Payment system quality verification. With zero tolerance for errors in financial services, I systematically tested various payment scenarios and edge cases, achieving 99.7% success rate. It reinforced my sense of social responsibility as a QA engineer.",
        },
      ],
      funFact: "Fun fact: I've prevented more bugs than I've found by implementing preventive QA processes!",
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {currentContent.backButton}
            </button>
            <div className="flex items-center space-x-8">
              <div className="flex space-x-8">
                <div className="text-blue-600 font-medium border-b-2 border-blue-600 pb-4">About</div>
                <button
                  onClick={() => (window.location.href = "/experience")}
                  className="text-gray-600 hover:text-gray-900 pb-4 transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => (window.location.href = "/vision")}
                  className="text-gray-600 hover:text-gray-900 pb-4 transition-colors"
                >
                  Vision
                </button>
              </div>
              {/* Language Toggle Switch - 가장 우측으로 이동 */}
              <div className="flex items-center space-x-3">
                <span
                  className={`text-sm transition-colors ${language === "ko" ? "text-gray-900 font-medium" : "text-gray-500"}`}
                >
                  한국어
                </span>
                <button
                  onClick={() => handleLanguageChange(language === "ko" ? "en" : "ko")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    language === "en" ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      language === "en" ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span
                  className={`text-sm transition-colors ${language === "en" ? "text-gray-900 font-medium" : "text-gray-500"}`}
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200/50 p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-28 h-28 bg-gray-600 rounded-3xl flex items-center justify-center shadow-lg">
                <span className="text-3xl font-light text-white">고</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-sm">✓</span>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-3">
                <h1 className="text-4xl font-light text-gray-900 mr-3">{currentContent.name}</h1>
                <div className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                  {currentContent.position}
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-3">{currentContent.experience}</p>
              <p className="text-gray-700 italic mb-6">{currentContent.quote}</p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {currentContent.stats.map((stat, index) => (
                  <div key={index} className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                    <span className="text-gray-400 mr-2">●</span>
                    <span className="text-sm font-medium">
                      {stat.value} {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Grid */}
          <div className="mt-8 pt-8 border-t border-gray-200/50">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {currentContent.contacts.map((contact, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-sm text-gray-500 mb-1">{contact.label}</p>
                  <p className="text-gray-900 text-sm font-mono">{contact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mb-8">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-light text-gray-900 mr-4">{currentContent.title}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>

          <div className="grid gap-6">
            {currentContent.infoData.map((item, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 p-6 hover:shadow-md hover:bg-white/80 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 transition-colors duration-300">
                    <span className="text-xl text-gray-600">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">{item.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Fact */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50">
          <div className="flex items-center justify-center text-center">
            <div>
              <span className="text-2xl mb-2 block">🎉</span>
              <p className="text-gray-700 font-medium">{currentContent.funFact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
