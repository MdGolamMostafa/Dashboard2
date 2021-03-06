import React from 'react';
import './AllCourses.css';
import Subjects from './Subjects';
const AllCourses = () => {
    return (
        <div className = 'seeAll border border-success'>
            <div className = 'p-2 d-flex justify-content-between'>
                <h6>MY COURSES</h6>
                <h6>SEE ALL</h6>
            </div>
                <Subjects/>
        </div>
    );
};

export default AllCourses;