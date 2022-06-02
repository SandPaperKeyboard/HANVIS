import React, { Component } from 'react';

import Header from "../component/Header";
import Starter from '../component/Starter';
import Eagle from '../component/Eagle';
//import Footer from '../component/Footer';

class Main extends Component {
    constructor(props)
    {
        super(props);
        this.start = {};
    }

    componentDidMount()
    {

    }

    componentDidUpdate()
    {

    }

    render() {
        return (
            <div className='Background'>
                <Header />
                <Starter />
                <Eagle />
            </div>
        )
    }
}

export default Main;