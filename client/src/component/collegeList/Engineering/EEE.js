//electrical and electronic engineering
//전기전자공학

import React from "react";
import './Engineering.css'

import Header from "../../Header";

const EEE = (obj) => {
  return (
    <>
      <Header />
      <div>
        <form name="research" action="Result" method="POST">
          <h2> 전기전자공학과 졸업점수 계산하기 </h2>
          <h3> 제출하기는 맨 밑에 있습니다 </h3>
          <ul>
            <li>1. 교과 과정 항목</li>

            <li>성적 (학교 졸업 요건은 평점 2.0 이상)</li>
            <li><input type="radio" name="research_Grade" value="300" />4.0 이상</li>
            <li><input type="radio" name="research_Grade" value="250" />3.5 ~ 4.0</li>
            <li><input type="radio" name="research_Grade" value="200" />3.0 ~ 3.5</li>
            <li><input type="radio" name="research_Grade" value="150" />2.5 ~ 3.0</li>
            <li><input type="radio" name="research_Grade" value="100" />2.0 ~ 2.5</li>
            <li><input type="radio" name="research_Grade" value="0" />2.0 이하</li>

            <li>캡스톤 디자인</li>
            <li><input type="radio" name="Capstone" value="300" />A 이상</li>
            <li><input type="radio" name="Capstone" value="200" />B 이상</li>
            <li><input type="radio" name="Capstone" value="100" />C 이하</li>
            <li><input type="radio" name="Capstone" value="0" />미참</li>

            <li>공학인증 학습성과 평가</li>
            <li><input type="checkbox" name="Engineering_Certification" value="200"/>참여 여부</li>

            <li>2. 외국어능력</li>영어 공인시험
            <li>영어 공인시험</li>
            <li>TOEIC</li>
            <li><input type="radio" name="TOEIC" value="600" />550점 이상</li>
            <li><input type="radio" name="TOEIC" value="550" />500 ~ 545점</li>
            <li><input type="radio" name="TOEIC" value="500" />450 ~ 495점</li>
            <li><input type="radio" name="TOEIC" value="450" />400 ~ 445점</li>
            <li><input type="radio" name="TOEIC" value="400" />350 ~ 395점</li>
            <li><input type="radio" name="TOEIC" value="0" />350점 미만 또는 미응시</li>

            <li>TOEIC_Speaking</li>
            <li><input type="radio" name="TOEIC_Speaking" value="600" />100점 이상</li>
            <li><input type="radio" name="TOEIC_Speaking" value="550" />90 ~ 99점</li>
            <li><input type="radio" name="TOEIC_Speaking" value="500" />80 ~ 89점</li>
            <li><input type="radio" name="TOEIC_Speaking" value="450" />70 ~ 79점</li>
            <li><input type="radio" name="TOEIC_Speaking" value="400" />60 ~ 69점</li>
            <li><input type="radio" name="TOEIC_Speaking" value="0" />60점 미만 또는 미응시</li>
            
            <li>TOEFL_iBT</li>
            <li><input type="radio" name="TOEFL_iBT" value="600" />63점 이상</li>
            <li><input type="radio" name="TOEFL_iBT" value="550" />57 ~ 62점</li>
            <li><input type="radio" name="TOEFL_iBT" value="500" />48 ~ 56점</li>
            <li><input type="radio" name="TOEFL_iBT" value="450" />40 ~ 47점</li>
            <li><input type="radio" name="TOEFL_iBT" value="400" />21 ~ 39점</li>
            <li><input type="radio" name="TOEFL_iBT" value="0" />21점 미만 또는 미응시</li>

            <li>TEPS</li>
            <li><input type="radio" name="TEPS" value="600" />450이상</li>
            <li><input type="radio" name="TEPS" value="550" />416 ~ 449점</li>
            <li><input type="radio" name="TEPS" value="500" />380 ~ 415점</li>
            <li><input type="radio" name="TEPS" value="450" />334 ~ 379점</li>
            <li><input type="radio" name="TEPS" value="400" />293 ~ 333점</li>
            <li><input type="radio" name="TEPS" value="0" />293점 미만 또는 미응시</li>
            
            <li>New TEPS</li>
            <li><input type="radio" name="New_TEPS" value="600" />241이상</li>
            <li><input type="radio" name="New_TEPS" value="550" />220 ~ 240점</li>
            <li><input type="radio" name="New_TEPS" value="500" />201 ~ 219점</li>
            <li><input type="radio" name="New_TEPS" value="450" />179 ~ 200점</li>
            <li><input type="radio" name="New_TEPS" value="400" />157 ~ 178점</li>
            <li><input type="radio" name="New_TEPS" value="0" />157점 미만 또는 미응시</li>

            <li>IELTS</li>
            <li><input type="radio" name="IELTS" value="600" />4.5 이상</li>
            <li><input type="radio" name="IELTS" value="550" />4 ~ 4.5미만</li>
            <li><input type="radio" name="IELTS" value="500" />3.5 ~ 4미만</li>
            <li><input type="radio" name="IELTS" value="450" />3 ~ 3.5미만</li>
            <li><input type="radio" name="IELTS" value="400" />2.5 ~ 3미만</li>
            <li><input type="radio" name="IELTS" value="0" />2.5 미만 또는 미응시</li>

            <li>영어 이외의 공인시험</li>
            <li>IELTS</li>
            <li><input type="radio" name="IELTS" value="600" />4.5 이상</li>
            <li><input type="radio" name="IELTS" value="550" />4 ~ 4.5미만</li>
            <li><input type="radio" name="IELTS" value="500" />3.5 ~ 4미만</li>
            <li><input type="radio" name="IELTS" value="450" />3 ~ 3.5미만</li>
            <li><input type="radio" name="IELTS" value="400" />2.5 ~ 3미만</li>
            <li><input type="radio" name="IELTS" value="0" />2.5 미만 또는 미응시</li>
            
            <li>한국어 능력시험(외국인만)</li>
            <li><input type="radio" name="KTEST" value="800" />6급</li>
            <li><input type="radio" name="KTEST" value="700" />5급</li>
            <li><input type="radio" name="KTEST" value="600" />4급</li>
            <li><input type="radio" name="KTEST" value="500" />3급</li>
            <li><input type="radio" name="KTEST" value="0" />미응시</li>

            <li>해외 연수(연수 증빙 자료 필수)</li>
            <li><input type="checkbox" name="overseas_study" value="300" />참여 여부</li>

            <li>3. 취업</li>

            <li>취업 여부</li>
            <li><input type="radio" name="employment" value="600" />전공 분야</li>
            <li><input type="radio" name="employment" value="0" />미취업</li>
            <li><input type="radio" name="employment" value="400" />비전공 분야</li>

            <li>대학원 진학</li>
            <li><input type="radio" name="graduate_school" value="500" />국외</li>
            <li><input type="radio" name="graduate_school" value="300" />국내</li>
            <li><input type="radio" name="graduate_school" value="0" />미진학</li>

            <li>전공 관련 자격증</li>
            <li><input type="checkbox" name="Certificate" value="400" />기사자격증</li>
            <li><input type="checkbox" name="Certificate" value="400" />ocjp</li>
            <li><input type="checkbox" name="Certificate" value="400" />ocp</li>
            <li><input type="checkbox" name="Certificate" value="200" />산업기사자격증</li>
            <li><input type="checkbox" name="Certificate" value="200" />기능사자격증</li>
            <li><input type="checkbox" name="Certificate" value="100" />컴퓨터활용능력</li>
            <li><input type="checkbox" name="Certificate" value="100" />MOS</li>
            <li><input type="checkbox" name="Certificate" value="100" />ITQ</li>

            <li>정보화 자격증</li>
            <li><input type="checkbox" name="Certificate" value="100" />워드프로세서 1급, 워드프로세서</li>
            <li><input type="checkbox" name="Certificate" value="100" />컴퓨터활용능력 1급</li>
            <li><input type="checkbox" name="Certificate" value="100" />MOS MASTER</li>
            <li><input type="checkbox" name="Certificate" value="100" />인터넷정보관리사 전문가</li>
            <li><input type="checkbox" name="Certificate" value="100" />PC활용능력평가시험(PCT) A급</li>
            <li><input type="checkbox" name="Certificate" value="100" />정보기술자격(ITQ) A급</li>
            <li><input type="checkbox" name="Certificate" value="100" />디지털정보활용능력(DIAT) 고급</li>
            <li><input type="checkbox" name="Certificate" value="100" />아이티플러스 Level 4~5</li>

            <li>4. 인성</li>

            <li>취업/창업 관련 정규 교과목 이수</li>
            <li><input type="checkbox" name="subject" value="30" />해외취업역량개발</li>
            <li><input type="checkbox" name="subject" value="30" />국내취업역량개발</li>
            <li><input type="checkbox" name="subject" value="30" />취업전략</li>
            <li><input type="checkbox" name="subject" value="30" />취업과 경제경영(TESAT)</li>
            <li><input type="checkbox" name="subject" value="30" />중소(강소)기업의 이해</li>
            <li><input type="checkbox" name="subject" value="30" />NCS기반 채용준비</li>
            <li><input type="checkbox" name="subject" value="30" />직업탐색과 준비역량</li>
            <li><input type="checkbox" name="subject" value="30" />신문읽기와 경력개발</li>
            <li><input type="checkbox" name="subject" value="30" />비즈니스훈련 BTC(Businessman Training Course)</li>
            <li><input type="checkbox" name="subject" value="30" />현장실무능력1,2,3</li>
            <li><input type="checkbox" name="subject" value="30" />대학생진로지도과정(CDP-C)</li>

            <li>진로/취업 프로그램</li>
            <li><input type="checkbox" name="program" value="20" />취업동아리</li>
            <li><input type="checkbox" name="program" value="20" />NCS기반 즐기면서 진로찾기</li>
            <li><input type="checkbox" name="program" value="20" />NCS기반 즐기면서 취업하기</li>
            <li><input type="checkbox" name="program" value="20" />Hannam Local Career Frontier(HLCF)</li>
            <li><input type="checkbox" name="program" value="20" />고학년 취업캠프</li>
            <li><input type="checkbox" name="program" value="20" />외국인유학생 취업캠프</li>
            <li><input type="checkbox" name="program" value="20" />해외취업동아리</li>
            <li><input type="checkbox" name="program" value="20" />Job 서포터즈</li>
            <li><input type="checkbox" name="program" value="20" />글로벌 해외기업탐방</li>
            <li><input type="checkbox" name="program" value="20" />여대생 항공승무원 양성과정</li>
            <li><input type="checkbox" name="program" value="20" />NCS기반 직무적성검사 캠프</li>
            <li><input type="checkbox" name="program" value="20" />여대생 직무적성검사캠프</li>
            <li><input type="checkbox" name="program" value="20" />일본취업 특별반</li>
            <li><input type="checkbox" name="program" value="20" />데일카네기리더십과정</li>
            <li><input type="checkbox" name="program" value="20" />Hannam Global Career Frontier(HGCF)</li>
            <li><input type="checkbox" name="program" value="20" />외국인 유학생 진로캠프</li>
            <li><input type="checkbox" name="program" value="20" />저학년 진로캠프</li>
            <li><input type="checkbox" name="program" value="20" />진로가 어렵군 힘든걸 모여라</li>
            <li><input type="checkbox" name="program" value="20" />취업 Job Go! 인사팀장 Job Go!</li>
            <li><input type="checkbox" name="program" value="5" />한남커리어네비게이션맵 공모전</li>
            <li><input type="checkbox" name="program" value="5" />해외취업특강</li>
            <li><input type="checkbox" name="program" value="5" />자기소개서 워크숍</li>
            <li><input type="checkbox" name="program" value="5" />취업 멘토링</li>
            <li><input type="checkbox" name="program" value="5" />여대생 멘토특강</li>
            <li><input type="checkbox" name="program" value="5" />여대생 멘토링 프로그램</li>
            <li><input type="checkbox" name="program" value="5" />리쿠르팅 노마드(채용박람회 참가)</li>
            <li><input type="checkbox" name="program" value="5" />진로(NCS) Day</li>
            <li><input type="checkbox" name="program" value="5" />입사서류(직무) Day</li>
            <li><input type="checkbox" name="program" value="5" />면점 Day</li>
            <li><input type="checkbox" name="program" value="5" />해외취업 Day</li>
            
            <li>현장 실습</li>
            <li><input type="radio" name="Field" value="100" />1번</li>
            <li><input type="radio" name="Field" value="200" />2번</li>
            <li><input type="radio" name="Field" value="300" />3번</li>
            <li><input type="radio" name="Field" value="400" />4번</li>

            <li>자기소개서 및 이력서</li>
            <li><input type="checkbox" name="Resume" value="100" />1번이라도 작성했을경우</li>

            <li>인터넷윤리 자격증</li>
            <li><input type="checkbox" name="Internet_Certificate" value="50" />1번이라도 취득했을경우</li>
            
            <li>사회봉사활동 (72시간 초과한분량만 적어주세요)</li>
            <li><input type="text" value="" size="10" /></li>

            <li>상담 실적 (한 횟수만 적어주세요)</li>
            <li><input type="text" value="" size="10" /></li>


            <li>5. 교내 외 작품</li>

            <li>학과학술제 출품</li>
            <li><input type="checkbox" name="Conference" value="300" />참여 여부</li>

            <li>교내 공모전 출품
              <select>
                <option value="100">1회</option>
                <option value="200">2회</option>
                <option value="300">3회</option>
                <option value="400">4회</option>
                <option value="500">5회</option>
                <option value="600">6회</option>
                <option value="700">7회</option>
                <option value="800">8회</option>
                <option value="900">9회</option>
                <option value="1000">10회</option>
              </select>
            </li>

            <li>교내 공모전 수상
              <select>
                <option value="100">1회</option>
                <option value="200">2회</option>
                <option value="300">3회</option>
                <option value="400">4회</option>
                <option value="500">5회</option>
                <option value="600">6회</option>
                <option value="700">7회</option>
                <option value="800">8회</option>
                <option value="900">9회</option>
                <option value="1000">10회</option>
              </select>
            </li>

            <li>교외 공모전 출품</li>
            <li><input type="checkbox" name="suburban_contest" value="400" />참여 여부</li>

            <li>교외 공모전 수상</li>
            <li><input type="checkbox" name="suburban_contest" value="200" />참여 여부</li>

            <li>국내 학술대회 논문발표 또는 특허 출원
              <select>
                <option value="200">1회</option>
                <option value="400">2회</option>
                <option value="600">3회</option>
                <option value="800">4회</option>
                <option value="1000">5회</option>
                <option value="1200">6회</option>
                <option value="1400">7회</option>
                <option value="1600">8회</option>
                <option value="1800">9회</option>
                <option value="2000">10회</option>
              </select>
            </li>

            <li>국제 학술대회 논문발표 또는 특허 등록
              <select>
                <option value="400">1회</option>
                <option value="800">2회</option>
                <option value="1200">3회</option>
                <option value="1600">4회</option>
                <option value="2000">5회</option>
                <option value="2400">6회</option>
                <option value="2800">7회</option>
                <option value="3200">8회</option>
                <option value="3600">9회</option>
                <option value="4000">10회</option>
              </select>
            </li>
            
            <li>국제 학술대회 논문발표 또는 특허 등록
              <select>
                <option value="400">1회</option>
                <option value="800">2회</option>
                <option value="1200">3회</option>
                <option value="1600">4회</option>
                <option value="2000">5회</option>
                <option value="2400">6회</option>
                <option value="2800">7회</option>
                <option value="3200">8회</option>
                <option value="3600">9회</option>
                <option value="4000">10회</option>
              </select>
            </li>
          </ul>

          <button type="submit"> 전송 </button>

        </form>
      </div>
    </>
  );
};

export default EEE;