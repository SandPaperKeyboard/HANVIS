import "survey-core/defaultV2.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import DMjson from './DMjson.json'

StylesManager.applyTheme("defaultV2");

function COMSurveyComponent() {
  const survey = new Model(DMjson);
  return <Survey model={survey} />;
}

export default COMSurveyComponent;
