import React from 'react';

export default function Featured() {
  return (
    <div className="py-20 px-36 bg-gray-50 flex">
      <div className="w-1/2 mb-36">
        <div className="flex flex-start items-center my-4">
          <div className="h-0.5 w-6 bg-myred" />
          <span className="ml-2">Trending Episode</span>
        </div>
        <div>
          <h2 className="text-6xl ">Lorem ipsum dolor sit amet, consectetuer</h2>
          <p className="text-lg my-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volt.</p>
        </div>
        <div className="flex flex-start items-center my-4">
          <span className="mr-2">Listen On Also</span>
          <div className="h-0.5 w-6 bg-myred" />
        </div>
      </div>
      <div className="w-1/2">
        <img alt="img" />
      </div>
    </div>
  );
}
