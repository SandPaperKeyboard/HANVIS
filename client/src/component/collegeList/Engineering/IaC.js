//Information and Communication
//정보통신학과

// import SurveyQuestion from '../../SurveyQuestion'

// const IaC = () => {
//   return (
//     <div>
//       <SurveyQuestion />
//     </div>
//   )
// }

// export default IaC;

//Information and Communication
//정보통신학과
import React from 'react';
import Header from '../../Header'

const IaC = () => {

  return (
      <div>
          <h3> 졸업점수 계산하기 </h3>
          <ul>
            <li>1. 교과 과정 항목</li>
            <li>성적 (학교 졸업 요건은 평점 2.0 이상)</li>
            <li>
              <input type="radio" name="research_Grade" value="300" />
                4.0 이상
             
            </li>
          </ul>
      </div>
  );
};

export default IaC;