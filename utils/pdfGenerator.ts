import { generatePDFTemplate } from "./pdfTemplate"

interface PDFContent {
  language: "ko" | "en"
}

export const generatePortfolioPDF = async ({ language }: PDFContent) => {
  try {
    // html2pdf 라이브러리 동적 로드
    const html2pdf = await import("html2pdf.js")

    // HTML 템플릿 생성
    const htmlContent = generatePDFTemplate(language)

    // 임시 div 생성
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = htmlContent
    tempDiv.style.position = "absolute"
    tempDiv.style.left = "-9999px"
    tempDiv.style.top = "-9999px"
    document.body.appendChild(tempDiv)

    // PDF 옵션 설정
    const options = {
      margin: [8, 8, 8, 8], // 여백 줄임
      filename: language === "ko" ? "고아현_QA엔지니어_포트폴리오.pdf" : "Goahyun_Ko_QA_Engineer_Portfolio.pdf",
      image: { type: "jpeg", quality: 0.95 }, // 품질 약간 낮춤
      html2canvas: {
        scale: 1.8, // 스케일 줄임
        useCORS: true,
        letterRendering: true,
        allowTaint: false,
        height: 800, // 페이지 높이 명시
        width: 600, // 페이지 너비 명시
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true,
      },
      pagebreak: {
        mode: ["avoid-all", "css", "legacy"],
        before: ".pdf-page", // 페이지 구분 명확히
      },
    }

    // PDF 생성 및 다운로드
    await html2pdf.default().set(options).from(tempDiv).save()

    // 임시 div 제거
    document.body.removeChild(tempDiv)
  } catch (error) {
    console.error("PDF 생성 오류:", error)

    // 대안: 브라우저 프린트 기능 사용
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      const htmlContent = generatePDFTemplate(language)
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${language === "ko" ? "고아현 QA 포트폴리오" : "Goahyun Ko QA Portfolio"}</title>
          <style>
            @media print {
              body { margin: 0; }
              .pdf-page { page-break-after: always; }
              .pdf-page:last-child { page-break-after: avoid; }
            }
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.focus()

      setTimeout(() => {
        printWindow.print()
      }, 1000)
    }
  }
}
