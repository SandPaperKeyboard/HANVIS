import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import COMjson from './COMjson.json'
import Axios from 'axios'
import { useNavigate } from "react-router-dom"
import COMCal from '../COM/COMCal'

StylesManager.applyTheme("defaultV2");

function COMSurveyComponent() {
  const navigate = useNavigate();

  const surveyJSON = COMjson;

  async function sendDataToServer(survey) {
    alert("결과를 계산합니다");
    const resultMessage = await Axios.post('http://localhost:5000/result', survey.data);
    const resultData = resultMessage.data["resultScore"];

    COMCal(resultData);
    //console.dirxml(resultData);

    // console.dir(resultMessage);
    // console.dir(JSON.stringify(survey.data));
    navigate("/");
  }
  
  //const survey = new Model(AEJson);

  return (
    <Survey json={surveyJSON} onComplete={sendDataToServer} />
  );
}

export default COMSurveyComponent;
