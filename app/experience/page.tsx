"use client"

import { useState, useEffect } from "react"

export default function ExperiencePage() {
  const [language, setLanguage] = useState<"ko" | "en">("ko")
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<"overview" | "skills" | "projects" | "achievements">("overview")

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
      title: "Experience",
      subtitle: "5년간 제품에 품질을 구축해온 경험",
      backButton: "검색으로 돌아가기",
      tabs: {
        overview: "개요",
        skills: "기술 스택",
        projects: "프로젝트",
        achievements: "성과",
      },
      overview: {
        summary:
          "5년간 다양한 도메인에서 QA 업무를 수행하며 품질 보증의 전 영역을 경험했습니다. 단순한 테스트 실행을 넘어 품질 문화 구축과 프로세스 개선에 집중하고 있습니다.",
        highlights: [
          {
            title: "테스트 자동화 전문성",
            description: "Selenium, Cypress, Appium을 활용한 E2E 자동화 구축",
            impact: "테스트 시간 70% 단축",
          },
          {
            title: "크로스 플랫폼 경험",
            description: "iOS, Android, Web 플랫폼 전반의 테스트 경험",
            impact: "8개 플랫폼 동시 지원",
          },
          {
            title: "보안 테스트 전문성",
            description: "OWASP 기반 보안 취약점 검증 및 침투 테스트",
            impact: "보안 이슈 0건 달성",
          },
          {
            title: "성능 최적화",
            description: "부하 테스트 및 성능 병목 지점 분석",
            impact: "응답 시간 50% 개선",
          },
        ],
        timeline: [
          { year: "2020", role: "Junior QA Engineer", company: "스타트업 A", focus: "모바일 앱 테스팅" },
          { year: "2021", role: "QA Engineer", company: "스타트업 A", focus: "테스트 자동화" },
          { year: "2022", role: "Senior QA Engineer", company: "핀테크 B", focus: "결제 시스템 QA" },
          { year: "2023", role: "Senior QA Engineer", company: "핀테크 B", focus: "보안 & 성능 테스트" },
          { year: "2024", role: "Lead QA Engineer", company: "테크 C", focus: "QA 프로세스 혁신" },
        ],
      },
      skills: [
        {
          category: "모바일 테스팅",
          items: [
            {
              name: "iOS 테스팅",
              level: 5,
              years: "3년",
              tools: ["XCTest", "XCUITest", "TestFlight"],
              details:
                "네이티브 iOS 앱의 기능, 성능, 호환성 테스트를 담당했습니다. 다양한 iOS 버전과 디바이스에서의 테스트 경험이 있으며, TestFlight를 통한 베타 테스트 관리도 수행했습니다.",
              projects: ["금융 앱 iOS 버전", "커머스 앱 리뉴얼"],
            },
            {
              name: "Android 테스팅",
              level: 5,
              years: "4년",
              tools: ["Espresso", "UI Automator", "Firebase Test Lab"],
              details:
                "Android 플랫폼의 파편화 이슈를 해결하며 다양한 제조사 디바이스에서의 호환성을 보장했습니다. Google Play Console을 통한 배포 테스트와 크래시 분석도 담당했습니다.",
              projects: ["결제 앱 Android", "소셜 미디어 앱"],
            },
          ],
        },
        {
          category: "웹 테스팅",
          items: [
            {
              name: "프론트엔드 테스팅",
              level: 4,
              years: "5년",
              tools: ["Selenium", "Cypress", "Playwright"],
              details:
                "React, Vue.js 기반 SPA 애플리케이션의 E2E 테스트를 구축했습니다. 크로스 브라우저 호환성과 반응형 디자인 테스트에 특화되어 있습니다.",
              projects: ["관리자 대시보드", "고객 포털"],
            },
            {
              name: "API 테스팅",
              level: 5,
              years: "4년",
              tools: ["Postman", "REST Assured", "Newman"],
              details:
                "RESTful API와 GraphQL API의 기능, 성능, 보안 테스트를 수행했습니다. 계약 테스트(Contract Testing)와 API 문서 자동화도 경험했습니다.",
              projects: ["결제 API", "사용자 관리 API"],
            },
          ],
        },
        {
          category: "자동화 & DevOps",
          items: [
            {
              name: "테스트 자동화",
              level: 4,
              years: "3년",
              tools: ["Python", "Java", "Jenkins", "GitHub Actions"],
              details:
                "Page Object Model 패턴을 적용한 유지보수 가능한 자동화 프레임워크를 구축했습니다. CI/CD 파이프라인과 통합하여 자동화된 테스트 실행 환경을 구성했습니다.",
              projects: ["E2E 자동화 프레임워크", "API 테스트 자동화"],
            },
            {
              name: "성능 테스트",
              level: 4,
              years: "2년",
              tools: ["JMeter", "K6", "Artillery"],
              details:
                "대용량 트래픽 상황에서의 시스템 안정성을 검증했습니다. 병목 지점 분석과 성능 최적화 방안을 제시하여 응답 시간을 크게 개선했습니다.",
              projects: ["결제 시스템 부하 테스트", "API 성능 최적화"],
            },
          ],
        },
      ],
      qaProjects: [
        {
          title: "결제 시스템 품질 보증",
          period: "2022.03 - 2022.08",
          type: "금융",
          role: "Lead QA Engineer",
          team: "QA 2명, 개발 5명",
          achievements: ["43개 버그 발견", "99.7% 성공률", "치명적 이슈 0건", "PCI DSS 인증 통과"],
          tags: ["보안", "결제", "금융", "규제"],
          challenge:
            "금융 서비스의 특성상 단 하나의 오류도 용납할 수 없는 상황에서 다양한 결제 수단과 예외 상황을 모두 검증해야 했습니다.",
          solution:
            "체계적인 테스트 시나리오 설계와 보안 테스트를 통해 모든 결제 플로우를 검증했습니다. 특히 동시 결제, 네트워크 오류, 부분 결제 등의 엣지 케이스를 집중적으로 테스트했습니다.",
          result:
            "99.7%의 높은 성공률을 달성하며 서비스 출시 후 6개월간 결제 관련 치명적 이슈가 발생하지 않았습니다. PCI DSS 인증도 성공적으로 통과했습니다.",
          technologies: ["Postman", "JMeter", "OWASP ZAP", "Burp Suite"],
        },
        {
          title: "모바일 앱 성능 최적화",
          period: "2023.05 - 2023.12",
          type: "모바일",
          role: "Senior QA Engineer",
          team: "QA 3명, 개발 8명",
          achievements: ["로딩 시간 50% 개선", "크래시율 0.1%", "사용자 만족도 95%", "메모리 사용량 30% 감소"],
          tags: ["성능", "모바일", "UX", "최적화"],
          challenge: "사용자 증가로 인한 앱 성능 저하와 높은 크래시율로 인해 사용자 이탈이 증가하는 상황이었습니다.",
          solution:
            "다양한 디바이스와 네트워크 환경에서의 성능 테스트를 수행하고, 메모리 누수와 배터리 소모 패턴을 분석했습니다. 성능 모니터링 도구를 도입하여 실시간 성능 추적 체계를 구축했습니다.",
          result:
            "앱 로딩 시간을 50% 단축하고 크래시율을 0.1%까지 낮췄습니다. 사용자 만족도가 95%까지 향상되었고, 앱스토어 평점도 4.8점으로 상승했습니다.",
          technologies: ["Xcode Instruments", "Android Profiler", "Firebase Performance", "New Relic"],
        },
        {
          title: "API 보안 강화 프로젝트",
          period: "2023.01 - 2023.04",
          type: "보안",
          role: "Security QA Specialist",
          team: "QA 2명, 보안팀 3명, 개발 4명",
          achievements: ["15개 취약점 발견", "100% 보안 커버리지", "보안 침해 0건", "보안 가이드라인 수립"],
          tags: ["보안", "API", "침투테스트", "OWASP"],
          challenge: "외부 API 연동 증가와 함께 보안 위협이 높아져 체계적인 보안 테스트가 필요한 상황이었습니다.",
          solution:
            "OWASP API Top 10을 기반으로 한 보안 테스트 체크리스트를 작성하고, 자동화된 보안 스캔 도구를 도입했습니다. 침투 테스트를 통해 실제 공격 시나리오를 시뮬레이션했습니다.",
          result:
            "15개의 보안 취약점을 사전에 발견하여 수정했고, 서비스 운영 중 보안 침해 사고가 0건 발생했습니다. 보안 테스트 가이드라인을 수립하여 전사에 배포했습니다.",
          technologies: ["OWASP ZAP", "Burp Suite", "Nessus", "Postman"],
        },
      ],
      processProjects: [
        {
          title: "테스트 자동화 프레임워크 구축",
          period: "2021.01 - 2021.06",
          type: "자동화",
          role: "Automation Engineer",
          team: "QA 2명, DevOps 2명",
          achievements: ["테스트 시간 70% 단축", "커버리지 95%", "CI/CD 통합", "유지보수성 향상"],
          tags: ["자동화", "프레임워크", "CI/CD", "효율성"],
          challenge:
            "수동 테스트로 인한 긴 테스트 사이클과 반복적인 회귀 테스트로 인해 개발 속도가 저하되고 있었습니다.",
          solution:
            "Page Object Model 패턴을 적용한 확장 가능한 자동화 프레임워크를 설계했습니다. 데이터 드리븐 테스트와 병렬 실행을 통해 효율성을 극대화했습니다.",
          result:
            "테스트 실행 시간을 70% 단축하고 테스트 커버리지를 95%까지 향상시켰습니다. Jenkins와 연동하여 자동화된 테스트 파이프라인을 구축했습니다.",
          technologies: ["Selenium", "Python", "Jenkins", "Docker", "Allure"],
        },
        {
          title: "QA 프로세스 표준화",
          period: "2023.03 - 2023.09",
          type: "프로세스",
          role: "QA Process Lead",
          team: "QA 5명, PM 2명, 개발팀 리더 3명",
          achievements: ["팀 효율성 40% 향상", "문서화 완료", "타팀 도입", "교육 프로그램 운영"],
          tags: ["프로세스", "표준화", "효율성", "협업"],
          challenge: "팀별로 다른 QA 프로세스로 인해 일관성이 부족하고, 신규 팀원의 온보딩이 어려운 상황이었습니다.",
          solution:
            "애자일 환경에 맞는 QA 프로세스를 재설계하고, 테스트 케이스 관리 도구를 도입했습니다. 단계별 체크리스트와 템플릿을 제작하여 표준화를 진행했습니다.",
          result:
            "팀 효율성이 40% 향상되었고, 신규 팀원 온보딩 시간이 50% 단축되었습니다. 다른 팀에서도 해당 프로세스를 도입하여 전사 표준이 되었습니다.",
          technologies: ["Jira", "TestRail", "Confluence", "Slack"],
        },
        {
          title: "품질 문화 혁신 이니셔티브",
          period: "2024.01 - Present",
          type: "문화",
          role: "Quality Culture Lead",
          team: "QA 전체 8명, 개발팀 전체 25명",
          achievements: ["교육 프로그램 런칭", "품질 지표 대시보드", "크로스팀 협업 강화", "품질 마인드셋 확산"],
          tags: ["문화", "교육", "리더십", "혁신"],
          challenge:
            "개발팀과 QA팀 간의 사일로 현상과 품질에 대한 인식 차이로 인해 협업 효율성이 떨어지는 상황이었습니다.",
          solution:
            "전사 품질 교육 프로그램을 기획하고, 개발자 대상 테스트 작성 가이드를 제작했습니다. 품질 지표를 시각화한 대시보드를 구축하여 투명성을 높였습니다.",
          result:
            "개발팀의 품질 의식이 크게 향상되었고, 버그 발견 시점이 개발 단계로 앞당겨졌습니다. 팀 간 협업 만족도가 85%까지 상승했습니다.",
          technologies: ["Grafana", "Elasticsearch", "Slack", "Notion"],
        },
      ],
      achievements: {
        metrics: [
          { label: "프로젝트 성공률", value: "99.7%", description: "15개 프로젝트 중 모든 프로젝트 성공적 완료" },
          { label: "버그 발견율", value: "95%", description: "프로덕션 배포 전 95% 이상의 버그 사전 발견" },
          { label: "테스트 자동화율", value: "85%", description: "반복 테스트의 85%를 자동화로 전환" },
          { label: "팀 효율성 향상", value: "40%", description: "프로세스 개선을 통한 팀 생산성 향상" },
        ],
        certifications: [
          { name: "ISTQB Foundation Level", year: "2021", issuer: "ISTQB" },
          { name: "AWS Certified Cloud Practitioner", year: "2022", issuer: "Amazon" },
          { name: "Certified Ethical Hacker (CEH)", year: "2023", issuer: "EC-Council" },
        ],
        awards: [
          { title: "올해의 QA 엔지니어", year: "2023", organization: "회사 내부" },
          { title: "프로세스 혁신상", year: "2023", organization: "회사 내부" },
          { title: "고객 만족 기여상", year: "2024", organization: "회사 내부" },
        ],
      },
    },
    en: {
      title: "Experience",
      subtitle: "5 years of building quality into products",
      backButton: "Back to Search",
      tabs: {
        overview: "Overview",
        skills: "Tech Stack",
        projects: "Projects",
        achievements: "Achievements",
      },
      overview: {
        summary:
          "Over 5 years of QA experience across various domains, covering all aspects of quality assurance. Focus on building quality culture and process improvement beyond simple test execution.",
        highlights: [
          {
            title: "Test Automation Expertise",
            description: "E2E automation using Selenium, Cypress, and Appium",
            impact: "70% reduction in test time",
          },
          {
            title: "Cross-Platform Experience",
            description: "Testing experience across iOS, Android, and Web platforms",
            impact: "Supporting 8 platforms simultaneously",
          },
          {
            title: "Security Testing Expertise",
            description: "OWASP-based security vulnerability verification and penetration testing",
            impact: "Zero security issues achieved",
          },
          {
            title: "Performance Optimization",
            description: "Load testing and performance bottleneck analysis",
            impact: "50% improvement in response time",
          },
        ],
        timeline: [
          { year: "2020", role: "Junior QA Engineer", company: "Startup A", focus: "Mobile App Testing" },
          { year: "2021", role: "QA Engineer", company: "Startup A", focus: "Test Automation" },
          { year: "2022", role: "Senior QA Engineer", company: "Fintech B", focus: "Payment System QA" },
          { year: "2023", role: "Senior QA Engineer", company: "Fintech B", focus: "Security & Performance Testing" },
          { year: "2024", role: "Lead QA Engineer", company: "Tech C", focus: "QA Process Innovation" },
        ],
      },
      skills: [
        {
          category: "Mobile Testing",
          items: [
            {
              name: "iOS Testing",
              level: 5,
              years: "3y",
              tools: ["XCTest", "XCUITest", "TestFlight"],
              details:
                "Responsible for functional, performance, and compatibility testing of native iOS apps. Experience testing across various iOS versions and devices, and managed beta testing through TestFlight.",
              projects: ["Financial App iOS", "Commerce App Renewal"],
            },
            {
              name: "Android Testing",
              level: 5,
              years: "4y",
              tools: ["Espresso", "UI Automator", "Firebase Test Lab"],
              details:
                "Resolved Android platform fragmentation issues and ensured compatibility across various manufacturer devices. Handled deployment testing and crash analysis through Google Play Console.",
              projects: ["Payment App Android", "Social Media App"],
            },
          ],
        },
        {
          category: "Web Testing",
          items: [
            {
              name: "Frontend Testing",
              level: 4,
              years: "5y",
              tools: ["Selenium", "Cypress", "Playwright"],
              details:
                "Built E2E tests for React and Vue.js-based SPA applications. Specialized in cross-browser compatibility and responsive design testing.",
              projects: ["Admin Dashboard", "Customer Portal"],
            },
            {
              name: "API Testing",
              level: 5,
              years: "4y",
              tools: ["Postman", "REST Assured", "Newman"],
              details:
                "Performed functional, performance, and security testing of RESTful and GraphQL APIs. Experience with contract testing and API documentation automation.",
              projects: ["Payment API", "User Management API"],
            },
          ],
        },
        {
          category: "Automation & DevOps",
          items: [
            {
              name: "Test Automation",
              level: 4,
              years: "3y",
              tools: ["Python", "Java", "Jenkins", "GitHub Actions"],
              details:
                "Built maintainable automation frameworks using Page Object Model pattern. Configured automated test execution environments integrated with CI/CD pipelines.",
              projects: ["E2E Automation Framework", "API Test Automation"],
            },
            {
              name: "Performance Testing",
              level: 4,
              years: "2y",
              tools: ["JMeter", "K6", "Artillery"],
              details:
                "Verified system stability under high-volume traffic. Analyzed bottlenecks and proposed performance optimization solutions, significantly improving response times.",
              projects: ["Payment System Load Testing", "API Performance Optimization"],
            },
          ],
        },
      ],
      qaProjects: [
        {
          title: "Payment System Quality Assurance",
          period: "2022.03 - 2022.08",
          type: "Financial",
          role: "Lead QA Engineer",
          team: "2 QA, 5 Developers",
          achievements: ["43 bugs found", "99.7% success rate", "Zero critical issues", "PCI DSS certification passed"],
          tags: ["Security", "Payment", "Financial", "Compliance"],
          challenge:
            "In financial services, zero tolerance for errors required verification of all payment methods and exception scenarios.",
          solution:
            "Systematic test scenario design and security testing verified all payment flows. Focused intensively on edge cases like concurrent payments, network errors, and partial payments.",
          result:
            "Achieved 99.7% success rate with no critical payment-related issues for 6 months post-launch. Successfully passed PCI DSS certification.",
          technologies: ["Postman", "JMeter", "OWASP ZAP", "Burp Suite"],
        },
        {
          title: "Mobile App Performance Optimization",
          period: "2023.05 - 2023.12",
          type: "Mobile",
          role: "Senior QA Engineer",
          team: "3 QA, 8 Developers",
          achievements: [
            "50% loading time improvement",
            "0.1% crash rate",
            "95% user satisfaction",
            "30% memory reduction",
          ],
          tags: ["Performance", "Mobile", "UX", "Optimization"],
          challenge:
            "App performance degradation and high crash rates due to user growth were causing increased user churn.",
          solution:
            "Performed performance testing across various devices and network environments, analyzed memory leaks and battery consumption patterns. Implemented real-time performance monitoring system.",
          result:
            "Reduced app loading time by 50% and crash rate to 0.1%. User satisfaction improved to 95% and app store rating rose to 4.8 stars.",
          technologies: ["Xcode Instruments", "Android Profiler", "Firebase Performance", "New Relic"],
        },
        {
          title: "API Security Enhancement Project",
          period: "2023.01 - 2023.04",
          type: "Security",
          role: "Security QA Specialist",
          team: "2 QA, 3 Security Team, 4 Developers",
          achievements: [
            "15 vulnerabilities found",
            "100% security coverage",
            "Zero security breaches",
            "Security guidelines established",
          ],
          tags: ["Security", "API", "Penetration Testing", "OWASP"],
          challenge:
            "Increasing external API integrations raised security threats, requiring systematic security testing.",
          solution:
            "Created security test checklist based on OWASP API Top 10 and introduced automated security scanning tools. Simulated real attack scenarios through penetration testing.",
          result:
            "Discovered and fixed 15 security vulnerabilities proactively, with zero security incidents during service operation. Established and distributed security testing guidelines company-wide.",
          technologies: ["OWASP ZAP", "Burp Suite", "Nessus", "Postman"],
        },
      ],
      processProjects: [
        {
          title: "Test Automation Framework Development",
          period: "2021.01 - 2021.06",
          type: "Automation",
          role: "Automation Engineer",
          team: "2 QA, 2 DevOps",
          achievements: ["70% test time reduction", "95% coverage", "CI/CD integration", "Improved maintainability"],
          tags: ["Automation", "Framework", "CI/CD", "Efficiency"],
          challenge:
            "Long test cycles due to manual testing and repetitive regression testing were slowing down development speed.",
          solution:
            "Designed scalable automation framework using Page Object Model pattern. Maximized efficiency through data-driven testing and parallel execution.",
          result:
            "Reduced test execution time by 70% and improved test coverage to 95%. Built automated test pipeline integrated with Jenkins.",
          technologies: ["Selenium", "Python", "Jenkins", "Docker", "Allure"],
        },
        {
          title: "QA Process Standardization",
          period: "2023.03 - 2023.09",
          type: "Process",
          role: "QA Process Lead",
          team: "5 QA, 2 PM, 3 Dev Team Leaders",
          achievements: [
            "40% team efficiency improvement",
            "Documentation completed",
            "Cross-team adoption",
            "Training program operation",
          ],
          tags: ["Process", "Standardization", "Efficiency", "Collaboration"],
          challenge:
            "Different QA processes across teams lacked consistency and made onboarding new team members difficult.",
          solution:
            "Redesigned QA processes for agile environments and introduced test case management tools. Created step-by-step checklists and templates for standardization.",
          result:
            "Improved team efficiency by 40% and reduced new team member onboarding time by 50%. Other teams adopted the process, making it a company standard.",
          technologies: ["Jira", "TestRail", "Confluence", "Slack"],
        },
        {
          title: "Quality Culture Innovation Initiative",
          period: "2024.01 - Present",
          type: "Culture",
          role: "Quality Culture Lead",
          team: "8 QA Total, 25 Developers Total",
          achievements: [
            "Training program launch",
            "Quality metrics dashboard",
            "Enhanced cross-team collaboration",
            "Quality mindset spread",
          ],
          tags: ["Culture", "Training", "Leadership", "Innovation"],
          challenge:
            "Silos between development and QA teams and different perceptions of quality were reducing collaboration efficiency.",
          solution:
            "Planned company-wide quality education program and created test writing guides for developers. Built dashboard visualizing quality metrics to increase transparency.",
          result:
            "Significantly improved development team's quality awareness, moving bug discovery earlier to development phase. Team collaboration satisfaction rose to 85%.",
          technologies: ["Grafana", "Elasticsearch", "Slack", "Notion"],
        },
      ],
      achievements: {
        metrics: [
          { label: "Project Success Rate", value: "99.7%", description: "Successfully completed all 15 projects" },
          { label: "Bug Detection Rate", value: "95%", description: "95%+ bugs found before production deployment" },
          {
            label: "Test Automation Rate",
            value: "85%",
            description: "85% of repetitive tests converted to automation",
          },
          {
            label: "Team Efficiency Improvement",
            value: "40%",
            description: "Team productivity improvement through process enhancement",
          },
        ],
        certifications: [
          { name: "ISTQB Foundation Level", year: "2021", issuer: "ISTQB" },
          { name: "AWS Certified Cloud Practitioner", year: "2022", issuer: "Amazon" },
          { name: "Certified Ethical Hacker (CEH)", year: "2023", issuer: "EC-Council" },
        ],
        awards: [
          { title: "QA Engineer of the Year", year: "2023", organization: "Company Internal" },
          { title: "Process Innovation Award", year: "2023", organization: "Company Internal" },
          { title: "Customer Satisfaction Contribution Award", year: "2024", organization: "Company Internal" },
        ],
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
                <div className="text-blue-600 font-medium border-b-2 border-blue-600 pb-4">Experience</div>
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

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">{currentContent.title}</h1>
          <p className="text-gray-600 text-lg">{currentContent.subtitle}</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50">
            {Object.entries(currentContent.tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === key
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            {/* Summary */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200/50 p-8">
              <h2 className="text-2xl font-light text-gray-900 mb-6">Summary</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{currentContent.overview.summary}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-8">Key Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentContent.overview.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 p-6 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="font-semibold text-gray-900 text-lg mb-3">{highlight.title}</h3>
                    <p className="text-gray-700 mb-4">{highlight.description}</p>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-green-700 font-medium text-sm">{highlight.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-8">Career Timeline</h2>
              <div className="space-y-6">
                {currentContent.overview.timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-6">
                      <span className="text-white font-medium">{item.year}</span>
                    </div>
                    <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 p-6">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.role}</h3>
                      <p className="text-gray-600 mb-2">{item.company}</p>
                      <p className="text-gray-700">{item.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="space-y-12">
            {currentContent.skills.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-light text-gray-900 mb-8">{category.category}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div
                        className={`bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 p-6 hover:shadow-md hover:bg-white/80 transition-all duration-300 cursor-pointer ${
                          selectedSkill === categoryIndex * 10 + skillIndex ? "ring-2 ring-blue-500 bg-white/90" : ""
                        }`}
                        onClick={() =>
                          setSelectedSkill(
                            selectedSkill === categoryIndex * 10 + skillIndex ? null : categoryIndex * 10 + skillIndex,
                          )
                        }
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-900 text-lg">{skill.name}</h3>
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {skill.years}
                          </span>
                        </div>
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full mr-1 ${i < skill.level ? "bg-gray-600" : "bg-gray-200"}`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">{skill.level}/5</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {skill.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                        <div className="text-sm text-gray-600">
                          {language === "ko" ? "프로젝트:" : "Projects:"} {skill.projects.join(", ")}
                        </div>
                      </div>

                      {/* Skill Details */}
                      {selectedSkill === categoryIndex * 10 + skillIndex && (
                        <div className="mt-4 bg-sky-50 rounded-xl p-6 border border-sky-200 shadow-sm">
                          <p className="text-gray-700 leading-relaxed">{skill.details}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "projects" && (
          <div className="space-y-16">
            {/* QA Expertise Projects */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-8">QA Expertise</h2>
              <div className="space-y-8">
                {currentContent.qaProjects.map((project, index) => (
                  <div key={index} className="space-y-4">
                    <div
                      className={`bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-200/50 overflow-hidden hover:shadow-xl hover:bg-white/80 transition-all duration-500 cursor-pointer ${
                        selectedProject === index ? "ring-2 ring-blue-500" : ""
                      }`}
                      onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                    >
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>{project.period}</span>
                              <span>•</span>
                              <span>{project.role}</span>
                              <span>•</span>
                              <span>{project.team}</span>
                            </div>
                          </div>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {project.type}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {project.achievements.map((achievement, i) => (
                            <div key={i} className="text-center">
                              <div className="text-lg font-semibold text-gray-900">{achievement}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Details - 분리된 카드로 표시 */}
                    {selectedProject === index && (
                      <div className="bg-sky-50 rounded-2xl p-8 border border-sky-200 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{project.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Solution</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{project.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Result</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{project.result}</p>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-sky-300">
                          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Process Innovation Projects */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-8">Process Innovation</h2>
              <div className="space-y-8">
                {currentContent.processProjects.map((project, index) => (
                  <div key={index} className="space-y-4">
                    <div
                      className={`bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-200/50 overflow-hidden hover:shadow-xl hover:bg-white/80 transition-all duration-500 cursor-pointer ${
                        selectedProject === index + 100 ? "ring-2 ring-blue-500" : ""
                      }`}
                      onClick={() => setSelectedProject(selectedProject === index + 100 ? null : index + 100)}
                    >
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>{project.period}</span>
                              <span>•</span>
                              <span>{project.role}</span>
                              <span>•</span>
                              <span>{project.team}</span>
                            </div>
                          </div>
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                            {project.type}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {project.achievements.map((achievement, i) => (
                            <div key={i} className="text-center">
                              <div className="text-lg font-semibold text-gray-900">{achievement}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Details - 분리된 카드로 표시 */}
                    {selectedProject === index + 100 && (
                      <div className="bg-sky-50 rounded-2xl p-8 border border-sky-200 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{project.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Solution</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{project.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Result</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{project.result}</p>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-sky-300">
                          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="space-y-12">
            {/* Key Metrics */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-8">Key Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentContent.achievements.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 p-6 text-center hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-3xl font-light text-blue-600 mb-2">{metric.value}</div>
                    <div className="font-semibold text-gray-900 mb-2">{metric.label}</div>
                    <div className="text-sm text-gray-600">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-8">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentContent.achievements.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 p-6 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{cert.name}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{cert.issuer}</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-8">Awards & Recognition</h2>
              <div className="space-y-4">
                {currentContent.achievements.awards.map((award, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 p-6 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{award.title}</h3>
                        <p className="text-gray-600">{award.organization}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-light text-yellow-600">{award.year}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
