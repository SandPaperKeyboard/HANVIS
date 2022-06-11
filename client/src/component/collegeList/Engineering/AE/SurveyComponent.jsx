import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import AEJson from './AEJson.json'

StylesManager.applyTheme("defaultV2");

function AESurveyComponent() {
  const survey = new Model(AEJson);
  return <Survey model={survey} />;
}

export default AESurveyComponent;
