/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';

export default function Featured() {
  const podcast = useSelector((state) => state.podcasts[0]);

  return (
    <div className="py-20 px-36 bg-gray-50 flex">
      <div className="w-1/2 mb-36">
        <div className="flex flex-start items-center my-4">
          <div className="h-0.5 w-6 bg-myred" />
          <span className="ml-2">Trending Episode</span>
        </div>
        <div>
          <h2 className="text-6xl ">{podcast ? podcast.title.rendered : null}</h2>
          <p className="text-lg my-6">{podcast ? podcast.content.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '') : null}</p>
        </div>
        <div className="flex flex-start items-center my-4">
          <span className="mr-2">Listen On Also</span>
          <div className="h-0.5 w-6 bg-myred" />
        </div>
        <div className="flex space-x-2">
          <img
            className="h-10"
            src="http://nicapodcasts.local/wp-content/uploads/2022/02/listen-on-spotify-300x76.png"
            alt="spotify"
          />
          <img
            className="h-10"
            src="http://nicapodcasts.local/wp-content/uploads/2022/02/listen-on-google-podcasts-300x76.png"
            alt="google-pod"
          />
          <img
            className="h-10"
            src="http://nicapodcasts.local/wp-content/uploads/2022/02/listen-on-apple-300x93.png"
            alt="apple-pod"
          />
        </div>
      </div>
      <div className="w-1/2 pl-6">
        <img
          className="w-full rounded-lg"
          src={podcast ? podcast._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : null}
          alt="podcast-img"
        />
      </div>
    </div>
  );
}
