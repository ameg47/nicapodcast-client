import React from 'react';

export default function Post() {
  return (
    <div className="py-8 bg-white rounded shadow-2xl">
      <div className=" border-l-4 bord border-myred">
        <div className="flex flex-row px-6">
          <p className="text-myred mr-2">By Aasds Asmdslks</p>
          <p className="text-stone-400">Sep 11, 2022</p>
        </div>
        <p className="text-stone-400 text-sm px-6">Nicasource Radio</p>
      </div>
      <div className="px-8 mt-10">
        <h2 className="text-2xl my-4">Vestibulum auctor dapibus neque.</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisqu. </p>
        <button type="button" className="w-32 my-4 text-sm bg-white hover:bg-myred text-myred hover:text-white border border-myred py-2 px-4 rounded">
          Read more
        </button>
      </div>
    </div>
  );
}
