import React from 'react';
import PropTypes from 'prop-types';

export default function CharactersDetails({ details }) {
  const {
    name, fappearance, nationality, profession, race,
  } = details;

  return (
    <aside className="flex-1 px-10 description_shadow">
      <h1 className="text-6xl courgette mb-6">{name}</h1>
      <div className="flex items-center mb-4">
        <span className="font-extrabold text-gray-300 text-2xl mr-4">
          Profession:
        </span>
        <h3 className="font_indie">{profession}</h3>
      </div>
      <div className="flex items-center mb-4">
        <span className="font-extrabold text-gray-300 text-2xl mr-4">
          Race:
        </span>
        <h3 className="font_indie">{race}</h3>
      </div>
      <div className="flex items-center mb-4">
        <span className="font-extrabold text-gray-300 text-2xl mr-4">
          Nationality:
        </span>
        <h3 className="font_indie">{nationality}</h3>
      </div>
      <div className="flex items-baseline mb-4">
        <span className="font-extrabold text-gray-300 text-2xl mr-4">
          Appearance:
        </span>
        <h3 className="font_indie">{fappearance}</h3>
      </div>
    </aside>
  );
}

CharactersDetails.propTypes = {
  details: PropTypes.instanceOf(Object).isRequired,
};
