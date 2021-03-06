import React from 'react';
import './Subjects.css';
const Subjects = () => {
    return (
        <div className = 'bothSubjects row'>
            <div className="math col-md-5 border border-danger">
                <div>
                    <div className = 'top-side'></div>
                    <div className="right-side">
                        <h6>math</h6>
                        <h6>30 lessons</h6>
                    </div>
                    <div className = "bottom-side">

                    </div>
                </div>
            </div>
            <div className="col-md-5 border border-danger">
            <div className = 'top-side'></div>
                <div className="right-side">
                    <h6 >physics</h6>
                    <h6>32 lessons</h6>
                </div>
                <div className = "bottom-side">
                    
                </div>
                
            </div>
        </div>
    );
};

export default Subjects;