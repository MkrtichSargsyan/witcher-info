import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../api';
import logo from '../images/logo.png';

export default function DetailPage({ location }) {
  const [details, setDetails] = useState('');

  const { pathname } = location;
  const url = BASE_URL + pathname.substr(1);

  useEffect(() => {
    const fetchDetails = async (url) => {
      await axios.get(url).then((arr) => setDetails(arr.data[0]));
    };
    fetchDetails(url);
  }, [url]);

  console.log(details);

  const {
    id,
    class: type,
    image,
    name,
    quest,
    susceptibility,
    tactics,
  } = details;

  return (
    <div className="text-white px-36 py-6">
      <Link to="/">
        <img className="circle w-20 h-20 logo" src={logo} alt="logo" />
      </Link>
      <section className="flex mt-12 h-screen">
        <div className=" h-4/6">
          <img className="object-contain w-full h-full" src={image} alt={id} />
        </div>
        <aside className="flex-1 px-10 description_shadow">
          <h1 className="text-6xl courgette mb-6">{name}</h1>
          <div className="flex items-center mb-4">
            <span className="font-extrabold text-gray-300 text-2xl mr-4">
              Class:
            </span>
            <h3 className="font_indie">{type}</h3>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-extrabold text-gray-300 text-2xl mr-4">
              Quest:
            </span>
            <h3 className="font_indie">{quest}</h3>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-extrabold text-gray-300 text-2xl mr-4">
              Susceptibility:
            </span>
            <h3 className="font_indie">{susceptibility}</h3>
          </div>
          <div className="flex items-baseline mb-4">
            <span className="font-extrabold text-gray-300 text-2xl mr-4">
              Tactics:
            </span>
            <h3 className="font_indie">
              {tactics && tactics.substring(0, 300) + '...'}
            </h3>
          </div>
        </aside>
      </section>
    </div>
  );
}
