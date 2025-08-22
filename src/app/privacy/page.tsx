import { Container } from "@/components/common/Container"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <div className="py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              개인정보처리방침
            </h1>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  최종 업데이트: 2024년 1월 1일
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. 개인정보의 처리 목적
                  </h2>
                  <p className="text-gray-700 mb-4">
                    클리닉브릿지는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 
                    다음의 목적 이외의 용도로는 이용하지 않습니다.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>서비스 제공 및 계정 관리</li>
                    <li>고객 상담 및 문의 응대</li>
                    <li>마케팅 및 광고 활용</li>
                    <li>서비스 개선 및 신규 서비스 개발</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. 수집하는 개인정보 항목
                  </h2>
                  <p className="text-gray-700 mb-4">
                    서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>필수항목: 이름, 연락처, 이메일 주소</li>
                    <li>선택항목: 병원명, 문의내용</li>
                    <li>자동수집항목: IP주소, 쿠키, 서비스 이용기록</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. 개인정보의 보유 및 이용기간
                  </h2>
                  <p className="text-gray-700 mb-4">
                    개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성된 후에는 
                    해당 정보를 지체 없이 파기합니다.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>서비스 이용기간 동안 보유</li>
                    <li>관련 법령에 따른 보존기간이 있는 경우 해당 기간 동안 보존</li>
                    <li>고객 요청 시 즉시 삭제</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. 개인정보의 제3자 제공
                  </h2>
                  <p className="text-gray-700 mb-4">
                    클리닉브릿지는 원칙적으로 이용자의 개인정보를 제1조(개인정보의 처리 목적)에서 
                    명시한 범위 내에서만 처리하며, 이용자의 사전 동의 없이는 본래의 범위를 초과하여 
                    처리하거나 제3자에게 제공하지 않습니다.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. 개인정보의 파기
                  </h2>
                  <p className="text-gray-700 mb-4">
                    개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 
                    지체없이 해당 개인정보를 파기합니다.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. 이용자 및 법정대리인의 권리와 그 행사방법
                  </h2>
                  <p className="text-gray-700 mb-4">
                    이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>개인정보 열람요구</li>
                    <li>오류 등이 있을 경우 정정 요구</li>
                    <li>삭제요구</li>
                    <li>처리정지 요구</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. 개인정보 보호책임자
                  </h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>개인정보 보호책임자</strong>
                    </p>
                    <p className="text-gray-700 mb-1">성명: 김OO</p>
                    <p className="text-gray-700 mb-1">직책: 대표</p>
                    <p className="text-gray-700 mb-1">연락처: 02-1234-5678</p>
                    <p className="text-gray-700">이메일: privacy@clinicbridge.co.kr</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. 개인정보처리방침의 변경
                  </h2>
                  <p className="text-gray-700">
                    이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 
                    추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 
                    고지할 것입니다.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
