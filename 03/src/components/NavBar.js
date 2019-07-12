import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import path from 'path';
import url from 'url';

export default function NavBar() {

  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>
        <img
          alt=''
          src={() => import('../../public/asset/klob-logo.png')}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />
        {' React Bootstrap'}
      </Navbar.Brand>
    </Navbar>
  );
}
