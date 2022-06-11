import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import IaCJson from './IaCJson.json'

StylesManager.applyTheme("defaultV2");

function IaCSurveyComponent() {
  const survey = new Model(IaCJson);
  return <Survey model={survey} />;
}

export default IaCSurveyComponent;
