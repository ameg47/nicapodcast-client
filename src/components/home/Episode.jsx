import React from 'react';

export default function Episode() {
  return (
    <div className="grid grid-cols-5 my-10 divide-x px-4">
      <div><img alt="" /></div>
      <div className="col-span-3 px-6">
        <h2 className="text-2xl">Aliquam tincidunt mauris eu risus.</h2>
        <p className="my-4">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet oi.</p>
        <button type="button" className="w-32 text-sm bg-white hover:bg-myred text-myred hover:text-white border border-myred py-2 px-4 rounded">
          Know more
        </button>
      </div>
      <div className="flex flex-col justify-center px-4">
        <p className="my-2 text-stone-400 text-sm"># Season 1</p>
        <p className="my-2 text-stone-400 text-sm"># Season 1</p>
        <p className="my-2 text-stone-400 text-sm"># Season 1</p>
      </div>
    </div>
  );
}
