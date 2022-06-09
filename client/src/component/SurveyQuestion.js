import React from 'react';


const SurveyQuestion = (props) => {

    // 학점 계산 프로세스
    function calcGrades() {
        console.dir(props);
        return (
            <div className="SurveyQuestion-problem">
                <div></div>
            </div>
        )
    }

    function calcVolunteer() {

    }

    function calcEmployment() {
        
    }

    function calcVCertificate() {
        
    }

    function calcForeignLanguage() {
        
    }

    function calcConsulting() {
        
    }

    function calcDepartmentEvent() {
        
    }

    // 
    function calcJobTraining() {
        
    }

    // 해외연수
    function calcOverseasStudy() {
        
    }

    // 인턴쉽
    function calcInternship() {
        
    }

    // 공모전
    function calcCompetition() {
        
    }

    // 졸업작품전
    function calcGraduationWorkExhibition() {
        
    }

    return (
        <div className="SurveyQuestion">
            {
                calcGrades()
            }
        </div>
    );
}

export default SurveyQuestion;