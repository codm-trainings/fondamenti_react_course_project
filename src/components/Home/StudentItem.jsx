import React from 'react';

function StudentItem({
  name, color, onSelectedStudent, isSelected,
}) {
  return (
    <li style={{ color }}>
      <button onClick={() => { onSelectedStudent({ name }); }} type="button">
        <span style={{ color: isSelected && 'red' }}>{ name }</span>
        {' '}
        -
        {' '}
        { color }
      </button>
    </li>
  );
}

export default StudentItem;
