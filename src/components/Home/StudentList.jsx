import React, { useState } from 'react';
import StudentItem from './StudentItem';

function StudentList({ students }) {
  const [selectedStudent, setSelectedStudent] = useState();

  const onSelectedStudent = (student) => {
    console.log('on selected student', student);
    setSelectedStudent(student);
  };

  const onStudentClear = () => setSelectedStudent(undefined);

  return (
    <div>
      {selectedStudent && (
        <div>
          <p>
            L'utente selezionato e'
            {' '}
            {selectedStudent.name}
            {' '}
          </p>
          <button type="button" onClick={() => onStudentClear()}>Clear</button>
        </div>
      )}
      <ul>
        { students.map((s) => (
          <StudentItem
            key={s.name}
            name={s.name}
            color={s.color}
            onSelectedStudent={onSelectedStudent}
            isSelected={selectedStudent && selectedStudent.name === s.name}
          />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
