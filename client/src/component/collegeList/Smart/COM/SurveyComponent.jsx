import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import COMjson from './COMjson.json'
import Axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom"
import COMCal from '../COM/COMCal'

StylesManager.applyTheme("defaultV2");

function COMSurveyComponent() {
  const navigate = useNavigate();

  const surveyJSON = COMjson;

  async function sendDataToServer(survey) {
    alert("결과를 계산합니다");
    const array = window.location.href.split('/');
    const home = array[0] + "//" + array[2] + "/";

    const resultMessage = await Axios.post(home+'api/result', survey.data);
    const resultData = resultMessage.data["resultScore"];

    const resultScore = await COMCal(resultData);

    const resultComment = resultScore >= 800 ? "축하합니다!!!\n졸업점수를 넘기셨습니다!!!\n짝짝짝!" : "좀 더 노력하셔야겠네요~";
    //console.log(resultScore);
    //console.dirxml(resultData);

    // console.dir(resultMessage);
    // console.dir(JSON.stringify(survey.data));
    navigate("/result", { state: { result: resultScore, comment: resultComment} });
  }
  
  //const survey = new Model(AEJson);

  return (
    <Survey json={surveyJSON} onComplete={sendDataToServer} />
  );
}

export default COMSurveyComponent;
