import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { selectOption } from '../store/actions';

export default function Header() {
  const options = useSelector((state) => state.optionsReducer.options);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(selectOption(e.target.value));
  };

  return (
    <div className="header z-10 fixed w-full flex items-center justify-between px-10 py-6">
      <Link to="/">
        <img className="circle w-20 h-20 logo" src={logo} alt="logo" />
      </Link>
      <select
        className="min-w-min px-4 w-44 bg-gray-600 rounded text-white text-1xl"
        name="creatureClasses"
        id="creatureClasses"
        onChange={handleChange}
      >
        <option className="bg-gray-600 text-white" value="All">
          All
        </option>
        {options.map((op) => (
          <option key={op} className="text-black" value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}
