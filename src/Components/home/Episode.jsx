/* eslint-disable react/prop-types */
import React from 'react';
import { MONTHS } from '../../Controllers/constants';

export default function Episode({
  title, content, season, date, genre, image,
}) {
  const dateArray = date.split('-');
  const year = dateArray[0];
  const month = MONTHS[parseInt(dateArray[1], 10) - 1];
  const day = dateArray[2].substring(0, 2);
  return (
    <div className="sm:grid md:grid-cols-5 my-10 md:divide-x px-4">
      <div className="flex items-center mb-2">
        <img className="rounded sm:rounded-none" src={image} alt="podcast" />
      </div>
      <div className="col-span-3 md:px-6">
        <h2 className="text-2xl">{title}</h2>
        <p className="my-4">{content}</p>
        <button type="button" className="w-32 text-sm bg-white hover:bg-myred text-myred hover:text-white border border-myred py-2 px-4 rounded">
          Know more
        </button>
      </div>
      <div className="hidden md:flex flex-col justify-center px-4">
        <p className="my-2 text-stone-400 text-sm">
          # Season
          {' '}
          {season}
        </p>
        <p className="my-2 text-stone-400 text-sm">
          #
          {month}
          {' '}
          {day}
          ,
          {' '}
          {year}

        </p>
        <p className="my-2 text-stone-400 text-sm">
          #
          {' '}
          {genre.join(' / ')}
        </p>
      </div>
    </div>
  );
}
