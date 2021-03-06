import React from 'react';
import './Lessons.css';
import UpcomingLessons from './UpcomingLessons/UpcomingLessons';
const Lessons = () => {
    return (
        <>
            <div className="row">
                <div className="upcoming pt-4  col-md-3">
                    UPCOMING LESSONS 
                    <UpcomingLessons></UpcomingLessons>
                </div>
                <div className="tasks col-md-3">
                    Bismillah Lessons
                </div>
                <div className="leaderboard col-md-3">
                    Bismillah Lessons
                </div>
            </div>
        </>
    );
};

export default Lessons;