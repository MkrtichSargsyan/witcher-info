import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import BASE_URL from '../api';
import CharactersDetails from '../components/CharactersDetails';
import CreaturesDetails from '../components/CreaturesDetails';
import logo from '../images/logo.png';
import prev from '../images/prev.png';

export default function DetailPage({ location }) {
  const [details, setDetails] = useState('');
  const history = useHistory();

  const { pathname } = location;
  const itemsType = location.state.itemsType;
  const url = BASE_URL + pathname.substr(1);

  useEffect(() => {
    const fetchDetails = async (url) => {
      await axios.get(url).then((arr) => setDetails(arr.data[0]));
    };
    fetchDetails(url);
  }, [url]);

  const { id, image } = details;

  return (
    <div className="text-white px-36 py-6 overflow-hidden h-screen">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img className="circle w-20 h-20 logo" src={logo} alt="logo" />
        </Link>
        <div className="w-20 h-20 cursor-pointer transform duration-500 hover:scale-110">
          <img src={prev} alt="prev" onClick={() => history.goBack()} />
        </div>
      </div>
      <section className="flex mt-12 h-screen">
        <div className=" h-4/6">
          <img className="object-contain w-full h-full" src={image} alt={id} />
        </div>
        {itemsType === 'creatures' && <CreaturesDetails details={details} />}
        {itemsType === 'characters' && <CharactersDetails details={details} />}
      </section>
    </div>
  );
}
