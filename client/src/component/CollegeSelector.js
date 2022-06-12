import React from "react";
import "./CollegeSelector.css";
import { Link } from "react-router-dom";

//import styled from "styled-components";

// Link to = 다음 페이지로 넘어가는 js파일을 넣어줄 것!
//아코디언 메뉴 활용

function CollegeSelector() {
  
  return (
    <>
      <div>
        <details>
          <summary>공과대학</summary>
          <ul className="list">
            <li>
              <Link to="/IaC" style={{ textDecoration: 'none', color: 'inherit' }}>정보통신학과
              </Link>
            </li>
            <li>
              <Link to="/AE"style={{ textDecoration: 'none', color: 'inherit' }}>[토목건축공학부] 건축공학전공</Link>
            </li>
            <li>
              <Link to="/CaEE"style={{ textDecoration: 'none', color: 'inherit' }}>[토목건축공학부] 토목환경공학전공</Link>
            </li>
            <li>
              <Link to="/CE"style={{ textDecoration: 'none', color: 'inherit' }}>화학공학과</Link>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <details>
          <summary>스마트융합대학</summary>
          <ul className="list">
            <li>
              <Link to="/COM" style={{ textDecoration: 'none', color: 'inherit' }}>컴퓨터공학과
              </Link>
            </li>
            <li>
              <Link to="/IM" style={{ textDecoration: 'none', color: 'inherit' }}>
              산업경영공학과
              </Link>
            </li>
            <li>
              <Link to="/AI" style={{ textDecoration: 'none', color: 'inherit' }}>
              AI융합학과
              </Link>
            </li>
            <li>
              <Link to="/DM" style={{ textDecoration: 'none', color: 'inherit' }}>
              수학과
              </Link>
            </li>
            <li>
              <Link to="/BIDT" style={{ textDecoration: 'none', color: 'inherit' }}>
              빅데이터응용학과
              </Link>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <button><Link to='/result'>결과</Link></button>
      </div>
      
    </>
  );
}

export default CollegeSelector;

/*  //2022-06-07 내가 트라이한 방법
const CollegeSelector = () => (
    <div className="College">
        <Link to="/Main">
            <button>돌아가기</button>
        </Link>
        <Link to="/LiberalArts">
            <button>문과대학</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>사범대학</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>공과대학</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>스마트융합대학</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>경상대학</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>사회과학대학</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>생명나노과학대학</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>아트디자인테크놀로지대학</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>린튼글로벌스쿨</button>
        </Link>
    </div>
)

export default CollegeSelector;
*/

/*
    <div className="College">
        <Link to="/college">
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
*/
