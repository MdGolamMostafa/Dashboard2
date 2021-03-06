import React from 'react';
import Courses from './Courses/Courses';
import './Dashboard2.css';
import Lessons from './Lessons/Lessons';
const Dashboard2 = () => {
    return (
            <div  className="container-fluid">
                <div className ='row dashboardBody'>
                    <div className=" first-column col-2  border border-primary">
                        <div className = 'logo'>
                            <h6>LOGO</h6>
                        </div>
                        <div className = 'navbar1'>
                            <p>HOME</p>
                        </div>
                        <div className = 'navbar1'>
                            <p>DASHBOARD</p>
                        </div>
                        <div className = 'navbar1'>
                            <p>MY COURSES</p>
                        </div>
                        <div className = 'navbar1'>
                            <p>ACHIEVEMENTS</p>
                        </div>
                        <div className = 'navbar1'>
                            <p>FORUM</p>
                        </div>
                    </div>
                    <div className = 'headerBlock  col-md-10 border border-warning'>
                            <div className = 'header1 col-md-12'>
                                
                            </div>
                            <div className = 'header2 col-md-12 '>
                                <Lessons/>
                            </div>
                            <div className = 'col-md-12'>
                                <Courses/>
                            </div>
                    </div>
                </div>
            </div>
    );
};

export default Dashboard2;