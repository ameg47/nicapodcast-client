import React from 'react';
import { useSelector } from 'react-redux';

export default function Nav() {
  const menuElem = useSelector((state) => state.menu);

  return (
    <header>
      <nav className="flex justify-between py-4 px-36 bg-gray-50 ">
        <div>
          <img
            src="http://nicapodcasts.local/wp-content/uploads/2022/02/logo-300x134.png"
            alt="logo"
            className="w-48"
          />
        </div>
        <div className="flex content-center">
          <ul className="w-full flex items-center">
            {menuElem
            && menuElem.map((elem) => (
              <li className="mr-8 transition duration-150 border-b-4 border-transparent hover:border-myred hover:cursor-pointer">
                {elem.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center ">
          <button
            type="button"
            className="w-32 bg-myred hover:bg-white text-white hover:text-myred border border-myred py-2 px-4 rounded-sm mr-6"
          >
            Subscribe
          </button>
          <button
            type="button"
            className="w-32 bg-myred hover:bg-white text-white hover:text-myred border border-myred py-2 px-4 rounded-sm"
          >
            Sign-in
          </button>
        </div>
      </nav>
    </header>
  );
}
