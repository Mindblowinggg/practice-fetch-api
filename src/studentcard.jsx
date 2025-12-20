import React from 'react';

function StudentCard({ name, email, phone, company }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      width: '280px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <h3 style={{ color: '#007bff', marginBottom: '10px' }}>{name}</h3>
      <p style={{ fontSize: '0.9em', color: '#555', marginBottom: '5px' }}>
        <strong>Email:</strong> {email}
      </p>
      <p style={{ fontSize: '0.9em', color: '#555', marginBottom: '5px' }}>
        <strong>Phone:</strong> {phone}
      </p>
      <p style={{ fontSize: '0.9em', color: '#555', marginBottom: '0' }}>
        <strong>Company:</strong> {company}
      </p>
    </div>
  );
}

export default StudentCard;