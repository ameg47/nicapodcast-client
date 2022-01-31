import React from 'react';
import Episode from './Episode';

export default function Episodes() {
  return (
    <div className="mx-48 border -mt-16 bg-white rounded-lg shadow-xl">
      <div className="px-12 py-12">
        <div className="flex justify-between">
          <h2 className="text-3xl">Latest Podcast Episodes</h2>
          <button type="button" className="w-28 text-sm bg-myred hover:bg-white text-white hover:text-myred border border-myred py-2 px-4 rounded-sm">
            View All
          </button>
        </div>
        <ul className="my-16">
          <li><Episode /></li>
          <li><Episode /></li>
        </ul>
        <div className="flex justify-center">
          <button
            type="button"
            className="w-44 text-sm bg-white hover:bg-myred text-myred hover:text-white border border-myred py-2 px-4 rounded"
          >
            Show More Episodes
          </button>
        </div>
      </div>
    </div>
  );
}
