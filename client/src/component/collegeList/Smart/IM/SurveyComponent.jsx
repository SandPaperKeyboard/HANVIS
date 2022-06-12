import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import IMjson from './IMjson.json'

StylesManager.applyTheme("defaultV2");

function COMSurveyComponent() {
  const survey = new Model(IMjson);
  return <Survey model={survey} />;
}

export default COMSurveyComponent;
