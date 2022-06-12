import React, { Component } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../component/Header";
//import EagleLookDown from '../component/EagleLookDown';
import CollegeResult from '../component/CollegeResult'

const Result = () => {
    const location = useLocation();

    return (
        <div className='Background'>
            <Header />
            <CollegeResult result={location.state}/>
        </div>
    )
}

export default Result;