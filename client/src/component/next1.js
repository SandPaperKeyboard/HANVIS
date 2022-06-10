import React from 'react';
import {Link} from "react-router-dom";
import Header from './Header';

const NextPage1 = () => (
    <div className="Next1">

        <Header />
        <Link to="/">
            <button>문과대학</button>
        </Link>
        <br/>
        <Link to="/next1">
            <button>2어국문학과</button>
            <button>3어영문학과</button>
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

export default NextPage1;