import React from 'react';
import { Link } from "react-router-dom";

// Link to = 다음 페이지로 넘어가는 js파일을 넣어줄 것!
const CollegeSelector = () => (
    <div className="College">
        <Link to="/">
            <button>문과대학</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>국어국문학과</button>
            <button>영어영문학과</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>일어일문학과</button>
            <button>프랑스어학과</button>
            <button>문헌정보학과</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>사학과</button>
            <button>기독교학과</button>
            <button>철학상담학과</button>
        </Link>
    </div>
)

export default CollegeSelector;