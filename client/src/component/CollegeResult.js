import React from "react";
import '../App.css'
import EagleLookDown from './EagleLookDown'

import { Link } from "react-router-dom";

const CollegeResult = () => (
  <div>
    <div>
      <EagleLookDown />
    </div>

  <div className="Result">
    <div className="Result-explain">
      <div>
        <ul className="Result-explain-text">
          <li>예상 결과값은 여기로</li>
        </ul>
      </div>
    </div>
  </div>
  </div>
)

export default CollegeResult;
