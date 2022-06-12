import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import AEJson from "./AEJson.json";
import ReactDOM from "react-dom";
import axios from 'axios'

StylesManager.applyTheme("defaultV2");

function AESurveyComponent() {
  const survey = new Model(AEJson);
  return <Survey model={survey} />;
}





function sendDataToServer(survey) {
  //send Ajax request to your web server
  alert("The results are: " + JSON.stringify(survey.data));
}

ReactDOM.render(
<Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />,
document.getElementById("surveyContainer")
);






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
