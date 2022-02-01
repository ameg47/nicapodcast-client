/* eslint-disable react/prop-types */
import React from 'react';
import { MONTHS } from '../../Controllers/constants';

export default function Post({
  title, content, author, date, category,
}) {
  const dateArray = date.split('-');
  const year = dateArray[0];
  const month = MONTHS[parseInt(dateArray[1], 10) - 1];
  const day = dateArray[2].substring(0, 2);

  return (
    <div className="py-8 bg-white rounded shadow-2xl">
      <div className=" border-l-4 bord border-myred">
        <div className="flex flex-row px-6">
          <p className="text-myred mr-2">{author}</p>
          <p className="text-stone-400">
            {month}
            {' '}
            {day}
            ,
            {' '}
            {year}
          </p>
        </div>
        <p className="text-stone-400 text-sm px-6">{category}</p>
      </div>
      <div className="px-8 mt-10">
        <h2 className="text-2xl my-4">{title}</h2>
        {content}
        <button type="button" className="w-32 my-4 text-sm bg-white hover:bg-myred text-myred hover:text-white border border-myred py-2 px-4 rounded">
          Read more
        </button>
      </div>
    </div>
  );
}
