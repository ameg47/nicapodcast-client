import React from 'react';
import { useSelector } from 'react-redux';
import { DOMAIN } from '../../Controllers/constants';

export default function Footer() {
  const menuElem = useSelector((state) => state.menu);

  return (
    <div className="mt-12 mb-6 mx-10 md:mx-18 xl:mx-48 divide-y">
      <div className="md:grid grid-cols-5">
        <div className="col-span-2 md:pr-12">
          <img
            src={`${DOMAIN}/wp-content/uploads/2022/02/logo-300x134.png`}
            alt="logo"
            className="w-36 mb-4"
          />
          <p className="text-stone-400 mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
        </div>
        <div>
          <h2 className="font-semibold mb-6">Pages</h2>
          {menuElem
            && menuElem.map((elem) => (
              <p key={elem.id} className="text-stone-400 mb-4 hover:cursor-pointer">
                {elem.title}
              </p>
            ))}
        </div>
        <div>
          <h2 className="font-semibold mb-6">Recent Episodes</h2>
          <p className="text-stone-400 mb-4">Episode 1</p>
          <p className="text-stone-400 mb-4">Episode 2</p>
          <p className="text-stone-400 mb-4">Episode 3</p>
          <p className="text-stone-400 mb-4">Episode 4</p>
        </div>
        <div>
          <h2 className="font-semibold mb-6">Listen My Podcasts Also In</h2>
          <div className="space-y-4 mb-2">
            <img
              className="h-10"
              src={`${DOMAIN}/wp-content/uploads/2022/02/listen-on-spotify-300x76.png`}
              alt="spotify"
            />
            <img
              className="h-10"
              src={`${DOMAIN}/wp-content/uploads/2022/02/listen-on-google-podcasts-300x76.png`}
              alt="google-pod"
            />
            <img
              className="h-10"
              src={`${DOMAIN}/wp-content/uploads/2022/02/listen-on-apple-300x93.png`}
              alt="apple-pod"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-stone-400 text-center mt-2 sm:mt-10">@2022 NicaSource All Rights Reserved</p>
      </div>
    </div>
  );
}
