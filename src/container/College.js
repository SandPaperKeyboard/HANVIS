import React, { Component } from 'react';

import Header from "../component/Header";
import CollegeSelector from '../component/CollegeSelector';

class College extends Component {
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
                <CollegeSelector />
            </div>
        )
    }
}

export default College;