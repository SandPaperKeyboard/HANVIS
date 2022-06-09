import React, { Component } from 'react';

import Header from "../component/Header";
import NoticeBoard from "../component/NoticeBoard";

class ServiceCenter extends Component {
    

    render() {
        return (
            <div>
                <div>
                    <Header />
                    <NoticeBoard />
                </div>
            </div>
        )
    }
}

export default ServiceCenter;

//

/*
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
*/