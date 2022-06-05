import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios/index";

import Header from "../component/Header";
import CollegeSelector from '../component/CollegeSelector';

const College = () => {
    let { collegeId } = useParams();
    const [department, setDepartment] = useState({});

    useEffect(() => {
        const apiUrl = '/dummy/college_list.json';

        axios.get(apiUrl)
        .then(table => {
            setDepartment({
                department : table.data.collegeList.find( 
                    d => ( d.id === parseInt(collegeId) ) 
                )
            });
            
        }).catch(
            error => {
                console.log(error);
            }
        );
    }, []);

    return (
        <div>
            <Header />
            <CollegeSelector />
        </div>
    )
}

export default College;