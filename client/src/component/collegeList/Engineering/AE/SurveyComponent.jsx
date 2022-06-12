import "survey-core/defaultV2.css";
import { StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import AEJson from "./AEJson.json";
import Axios from 'axios'

StylesManager.applyTheme("defaultV2");

function AESurveyComponent() {

  const surveyJSON = AEJson;

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

export default AESurveyComponent;



/*
StylesManager.applyTheme("defaultV2");

function sendDataToServer(survey) {
    //send Ajax request to your web server
    alert("The results are: " + JSON.stringify(survey.data));
}

ReactDOM.render(
  <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />,
  document.getElementById("surveyContainer")
);
*/
