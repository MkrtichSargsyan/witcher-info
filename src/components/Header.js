import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../images/logo.png';

export default function Header() {
  const options = useSelector((state) => state.optionsReducer.options);

  return (
    <div className="fixed z-10 w-full flex items-center justify-between px-10 py-6">
      <img className="circle w-20 h-20 logo" src={logo} alt="logo" />
      <select
        className="min-w-min px-4 w-44 bg-gray-600 rounded text-white border-none text-1xl p-1"
        name="creatureClasses"
        id="creatureClasses"
      >
        <option className="bg-gray-600 text-white" value="All">
          All
        </option>
        {options.map((op) => (
          <option key={op} className="bg-gray-600 text-black px-4 py-2" value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}
