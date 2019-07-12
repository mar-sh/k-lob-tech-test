import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navStyle: {
    backgroundColor: 'rgb(241, 88, 79)',
    height: '8vh',
    minHeight: 50,
    margin: '0 10px',
  },
};

export default function NavBar() {
  return (
    <nav className='navbar fixed-top' style={styles.navStyle}>
      <Link to='/'>
        <img
          alt=''
          src={'http://localhost:8080/klob-logo.png'}
          width='45'
          height='45'
          className='d-inline-block align-top'
        />
      </Link>
    </nav>
  );
}
