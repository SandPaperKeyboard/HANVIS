import React from 'react';
import {Link} from "react-router-dom";


const collegeList = (props) => {
    return (
      <ul className="list_college">
            {
                props.list.map((college, index) => (
                    <li key={index}>
                        <Link to={`/college/${college.id}`} className="link_college">
                            <div className="info_college">
                                <strong className="title_college">
                                    { college.title }
                                </strong>
                            </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )

}

export default collegeList;
