import React, { useState, useEffect } from 'react';
import StudentItem from './StudentItem';
import ClearStudentButton from './ClearStudentButton';
import AuditLog from './AuditLog';

function StudentList({ students }) {
  const [selectedStudent, setSelectedStudent] = useState();
  const [selectedGrade, setSelectedGrade] = useState();
  const [auditLogs, setAuditLogs] = useState([]);

  const onSelectedStudent = (student) => {
    console.log('on selected student', student);
    setSelectedStudent(student);
  };

  const onStudentClear = () => setSelectedStudent(undefined);

  const buildLogItem = (date, action, changed) => ({
    timestamp: date.toISOString(),
    action,
    changed,
  });

  useEffect(() => {
    if (selectedStudent) {
      setAuditLogs((oldLogs) => [...oldLogs, buildLogItem(new Date(), 'selectedStudent', selectedStudent.name)]);
    }
  }, [selectedStudent]);

  useEffect(() => {
    if (selectedGrade) {
      setAuditLogs((oldLogs) => [...oldLogs, buildLogItem(new Date(), 'selectedGrade', selectedGrade)]);
    }
  }, [selectedGrade]);

  return (
    <div>
      {['A', 'B', 'C', 'D', 'E', 'F'].map((g) => (
        <button type="button" key={g} onClick={() => setSelectedGrade(g)}>
          {' '}
          {g}
          {' '}
        </button>
      ))}
      {selectedStudent && (
        <div>
          <p>
            L'utente selezionato e'
            {' '}
            {selectedStudent.name}
            {' '}
          </p>
          <ClearStudentButton onClearClick={onStudentClear} />
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

      <AuditLog logs={auditLogs} />
    </div>
  );
}

export default StudentList;
