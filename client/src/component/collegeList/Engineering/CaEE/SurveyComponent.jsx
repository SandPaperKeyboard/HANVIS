import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import CaEEJson from './CaEEJson.json'

StylesManager.applyTheme("defaultV2");

function CaEESurveyComponent() {
  const survey = new Model(CaEEJson);
  return <Survey model={survey} />;
}

export default CaEESurveyComponent;
