import React from 'react';
import {Link} from "react-router-dom";

import nextLogo from "../img/Start.png";

const Starter = () => (
    <div className="Starter">
        <div className='Starter-explain'>
            <div>
                <ul className='Starter-explain-text'>
                    <li><h2><strong>사용설명서</strong></h2></li>
                    <li><br></br></li>
                    <li>안녕하세요</li>
                    <li>한비스에 오신걸 환영합니다.</li>
                    <li><br/></li>
                    <li><strong>아래 '시작하기' 버튼</strong>을 누르시면 테스트를 시작합니다.</li>
                    <li>졸업점수를 잘 계산하시고 꼭 졸업요건을 채우십시오.</li>
                </ul>
            </div>
        </div>
        <Link to='/college/1001' className='Starter-next'>
            <img src={nextLogo} className='Starter-next-button' alt='다음으로'/>
        </Link>
    </div>
)

export default Starter;