import React from 'react';

import Header from "../component/Header";
import Starter from '../component/Starter';
import Eagle from '../component/Eagle';
//import Footer from '../component/Footer';

const Main = () => {
    return (
        <div className='Background'>
            <Header />
            <Starter/>
            <Eagle />
        </div>
    );
}

export default Main;