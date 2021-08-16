import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BASE_URL from '../api';

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

  return <div className="text-white">{details.name}</div>;
}
