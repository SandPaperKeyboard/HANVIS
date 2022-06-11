import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import MaSEJson from './MaSEJson.json'

StylesManager.applyTheme("defaultV2");

function MaSESurveyComponent() {
  const survey = new Model(MaSEJson);
  return <Survey model={survey} />;
}

export default MaSESurveyComponent;
