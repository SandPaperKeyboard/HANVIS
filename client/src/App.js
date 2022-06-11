import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Main from "./container/Main";
import College from './container/College';
import ServiceCenter from './container/ServiceCenter';
import Survey from './container/Survey';
import Result from './container/Result';
import NextPage1 from './component/next1';
import COM from './component/collegeList/Smart/COM';
import IaC from './component/collegeList/Engineering/IaC';
import AI from './component/collegeList/Smart/AI';
import BIDT from './component/collegeList/Smart/BIDT';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} ></Route>
            <Route path="/college" element={<College />} />

            <Route path="/LiberalArts" element={<College />} />

            <Route path="/next1" element={<NextPage1 />} />
            <Route path="/service_center" element={<ServiceCenter />} />
            <Route path="/survey/:surveyCode" element={<Survey />} />
            <Route path="/result" element={<Result />} />
            <Route path="/COM" element={<COM />} />
            <Route path="/AI" element={<AI />} />
            <Route path="/IaC" element={<IaC />} />
            <Route path="/BIDT" element={< BIDT/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}


export default App;
