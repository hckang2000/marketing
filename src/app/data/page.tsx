"use client"

import { motion } from "framer-motion"
import { ContentGate } from "@/components/columns/ContentGate"

export default function DataPage() {
  return (
    <div className="data-page">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="report-header"
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          color: 'white',
          padding: '60px 0',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
          marginBottom: '40px',
          width: '100%',
          position: 'relative'
        }}
      >
        <div className="container">
          {/* Mobile Title */}
          <h1 className="text-3xl font-bold text-white mb-4 md:mb-6 leading-tight lg:hidden" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            한국 미용 클리닉<br/>
            일본인 고객<br/>
            심층 분석 보고서
          </h1>
          
          {/* Desktop Title */}
          <h1 className="hidden lg:block text-3xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            한국 미용 클리닉<br/>
            일본인 고객 심층 분석 보고서
          </h1>
          
          {/* Mobile Description */}
          <p className="text-base text-white mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed lg:hidden" style={{ opacity: '0.95' }}>
            일본인 환자의 5단계 고객 여정을<br/>
            기반으로 한 마케팅 전략 가이드
          </p>
          
          {/* Desktop Description */}
          <p className="hidden lg:block text-base text-white mb-6 max-w-3xl mx-auto leading-relaxed" style={{ opacity: '0.95' }}>
            일본인 환자의 5단계 고객 여정을 기반으로 한 마케팅 전략 가이드
          </p>
        </div>
      </motion.header>

      <div className="container">
        {/* Meta Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="meta-info"
        ><br/>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">보고서 개요</h2>
          <div className="meta-grid">
            <div className="meta-item">
              <strong>발간일</strong><br />
              2025년 8월 25일
            </div>
            <div className="meta-item">
              <strong>분석 대상</strong><br />
              일본인 피부과 이용자
            </div>
            <div className="meta-item">
              <strong>분석 방법</strong><br />
              설문조사 데이터 분석
            </div>
            <div className="meta-item">
              <strong>보고서 유형</strong><br />
              마케팅 전략 리포트
            </div>
          </div>
        </motion.section>

        {/* 핵심 요약 */}
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="section"
        ><br/>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">핵심 요약</h2>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">28%</div>
              <div className="stat-label">X(트위터) 인지도</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">66%</div>
              <div className="stat-label">리뷰·증례 중시</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">62%</div>
              <div className="stat-label">시술 메인 목적</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">74%</div>
              <div className="stat-label">친구 추천 의향</div>
            </div>
          </div>

          <div className="key-point">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">핵심 인사이트</h4>
            <p className="text-base text-gray-700 leading-relaxed"><strong>일본인 고객은 관광보조가 아닌 시술 중심으로 한국을 방문</strong>하며, 
            <span className="highlight">X(트위터)</span>를 통한 정보 획득과 
            <span className="highlight">리뷰·증례</span> 신뢰도를 가장 중요하게 생각합니다. 
            <span className="highlight">LINE 메신저</span>를 통한 예약을 선호하며, 높은 재방문 및 추천 의향을 보입니다.</p>
          </div>
        </motion.section>

        {/* 고객 여정 분석 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="section"
        ><br/>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">일본인 환자 5단계 고객 여정 분석</h2>

          <div className="journey-stage stage-1">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">인지도 확보 단계 (Awareness)</h4>
            <p className="text-base text-gray-700 mb-4"><strong>Q. 일본 환자들은 한국 피부과를 어떻게 처음 알게 될까?</strong></p>

            <ul className="text-base text-gray-700 mb-6">
              <li><strong>X(트위터) 28%</strong> &gt; 인스타그램 15% &gt; 지인추천 13% &gt; 구글·블로그 10% 미만</li>
              <li>강남언니 등 예약앱으로 처음 알게 됐다는 경우는 4%뿐</li>
            </ul>

            <div className="insight-box">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">인사이트</h5>
              <ul className="text-base text-gray-700">
                <li>일본에서는 X 해시태그 기반 후기 공유가 활발 → 광고보다 타인 경험 노출 효과가 큼</li>
              </ul>
            </div>

            <div className="strategy-box">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">전략 제안</h5>
              <ul className="text-base text-gray-700">
                <li>일본어 X 전용 계정 운영 → 전후 사진 + 시술 후기를 카드뉴스 형태로 스레드 업로드</li>
                <li>해시태그 최적화: #韓国美容クリニック #韓国美容皮膚科 #韓国美容整形</li>
              </ul>
            </div>
          </div>

          <div className="journey-stage stage-2">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">고려 단계 (Consideration)</h4>
            <p className="text-base text-gray-700 mb-4"><strong>Q. 병원 선택 시 가장 중요하게 생각하는 요소는?</strong></p>

            <ul className="text-base text-gray-700 mb-6">
              <li><strong>리뷰·증례(66%)</strong> &gt; 가격(62%) &gt; 접근성(45%) &gt; 일본어 대응(13%)</li>
              <li>장비·기술력 언급은 9% 수준으로 낮음</li>
            </ul>

            <div className="insight-box">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">인사이트</h5>
              <ul className="text-base text-gray-700">
                <li>가격 경쟁보다 증례 신뢰도 확보가 중요</li>
                <li>일본어 사례집 + 환자 후기 영상 노출 필요</li>
                <li>의사 실력 강조보다는 <strong>&ldquo;이 시술을 받은 고객의 전후 비교&rdquo;</strong>가 전환율에 결정적</li>
              </ul>
            </div>

            <div className="strategy-box">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">전략 제안</h5>
              <ul className="text-base text-gray-700">
                <li>일본어 증례 페이지 신설 → 시술명 + 효과 + 소요 시간 + 부작용 가능성 명시</li>
                <li>환자 후기 카드뉴스, 숏폼 영상 콘텐츠 강화</li>
                <li>병원보다는 환자 경험 중심 스토리텔링 필요</li>
              </ul>
            </div>
          </div>

          <ContentGate articleSlug="data">
            <div className="journey-stage stage-3">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">예약 및 방문 경험 단계 (Conversion & Experience)</h4>
              <p className="text-base text-gray-700 mb-4"><strong>Q. 불편했던 점은 무엇일까?</strong></p>

              <ul className="text-base text-gray-700 mb-6">
                <li><strong>예약·대기 문제 17%</strong> &gt; 언어 장벽 9% &gt; 결제·환전 4% &gt; 사후케어 4%</li>
                <li>예약앱보다는 DM, 메일, 전화 등 병원 개별 예약 비중 높음</li>
              </ul>

              <div className="insight-box">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">인사이트</h5>
                <ul className="text-base text-gray-700">
                  <li>언어 지원보다 예약 확정 프로세스의 불투명성이 불만의 핵심</li>
                  <li>&ldquo;당일 몇 시에 시술 시작, 소요 시간, 세안·메이크업 가능 여부&rdquo; 같은 디테일 선호</li>
                </ul>
              </div>

              <div className="strategy-box">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">전략 제안</h5>
                <ul className="text-base text-gray-700">
                  <li>일본어 카카오톡 채널 or LINE 자동 알림 구축</li>
                  <li><strong>&ldquo;예약 확정 → 시술 루틴 → 회복 가이드&rdquo;</strong>까지 한 번에 전달하는 체크리스트 발송</li>
                  <li>지불 수단 다양화(엔화 결제 가이드 + 면세 안내 + 환율 계산기 제공)</li>
                </ul>
              </div>
            </div>

            <div className="journey-stage stage-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">체류 목적과 병원 수요 (Needs)</h4>
              <p className="text-base text-gray-700 mb-4"><strong>Q. 일본인들은 왜 한국에서 시술을 선택할까?</strong></p>

              <ul className="text-base text-gray-700 mb-6">
                <li>한국 여행 겸 시술(38%) &lt; <strong>시술 자체가 메인 목적(62%)</strong></li>
                <li>가격보다 단기간 집중 관리 가능성이 주요 이유 중 하나</li>
              </ul>

              <div className="insight-box">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">인사이트</h5>
                <ul className="text-base text-gray-700">
                  <li>일본인 상당수가 &ldquo;관광 보조&rdquo;가 아니라 시술 중심으로 한국을 방문</li>
                  <li>회복 + 시술 패키지 일정 제안 시 만족도 극대화 가능</li>
                </ul>
              </div>

              <div className="strategy-box">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">전략 제안</h5>
                <ul className="text-base text-gray-700">
                  <li>오전 시술 → 오후 쇼핑 코스 → 호텔 회복 루틴 등 1일 플랜 콘텐츠 제작</li>
                  <li>&ldquo;2박3일 피부 리프레시 패키지&rdquo; → 항공권 시간대와 회복기간을 반영한 제안 필요</li>
                </ul>
              </div>
            </div>

            <div className="journey-stage stage-5">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">재방문 & 추천 단계 (Retention & Advocacy)</h4>
              <p className="text-base text-gray-700 mb-4"><strong>Q. 일본 환자들의 재방문 의향은?</strong></p>

              <ul className="text-base text-gray-700 mb-6">
                <li><strong>친구 추천 의향 74%, 재방문 의향 58%</strong></li>
                <li>단순 체험형보다 장기 관리 목적의 수요가 많음</li>
              </ul>

              <div className="insight-box">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">인사이트</h5>
                <ul className="text-base text-gray-700">
                  <li>일본 환자 LTV(평생가치) 높음 → 한 번 온 고객을 붙잡는 전략 필요</li>
                  <li>기존 고객을 통한 바이럴 효과 극대화 가능</li>
                </ul>
              </div>

              <div className="strategy-box">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">전략 제안</h5>
                <ul className="text-base text-gray-700">
                  <li>&ldquo;재방문 시 10% 할인 + 홈케어 제품 제공&rdquo; 리콜 마케팅</li>
                  <li>친구 추천 시 아마존 기프트카드 지급 → 자연스러운 일본 커뮤니티 내 입소문</li>
                </ul>
              </div>
            </div>

            {/* 가격 민감도 & 티어별 상품 전략 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="section"
            ><br/>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">가격 민감도 & 티어별 상품 전략</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Q. 일본인 고객의 지불 금액대는?</h3>

              <div className="key-point">
                <ul className="text-base text-gray-700">
                  <li><strong>엔화 환산 중앙값 약 3만 엔</strong></li>
                  <li>분포: 1만 엔 이하 20%, 3~10만 엔 50%, 15만 엔 이상 15%, 최고 250만 엔</li>
                </ul>
              </div>

              <div className="insight-box">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">인사이트</h5>
                <ul className="text-base text-gray-700">
                  <li>저가 일괄 전략보다 프리미엄·중저가 티어 동시 운영이 유리</li>
                  <li>상위 10% 고가 시술 수요도 놓치지 말아야 함</li>
                </ul>
              </div>

              <table className="tier-table">
                <thead>
                  <tr>
                    <th>티어</th>
                    <th>가격대</th>
                    <th>서비스 내용</th>
                    <th>타겟</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Entry</strong></td>
                    <td>2~3만 엔</td>
                    <td>기본 관리 (피코토닝, 기본 보톡스)</td>
                    <td>첫 방문 고객, 체험형</td>
                  </tr>
                  <tr>
                    <td><strong>Middle</strong></td>
                    <td>5~10만 엔</td>
                    <td>리프팅+피부재생 (리쥬란, 실리프팅)</td>
                    <td>재방문 고객, 집중 케어</td>
                  </tr>
                  <tr>
                    <td><strong>Premium</strong></td>
                    <td>15만 엔 이상</td>
                    <td>줄기세포+고주파 복합 (종합 안티에이징)</td>
                    <td>VIP 고객, 장기 관리</td>
                  </tr>
                </tbody>
              </table>
            </motion.section>

            {/* 타겟 페르소나 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="section"
            ><br/>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">타겟 페르소나: &ldquo;뷰티 오타쿠 여행자&rdquo;</h2>

              <div className="persona-card">
                <div className="persona-header">
                  <div className="persona-title">뷰티 오타쿠 여행자</div>
                  <p className="text-base text-gray-700">한국 미용 시술을 위해 적극적으로 여행하는 일본인 여성</p>
                </div>

                <div className="persona-grid">
                  <div className="persona-item">
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">기본 정보</h5>
                    <ul className="text-base text-gray-700">
                      <li><strong>나이:</strong> 20대 후반 ~ 30대 중반</li>
                      <li><strong>직업:</strong> 회사원, 프리랜서</li>
                      <li><strong>소득:</strong> 안정적인 자기투자 가능</li>
                    </ul>
                  </div>

                  <div className="persona-item">
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">라이프스타일</h5>
                    <ul className="text-base text-gray-700">
                      <li>평일 규칙적 근무, 주말 취미 활동</li>
                      <li><strong>&lsquo;미용 여행&rsquo;</strong> 목적으로 한국 방문</li>
                      <li>최신 유행에 민감</li>
                      <li>자기 투자에 적극적</li>
                    </ul>
                  </div>

                  <div className="persona-item">
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">관심사</h5>
                    <ul className="text-base text-gray-700">
                      <li><strong>뷰티:</strong> 한국 코스메틱, 미용 의료</li>
                      <li><strong>여행:</strong> 한국 여행 전문</li>
                      <li><strong>문화:</strong> K-POP, 한국 드라마</li>
                      <li><strong>SNS:</strong> X, 인스타그램 적극 활용</li>
                    </ul>
                  </div>

                  <div className="persona-item">
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">특징</h5>
                    <ul className="text-base text-gray-700">
                      <li>한국 미용 의료의 장점을 이미 인지</li>
                      <li>SNS 정보 → 직접 경험 → 후기 공유</li>
                      <li>&lsquo;즐거운 경험&rsquo;으로 미용을 인식</li>
                      <li>단순 가격보다 품질과 경험 중시</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 결론 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="conclusion"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: 'white',
                padding: '40px',
                borderRadius: '15px',
                textAlign: 'center',
                margin: '40px 0',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
            ><br/>
              <h2 style={{
                fontSize: '2rem',
                marginBottom: '20px',
                border: 'none',
                padding: '0',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontWeight: '700'
              }}>
                결론 및 제언
              </h2>
              <p style={{
                color: 'white',
                fontSize: '1.2rem',
                lineHeight: '1.8',
                maxWidth: '900px',
                margin: '0 auto',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}>
                일본인 고객은 단순한 관광객이 아닌 <strong style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  margin: '0 2px'
                }}>&lsquo;전문 미용 의료 소비자&rsquo;</strong>입니다. 
                가격 경쟁보다는 <strong style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  margin: '0 2px'
                }}>신뢰할 수 있는 증례와 체계적인 고객 경험</strong>을 제공하는 것이 
                장기적인 성공의 핵심입니다. <strong style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  margin: '0 2px'
                }}>X(트위터)와 LINE을 활용한 디지털 마케팅</strong>과 
                <strong style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  margin: '0 2px'
                }}>티어별 맞춤 서비스</strong>를 통해 높은 LTV를 가진 일본인 고객을 확보할 수 있습니다.
              </p>
            </motion.section>
          </ContentGate>
        </motion.section>
      </div>

      <style jsx>{`
        .data-page {
          min-height: 100vh;
          background: #f8fafc;
          font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.7;
          color: #0f172a;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .meta-info {
          background: white;
          padding: 30px;
          margin: 40px 0;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          border-left: 5px solid #3b82f6;
        }

        .meta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .meta-item {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
        }

        .meta-item strong {
          color: #3b82f6;
          font-size: 1.1rem;
        }

        .section {
          background: white;
          margin: 40px 0;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        .journey-stage {
          background: #f8fafc;
          border: 2px solid #3b82f6;
          border-radius: 15px;
          padding: 30px;
          margin: 30px 0;
          position: relative;
        }

        .journey-stage::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 30px;
          background: #3b82f6;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .stage-1::before { content: '1단계'; }
        .stage-2::before { content: '2단계'; }
        .stage-3::before { content: '3단계'; }
        .stage-4::before { content: '4단계'; }
        .stage-5::before { content: '5단계'; }

        .insight-box {
          background: #f0f9ff;
          border-left: 5px solid #3b82f6;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
        }

        .strategy-box {
          background: #fef3c7;
          border-left: 5px solid #f59e0b;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
        }

        .persona-card {
          background: #f0f9ff;
          border: 2px solid #3b82f6;
          border-radius: 15px;
          padding: 30px;
          margin: 30px 0;
        }

        .persona-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .persona-title {
          background: #3b82f6;
          color: white;
          font-size: 1.8rem;
          font-weight: bold;
          padding: 15px 30px;
          border-radius: 25px;
          display: inline-block;
          margin-bottom: 10px;
        }

        .persona-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-top: 25px;
        }

        .persona-item {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .stat-card {
          background: white;
          padding: 25px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-top: 4px solid #3b82f6;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: #3b82f6;
          margin-bottom: 10px;
        }

        .stat-label {
          color: #666;
          font-size: 1.1rem;
        }

        .highlight {
          background: #3b82f6;
          color: white;
          padding: 3px 8px;
          border-radius: 5px;
          font-weight: bold;
        }

        .key-point {
          background: #f0f4ff;
          border-left: 5px solid #3b82f6;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
        }

        .tier-table {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .tier-table th {
          background: #3b82f6;
          color: white;
          padding: 15px;
          text-align: center;
          font-weight: bold;
        }

        .tier-table td {
          background: white;
          padding: 12px 15px;
          text-align: center;
          border-bottom: 1px solid #eee;
        }

        .tier-table tr:hover td {
          background: #f8f9fa;
        }

        ul {
          padding-left: 20px;
        }

        li {
          margin: 8px 0;
          color: #555;
        }

        strong {
          color: #3b82f6;
        }

        @media (max-width: 768px) {
          .section {
            padding: 25px;
            margin: 20px 0;
          }

          .persona-grid, .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
