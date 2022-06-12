import React from 'react';

import Header from "../component/Header";
import Starter from '../component/Starter';
import EagleLookUp from '../component/EagleLookUp';

//import Footer from '../component/Footer';

const Main = () => {
    return (
        <div className='Background'>
            <Header />
            <Starter/>
            <EagleLookUp />
        </div>
    );
}

export default Main;

//