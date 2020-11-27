import React from 'react';

import './Courses.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = (props) => {
    const handleAddPrice = props.handleAddPrice;
    // console.log(props.course);
    let { title, price, description } = props.course;
    return (
        <div className="course-div">
            <h3>{title} </h3>
            <p><small>Module: {description} </small></p>
            <h5>Course Price: ${price} </h5>
            <button onClick={() => handleAddPrice(props.course)} className="btn btn-success">Enroll Now</button>
        </div>
    );
};

export default Courses;