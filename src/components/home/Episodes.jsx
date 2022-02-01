/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import Episode from './Episode';

export default function Episodes() {
  const podcasts = useSelector((state) => state.podcasts);
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
          {podcasts && podcasts.map((podcast) => (
            <li>
              <Episode
                title={podcast.title.rendered}
                content={podcast.content.rendered}
                image={podcast._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
                genre={podcast.acf.genre}
                season={podcast.acf.season}
                date={podcast.date}
              />
            </li>
          ))}
          {/* <li><Episode /></li>
          <li><Episode /></li> */}
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
