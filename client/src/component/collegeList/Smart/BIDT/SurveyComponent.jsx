import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import BIDTjson from './BIDTjson.json'

StylesManager.applyTheme("defaultV2");

function COMSurveyComponent() {
  const survey = new Model(BIDTjson);
  return <Survey model={survey} />;
}

export default COMSurveyComponent;
