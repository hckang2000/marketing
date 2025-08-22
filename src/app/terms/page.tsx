import { Container } from "@/components/common/Container"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <div className="py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              이용약관
            </h1>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  최종 업데이트: 2024년 1월 1일
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    제1조 (목적)
                  </h2>
                  <p className="text-gray-700">
                    이 약관은 클리닉브릿지(이하 &ldquo;회사&rdquo;)가 제공하는 일본 대상 병원 마케팅 서비스의 
                    이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 
                    규정함을 목적으로 합니다.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    제2조 (정의)
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 font-medium mb-2">1. &ldquo;서비스&rdquo;란</p>
                      <p className="text-gray-700">
                        회사가 제공하는 일본 대상 병원 마케팅 서비스를 의미합니다.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium mb-2">2. &ldquo;이용자&rdquo;란</p>
                      <p className="text-gray-700">
                        이 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 
                        고객을 의미합니다.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    제3조 (약관의 효력 및 변경)
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 
                      효력이 발생합니다.
                    </p>
                    <p className="text-gray-700">
                      2. 회사는 필요한 경우 관련법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있습니다.
                    </p>
                    <p className="text-gray-700">
                      3. 약관이 변경되는 경우 회사는 변경사항을 시행일자 7일 전부터 공지사항을 통해 
                      공지합니다.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    제4조 (서비스의 제공)
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      1. 회사는 다음과 같은 서비스를 제공합니다:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>일본 대상 병원 마케팅 컨설팅</li>
                      <li>인플루언서 마케팅 서비스</li>
                      <li>SNS 마케팅 전략 수립</li>
                      <li>해외 환자 유치 지원</li>
                    </ul>
                    <p className="text-gray-700">
                      2. 서비스의 구체적인 내용은 회사가 제공하는 서비스 내용에 따라 달라질 수 있습니다.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    제5조 (서비스 이용)
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      1. 이용자는 서비스 이용을 위해 회사가 요구하는 정보를 정확히 제공해야 합니다.
                    </p>
                    <p className="text-gray-700">
                      2. 이용자는 서비스 이용 중 회사의 지적재산권을 침해하지 않아야 합니다.
                    </p>
                    <p className="text-gray-700">
                      3. 이용자는 서비스를 통해 얻은 정보를 회사의 사전 동의 없이 복제, 전송, 출판, 
                      배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    제6조 (회사의 의무)
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      1. 회사는 관련법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 
                      이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하기 위하여 
                      노력합니다.
                    </p>
                    <p className="text-gray-700">
                      2. 회사는 이용자가 안전하게 서비스를 이용할 수 있도록 개인정보보호를 위한 
                      보안 시스템을 구축하고 개인정보처리방침을 공시하고 준수합니다.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    제7조 (이용자의 의무)
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">이용자는 다음 행위를 하여서는 안 됩니다:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>신청 또는 변경 시 허위내용의 등록</li>
                      <li>타인의 정보 도용</li>
                      <li>회사가 게시한 정보의 변경</li>
                      <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                      <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                      <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    제8조 (책임제한)
                  </h2>
                  <p className="text-gray-700">
                    회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 
                    경우에는 서비스 제공에 관한 책임이 면제됩니다.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    제9조 (분쟁해결)
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      1. 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 
                      보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.
                    </p>
                    <p className="text-gray-700">
                      2. 회사와 이용자 간에 발생한 전자상거래 분쟁에 관하여는 소비자분쟁조정위원회의 
                      조정에 따를 수 있습니다.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    제10조 (재판권 및 준거법)
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      1. 회사와 이용자 간에 발생한 분쟁에 관하여는 대한민국 법을 적용합니다.
                    </p>
                    <p className="text-gray-700">
                      2. 회사와 이용자 간에 제기된 소송에는 대한민국 법원을 관할법원으로 합니다.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
