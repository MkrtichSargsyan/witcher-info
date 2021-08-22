import React from 'react';

export default function CreaturesDetails({details}) {
  const { class: type, name, quest, susceptibility, tactics } = details;

  return (
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
  );
}
