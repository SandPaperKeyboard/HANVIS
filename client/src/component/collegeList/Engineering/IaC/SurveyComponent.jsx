import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import IaCJson from './IaCJson.json'
import Axios from 'axios'

StylesManager.applyTheme("defaultV2");

function IaCSurveyComponent() {
  
  const surveyJSON = IaCJson;

  function sendDataToServer(survey) {
    Axios.post('http://localhost:5000/result', JSON.stringify(survey.data));
    //Axios.post('http://localhost:5000/result', JSON.stringify(survey.data));
    console.dir(JSON.stringify(survey.data));
    alert("결과를 계산합니다");
    // + JSON.stringify(survey.data)
  }
  
  //const survey = new Model(AEJson);

  return (
    <Survey json={surveyJSON} onComplete={sendDataToServer} />
  );
}

export default IaCSurveyComponent;
