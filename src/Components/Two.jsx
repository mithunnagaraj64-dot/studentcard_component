import React from 'react';
import StudentCard from './One';

function Two() {
  return (
    <StudentCard
      name="Mithun Nagaraj"
      department="Computer Science and Engineering"
      shortDepartment="CSE"
      cgpa={8.5}
      theme="blue"
    />
  );
}

export default Two;