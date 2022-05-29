import React from 'react';
import {Link} from "react-router-dom";

import nextLogo from "../img/byebye.gif";

const Starter = () => (
    <div className="Starter">
        <div className='Starter-explain'>
            <br/><br/>
            사용설명서<br/><br/>
            안녕하세요<br/>
            한비스에 오신걸 환영합니다.<br/>
            오른쪽 버튼을 누르시면 테스트를 시작합니다.<br/><br/>
            졸업점수를 잘 계산하시고 꼭 졸업요건을 채우십시오.<br/>
            알갔으면 당장 시작하라! 뽥!<br/><br/><br/>
            ㅅㅂ 살려줘<br/>
        </div>
        <Link to="/college" className='Starter-next'>
            <img src={nextLogo} className='Starter-next-button'/>
        </Link>
    </div>
)

export default Starter;