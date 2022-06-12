import React, { Component } from 'react';

import Header from "../component/Header";
//import EagleLookDown from '../component/EagleLookDown';
import CollegeResult from '../component/CollegeResult'

class Result extends Component {

    render() {
        return (
            <div className='Background'>
                <Header />
                <CollegeResult />
            </div>
        )
    }
}

export default Result;