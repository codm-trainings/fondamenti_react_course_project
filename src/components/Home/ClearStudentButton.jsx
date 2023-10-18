import React, { useEffect } from 'react';

function ClearStudentButton({ onClearClick }) {
  useEffect(() => {
    console.log('on clear student mount');

    return () => {
      console.log('on clear student UNMOUNT');
    };
  }, []);

  return (
    <button type="button" onClick={() => onClearClick()}>Clear</button>
  );
}

export default ClearStudentButton;
