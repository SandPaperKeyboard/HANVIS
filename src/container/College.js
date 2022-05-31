import React, { Component } from 'react';
import axios from "axios/index";

import Header from "../component/Header";
import CollegeSelector from '../component/CollegeSelector';
import { useParams } from 'react-router-dom';

class College extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            collegeId : parseInt(this.props.params, 10),
            department : {}
        };
    }

    componentDidMount()
    {
        this._getList();
    }

    componentDidUpdate()
    {
        
    }

    _getList()
    {
        const apiUrl = '/dummy/college_list.json';

        axios.get(apiUrl)
        .then(table => {
            this.setState({
                department : table.data.collegeList.find(
                    department => (
                        department.id === this.state.collegeId
                    )
                )
            });
        }).catch(
            error => {
                console.log(error);
            }
        );
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