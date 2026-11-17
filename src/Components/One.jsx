import React from 'react';
import './StudentCard.css';

function StudentCard(props) {
  const initials = props.name
    .split(' ')
    .map(word => word[0])
    .join('');

  return (
    <div className={`student-card ${props.theme}`}>
      <div className="student-avatar">
        {initials}
      </div>

      <div className="student-info">
        <h2>{props.name}</h2>

        <p>
          <strong>Department:</strong> {props.department}
        </p>

        <p>
          <strong>CGPA:</strong>
          <span className="cgpa">{props.cgpa}</span>
        </p>
      </div>

      <div className="department-badge">
        {props.shortDepartment}
      </div>
    </div>
  );
}

export default StudentCard;