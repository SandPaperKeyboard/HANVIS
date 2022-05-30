import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';

import Main from "./container/Main";
import College from './container/College';
import ServiceCenter from './container/ServiceCenter';
import Survey from './container/Survey';
import Result from './container/Result';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} ></Route>
            <Route path="/college" element={<College />} />
            <Route path="/service_center" element={<ServiceCenter />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </div>
    );
  }
}


export default App;
