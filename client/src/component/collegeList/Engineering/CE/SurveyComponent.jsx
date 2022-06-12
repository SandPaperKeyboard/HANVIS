import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import CEJson from './CEJson.json'

StylesManager.applyTheme("defaultV2");

function CESurveyComponent() {
  const survey = new Model(CEJson);
  return <Survey model={survey} />;
}

export default CESurveyComponent;
