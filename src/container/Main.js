import React, { Component } from 'react';

import Header from "../component/Header";
import Starter from '../component/Starter';
import Eagle from '../component/Eagle';

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
            <div>
                <Header />
                <Starter />
                <Eagle />
            </div>
        )
    }
}

export default Main;