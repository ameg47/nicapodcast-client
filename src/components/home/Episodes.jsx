/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Episode from './Episode';

export default function Episodes() {
  const [numEp, setNumep] = useState(3);
  const podcasts = useSelector((state) => state.podcasts);

  return (
    <div className="mx-6 md:mx-18 xl:mx-48 border -mt-16 bg-white rounded-lg shadow-xl">
      <div className="px-6 lg:px-12 py-12">
        <div className="flex justify-between">
          <h2 className="text-2xl lg:text-3xl">Latest Podcast Episodes</h2>
          <button type="button" className="w-28 h-10 sm:h-auto text-sm bg-myred hover:bg-white text-white hover:text-myred border border-myred py-2 px-4 rounded-sm">
            View All
          </button>
        </div>
        <ul className="my-16">
          {podcasts && podcasts.slice(0, numEp).map((podcast) => (
            <li>
              <Episode
                title={podcast.title.rendered}
                content={podcast.content.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}
                image={podcast._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
                genre={podcast.acf.genre}
                season={podcast.acf.season}
                date={podcast.date}
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => { setNumep(numEp + 1); }}
            className="w-44 text-sm bg-white hover:bg-myred text-myred hover:text-white border border-myred py-2 px-4 rounded"
          >
            Show More Episodes
          </button>
        </div>
      </div>
    </div>
  );
}
