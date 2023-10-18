import React from 'react';
import AuditLogItem from './AuditLogItem';

function AuditLog({ logs }) {
  return (
    <ol>
      { logs.map((l) => <AuditLogItem log={l} key={l.timestamp} />) }
    </ol>
  );
}

export default AuditLog;
