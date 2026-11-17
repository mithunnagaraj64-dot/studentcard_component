import React from 'react';
import StudentCard from './One';
import Two from './Two';
import Three from './Three';

function Four() {
  return (
    <div className="container">

      <header className="header">
        <div className="cap">🎓</div>

        <div>
          <h1>Student Information</h1>
          <p>Our College Students</p>
        </div>
      </header>

      <div className="student-list">

        <Two />

        <Three />

        <StudentCard
          name="Priya"
          department="Information Technology"
          shortDepartment="IT"
          cgpa={8.8}
          theme="purple"
        />

      </div>

    </div>
  );
}

export default Four;