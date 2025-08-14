export const generatePDFTemplate = (language: "ko" | "en") => {
  const content = {
    ko: {
      title: "고아현 - QA 엔지니어 포트폴리오",
      subtitle: "Senior QA Engineer • 5년차 전문가 • 99.7% 프로젝트 성공률",
      executiveSummary:
        "5년간의 체계적인 QA 경험을 바탕으로 품질 혁신과 프로세스 개선을 통해 팀 성과 향상에 기여하는 전문가입니다. 15개 이상의 주요 프로젝트에서 99.7%의 성공률을 달성하며, 예방적 품질 관리와 데이터 기반 의사결정으로 조직의 품질 문화를 혁신해왔습니다.",
      quote: "완벽한 제품보다는 사용자가 행복한 제품을 만드는 데 기여하고 싶습니다",

      // About 페이지 Q&A 내용
      personalQA: [
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

      // Experience 페이지의 상세 기술 스택
      detailedSkills: [
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

      // 모든 프로젝트 (QA + 프로세스)
      allProjects: [
        {
          title: "결제 시스템 품질 보증",
          period: "2022.03 - 2022.08",
          type: "QA 전문성",
          role: "Lead QA Engineer",
          team: "QA 2명, 개발 5명",
          challenge:
            "금융 서비스의 특성상 단 하나의 오류도 용납할 수 없는 상황에서 다양한 결제 수단과 예외 상황을 모두 검증해야 했습니다.",
          solution:
            "체계적인 테스트 시나리오 설계와 보안 테스트를 통해 모든 결제 플로우를 검증했습니다. 특히 동시 결제, 네트워크 오류, 부분 결제 등의 엣지 케이스를 집중적으로 테스트했습니다.",
          achievements: ["43개 버그 발견", "99.7% 성공률", "치명적 이슈 0건", "PCI DSS 인증 통과"],
          technologies: ["Postman", "JMeter", "OWASP ZAP", "Burp Suite"],
        },
        {
          title: "모바일 앱 성능 최적화",
          period: "2023.05 - 2023.12",
          type: "QA 전문성",
          role: "Senior QA Engineer",
          team: "QA 3명, 개발 8명",
          challenge: "사용자 증가로 인한 앱 성능 저하와 높은 크래시율로 인해 사용자 이탈이 증가하는 상황이었습니다.",
          solution:
            "다양한 디바이스와 네트워크 환경에서의 성능 테스트를 수행하고, 메모리 누수와 배터리 소모 패턴을 분석했습니다. 성능 모니터링 도구를 도입하여 실시간 성능 추적 체계를 구축했습니다.",
          achievements: ["로딩 시간 50% 개선", "크래시율 0.1%", "사용자 만족도 95%", "메모리 사용량 30% 감소"],
          technologies: ["Xcode Instruments", "Android Profiler", "Firebase Performance", "New Relic"],
        },
        {
          title: "API 보안 강화 프로젝트",
          period: "2023.01 - 2023.04",
          type: "QA 전문성",
          role: "Security QA Specialist",
          team: "QA 2명, 보안팀 3명, 개발 4명",
          challenge: "외부 API 연동 증가와 함께 보안 위협이 높아져 체계적인 보안 테스트가 필요한 상황이었습니다.",
          solution:
            "OWASP API Top 10을 기반으로 한 보안 테스트 체크리스트를 작성하고, 자동화된 보안 스캔 도구를 도입했습니다. 침투 테스트를 통해 실제 공격 시나리오를 시뮬레이션했습니다.",
          achievements: ["15개 취약점 발견", "100% 보안 커버리지", "보안 침해 0건", "보안 가이드라인 수립"],
          technologies: ["OWASP ZAP", "Burp Suite", "Nessus", "Postman"],
        },
        {
          title: "테스트 자동화 프레임워크 구축",
          period: "2021.01 - 2021.06",
          type: "프로세스 혁신",
          role: "Automation Engineer",
          team: "QA 2명, DevOps 2명",
          challenge:
            "수동 테스트로 인한 긴 테스트 사이클과 반복적인 회귀 테스트로 인해 개발 속도가 저하되고 있었습니다.",
          solution:
            "Page Object Model 패턴을 적용한 확장 가능한 자동화 프레임워크를 설계했습니다. 데이터 드리븐 테스트와 병렬 실행을 통해 효율성을 극대화했습니다.",
          achievements: ["테스트 시간 70% 단축", "커버리지 95%", "CI/CD 통합", "유지보수성 향상"],
          technologies: ["Selenium", "Python", "Jenkins", "Docker", "Allure"],
        },
        {
          title: "QA 프로세스 표준화",
          period: "2023.03 - 2023.09",
          type: "프로세스 혁신",
          role: "QA Process Lead",
          team: "QA 5명, PM 2명, 개발팀 리더 3명",
          challenge: "팀별로 다른 QA 프로세스로 인해 일관성이 부족하고, 신규 팀원의 온보딩이 어려운 상황이었습니다.",
          solution:
            "애자일 환경에 맞는 QA 프로세스를 재설계하고, 테스트 케이스 관리 도구를 도입했습니다. 단계별 체크리스트와 템플릿을 제작하여 표준화를 진행했습니다.",
          achievements: ["팀 효율성 40% 향상", "문서화 완료", "타팀 도입", "교육 프로그램 운영"],
          technologies: ["Jira", "TestRail", "Confluence", "Slack"],
        },
        {
          title: "품질 문화 혁신 이니셔티브",
          period: "2024.01 - Present",
          type: "프로세스 혁신",
          role: "Quality Culture Lead",
          team: "QA 전체 8명, 개발팀 전체 25명",
          challenge:
            "개발팀과 QA팀 간의 사일로 현상과 품질에 대한 인식 차이로 인해 협업 효율성이 떨어지는 상황이었습니다.",
          solution:
            "전사 품질 교육 프로그램을 기획하고, 개발자 대상 테스트 작성 가이드를 제작했습니다. 품질 지표를 시각화한 대시보드를 구축하여 투명성을 높였습니다.",
          achievements: ["교육 프로그램 런칭", "품질 지표 대시보드", "크로스팀 협업 강화", "품질 마인드셋 확산"],
          technologies: ["Grafana", "Elasticsearch", "Slack", "Notion"],
        },
      ],

      // 성과 및 인증
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

      // Vision 페이지의 접근 방식
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

      // 미래 목표
      futureGoals: [
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

      contact: {
        name: "고아현",
        position: "Senior QA Engineer",
        experience: "5년차 (2020.01 ~ 현재)",
        education: "컴퓨터공학과 학사",
        email: "sophia.ko@email.com",
        phone: "010-1234-5678",
        github: "github.com/sophia-ko",
        linkedin: "linkedin.com/in/sophia-ko",
      },

      finalMessage:
        "귀사에서 품질 혁신을 이끄는 QA 리더로 성장하여, 사용자가 사랑하는 제품을 만드는 데 기여하겠습니다.",
      funFact: "예방적 QA 프로세스를 구현해서 찾은 버그보다 예방한 버그가 더 많아요!",
    },

    en: {
      title: "Goahyun Ko - QA Engineer Portfolio",
      subtitle: "Senior QA Professional • 5 Years Experience • 99.7% Project Success Rate",
      executiveSummary:
        "A professional who contributes to team performance improvement through quality innovation and process improvement based on 5 years of systematic QA experience. Achieved 99.7% success rate across 15+ major projects, revolutionizing organizational quality culture through preventive quality management and data-driven decision making.",
      quote: "I want to contribute to creating products that make users happy rather than perfect products",

      personalQA: [
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

      detailedSkills: [
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

      allProjects: [
        {
          title: "Payment System Quality Assurance",
          period: "2022.03 - 2022.08",
          type: "QA Expertise",
          role: "Lead QA Engineer",
          team: "2 QA, 5 Developers",
          challenge:
            "In financial services, zero tolerance for errors required verification of all payment methods and exception scenarios.",
          solution:
            "Systematic test scenario design and security testing verified all payment flows. Focused intensively on edge cases like concurrent payments, network errors, and partial payments.",
          achievements: ["43 bugs found", "99.7% success rate", "Zero critical issues", "PCI DSS certification passed"],
          technologies: ["Postman", "JMeter", "OWASP ZAP", "Burp Suite"],
        },
        {
          title: "Mobile App Performance Optimization",
          period: "2023.05 - 2023.12",
          type: "QA Expertise",
          role: "Senior QA Engineer",
          team: "3 QA, 8 Developers",
          challenge:
            "App performance degradation and high crash rates due to user growth were causing increased user churn.",
          solution:
            "Performed performance testing across various devices and network environments, analyzed memory leaks and battery consumption patterns. Implemented real-time performance monitoring system.",
          achievements: [
            "50% loading time improvement",
            "0.1% crash rate",
            "95% user satisfaction",
            "30% memory reduction",
          ],
          technologies: ["Xcode Instruments", "Android Profiler", "Firebase Performance", "New Relic"],
        },
        {
          title: "API Security Enhancement Project",
          period: "2023.01 - 2023.04",
          type: "QA Expertise",
          role: "Security QA Specialist",
          team: "2 QA, 3 Security Team, 4 Developers",
          challenge:
            "Increasing external API integrations raised security threats, requiring systematic security testing.",
          solution:
            "Created security test checklist based on OWASP API Top 10 and introduced automated security scanning tools. Simulated real attack scenarios through penetration testing.",
          achievements: [
            "15 vulnerabilities found",
            "100% security coverage",
            "Zero security breaches",
            "Security guidelines established",
          ],
          technologies: ["OWASP ZAP", "Burp Suite", "Nessus", "Postman"],
        },
        {
          title: "Test Automation Framework Development",
          period: "2021.01 - 2021.06",
          type: "Process Innovation",
          role: "Automation Engineer",
          team: "2 QA, 2 DevOps",
          challenge:
            "Long test cycles due to manual testing and repetitive regression testing were slowing down development speed.",
          solution:
            "Designed scalable automation framework using Page Object Model pattern. Maximized efficiency through data-driven testing and parallel execution.",
          achievements: ["70% test time reduction", "95% coverage", "CI/CD integration", "Improved maintainability"],
          technologies: ["Selenium", "Python", "Jenkins", "Docker", "Allure"],
        },
        {
          title: "QA Process Standardization",
          period: "2023.03 - 2023.09",
          type: "Process Innovation",
          role: "QA Process Lead",
          team: "5 QA, 2 PM, 3 Dev Team Leaders",
          challenge:
            "Different QA processes across teams lacked consistency and made onboarding new team members difficult.",
          solution:
            "Redesigned QA processes for agile environments and introduced test case management tools. Created step-by-step checklists and templates for standardization.",
          achievements: [
            "40% team efficiency improvement",
            "Documentation completed",
            "Cross-team adoption",
            "Training program operation",
          ],
          technologies: ["Jira", "TestRail", "Confluence", "Slack"],
        },
        {
          title: "Quality Culture Innovation Initiative",
          period: "2024.01 - Present",
          type: "Process Innovation",
          role: "Quality Culture Lead",
          team: "8 QA Total, 25 Developers Total",
          challenge:
            "Silos between development and QA teams and different perceptions of quality were reducing collaboration efficiency.",
          solution:
            "Planned company-wide quality education program and created test writing guides for developers. Built dashboard visualizing quality metrics to increase transparency.",
          achievements: [
            "Training program launch",
            "Quality metrics dashboard",
            "Enhanced cross-team collaboration",
            "Quality mindset spread",
          ],
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

      futureGoals: [
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

      contact: {
        name: "Goahyun Ko",
        position: "Senior QA Engineer",
        experience: "5 years (2020.01 ~ Present)",
        education: "Bachelor's in Computer Science",
        email: "sophia.ko@email.com",
        phone: "+82 10-1234-5678",
        github: "github.com/sophia-ko",
        linkedin: "linkedin.com/in/sophia-ko",
      },

      finalMessage:
        "I will grow as a QA leader driving quality innovation at your company, contributing to creating products that users love.",
      funFact: "I've prevented more bugs than I've found by implementing preventive QA processes!",
    },
  }

  const currentContent = content[language]

  return `
<div style="font-family: ${language === "ko" ? "'Noto Sans KR'" : "'Inter'"}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; padding: 0; background: white; line-height: 1.5; color: #374151; font-size: 12px;">
    
    <!-- Page 1: Executive Summary -->
    <div class="pdf-page" style="min-height: 800px; padding: 40px 50px; page-break-after: always; position: relative;">
        <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 15px; margin-bottom: 25px;">
            <h1 style="color: #1e40af; font-size: 22px; margin: 0 0 6px 0; font-weight: 700;">${currentContent.title}</h1>
            <p style="color: #6b7280; margin: 0; font-size: 14px;">${currentContent.subtitle}</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-left: 4px solid #3b82f6; padding: 15px; margin: 15px 0; border-radius: 6px;">
            <h2 style="margin-top: 0; border: none; color: #1e40af; font-size: 18px; font-weight: 600;">Executive Summary</h2>
            <p style="margin: 0 0 15px 0; font-weight: 500; line-height: 1.6;">
                ${currentContent.executiveSummary}
            </p>
        </div>
        
        <div style="display: flex; justify-content: space-between; margin: 15px 0; gap: 12px;">
            <div style="text-align: center; flex: 1; padding: 12px; background: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                <span style="font-size: 20px; font-weight: 700; color: #1e40af; display: block;">99.7%</span>
                <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">${language === "ko" ? "프로젝트 성공률" : "Project Success Rate"}</div>
            </div>
            <div style="text-align: center; flex: 1; padding: 12px; background: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                <span style="font-size: 20px; font-weight: 700; color: #1e40af; display: block;">70%</span>
                <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">${language === "ko" ? "테스트 시간 단축" : "Test Time Reduction"}</div>
            </div>
            <div style="text-align: center; flex: 1; padding: 12px; background: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                <span style="font-size: 20px; font-weight: 700; color: #1e40af; display: block;">8${language === "ko" ? "개" : ""}</span>
                <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">${language === "ko" ? "플랫폼 테스트 경험" : "Platform Test Experience"}</div>
            </div>
            <div style="text-align: center; flex: 1; padding: 12px; background: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                <span style="font-size: 20px; font-weight: 700; color: #1e40af; display: block;">15+</span>
                <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">${language === "ko" ? "주요 프로젝트 참여" : "Major Projects"}</div>
            </div>
        </div>
        
        <h2 style="color: #1e40af; font-size: 18px; margin: 20px 0 10px 0; font-weight: 600;">${language === "ko" ? "핵심 강점" : "Core Strengths"}</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
                <h3 style="color: #374151; font-size: 14px; margin: 12px 0 6px 0; font-weight: 600;">${language === "ko" ? "기술적 전문성" : "Technical Expertise"}</h3>
                <ul style="margin: 6px 0; padding-left: 14px; font-size: 11px;">
                    <li>${language === "ko" ? "모바일/웹 크로스 플랫폼 테스트" : "Mobile/Web Cross-platform Testing"}</li>
                    <li>${language === "ko" ? "API 테스트 및 자동화 구축" : "API Testing & Automation"}</li>
                    <li>${language === "ko" ? "성능 최적화 및 보안 검증" : "Performance Optimization & Security"}</li>
                    <li>${language === "ko" ? "CI/CD 파이프라인 통합" : "CI/CD Pipeline Integration"}</li>
                </ul>
            </div>
            <div>
                <h3 style="color: #374151; font-size: 14px; margin: 12px 0 6px 0; font-weight: 600;">${language === "ko" ? "조직 기여" : "Organizational Contribution"}</h3>
                <ul style="margin: 6px 0; padding-left: 14px; font-size: 11px;">
                    <li>${language === "ko" ? "QA 프로세스 표준화 주도" : "QA Process Standardization"}</li>
                    <li>${language === "ko" ? "개발팀과의 효율적 협업" : "Efficient Dev Team Collaboration"}</li>
                    <li>${language === "ko" ? "지속적인 품질 문화 정착" : "Quality Culture Establishment"}</li>
                    <li>${language === "ko" ? "데이터 기반 의사결정 체계" : "Data-Driven Decision Framework"}</li>
                </ul>
            </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 12px; border-radius: 6px; margin-top: 15px; text-align: center;">
            <p style="margin: 0; font-style: italic; color: #1e40af; font-size: 13px;">
                "${currentContent.quote}"
            </p>
        </div>
        
        <div style="position: absolute; bottom: 15px; right: 50px; color: #9ca3af; font-size: 10px; font-weight: 500;">1</div>
    </div>

    <!-- Page 2: Personal Profile -->
    <div class="pdf-page" style="min-height: 800px; padding: 40px 50px; page-break-after: always; position: relative;">
        <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 15px; margin-bottom: 25px;">
            <h1 style="color: #1e40af; font-size: 22px; margin: 0 0 6px 0; font-weight: 700;">${language === "ko" ? "개인 프로필" : "Personal Profile"}</h1>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0;">
            <div style="background: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
                <h3 style="margin-top: 0; color: #374151; font-size: 14px; font-weight: 600;">${language === "ko" ? "기본 정보" : "Basic Information"}</h3>
                <div style="margin: 5px 0; font-size: 11px;"><strong style="display: inline-block; width: 60px; color: #4b5563;">${language === "ko" ? "성명:" : "Name:"}</strong> ${currentContent.contact.name}</div>
                <div style="margin: 5px 0; font-size: 11px;"><strong style="display: inline-block; width: 60px; color: #4b5563;">${language === "ko" ? "직무:" : "Position:"}</strong> ${currentContent.contact.position}</div>
                <div style="margin: 5px 0; font-size: 11px;"><strong style="display: inline-block; width: 60px; color: #4b5563;">${language === "ko" ? "경력:" : "Experience:"}</strong> ${currentContent.contact.experience}</div>
                <div style="margin: 5px 0; font-size: 11px;"><strong style="display: inline-block; width: 60px; color: #4b5563;">${language === "ko" ? "학력:" : "Education:"}</strong> ${currentContent.contact.education}</div>
            </div>
            
            <div style="background: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
                <h3 style="margin-top: 0; color: #374151; font-size: 14px; font-weight: 600;">${language === "ko" ? "연락처" : "Contact"}</h3>
                <div style="margin: 5px 0; font-size: 11px;"><strong style="display: inline-block; width: 60px; color: #4b5563;">${language === "ko" ? "이메일:" : "Email:"}</strong> ${currentContent.contact.email}</div>
                <div style="margin: 5px 0; font-size: 11px;"><strong style="display: inline-block; width: 60px; color: #4b5563;">${language === "ko" ? "전화:" : "Phone:"}</strong> ${currentContent.contact.phone}</div>
                <div style="margin: 5px 0; font-size: 11px;"><strong style="display: inline-block; width: 60px; color: #4b5563;">GitHub:</strong> ${currentContent.contact.github}</div>
                <div style="margin: 5px 0; font-size: 11px;"><strong style="display: inline-block; width: 60px; color: #4b5563;">LinkedIn:</strong> ${currentContent.contact.linkedin}</div>
            </div>
        </div>
        
        <h2 style="color: #1e40af; font-size: 18px; margin: 20px 0 10px 0; font-weight: 600;">${language === "ko" ? "개인 인터뷰" : "Personal Interview"}</h2>
        
        ${currentContent.personalQA
          .map(
            (qa, index) => `
        <div style="background: #f8fafc; border-left: 3px solid ${index % 2 === 0 ? "#3b82f6" : "#10b981"}; padding: 12px; margin: 12px 0; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #374151; font-size: 14px; font-weight: 600;">Q. ${qa.question}</h3>
            <p style="margin: 0; font-size: 11px; line-height: 1.5;">${qa.answer}</p>
        </div>
        `,
          )
          .join("")}
        
        <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 12px; border-radius: 6px; margin-top: 15px; text-align: center; border: 1px solid #bbf7d0;">
            <h3 style="color: #166534; margin: 0 0 6px 0; font-size: 14px;">🎉 ${language === "ko" ? "재미있는 사실" : "Fun Fact"}</h3>
            <p style="margin: 0; font-size: 11px; color: #166534;">
                ${currentContent.funFact}
            </p>
        </div>
        
        <div style="position: absolute; bottom: 15px; right: 50px; color: #9ca3af; font-size: 10px; font-weight: 500;">2</div>
    </div>

    <!-- Page 3: Technical Expertise -->
    <div class="pdf-page" style="min-height: 800px; padding: 40px 50px; page-break-after: always; position: relative;">
        <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 15px; margin-bottom: 25px;">
            <h1 style="color: #1e40af; font-size: 22px; margin: 0 0 6px 0; font-weight: 700;">${language === "ko" ? "기술적 전문성" : "Technical Expertise"}</h1>
        </div>
        
        ${currentContent.detailedSkills
          .map(
            (category) => `
        <h2 style="color: #1e40af; font-size: 16px; margin: 18px 0 8px 0; font-weight: 600;">${category.category}</h2>
        ${category.items
          .map(
            (skill) => `
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; margin: 8px 0;">
            <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 6px;">
                <h3 style="color: #374151; font-size: 14px; font-weight: 600; margin: 0; flex: 1;">${skill.name}</h3>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="color: #fbbf24; font-size: 12px;">${"★".repeat(skill.level)}${"☆".repeat(5 - skill.level)}</span>
                    <span style="background: #e0e7ff; color: #3730a3; padding: 2px 6px; border-radius: 3px; font-size: 10px;">${skill.years}</span>
                </div>
            </div>
            <p style="margin: 6px 0; font-size: 11px; line-height: 1.4; color: #6b7280;">${skill.details}</p>
            <div style="margin-top: 6px;">
                <strong style="font-size: 11px; color: #374151;">${language === "ko" ? "도구:" : "Tools:"}</strong>
                ${skill.tools.map((tool) => `<span style="display: inline-block; background: #ddd6fe; color: #5b21b6; padding: 1px 4px; border-radius: 2px; margin: 0 2px 2px 0; font-size: 10px;">${tool}</span>`).join("")}
            </div>
            <div style="margin-top: 5px;">
                <strong style="font-size: 11px; color: #374151;">${language === "ko" ? "프로젝트:" : "Projects:"}</strong>
                <span style="font-size: 11px; color: #6b7280;">${skill.projects.join(", ")}</span>
            </div>
        </div>
        `,
          )
          .join("")}
        `,
          )
          .join("")}
        
        <div style="position: absolute; bottom: 15px; right: 50px; color: #9ca3af; font-size: 10px; font-weight: 500;">3</div>
    </div>

    <!-- Page 4-5: Project Portfolio (QA Expertise) -->
    <div class="pdf-page" style="min-height: 800px; padding: 40px 50px; page-break-after: always; position: relative;">
        <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 15px; margin-bottom: 25px;">
            <h1 style="color: #1e40af; font-size: 22px; margin: 0 0 6px 0; font-weight: 700;">${language === "ko" ? "프로젝트 포트폴리오 - QA 전문성" : "Project Portfolio - QA Expertise"}</h1>
        </div>
        
        ${currentContent.allProjects
          .filter((p) => p.type.includes("QA") || p.type.includes("Expertise"))
          .map(
            (project) => `
        <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin: 12px 0; background: #fafbfc;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; padding-bottom: 6px; border-bottom: 1px solid #e5e7eb;">
                <h3 style="color: #1e40af; font-size: 15px; font-weight: 600; margin: 0;">${project.title}</h3>
                <span style="color: #6b7280; font-size: 11px; background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">${project.period}</span>
            </div>
            
            <div style="margin: 10px 0; font-size: 11px; line-height: 1.3;">
                <div style="margin-bottom: 5px;"><strong>${language === "ko" ? "역할:" : "Role:"}</strong> ${project.role} (${project.team})</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin: 10px 0;">
                <div>
                    <h4 style="font-size: 11px; font-weight: 600; color: #dc2626; margin: 0 0 3px 0;">${language === "ko" ? "도전과제" : "Challenge"}</h4>
                    <p style="margin: 0; font-size: 9px; line-height: 1.2; color: #6b7280;">${project.challenge}</p>
                </div>
                <div>
                    <h4 style="font-size: 11px; font-weight: 600; color: #2563eb; margin: 0 0 3px 0;">${language === "ko" ? "해결방안" : "Solution"}</h4>
                    <p style="margin: 0; font-size: 9px; line-height: 1.2; color: #6b7280;">${project.solution}</p>
                </div>
                <div>
                    <h4 style="font-size: 11px; font-weight: 600; color: #059669; margin: 0 0 3px 0;">${language === "ko" ? "핵심 성과" : "Key Results"}</h4>
                    <ul style="margin: 0; padding-left: 10px; font-size: 9px; color: #047857;">
                        ${project.achievements.map((achievement) => `<li style="margin: 1px 0;">${achievement}</li>`).join("")}
                    </ul>
                </div>
            </div>
            
            <div style="margin-top: 8px; font-size: 10px; color: #6b7280;">
                <strong>${language === "ko" ? "사용 기술:" : "Technologies:"}</strong>
                ${project.technologies.map((tech) => `<span style="display: inline-block; background: #e0e7ff; color: #3730a3; padding: 1px 4px; border-radius: 2px; margin: 0 3px 3px 0; font-size: 9px;">${tech}</span>`).join("")}
            </div>
        </div>
        `,
          )
          .join("")}
        
        <div style="position: absolute; bottom: 15px; right: 50px; color: #9ca3af; font-size: 10px; font-weight: 500;">4</div>
    </div>

    <!-- Page 5: Process Innovation Projects -->
    <div class="pdf-page" style="min-height: 800px; padding: 40px 50px; page-break-after: always; position: relative;">
        <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 15px; margin-bottom: 25px;">
            <h1 style="color: #1e40af; font-size: 22px; margin: 0 0 6px 0; font-weight: 700;">${language === "ko" ? "프로젝트 포트폴리오 - 프로세스 혁신" : "Project Portfolio - Process Innovation"}</h1>
        </div>
        
        ${currentContent.allProjects
          .filter((p) => p.type.includes("Process") || p.type.includes("Innovation"))
          .map(
            (project) => `
        <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin: 12px 0; background: #fafbfc;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; padding-bottom: 6px; border-bottom: 1px solid #e5e7eb;">
                <h3 style="color: #1e40af; font-size: 15px; font-weight: 600; margin: 0;">${project.title}</h3>
                <span style="color: #6b7280; font-size: 11px; background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">${project.period}</span>
            </div>
            
            <div style="margin: 10px 0; font-size: 11px; line-height: 1.3;">
                <div style="margin-bottom: 5px;"><strong>${language === "ko" ? "역할:" : "Role:"}</strong> ${project.role} (${project.team})</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin: 10px 0;">
                <div>
                    <h4 style="font-size: 11px; font-weight: 600; color: #dc2626; margin: 0 0 3px 0;">${language === "ko" ? "도전과제" : "Challenge"}</h4>
                    <p style="margin: 0; font-size: 9px; line-height: 1.2; color: #6b7280;">${project.challenge}</p>
                </div>
                <div>
                    <h4 style="font-size: 11px; font-weight: 600; color: #2563eb; margin: 0 0 3px 0;">${language === "ko" ? "해결방안" : "Solution"}</h4>
                    <p style="margin: 0; font-size: 9px; line-height: 1.2; color: #6b7280;">${project.solution}</p>
                </div>
                <div>
                    <h4 style="font-size: 11px; font-weight: 600; color: #059669; margin: 0 0 3px 0;">${language === "ko" ? "핵심 성과" : "Key Results"}</h4>
                    <ul style="margin: 0; padding-left: 10px; font-size: 9px; color: #047857;">
                        ${project.achievements.map((achievement) => `<li style="margin: 1px 0;">${achievement}</li>`).join("")}
                    </ul>
                </div>
            </div>
            
            <div style="margin-top: 8px; font-size: 10px; color: #6b7280;">
                <strong>${language === "ko" ? "사용 기술:" : "Technologies:"}</strong>
                ${project.technologies.map((tech) => `<span style="display: inline-block; background: #e0e7ff; color: #3730a3; padding: 1px 4px; border-radius: 2px; margin: 0 3px 3px 0; font-size: 9px;">${tech}</span>`).join("")}
            </div>
        </div>
        `,
          )
          .join("")}
        
        <div style="position: absolute; bottom: 15px; right: 50px; color: #9ca3af; font-size: 10px; font-weight: 500;">5</div>
    </div>

    <!-- Page 6: Achievements & Recognition -->
    <div class="pdf-page" style="min-height: 800px; padding: 40px 50px; page-break-after: always; position: relative;">
        <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 15px; margin-bottom: 25px;">
            <h1 style="color: #1e40af; font-size: 22px; margin: 0 0 6px 0; font-weight: 700;">${language === "ko" ? "성과 및 인정" : "Achievements & Recognition"}</h1>
        </div>
        
        <h2 style="color: #1e40af; font-size: 18px; margin: 20px 0 10px 0; font-weight: 600;">${language === "ko" ? "핵심 지표" : "Key Metrics"}</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 15px 0;">
            ${currentContent.achievements.metrics
              .map(
                (metric) => `
            <div style="text-align: center; padding: 18px; background: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                <div style="font-size: 24px; font-weight: 700; color: #1e40af; margin-bottom: 6px;">${metric.value}</div>
                <div style="font-weight: 600; color: #374151; margin-bottom: 5px; font-size: 14px;">${metric.label}</div>
                <div style="font-size: 10px; color: #6b7280; line-height: 1.3;">${metric.description}</div>
            </div>
            `,
              )
              .join("")}
        </div>
        
        <h2 style="color: #1e40af; font-size: 18px; margin: 20px 0 10px 0; font-weight: 600;">${language === "ko" ? "자격증" : "Certifications"}</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 15px 0;">
            ${currentContent.achievements.certifications
              .map(
                (cert) => `
            <div style="background: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
                <h3 style="color: #374151; font-size: 14px; font-weight: 600; margin: 0 0 6px 0;">${cert.name}</h3>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 11px; color: #6b7280;">${cert.issuer}</span>
                    <span style="font-size: 11px; color: #1e40af; font-weight: 600;">${cert.year}</span>
                </div>
            </div>
            `,
              )
              .join("")}
        </div>
        
        <h2 style="color: #1e40af; font-size: 18px; margin: 20px 0 10px 0; font-weight: 600;">${language === "ko" ? "수상 경력" : "Awards & Recognition"}</h2>
        <div style="space-y: 8px;">
            ${currentContent.achievements.awards
              .map(
                (award) => `
            <div style="background: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3 style="color: #374151; font-size: 14px; font-weight: 600; margin: 0 0 4px 0;">${award.title}</h3>
                        <p style="color: #6b7280; font-size: 11px; margin: 0;">${award.organization}</p>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 20px; font-weight: 700; color: #f59e0b;">${award.year}</div>
                    </div>
                </div>
            </div>
            `,
              )
              .join("")}
        </div>
        
        <div style="position: absolute; bottom: 15px; right: 50px; color: #9ca3af; font-size: 10px; font-weight: 500;">6</div>
    </div>

    <!-- Page 7: Philosophy & Approach -->
    <div class="pdf-page" style="min-height: 800px; padding: 40px 50px; page-break-after: always; position: relative;">
        <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 15px; margin-bottom: 25px;">
            <h1 style="color: #1e40af; font-size: 22px; margin: 0 0 6px 0; font-weight: 700;">${language === "ko" ? "철학 및 접근 방식" : "Philosophy & Approach"}</h1>
        </div>
        
        <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 18px; border-radius: 8px; text-align: center; margin-bottom: 25px; border: 1px solid #bae6fd;">
            <blockquote style="font-size: 16px; font-style: italic; color: #1e40af; margin: 0 0 8px 0;">
                "${currentContent.quote}"
            </blockquote>
            <cite style="color: #6b7280; font-size: 13px;">- ${currentContent.contact.name}</cite>
        </div>
        
        <h2 style="color: #1e40af; font-size: 18px; margin: 20px 0 10px 0; font-weight: 600;">${language === "ko" ? "핵심 접근 방식" : "Core Approach"}</h2>
        
        ${currentContent.approach
          .map(
            (item, index) => `
        <div style="background: #f8fafc; border-left: 4px solid ${index === 0 ? "#3b82f6" : index === 1 ? "#10b981" : index === 2 ? "#f59e0b" : "#8b5cf6"}; padding: 15px; margin: 12px 0; border-radius: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                <h3 style="color: #374151; font-size: 15px; font-weight: 600; margin: 0;">${item.title}</h3>
                <span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 600;">${item.impact}</span>
            </div>
            <p style="color: #6b7280; font-size: 12px; margin: 6px 0; font-weight: 500;">${item.description}</p>
            <p style="color: #374151; font-size: 11px; margin: 0; line-height: 1.4;">${item.details}</p>
        </div>
        `,
          )
          .join("")}
        
        <div style="position: absolute; bottom: 15px; right: 50px; color: #9ca3af; font-size: 10px; font-weight: 500;">7</div>
    </div>

    <!-- Page 8: Future Vision & Goals -->
    <div class="pdf-page" style="min-height: 800px; padding: 40px 50px; position: relative;">
        <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 15px; margin-bottom: 25px;">
            <h1 style="color: #1e40af; font-size: 22px; margin: 0 0 6px 0; font-weight: 700;">${language === "ko" ? "미래 비전 및 목표" : "Future Vision & Goals"}</h1>
        </div>
        
        <h2 style="color: #1e40af; font-size: 18px; margin: 20px 0 10px 0; font-weight: 600;">${language === "ko" ? "성장 로드맵" : "Growth Roadmap"}</h2>
        
        ${currentContent.futureGoals
          .map(
            (goal, index) => `
        <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 15px; margin: 12px 0; border-radius: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                <h3 style="color: #1e40af; font-size: 15px; font-weight: 600; margin: 0;">${goal.title}</h3>
                <span style="background: #1e40af; color: white; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600;">${goal.timeline}</span>
            </div>
            <p style="color: #374151; font-size: 12px; margin: 6px 0; line-height: 1.4;">${goal.description}</p>
            
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 12px; margin-top: 10px;">
                <div>
                    <h4 style="color: #374151; font-size: 12px; font-weight: 600; margin: 0 0 5px 0;">${language === "ko" ? "핵심 액션" : "Key Actions"}</h4>
                    <ul style="margin: 0; padding-left: 14px; font-size: 11px; color: #6b7280;">
                        ${goal.keyActions.map((action) => `<li style="margin: 2px 0; line-height: 1.3;">${action}</li>`).join("")}
                    </ul>
                </div>
                <div>
                    <h4 style="color: #374151; font-size: 12px; font-weight: 600; margin: 0 0 5px 0;">${language === "ko" ? "예상 임팩트" : "Expected Impact"}</h4>
                    <div style="background: #dcfce7; border: 1px solid #bbf7d0; padding: 6px; border-radius: 4px;">
                        <p style="margin: 0; font-size: 11px; color: #166534; font-weight: 600;">${goal.expectedImpact}</p>
                    </div>
                </div>
            </div>
        </div>
        `,
          )
          .join("")}
        
        <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 18px; border-radius: 8px; text-align: center; margin-top: 25px; border: 1px solid #bae6fd;">
            <h3 style="color: #1e40af; margin: 0 0 8px 0; font-size: 15px;">${language === "ko" ? "최종 메시지" : "Final Message"}</h3>
            <p style="margin: 0; font-weight: 500; font-size: 13px; color: #1e40af; line-height: 1.5;">
                "${currentContent.finalMessage}"
            </p>
        </div>
        
        <div style="position: absolute; bottom: 15px; right: 50px; color: #9ca3af; font-size: 10px; font-weight: 500;">8</div>
    </div>
</div>
  `
}
