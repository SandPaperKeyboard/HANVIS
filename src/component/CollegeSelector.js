import React from 'react';
import {Link} from "react-router-dom";

const CollegeSelector = () => (
    <div className="College">
        <CollegeLiberal />
        <CollegeEducation />
        <CollegeEngineering />
        <CollegeSmart />
        <CollegeBusiness />
        <CollegeSocialScience />
        <CollegeLifeScience />
        <CollegeTalmage />
        <CollegeArtDesign />
        <CollegeLintonGlobal />
    </div>
)

const CollegeLiberal = () => (
    <div className='College-name'>
        <h2>문과대학</h2>
        <ul>
            <li><Link to="/">국어국문•창작학과</Link></li>
            <li><Link to="/">영어영문학과</Link></li>
            <li><Link to="/">일어일문학전공</Link></li>
            <li><Link to="/">프랑스어문학전공</Link></li>
            <li><Link to="/">문헌정보학과</Link></li>
            <li><Link to="/">사학과</Link></li>
            <li><Link to="/">기독교학과</Link></li>
        </ul>
    </div>
)

const CollegeEducation = () => (
    <div className='College-name'>
        <h2>사범대학</h2>
        <ul>
            <li><Link to="/">국어교육과</Link></li>
            <li><Link to="/">영어교육과</Link></li>
            <li><Link to="/">교육학과</Link></li>
            <li><Link to="/">역사교육과</Link></li>
            <li><Link to="/">미술교육과</Link></li>
            <li><Link to="/">수학교육과</Link></li>
        </ul>
    </div>
)

const CollegeEngineering = () => (
    <div className='College-name'>
        <h2>공과대학</h2>
        <ul>
            <li><Link to="/">정보통신공학과</Link></li>
            <li><Link to="/">전기전자공학과</Link></li>
            <li><Link to="/">멀티미디어공학과</Link></li>
            <li><Link to="/">건축학과</Link></li>
            <li><Link to="/">건축공학전공</Link></li>
            <li><Link to="/">토목환경공학전공</Link></li>
            <li><Link to="/">기계공학과</Link></li>
            <li><Link to="/">화학공학과</Link></li>
            <li><Link to="/">신소재공학과</Link></li>
        </ul>
    </div>
)

const CollegeSmart = () => (
    <div className='College-name'>
        <h2>스마트융합대학</h2>
        <ul>
            <li><Link to="/">컴퓨터공학과</Link></li>
            <li><Link to="/">산업경영공학과</Link></li>
            <li><Link to="/">AI융합학과</Link></li>
            <li><Link to="/">수학과</Link></li>
            <li><Link to="/">빅데이터응용학과</Link></li>
        </ul>
    </div>
)

const CollegeBusiness = () => (
    <div className='College-name'>
        <h2>경상대학</h2>
        <ul>
            <li><Link to="/">경영학과</Link></li>
            <li><Link to="/">회계학과</Link></li>
            <li><Link to="/">무역학과</Link></li>
            <li><Link to="/">경제학전공</Link></li>
            <li><Link to="/">중국경제통상학전공</Link></li>
            <li><Link to="/">호텔항공경영학과</Link></li>
            <li><Link to="/">경영정보학과</Link></li>
        </ul>
    </div>
)

const CollegeSocialScience = () => (
    <div className='College-name'>
        <h2>사회과학대학</h2>
        <ul>
            <li><Link to="/">법학부</Link></li>
            <li><Link to="/">행정학과</Link></li>
            <li><Link to="/">경찰학과</Link></li>
            <li><Link to="/">정치•언론학과</Link></li>
            <li><Link to="/">사회복지학과</Link></li>
            <li><Link to="/">아동복지학과</Link></li>
            <li><Link to="/">상담심리학과</Link></li>
            <li><Link to="/">사회경제기업학과</Link></li>
        </ul>
    </div>
)

const CollegeLifeScience = () => (
    <div className='College-name'>
        <h2>생명•나노과학대학</h2>
        <ul>
            <li><Link to="/">생명시스템과학과</Link></li>
            <li><Link to="/">식품영양학과</Link></li>
            <li><Link to="/">화학과</Link></li>
            <li><Link to="/">간호학과</Link></li>
            <li><Link to="/">스포츠과학과</Link></li>
            <li><Link to="/">바이오제약공학과</Link></li>
            <li><Link to="/">융합기술•경영학과</Link></li>
        </ul>
    </div>
)

const CollegeTalmage = () => (
    <div className='College-name'>
        <h2>탈메이지교양•융합대학</h2>
        <ul>
            <li><Link to="/">교양교과목</Link></li>
            <li><Link to="/">자유전공학부</Link></li>
            <li><Link to="/">창의융합학부</Link></li>
            <li><Link to="/">한남디자인팩토리</Link></li>
            <li><Link to="/">한남XR센터</Link></li>
        </ul>
    </div>
)

const CollegeArtDesign = () => (
    <div className='College-name'>
        <h2>아트&디자인테크놀로지대학</h2>
        <ul>
            <li><Link to="/">융합디자인학과</Link></li>
            <li><Link to="/">회화과</Link></li>
            <li><Link to="/">의류학과</Link></li>
            <li><Link to="/">미디어영상학과</Link></li>
        </ul>
    </div>
)

const CollegeLintonGlobal = () => (
    <div className='College-name'>
        <h2>린튼글로벌스쿨</h2>
        <ul>
            <li><Link to="/">린튼글로벌스쿨</Link></li>
        </ul>
    </div>
)

export default CollegeSelector;