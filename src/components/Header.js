import React from 'react';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <div className='fixed z-10 w-full flex items-center justify-between px-10 py-6'>
      <img className='circle w-20 h-20 logo' src={logo} alt="logo" />
      <select className='min-w-min w-44 h-10' name="" id=""></select>
    </div>
  );
}
