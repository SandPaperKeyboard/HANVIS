import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios/index';

import Header from "../component/Header";
import SurveyQuestion from '../component/SurveyQuestion';

const Survey = () => {
    let { surveyCode } = useParams();
    const [department, setDepartment] = useState({});

    useEffect(() => {
        const apiUrl = '/dummy/college_list.json';

        axios.get(apiUrl)
        .then(table => {
            setDepartment({
                department : table.data.collegeList.find( 
                    d => ( d.id === parseInt(surveyCode) ) 
                )
            });
        }).catch(
            error => {
                console.log(error);
            }
        );
    }, []);

    console.dir(department.department);
    
    return (
        <div>
            <Header />
            <SurveyQuestion props={department.surveyCategory}/>
        </div>
    );
}

export default Survey;