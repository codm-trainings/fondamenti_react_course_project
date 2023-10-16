import React from 'react';
import StudentItem from './StudentItem';

function StudentList({ students }) {
  return (
    <ul>
      { students.map((s) => <StudentItem key={s.name} name={s.name} />)}
    </ul>
  );
}

export default StudentList;
