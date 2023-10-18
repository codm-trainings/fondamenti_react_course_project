import React from 'react';

function AuditLogItem({ log }) {
  return (
    <li>
      {' '}
      { log.timestamp}
      {' '}
      -
      {' '}
      {log.action}
      -
      {' '}
      {log.changed}
      {' '}
    </li>
  );
}

export default AuditLogItem;
