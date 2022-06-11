// Big Data
// 빅데이터응용학과

// const BIDT = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default BIDT;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function BIDT() {
    return (
        <div>
            <h2>취득한 자격증을 눌러주세요.
            </h2>

            <input type="checkbox" name="t1" value="300" />
            <button className="b1">
                정보처리기사
            </button>

            <input type="checkbox" name="t1" value="300" />
            <button className="b1">
                정보보호기사
            </button>

            <input type="checkbox" name="t1" value="300" />
            <button className="b1">
                네트워크관리사
            </button>

            <br/>
            <br/>
            
            <input type="checkbox" name="t2" value="100" />
            <button className="b2">
                정보처리산업기사
            </button>
            <input type="checkbox" name="t2" value="100" />
            <button className="b2">
                리눅스마스터 1급
            </button>
            <input type="checkbox" name="t2" value="100" />
            <button className="b2">
                네트워크관리사 2급
            </button>
            
        </div>
    )
}

export default BIDT;