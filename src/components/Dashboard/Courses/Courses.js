import React from 'react';
import AllCourses from './AllCourses';
import './Courses.css';
const Courses = () => {
    return (
        <>
            <div className="row">
                <div className="seeAll m-0 p-0 col-md-6">
                        <AllCourses/>
                    <div className = "graph  border border-danger">
                        GRAPH
                    </div>
                </div>
                <div className="homeWork col-md-3">
                        HOMEWORK PROGRESS
                </div>
            </div>
        </>
    );
};

export default Courses;