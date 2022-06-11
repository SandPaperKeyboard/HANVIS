import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import AIjson from './AIjson.json'

StylesManager.applyTheme("defaultV2");

function COMSurveyComponent() {
  const survey = new Model(AIjson);
  return <Survey model={survey} />;
}

export default COMSurveyComponent;
