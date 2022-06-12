import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Main from "./container/Main";
import College from './container/College';
import ServiceCenter from './container/ServiceCenter';
import Survey from './container/Survey';
import Result from './container/Result';
import NextPage1 from './component/next1';

//대학목록
//공과대학
import IaC from './component/collegeList/Engineering/IaC/IaC';
import AE from './component/collegeList/Engineering/AE/AE';
import CaEE from './component/collegeList/Engineering/CaEE/CaEE';
import CE from './component/collegeList/Engineering/CE/CE';
// 스마트융합대학
import COM from './component/collegeList/Smart/COM/COM';
import DM from './component/collegeList/Smart/DM/DM';
import IM from './component/collegeList/Smart/IM/IM';
import AI from './component/collegeList/Smart/AI/AI';
import BIDT from './component/collegeList/Smart/BIDT/BIDT';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} ></Route>
            <Route path="/college" element={<College />} />

            <Route path="/IaC" element={<IaC />} />
            <Route path="/AE" element={<AE />} />
            <Route path="/CaEE" element={<CaEE />} />
            <Route path="/CE" element={<CE />} />

            <Route path="/COM" element={<COM />} />
            <Route path="/DM" element={<DM />} />
            <Route path="/IM" element={< IM/>} />
            <Route path="/AI" element={<AI />} />
            <Route path="/BIDT" element={< BIDT/>} />
            
            <Route path="/next1" element={<NextPage1 />} />

            <Route path="/service_center" element={<ServiceCenter />} />
            <Route path="/survey/:surveyCode" element={<Survey />} />

            <Route path="/result" element={<Result />} />

          </Routes>
        </Router>
      </div>
    );
  }
}


export default App;
