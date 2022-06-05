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

<<<<<<< HEAD
    }

    componentDidUpdate()
    {

    }

    render() {
        return (
            <div>
                <Header />
                
            </div>
        )
    }
=======
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
    
    return (
        <div>
            <Header />
            <SurveyQuestion props={department}/>
        </div>
    );
>>>>>>> 361da10daee9615373029eaa8817884a78f0d911
}

export default Survey;