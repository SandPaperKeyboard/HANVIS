import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';

import Main from "./container/Main";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}


export default App;
