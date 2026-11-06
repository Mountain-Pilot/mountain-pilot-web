import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <h2>Mountain Pilot Web</h2>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0, padding: 0 }}>
        <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
        <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
}
