"use client"

import { useState, useEffect } from "react"

export default function VisionPage() {
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
      title: "Vision",
      subtitle: "더 나은 소프트웨어 세상을 만드는 QA 철학",
      backButton: "검색으로 돌아가기",
      getInTouch: "Contact",
      myApproach: "My Approach",
      futureGoals: "Future Goals",
      ctaTitle: "함께 품질을 구축할 준비가 되셨나요?",
      ctaDescription:
        "사용자가 사랑하고 개발자가 자랑스러워하는 제품을 만들어봅시다. 품질은 단순한 업무가 아니라 저의 열정입니다.",
      downloadPdf: "포트폴리오 PDF 다운로드",
      scheduleChat: "채팅 일정 잡기",
      contacts: [
        { label: "이메일", value: "sophia.ko@email.com", icon: "📧" },
        { label: "전화", value: "+82 10-1234-5678", icon: "📱" },
        { label: "GitHub", value: "github.com/sophia-ko", icon: "💻" },
        { label: "LinkedIn", value: "linkedin.com/in/sophia-ko", icon: "💼" },
      ],
      approach: [
        {
          title: "사용자 중심 사고",
          description: "기술적 완성도보다 사용자 경험을 우선시합니다",
          details:
            "실제 사용자 시나리오를 기반으로 테스트 케이스를 설계하고, 사용성 테스트를 통해 진짜 문제를 찾아냅니다. 개발자 관점이 아닌 사용자 관점에서 제품을 바라봅니다.",
          impact: "사용자 만족도 95% 달성",
        },
        {
          title: "데이터 기반 의사결정",
          description: "직감이 아닌 명확한 데이터로 우선순위를 결정합니다",
          details:
            "테스트 커버리지, 버그 발견율, 사용자 피드백 등 정량적 지표를 활용해 객관적인 품질 평가를 수행합니다. 대시보드를 통해 품질 현황을 실시간으로 모니터링합니다.",
          impact: "의사결정 속도 60% 향상",
        },
        {
          title: "예방적 품질 관리",
          description: "문제를 찾는 것보다 문제가 생기지 않게 하는 것",
          details:
            "요구사항 분석 단계부터 참여하여 모호한 부분을 사전에 명확히 하고, 개발 초기부터 품질 기준을 설정합니다. 코드 리뷰와 정적 분석을 통해 버그를 예방합니다.",
          impact: "프로덕션 버그 80% 감소",
        },
        {
          title: "지속적인 개선",
          description: "완벽한 프로세스는 없다, 계속 발전시켜야 한다",
          details:
            "회고를 통해 프로세스의 문제점을 파악하고 개선 방안을 도출합니다. 새로운 도구와 방법론을 적극적으로 도입하여 팀의 생산성을 높입니다.",
          impact: "팀 효율성 40% 향상",
        },
      ],
      goals: [
        {
          timeline: "2025년",
          title: "AI 기반 QA 도구 개발",
          description: "머신러닝을 활용한 자동 테스트 케이스 생성 도구를 개발하여 테스트 효율성을 극대화합니다.",
          keyActions: [
            "자연어 처리를 통한 요구사항 분석 자동화",
            "과거 버그 패턴 학습을 통한 위험 영역 예측",
            "자동화 테스트 코드 생성 AI 모델 구축",
          ],
          expectedImpact: "테스트 케이스 작성 시간 70% 단축",
        },
        {
          timeline: "2026년",
          title: "QA 교육 플랫폼 구축",
          description: "주니어 QA 엔지니어들을 위한 체계적인 교육 플랫폼을 만들어 업계 전체의 품질 수준을 높입니다.",
          keyActions: ["실무 중심의 QA 교육 커리큘럼 개발", "멘토링 프로그램 운영", "QA 커뮤니티 활성화 및 지식 공유"],
          expectedImpact: "업계 QA 역량 전반적 향상",
        },
        {
          timeline: "2027년+",
          title: "품질 우선 문화 전파",
          description: "기업 문화 차원에서 품질을 최우선으로 생각하는 조직을 만드는 컨설팅을 제공합니다.",
          keyActions: [
            "품질 문화 진단 및 개선 컨설팅",
            "경영진 대상 품질 경영 교육",
            "품질 지표 기반 조직 운영 체계 구축",
          ],
          expectedImpact: "품질 우선 기업 문화 확산",
        },
      ],
      philosophy: {
        quote: "품질은 우연이 아니라 의도의 결과입니다",
        author: "- Sophia Ko",
        description:
          "5년간의 경험을 통해 깨달은 것은 진정한 품질은 마지막에 테스트로 만들어지는 것이 아니라, 처음부터 품질을 염두에 두고 설계하고 개발할 때 나온다는 것입니다.",
      },
    },
    en: {
      title: "Vision",
      subtitle: "QA philosophy for building a better software world",
      backButton: "Back to Search",
      getInTouch: "Contact",
      myApproach: "My Approach",
      futureGoals: "Future Goals",
      ctaTitle: "Ready to Build Quality Together?",
      ctaDescription:
        "Let's create products that users love and developers are proud of. Quality is not just my job—it's my passion.",
      downloadPdf: "Download Portfolio PDF",
      scheduleChat: "Schedule a Chat",
      contacts: [
        { label: "Email", value: "sophia.ko@email.com", icon: "📧" },
        { label: "Phone", value: "+82 10-1234-5678", icon: "📱" },
        { label: "GitHub", value: "github.com/sophia-ko", icon: "💻" },
        { label: "LinkedIn", value: "linkedin.com/in/sophia-ko", icon: "💼" },
      ],
      approach: [
        {
          title: "User-Centric Thinking",
          description: "Prioritizing user experience over technical perfection",
          details:
            "Design test cases based on real user scenarios and find genuine problems through usability testing. View products from user perspective, not developer perspective.",
          impact: "95% user satisfaction achieved",
        },
        {
          title: "Data-Driven Decisions",
          description: "Making decisions based on clear data, not intuition",
          details:
            "Perform objective quality assessments using quantitative metrics like test coverage, bug detection rate, and user feedback. Monitor quality status in real-time through dashboards.",
          impact: "60% faster decision making",
        },
        {
          title: "Preventive Quality Management",
          description: "Preventing problems rather than finding them",
          details:
            "Participate from requirements analysis stage to clarify ambiguities early and set quality standards from development start. Prevent bugs through code reviews and static analysis.",
          impact: "80% reduction in production bugs",
        },
        {
          title: "Continuous Improvement",
          description: "No process is perfect, it must keep evolving",
          details:
            "Identify process issues through retrospectives and derive improvement solutions. Actively adopt new tools and methodologies to increase team productivity.",
          impact: "40% improvement in team efficiency",
        },
      ],
      goals: [
        {
          timeline: "2025",
          title: "AI-Powered QA Tool Development",
          description:
            "Develop automated test case generation tools using machine learning to maximize testing efficiency.",
          keyActions: [
            "Automate requirements analysis through natural language processing",
            "Predict risk areas by learning past bug patterns",
            "Build AI model for automated test code generation",
          ],
          expectedImpact: "70% reduction in test case writing time",
        },
        {
          timeline: "2026",
          title: "QA Education Platform",
          description:
            "Create systematic education platform for junior QA engineers to raise industry-wide quality standards.",
          keyActions: [
            "Develop practical QA education curriculum",
            "Operate mentoring programs",
            "Activate QA community and knowledge sharing",
          ],
          expectedImpact: "Overall improvement in industry QA capabilities",
        },
        {
          timeline: "2027+",
          title: "Quality-First Culture Evangelism",
          description:
            "Provide consulting to create organizations that prioritize quality at the corporate culture level.",
          keyActions: [
            "Quality culture diagnosis and improvement consulting",
            "Quality management education for executives",
            "Build quality metrics-based organizational systems",
          ],
          expectedImpact: "Spread quality-first corporate culture",
        },
      ],
      philosophy: {
        quote: "Quality is never an accident; it is always the result of intention",
        author: "- Sophia Ko",
        description:
          "Through 5 years of experience, I've learned that true quality isn't created by testing at the end, but by designing and developing with quality in mind from the beginning.",
      },
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
                <button
                  onClick={() => (window.location.href = "/about")}
                  className="text-gray-600 hover:text-gray-900 pb-4 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => (window.location.href = "/experience")}
                  className="text-gray-600 hover:text-gray-900 pb-4 transition-colors"
                >
                  Experience
                </button>
                <div className="text-blue-600 font-medium border-b-2 border-blue-600 pb-4">Vision</div>
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

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-900 mb-4">{currentContent.title}</h1>
          <p className="text-gray-600 text-lg">{currentContent.subtitle}</p>
        </div>

        {/* Philosophy Quote - 애플 스타일로 간소화 */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-200/50">
            <blockquote className="text-2xl font-light mb-4 italic text-gray-900">
              "{currentContent.philosophy.quote}"
            </blockquote>
            <cite className="text-gray-600 text-lg">{currentContent.philosophy.author}</cite>
            <p className="text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
              {currentContent.philosophy.description}
            </p>
          </div>
        </section>

        {/* My Approach */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mr-4">{currentContent.myApproach}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentContent.approach.map((item, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-200/50 p-8 hover:shadow-xl hover:bg-white/80 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-gray-800 transition-colors duration-300">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">{item.details}</p>

                <div className="flex items-center pt-4 border-t border-gray-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-green-700 font-medium text-sm">{item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mr-4">{currentContent.futureGoals}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>

          <div className="space-y-8">
            {currentContent.goals.map((goal, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-200/50 p-8 hover:shadow-xl hover:bg-white/80 transition-all duration-500"
              >
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-white font-light text-lg">{goal.timeline}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-2xl mb-3">{goal.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{goal.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Actions</h4>
                    <ul className="space-y-3">
                      {goal.keyActions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Expected Impact</h4>
                    <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
                      <p className="text-green-800 font-medium">{goal.expectedImpact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200/50 p-8">
            <div className="flex items-center mb-8">
              <h2 className="text-2xl font-light text-gray-900 mr-4">{currentContent.getInTouch}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentContent.contacts.map((contact, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors duration-300 shadow-lg">
                    <span className="text-2xl">{contact.icon}</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium mb-1">{contact.label}</p>
                  <p className="text-gray-900 text-sm font-mono">{contact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gray-900 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-light mb-4">{currentContent.ctaTitle}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{currentContent.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg">
                {currentContent.downloadPdf}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors">
                {currentContent.scheduleChat}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
