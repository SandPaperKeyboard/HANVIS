import React, { useEffect, useState } from "react";
import '../App.css'
import EagleLookDown from './EagleLookDown'

import { Link } from "react-router-dom";

const CollegeResult = (props) => {
  const [resultText, setResultText] = useState("");
  const [resultComment, setResultComment] = useState("");

  useEffect(() => {
    setResultText(props.result.result);
    setResultComment(props.result.comment);
  }, []);

  return (
    <div>
      <div>
        <EagleLookDown />
      </div>

      <div className="Result">
        <div className="Result-explain">
          <div>
            <ul className="Result-explain-text">
              <br/>
              <li>
                당신의 점수는...
              </li>
              <li><br/></li>
              <li>
                {resultText}점 입니다!
              </li>
              <li>
                {resultComment}
              </li>
              <br/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeResult;
