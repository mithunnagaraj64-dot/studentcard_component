import React from 'react';
import StudentCard from './One';

function Three() {
  return (
    <StudentCard
      name="Arun Kumar"
      department="Electronics and Communication"
      shortDepartment="ECE"
      cgpa={9.0}
      theme="green"
    />
  );
}

export default Three;